import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Leer el package.json para obtener la versión actual
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = packageJson.version;

console.log(`🚀 Creando release para versión v${version}...`);

try {
  // 1. Verificar que existe el APK compilado
  const apkPath = path.join('android', 'app', 'build', 'outputs', 'apk', 'release', 'app-release-unsigned.apk');
  
  if (!fs.existsSync(apkPath)) {
    console.error('❌ No se encontró el APK compilado. Ejecuta primero: npm run release:android');
    process.exit(1);
  }

  // 2. Copiar APK al directorio public para GitHub
  const publicApkPath = path.join('public', 'app-release.apk');
  fs.copyFileSync(apkPath, publicApkPath);
  console.log('✅ APK copiado a /public/');

  // 3. Crear changelog automático basado en commits recientes
  let changelog = '';
  try {
    const gitLog = execSync('git log --oneline -10 --pretty=format:"- %s"', { encoding: 'utf8' });
    changelog = gitLog.split('\n').slice(0, 5).join('\n');
  } catch (error) {
    changelog = `- Actualización de la versión v${version}\n- Mejoras en el rendimiento\n- Corrección de errores menores`;
  }

  // 4. Crear archivo de release info
  const releaseInfo = {
    version: version,
    releaseDate: new Date().toISOString(),
    changelog: changelog.split('\n').map(line => line.replace('- ', '').trim()).filter(Boolean),
    downloadUrl: `https://github.com/alxjackson/alxjackon-eventos/releases/download/v${version}/app-release.apk`,
    apkSize: Math.round(fs.statSync(apkPath).size / (1024 * 1024) * 100) / 100 // MB
  };

  fs.writeFileSync('public/release-info.json', JSON.stringify(releaseInfo, null, 2));
  console.log('✅ Información de release creada');

  // 5. Agregar cambios a Git
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "release: v${version}\n\n${changelog}\n\n📱 APK Size: ${releaseInfo.apkSize}MB\n🔗 Download: ${releaseInfo.downloadUrl}"`, { stdio: 'inherit' });

  // 6. Crear tag
  execSync(`git tag v${version}`, { stdio: 'inherit' });
  console.log(`✅ Tag v${version} creado`);

  // 7. Push cambios y tags
  execSync('git push origin main', { stdio: 'inherit' });
  execSync('git push origin --tags', { stdio: 'inherit' });
  console.log('✅ Cambios y tags enviados a GitHub');

  console.log(`
🎉 Release v${version} creado exitosamente!

📋 Próximos pasos:
1. Ve a GitHub: https://github.com/alxjackson/alxjackon-eventos/releases
2. Edita el release v${version} si es necesario
3. Sube el APK manualmente si no se subió automáticamente
4. Publica el release

📱 APK ubicado en: ${apkPath}
📊 Tamaño: ${releaseInfo.apkSize}MB
`);

} catch (error) {
  console.error('❌ Error creando release:', error.message);
  process.exit(1);
}
