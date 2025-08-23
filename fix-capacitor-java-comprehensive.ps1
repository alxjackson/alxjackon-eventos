# Comprehensive script to fix Java version issues in all Capacitor modules
# This script fixes Java 21 → Java 17 in all relevant build.gradle files

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "🔧 Comprehensive Capacitor Java Fix - Starting..." -ForegroundColor Cyan

# Files to fix
$filesToFix = @(
    "android\app\capacitor.build.gradle",
    "android\capacitor-cordova-android-plugins\build.gradle",
    "android\gradle\wrapper\gradle-wrapper.properties",
    "node_modules\@capacitor\android\capacitor\build.gradle",
    "node_modules\@capacitor\camera\android\build.gradle",
    "node_modules\@capacitor\device\android\build.gradle", 
    "node_modules\@capacitor\geolocation\android\build.gradle",
    "node_modules\@capacitor\push-notifications\android\build.gradle"
)

$fixedCount = 0
$totalFiles = $filesToFix.Count

foreach ($relativeFile in $filesToFix) {
    $fullPath = Join-Path $scriptDir $relativeFile
    
    if (Test-Path $fullPath) {
        $content = Get-Content $fullPath -Raw
        $originalContent = $content
        
        # Fix Java version 21 → 17
        $content = $content -replace "JavaVersion\.VERSION_21", "JavaVersion.VERSION_17"
        
        # Fix Kotlin JVM toolchain 21 → 17
        $content = $content -replace "jvmToolchain\(21\)", "jvmToolchain(17)"
        
        # Fix Gradle version 8.9 → 8.13 (for wrapper properties)
        if ($relativeFile -like "*gradle-wrapper.properties") {
            $content = $content -replace "gradle-8\.9-bin\.zip", "gradle-8.13-bin.zip"
        }
        
        # Only write if content changed
        if ($content -ne $originalContent) {
            Set-Content $fullPath $content
            Write-Host "✅ Fixed: $relativeFile" -ForegroundColor Green
            $fixedCount++
        } else {
            Write-Host "ℹ️  Already correct: $relativeFile" -ForegroundColor Yellow
        }
    } else {
        Write-Host "⚠️  Not found: $relativeFile" -ForegroundColor DarkYellow
    }
}

Write-Host ""
Write-Host "🎯 Comprehensive fix completed!" -ForegroundColor Cyan
Write-Host "📊 Fixed $fixedCount out of $totalFiles files" -ForegroundColor White

if ($fixedCount -gt 0) {
    Write-Host ""
    Write-Host "🚀 Next steps:" -ForegroundColor Cyan
    Write-Host "   1. cd android && .\gradlew.bat clean" -ForegroundColor White
    Write-Host "   2. cd android && .\gradlew.bat assembleDebug" -ForegroundColor White
}
