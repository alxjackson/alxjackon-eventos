import { useState, useEffect } from 'react';

interface VersionInfo {
  version: string;
  changelog: string[];
  downloadUrl: string;
  releaseDate: string;
}

export const useVersionCheck = () => {
  const [currentVersion] = useState('2.0.17'); // Versión actual de la app
  const [hasUpdate, setHasUpdate] = useState(false);
  const [updateInfo, setUpdateInfo] = useState<VersionInfo | null>(null);
  const [showModal, setShowModal] = useState(false);

  const checkForUpdates = async () => {
    try {
      // Verificar en GitHub Releases API
      const response = await fetch('https://api.github.com/repos/alxjackson/alxjackon-eventos/releases/latest');
      const latestRelease = await response.json();
      
      if (latestRelease && latestRelease.tag_name) {
        const latestVersion = latestRelease.tag_name.replace('v', '');
        
        // Comparar versiones (simple comparación de strings para versiones semver)
        if (isNewerVersion(latestVersion, currentVersion)) {
          const updateInfo: VersionInfo = {
            version: latestVersion,
            changelog: parseChangelog(latestRelease.body || ''),
            downloadUrl: getApkDownloadUrl(latestRelease.assets),
            releaseDate: latestRelease.published_at
          };
          
          setUpdateInfo(updateInfo);
          setHasUpdate(true);
          
          // Mostrar modal solo si no se ha mostrado para esta versión
          const lastShownVersion = localStorage.getItem('lastShownUpdateVersion');
          if (lastShownVersion !== latestVersion) {
            setShowModal(true);
          }
        }
      }
    } catch (error) {
      console.error('Error checking for updates:', error);
    }
  };

  const isNewerVersion = (latest: string, current: string): boolean => {
    const latestParts = latest.split('.').map(Number);
    const currentParts = current.split('.').map(Number);
    
    for (let i = 0; i < Math.max(latestParts.length, currentParts.length); i++) {
      const latestPart = latestParts[i] || 0;
      const currentPart = currentParts[i] || 0;
      
      if (latestPart > currentPart) return true;
      if (latestPart < currentPart) return false;
    }
    
    return false;
  };

  const parseChangelog = (body: string): string[] => {
    // Parsear el changelog del release body
    const lines = body.split('\n').filter(line => line.trim());
    const changelog: string[] = [];
    
    for (const line of lines) {
      if (line.startsWith('- ') || line.startsWith('* ')) {
        changelog.push(line.substring(2).trim());
      } else if (line.startsWith('## ') && line.toLowerCase().includes('change')) {
        // Skip headers
        continue;
      } else if (line.trim() && !line.startsWith('#')) {
        changelog.push(line.trim());
      }
    }
    
    return changelog.length > 0 ? changelog : [
      'Mejoras en el rendimiento',
      'Corrección de errores menores',
      'Actualización de dependencias'
    ];
  };

  const getApkDownloadUrl = (assets: any[]): string => {
    const apkAsset = assets?.find(asset => 
      asset.name.endsWith('.apk') && asset.name.includes('release')
    );
    
    return apkAsset?.browser_download_url || 
           `https://github.com/alxjackson/alxjackon-eventos/releases/latest/download/app-release.apk`;
  };

  const dismissUpdate = () => {
    setShowModal(false);
    if (updateInfo) {
      localStorage.setItem('lastShownUpdateVersion', updateInfo.version);
    }
  };

  const forceCheckUpdate = () => {
    localStorage.removeItem('lastShownUpdateVersion');
    checkForUpdates();
  };

  useEffect(() => {
    // Verificar actualizaciones al cargar la app
    checkForUpdates();
    
    // Verificar cada 30 minutos
    const interval = setInterval(checkForUpdates, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    currentVersion,
    hasUpdate,
    updateInfo,
    showModal,
    dismissUpdate,
    forceCheckUpdate,
    checkForUpdates
  };
};



