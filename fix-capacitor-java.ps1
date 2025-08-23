# Script to fix Java version in capacitor.build.gradle after Capacitor sync
# Get script directory and construct paths relative to it
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$capacitorBuildFile = Join-Path $scriptDir "android\app\capacitor.build.gradle"
$gradleWrapperFile = Join-Path $scriptDir "android\gradle\wrapper\gradle-wrapper.properties"

Write-Host "🔧 Fixing Capacitor Java compatibility issues..." -ForegroundColor Cyan

# Fix Java version in capacitor.build.gradle
if (Test-Path $capacitorBuildFile) {
    $content = Get-Content $capacitorBuildFile -Raw
    if ($content -match "JavaVersion\.VERSION_21") {
        $content = $content -replace "JavaVersion\.VERSION_21", "JavaVersion.VERSION_17"
        Set-Content $capacitorBuildFile $content
        Write-Host "✅ Fixed Java version in capacitor.build.gradle (21 → 17)" -ForegroundColor Green
    } else {
        Write-Host "ℹ️  Java version already correct in capacitor.build.gradle" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ capacitor.build.gradle not found at: $capacitorBuildFile" -ForegroundColor Red
}

# Fix Gradle version in gradle-wrapper.properties
if (Test-Path $gradleWrapperFile) {
    $content = Get-Content $gradleWrapperFile -Raw
    if ($content -match "gradle-8\.9-bin\.zip") {
        $content = $content -replace "gradle-8\.9-bin\.zip", "gradle-8.13-bin.zip"
        Set-Content $gradleWrapperFile $content
        Write-Host "✅ Fixed Gradle version in gradle-wrapper.properties (8.9 → 8.13)" -ForegroundColor Green
    } else {
        Write-Host "ℹ️  Gradle version already correct in gradle-wrapper.properties" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ gradle-wrapper.properties not found at: $gradleWrapperFile" -ForegroundColor Red
}

Write-Host "🎯 Capacitor fix script completed!" -ForegroundColor Cyan
