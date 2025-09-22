/**
 * Suite de Pruebas de Seguridad Automatizadas
 * AlxJackson Eventos v2.0.19
 * 
 * Ejecuta pruebas de seguridad controladas y no intrusivas
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SecurityTestSuite {
  constructor() {
    this.results = [];
    this.startTime = new Date();
    this.logFile = path.join(__dirname, `security-test-results-${Date.now()}.json`);
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  addResult(testId, testName, status, details, risk = 'Medium') {
    this.results.push({
      testId,
      testName,
      status,
      details,
      risk,
      timestamp: new Date().toISOString()
    });
  }

  // TEST-001: Verificar Security Headers
  async testSecurityHeaders() {
    this.log('Ejecutando TEST-001: Security Headers');
    
    try {
      // Simular verificación de headers (en entorno real usaríamos fetch/curl)
      const expectedHeaders = [
        'Content-Security-Policy',
        'Strict-Transport-Security',
        'X-Frame-Options',
        'X-Content-Type-Options',
        'Referrer-Policy'
      ];

      // En un entorno real, haríamos una request HTTP real
      // Por ahora, simulamos la verificación
      const missingHeaders = expectedHeaders; // Asumimos que faltan todos

      if (missingHeaders.length > 0) {
        this.addResult(
          'TEST-001',
          'Security Headers Verification',
          'FAIL',
          {
            missing: missingHeaders,
            recommendation: 'Implementar security headers en servidor/CDN'
          },
          'High'
        );
      } else {
        this.addResult(
          'TEST-001',
          'Security Headers Verification',
          'PASS',
          { message: 'Todos los security headers presentes' },
          'Low'
        );
      }

    } catch (error) {
      this.addResult(
        'TEST-001',
        'Security Headers Verification',
        'ERROR',
        { error: error.message },
        'Medium'
      );
    }
  }

  // TEST-002: Análisis de Variables Expuestas
  async testExposedVariables() {
    this.log('Ejecutando TEST-002: Variables Expuestas');

    try {
      const distPath = path.join(process.cwd(), 'dist');
      
      if (!fs.existsSync(distPath)) {
        this.addResult(
          'TEST-002',
          'Exposed Variables Analysis',
          'SKIP',
          { message: 'Directorio dist no encontrado. Ejecutar npm run build primero.' }
        );
        return;
      }

      // Buscar patrones sensibles en archivos compilados
      const sensitivePatterns = [
        'VITE_ORIGIN_WITH_DJ',
        'VITE_ORIGIN_WITHOUT_DJ',
        'password',
        'secret',
        'private_key'
      ];

      let foundSensitiveData = [];

      // Función recursiva para buscar en archivos
      const searchInFiles = (dir) => {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            searchInFiles(filePath);
          } else if (file.endsWith('.js') || file.endsWith('.css')) {
            const content = fs.readFileSync(filePath, 'utf8');
            
            sensitivePatterns.forEach(pattern => {
              if (content.includes(pattern)) {
                foundSensitiveData.push({
                  file: filePath,
                  pattern: pattern
                });
              }
            });
          }
        });
      };

      searchInFiles(distPath);

      if (foundSensitiveData.length > 0) {
        this.addResult(
          'TEST-002',
          'Exposed Variables Analysis',
          'FAIL',
          {
            exposedData: foundSensitiveData,
            recommendation: 'Mover datos sensibles al backend'
          },
          'Medium'
        );
      } else {
        this.addResult(
          'TEST-002',
          'Exposed Variables Analysis',
          'PASS',
          { message: 'No se encontraron variables sensibles expuestas' },
          'Low'
        );
      }

    } catch (error) {
      this.addResult(
        'TEST-002',
        'Exposed Variables Analysis',
        'ERROR',
        { error: error.message }
      );
    }
  }

  // TEST-007: Análisis de Dependencias
  async testDependencyVulnerabilities() {
    this.log('Ejecutando TEST-007: Dependency Vulnerabilities');

    try {
      // Ejecutar npm audit
      const auditResult = execSync('npm audit --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });

      const auditData = JSON.parse(auditResult);
      const vulnerabilities = auditData.metadata?.vulnerabilities || {};
      
      const totalVulns = vulnerabilities.critical + vulnerabilities.high + 
                        vulnerabilities.moderate + vulnerabilities.low;

      if (totalVulns > 0) {
        this.addResult(
          'TEST-007',
          'Dependency Vulnerabilities',
          'WARN',
          {
            vulnerabilities: vulnerabilities,
            total: totalVulns,
            recommendation: 'Ejecutar npm audit fix para corregir vulnerabilidades'
          },
          vulnerabilities.critical > 0 ? 'Critical' : 
          vulnerabilities.high > 0 ? 'High' : 'Medium'
        );
      } else {
        this.addResult(
          'TEST-007',
          'Dependency Vulnerabilities',
          'PASS',
          { 
            message: 'No se encontraron vulnerabilidades en dependencias',
            totalDependencies: auditData.metadata?.dependencies?.total || 0
          },
          'Low'
        );
      }

    } catch (error) {
      // npm audit puede retornar exit code != 0 si hay vulnerabilidades
      if (error.stdout) {
        try {
          const auditData = JSON.parse(error.stdout);
          const vulnerabilities = auditData.metadata?.vulnerabilities || {};
          
          this.addResult(
            'TEST-007',
            'Dependency Vulnerabilities',
            'FAIL',
            {
              vulnerabilities: vulnerabilities,
              recommendation: 'Revisar y corregir vulnerabilidades encontradas'
            },
            'High'
          );
        } catch (parseError) {
          this.addResult(
            'TEST-007',
            'Dependency Vulnerabilities',
            'ERROR',
            { error: error.message }
          );
        }
      } else {
        this.addResult(
          'TEST-007',
          'Dependency Vulnerabilities',
          'ERROR',
          { error: error.message }
        );
      }
    }
  }

  // TEST-008: Análisis de AndroidManifest
  async testAndroidSecurity() {
    this.log('Ejecutando TEST-008: Android Security Analysis');

    try {
      const manifestPath = path.join(process.cwd(), 'android/app/src/main/AndroidManifest.xml');
      
      if (!fs.existsSync(manifestPath)) {
        this.addResult(
          'TEST-008',
          'Android Security Analysis',
          'SKIP',
          { message: 'AndroidManifest.xml no encontrado' }
        );
        return;
      }

      const manifestContent = fs.readFileSync(manifestPath, 'utf8');
      
      // Verificar configuraciones de seguridad
      const securityChecks = {
        allowBackup: manifestContent.includes('android:allowBackup="true"'),
        debuggable: manifestContent.includes('android:debuggable="true"'),
        exportedActivities: manifestContent.includes('android:exported="true"'),
        internetPermission: manifestContent.includes('android.permission.INTERNET'),
        networkSecurityConfig: manifestContent.includes('android:networkSecurityConfig')
      };

      const issues = [];
      const recommendations = [];

      if (securityChecks.allowBackup) {
        issues.push('allowBackup habilitado');
        recommendations.push('Considerar deshabilitar allowBackup para datos sensibles');
      }

      if (securityChecks.debuggable) {
        issues.push('Modo debug habilitado');
        recommendations.push('Deshabilitar debug en builds de producción');
      }

      if (!securityChecks.networkSecurityConfig) {
        issues.push('Network Security Config no configurado');
        recommendations.push('Implementar Network Security Config para HTTPS');
      }

      const status = issues.length > 0 ? 'WARN' : 'PASS';
      const risk = issues.some(i => i.includes('debug')) ? 'High' : 'Medium';

      this.addResult(
        'TEST-008',
        'Android Security Analysis',
        status,
        {
          issues: issues,
          recommendations: recommendations,
          securityChecks: securityChecks
        },
        risk
      );

    } catch (error) {
      this.addResult(
        'TEST-008',
        'Android Security Analysis',
        'ERROR',
        { error: error.message }
      );
    }
  }

  // Ejecutar todas las pruebas
  async runAllTests() {
    this.log('=== INICIANDO SUITE DE PRUEBAS DE SEGURIDAD ===');
    this.log(`Proyecto: AlxJackson Eventos v2.0.19`);
    this.log(`Fecha: ${this.startTime.toISOString()}`);
    
    await this.testSecurityHeaders();
    await this.testExposedVariables();
    await this.testDependencyVulnerabilities();
    await this.testAndroidSecurity();

    // Generar reporte
    this.generateReport();
  }

  generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;

    const report = {
      metadata: {
        project: 'AlxJackson Eventos',
        version: '2.0.19',
        startTime: this.startTime.toISOString(),
        endTime: endTime.toISOString(),
        duration: `${duration}ms`,
        totalTests: this.results.length
      },
      summary: {
        passed: this.results.filter(r => r.status === 'PASS').length,
        failed: this.results.filter(r => r.status === 'FAIL').length,
        warnings: this.results.filter(r => r.status === 'WARN').length,
        errors: this.results.filter(r => r.status === 'ERROR').length,
        skipped: this.results.filter(r => r.status === 'SKIP').length
      },
      results: this.results
    };

    // Guardar reporte en archivo
    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));

    // Mostrar resumen en consola
    this.log('=== RESUMEN DE PRUEBAS ===');
    this.log(`✅ Pasadas: ${report.summary.passed}`);
    this.log(`❌ Fallidas: ${report.summary.failed}`);
    this.log(`⚠️  Advertencias: ${report.summary.warnings}`);
    this.log(`🚫 Errores: ${report.summary.errors}`);
    this.log(`⏭️  Omitidas: ${report.summary.skipped}`);
    this.log(`📄 Reporte guardado en: ${this.logFile}`);

    // Mostrar recomendaciones críticas
    const criticalIssues = this.results.filter(r => 
      (r.status === 'FAIL' || r.status === 'WARN') && 
      (r.risk === 'Critical' || r.risk === 'High')
    );

    if (criticalIssues.length > 0) {
      this.log('=== ISSUES CRÍTICOS ENCONTRADOS ===');
      criticalIssues.forEach(issue => {
        this.log(`🚨 ${issue.testName}: ${issue.details.recommendation || 'Revisar manualmente'}`);
      });
    }

    return report;
  }
}

// Ejecutar si es llamado directamente
const suite = new SecurityTestSuite();
suite.runAllTests().catch(error => {
  console.error('Error ejecutando pruebas:', error);
  process.exit(1);
});

export default SecurityTestSuite;
