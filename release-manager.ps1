# AlxJackson Eventos - Release Manager
# Script interactivo para gestión de versiones y releases

param(
    [string]$Action = "",
    [string]$VersionType = "",
    [string]$CustomVersion = "",
    [string]$Changelog = ""
)

# Colores para output
$Host.UI.RawUI.WindowTitle = "AlxJackson Eventos - Release Manager"

function Write-ColorOutput($ForegroundColor) {
    $fc = $host.UI.RawUI.ForegroundColor
    $host.UI.RawUI.ForegroundColor = $ForegroundColor
    if ($args) {
        Write-Output $args
    }
    $host.UI.RawUI.ForegroundColor = $fc
}

function Show-Header {
    Clear-Host
    Write-ColorOutput Magenta "╔══════════════════════════════════════════════════════════════╗"
    Write-ColorOutput Magenta "║              🎵 AlxJackson Eventos Release Manager           ║"
    Write-ColorOutput Magenta "║                     by DjWacko - KaroVicious                 ║"
    Write-ColorOutput Magenta "╚══════════════════════════════════════════════════════════════╝"
    Write-Host ""
}

function Get-CurrentVersion {
    $packageJson = Get-Content "package.json" | ConvertFrom-Json
    return $packageJson.version
}

function Show-Menu {
    $currentVersion = Get-CurrentVersion
    
    Write-ColorOutput Cyan "📱 Versión Actual: v$currentVersion"
    Write-Host ""
    Write-ColorOutput Yellow "🚀 Opciones de Release:"
    Write-Host "  1. 🔧 Patch Release    (v$currentVersion → v$(Get-NextVersion $currentVersion 'patch'))"
    Write-Host "  2. ⭐ Minor Release    (v$currentVersion → v$(Get-NextVersion $currentVersion 'minor'))"
    Write-Host "  3. 🎯 Major Release    (v$currentVersion → v$(Get-NextVersion $currentVersion 'major'))"
    Write-Host "  4. ✏️  Versión Custom   (Especificar versión manualmente)"
    Write-Host "  5. 📱 Solo Build APK   (Sin cambio de versión)"
    Write-Host "  6. 🔍 Ver Status Git"
    Write-Host "  7. ⚡ Comandos NPM Directos"
    Write-Host "  8. ❌ Salir"
    Write-Host ""
}

function Get-NextVersion($currentVersion, $type) {
    $parts = $currentVersion.Split('.')
    $major = [int]$parts[0]
    $minor = [int]$parts[1]
    $patch = [int]$parts[2]
    
    switch ($type) {
        "patch" { return "$major.$minor.$($patch + 1)" }
        "minor" { return "$major.$($minor + 1).0" }
        "major" { return "$($major + 1).0.0" }
    }
}

function Update-Version($newVersion) {
    Write-ColorOutput Green "📝 Actualizando versión a v$newVersion..."
    
    # Actualizar package.json
    $packageJson = Get-Content "package.json" | ConvertFrom-Json
    $packageJson.version = $newVersion
    $packageJson | ConvertTo-Json -Depth 10 | Set-Content "package.json"
    
    # Actualizar useVersionCheck.ts
    $hookFile = "src\hooks\useVersionCheck.ts"
    if (Test-Path $hookFile) {
        $content = Get-Content $hookFile -Raw
        $content = $content -replace "useState\('[\d\.]+'\)", "useState('$newVersion')"
        Set-Content $hookFile $content
    }
    
    Write-ColorOutput Green "✅ Versión actualizada correctamente"
}

function Get-ChangelogInput {
    Write-Host ""
    Write-ColorOutput Cyan "📝 Ingresa los cambios realizados (una línea por cambio):"
    Write-ColorOutput Yellow "   (Presiona Enter en línea vacía para terminar)"
    Write-Host ""
    
    $changes = @()
    do {
        $change = Read-Host "  - "
        if ($change.Trim() -ne "") {
            $changes += $change.Trim()
        }
    } while ($change.Trim() -ne "")
    
    if ($changes.Count -eq 0) {
        $changes = @(
            "Mejoras en el rendimiento",
            "Corrección de errores menores",
            "Actualización de dependencias"
        )
    }
    
    return $changes
}

function Build-WebApp {
    Write-ColorOutput Green "🔨 Compilando aplicación web..."
    Write-ColorOutput Yellow "   ⏳ Este proceso puede tomar 1-2 minutos..."
    
    # Ejecutar con progreso visual
    $process = Start-Process -FilePath "npm" -ArgumentList "run", "build" -NoNewWindow -PassThru -RedirectStandardOutput "build-output.log" -RedirectStandardError "build-error.log"
    
    $counter = 0
    $spinner = @('|', '/', '-', '\')
    
    while (!$process.HasExited) {
        Write-Host "`r   $($spinner[$counter % 4]) Compilando..." -NoNewline -ForegroundColor Yellow
        Start-Sleep -Milliseconds 500
        $counter++
        
        # Timeout después de 5 minutos
        if ($counter -gt 600) {
            $process.Kill()
            Write-Host ""
            Write-ColorOutput Red "❌ Timeout: Build tomó más de 5 minutos"
            return $false
        }
    }
    
    $process.WaitForExit()
    Write-Host ""
    
    if ($process.ExitCode -ne 0) {
        Write-ColorOutput Red "❌ Error compilando aplicación web"
        if (Test-Path "build-error.log") {
            Write-ColorOutput Red "   Error details:"
            Get-Content "build-error.log" | Select-Object -Last 5 | ForEach-Object { Write-Host "   $_" -ForegroundColor Red }
        }
        return $false
    }
    
    Write-ColorOutput Green "✅ Aplicación web compilada"
    
    # Limpiar archivos de log
    if (Test-Path "build-output.log") { Remove-Item "build-output.log" }
    if (Test-Path "build-error.log") { Remove-Item "build-error.log" }
    
    return $true
}

function Sync-Capacitor {
    Write-ColorOutput Green "🔄 Sincronizando Capacitor..."
    npx cap sync
    if ($LASTEXITCODE -ne 0) {
        Write-ColorOutput Red "❌ Error sincronizando Capacitor"
        return $false
    }
    Write-ColorOutput Green "✅ Capacitor sincronizado"
    return $true
}

function Build-AndroidAPK {
    Write-ColorOutput Green "📱 Compilando APK de Android..."
    Write-ColorOutput Yellow "   ⏳ Este proceso puede tomar 3-5 minutos..."
    
    # Verificar que existe el directorio android
    if (-not (Test-Path "android")) {
        Write-ColorOutput Red "❌ Directorio android no encontrado"
        return $false
    }
    
    # Cambiar al directorio android y compilar
    Push-Location "android"
    try {
        if (-not (Test-Path "gradlew.bat")) {
            Write-ColorOutput Red "❌ gradlew.bat no encontrado"
            return $false
        }
        
        # Ejecutar con progreso visual
        $process = Start-Process -FilePath ".\gradlew.bat" -ArgumentList "assembleRelease" -NoNewWindow -PassThru -RedirectStandardOutput "..\android-build.log" -RedirectStandardError "..\android-error.log"
        
        $counter = 0
        $spinner = @('⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏')
        
        while (!$process.HasExited) {
            Write-Host "`r   $($spinner[$counter % 10]) Compilando APK..." -NoNewline -ForegroundColor Cyan
            Start-Sleep -Milliseconds 300
            $counter++
            
            # Timeout después de 10 minutos
            if ($counter -gt 2000) {
                $process.Kill()
                Write-Host ""
                Write-ColorOutput Red "❌ Timeout: Build de Android tomó más de 10 minutos"
                return $false
            }
        }
        
        $process.WaitForExit()
        Write-Host ""
        
        if ($process.ExitCode -ne 0) {
            Write-ColorOutput Red "❌ Error compilando APK"
            if (Test-Path "..\android-error.log") {
                Write-ColorOutput Red "   Error details:"
                Get-Content "..\android-error.log" | Select-Object -Last 3 | ForEach-Object { Write-Host "   $_" -ForegroundColor Red }
            }
            return $false
        }
        
        # Verificar que se creó el APK
        $apkPath = "app\build\outputs\apk\release\app-release-unsigned.apk"
        if (Test-Path $apkPath) {
            $apkSize = [math]::Round((Get-Item $apkPath).Length / 1MB, 2)
            Write-ColorOutput Green "✅ APK compilado exitosamente ($apkSize MB)"
            return $true
        } else {
            Write-ColorOutput Red "❌ APK no encontrado después de la compilación"
            return $false
        }
    }
    finally {
        Pop-Location
        # Limpiar archivos de log
        if (Test-Path "android-build.log") { Remove-Item "android-build.log" }
        if (Test-Path "android-error.log") { Remove-Item "android-error.log" }
    }
}

function New-GitCommit($version, $changes) {
    Write-ColorOutput Green "📝 Creando commit de Git..."
    
    $changelogText = $changes -join "`n- "
    $commitMessage = @"
release: v$version

- $changelogText

📱 Nueva versión disponible
🔗 Download: https://github.com/alxjackson/alxjackon-eventos/releases/download/v$version/app-release.apk
"@
    
    git add .
    git commit -m $commitMessage
    
    if ($LASTEXITCODE -eq 0) {
        Write-ColorOutput Green "✅ Commit creado"
        
        # Crear tag
        git tag "v$version"
        Write-ColorOutput Green "✅ Tag v$version creado"
        
        return $true
    } else {
        Write-ColorOutput Red "❌ Error creando commit"
        return $false
    }
}

function Push-ToGitHub {
    Write-ColorOutput Green "🚀 Enviando cambios a GitHub..."
    
    git push origin main
    if ($LASTEXITCODE -ne 0) {
        Write-ColorOutput Red "❌ Error enviando cambios"
        return $false
    }
    
    git push origin --tags
    if ($LASTEXITCODE -ne 0) {
        Write-ColorOutput Red "❌ Error enviando tags"
        return $false
    }
    
    Write-ColorOutput Green "✅ Cambios enviados a GitHub"
    return $true
}

function Show-GitStatus {
    Write-ColorOutput Cyan "📊 Estado actual de Git:"
    Write-Host ""
    git status --short
    Write-Host ""
    Write-ColorOutput Cyan "📋 Últimos commits:"
    git log --oneline -5
    Write-Host ""
    Read-Host "Presiona Enter para continuar"
}

function Show-NPMCommands {
    Show-Header
    Write-ColorOutput Cyan "⚡ Comandos NPM Directos Disponibles:"
    Write-Host ""
    Write-ColorOutput Yellow "🚀 Comandos de Release:"
    Write-Host "  1. npm run release:full    # Incrementa versión + compila APK + crea release"
    Write-Host "  2. npm run version:patch   # Solo incrementa versión (2.0.10 → 2.0.11)"
    Write-Host "  3. npm run version:minor   # Solo incrementa versión (2.0.10 → 2.1.0)"
    Write-Host "  4. npm run version:major   # Solo incrementa versión (2.0.10 → 3.0.0)"
    Write-Host "  5. npm run release:android # Solo compila APK (sin cambio de versión)"
    Write-Host ""
    Write-ColorOutput Yellow "🔧 Comandos de Desarrollo:"
    Write-Host "  6. npm run build           # Compilar aplicación web"
    Write-Host "  7. npm run dev             # Servidor de desarrollo"
    Write-Host "  8. npx cap sync            # Sincronizar Capacitor"
    Write-Host "  9. Verificar Git Status    # Ver estado actual del repositorio"
    Write-Host ""
    Write-ColorOutput Yellow "📱 Flujo Completo Automático:"
    Write-ColorOutput Green "  npm run release:full"
    Write-Host "    ↳ Incrementa versión automáticamente"
    Write-Host "    ↳ Compila la aplicación web"
    Write-Host "    ↳ Sincroniza con Capacitor"
    Write-Host "    ↳ Compila APK de Android"
    Write-Host "    ↳ Crea commit y tag de Git"
    Write-Host "    ↳ Sube cambios a GitHub"
    Write-Host "    ↳ GitHub Actions crea el release automáticamente"
    Write-Host "    ↳ Los usuarios reciben notificación en la app"
    Write-Host ""
    Write-ColorOutput Cyan "💡 Tip: El APK se genera como 'app-release-unsigned.apk' en:"
    Write-Host "     android/app/build/outputs/apk/release/"
    Write-Host ""
    
    $choice = Read-Host "¿Ejecutar algún comando? (1-9) o Enter para volver"
    
    switch ($choice) {
        "1" { 
            Write-ColorOutput Green "🚀 Ejecutando: npm run release:full"
            npm run release:full
        }
        "2" { 
            Write-ColorOutput Green "📝 Ejecutando: npm run version:patch"
            npm run version:patch
        }
        "3" { 
            Write-ColorOutput Green "📝 Ejecutando: npm run version:minor"
            npm run version:minor
        }
        "4" { 
            Write-ColorOutput Green "📝 Ejecutando: npm run version:major"
            npm run version:major
        }
        "5" { 
            Write-ColorOutput Green "📱 Ejecutando: npm run release:android"
            npm run release:android
        }
        "6" { 
            Write-ColorOutput Green "🔨 Ejecutando: npm run build"
            npm run build
        }
        "7" { 
            Write-ColorOutput Green "🔧 Ejecutando: npm run dev"
            npm run dev
        }
        "8" { 
            Write-ColorOutput Green "🔄 Ejecutando: npx cap sync"
            npx cap sync
        }
        "9" { 
            Write-ColorOutput Cyan "🔍 Verificando estado de Git..."
            Write-Host ""
            Write-ColorOutput Yellow "📋 Verificar que el tag se creó:"
            git tag --list | findstr v2.0.14
            Write-Host ""
            Write-ColorOutput Yellow "📝 Ver el último commit:"
            git log --oneline -1
            Write-Host ""
            Write-ColorOutput Yellow "📊 Estado actual del repositorio:"
            git status
        }
        default { 
            return
        }
    }
    
    Write-Host ""
    Read-Host "Presiona Enter para continuar"
}

function Start-FullRelease($versionType, $customVersion) {
    Show-Header
    
    $currentVersion = Get-CurrentVersion
    
    if ($customVersion) {
        $newVersion = $customVersion
    } else {
        $newVersion = Get-NextVersion $currentVersion $versionType
    }
    
    Write-ColorOutput Cyan "🚀 Iniciando release completo: v$currentVersion → v$newVersion"
    Write-Host ""
    
    # Obtener changelog
    $changes = Get-ChangelogInput
    
    Write-Host ""
    Write-ColorOutput Yellow "📋 Resumen del Release:"
    Write-Host "  📱 Versión: v$newVersion"
    Write-Host "  📝 Cambios:"
    foreach ($change in $changes) {
        Write-Host "    - $change"
    }
    Write-Host ""
    
    $confirm = Read-Host "¿Continuar con el release? (s/N)"
    if ($confirm -ne "s" -and $confirm -ne "S") {
        Write-ColorOutput Yellow "❌ Release cancelado"
        return
    }
    
    # Proceso completo
    Write-Host ""
    Write-ColorOutput Magenta "🎯 Iniciando proceso de release..."
    Write-Host ""
    
    # 1. Actualizar versión
    Update-Version $newVersion
    
    # 2. Compilar web app
    if (-not (Build-WebApp)) { return }
    
    # 3. Sincronizar Capacitor
    if (-not (Sync-Capacitor)) { return }
    
    # 4. Compilar APK
    if (-not (Build-AndroidAPK)) { return }
    
    # 5. Crear commit y tag
    if (-not (New-GitCommit $newVersion $changes)) { return }
    
    # 6. Push a GitHub
    if (-not (Push-ToGitHub)) { return }
    
    # Mostrar resultado final
    Write-Host ""
    Write-ColorOutput Green "🎉 ¡Release v$newVersion completado exitosamente!"
    Write-Host ""
    Write-ColorOutput Cyan "📋 Próximos pasos:"
    Write-Host "  1. Ve a: https://github.com/alxjackson/alxjackon-eventos/releases"
    Write-Host "  2. GitHub Actions creará automáticamente el release"
    Write-Host "  3. El APK se subirá automáticamente"
    Write-Host "  4. Los usuarios recibirán notificación en la app"
    Write-Host ""
    
    $apkPath = "android\app\build\outputs\apk\release\app-release-unsigned.apk"
    if (Test-Path $apkPath) {
        $apkSize = [math]::Round((Get-Item $apkPath).Length / 1MB, 2)
        Write-ColorOutput Yellow "📱 APK ubicado en: $apkPath ($apkSize MB)"
    }
    
    Write-Host ""
    Read-Host "Presiona Enter para continuar"
}

# Script principal
do {
    Show-Header
    Show-Menu
    
    $choice = Read-Host "Selecciona una opción (1-8)"
    
    switch ($choice) {
        "1" { Start-FullRelease "patch" }
        "2" { Start-FullRelease "minor" }
        "3" { Start-FullRelease "major" }
        "4" { 
            $customVer = Read-Host "Ingresa la nueva versión (ej: 2.1.0)"
            if ($customVer -match '^\d+\.\d+\.\d+$') {
                Start-FullRelease "" $customVer
            } else {
                Write-ColorOutput Red "❌ Formato de versión inválido. Usa formato: X.Y.Z"
                Read-Host "Presiona Enter para continuar"
            }
        }
        "5" {
            Show-Header
            Write-ColorOutput Cyan "📱 Compilando solo APK (sin cambio de versión)..."
            Build-WebApp
            Sync-Capacitor
            Build-AndroidAPK
            Read-Host "Presiona Enter para continuar"
        }
        "6" { Show-GitStatus }
        "7" { Show-NPMCommands }
        "8" { 
            Write-ColorOutput Green "👋 ¡Hasta luego!"
            exit 
        }
        default { 
            Write-ColorOutput Red "❌ Opción inválida"
            Start-Sleep -Seconds 1
        }
    }
} while ($true)
