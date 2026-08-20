import { AssessmentFormState, AssessmentResult } from '../types';

export const calculateMaturityAssessment = (formData: AssessmentFormState): AssessmentResult => {
  // Compute weighted domain readiness scores (out of 5.0)
  const strategyScore = Number((formData.strategyReadiness * 0.9 + (formData.currentMaturity === 'scaling' ? 1.0 : formData.currentMaturity === 'piloting' ? 0.6 : 0.2)).toFixed(1));
  const dataScore = Number((formData.dataReadiness * 0.8 + (formData.networkType === 'cloud_datacenter' || formData.networkType === 'mobile_5g' ? 0.8 : 0.4)).toFixed(1));
  const governanceScore = Number((formData.governanceReadiness * 0.85 + 0.5).toFixed(1));
  const infrastructureScore = Number((formData.infrastructureReadiness * 0.85 + 0.4).toFixed(1));

  // Compute 0-100 overall readiness score
  const rawSum = (strategyScore + dataScore + governanceScore + infrastructureScore) / 20;
  const overallScore = Math.min(96, Math.max(38, Math.round(rawSum * 100)));

  let tierName = 'Readiness Inicial';
  if (overallScore >= 80) tierName = 'Readiness Avanzado (Listo para Piloto)';
  else if (overallScore >= 65) tierName = 'Readiness Intermedio (Aceleración de Silos)';
  else tierName = 'Fase de Descubrimiento & Higiene de Datos';

  // Dynamic OPEX & MTTR calculations
  const opexPct = Math.round(15 + (overallScore / 100) * 22);
  const mttrPct = Math.round(25 + (overallScore / 100) * 35);

  const topOpportunities = [
    {
      title: 'Triage Automatizado de Alarmas',
      desc: 'Correlación de telemetría multidominio en tiempo real reduciendo hasta un 42% del ruido operativo en NOC.',
      impact: 'Crítica' as const,
    },
    {
      title: 'Mantenimiento Predictivo & Self-Healing',
      desc: 'Detección temprana de degradación en enlaces ópticos y celdas RAN antes de impactar el SLA de clientes.',
      impact: 'Alta' as const,
    },
    {
      title: 'Asignación Dinámica de Recursos (RIC/SON)',
      desc: 'Balanceo inteligente de ancho de banda y ahorro energético en horas valle mediante micro-modelos distribuidos.',
      impact: 'Alta' as const,
    },
  ];

  const topRisks = [
    {
      title: 'Incompatibilidad de Protocolos Legacy',
      desc: 'Múltiples interfaces SNMP/CORBA propietarias que dificultan la estandarización hacia gRPC/Kafka streaming.',
      severity: 'Crítico' as const,
    },
    {
      title: 'Silos de Datos en OSS/BSS',
      desc: 'Fragmentación entre sistemas de tickets de fallas, inventario de red y telemetría de rendimiento.',
      severity: 'Moderado' as const,
    },
    {
      title: 'Brechas de Cumplimiento de Seguridad (CPNI / Zero-Trust)',
      desc: 'Necesidad de encriptación y anonimización en el borde antes de transferir logs a pipelines de inferencia.',
      severity: 'Moderado' as const,
    },
  ];

  const roadmap = [
    {
      phase: 'Q1-Q2',
      timeframe: 'Meses 1-6',
      focus: 'Consolidación de Datos & Ingesta Zero-Trust',
      deliverables: [
        'Unificación de silos OSS/BSS mediante adaptadores gRPC streaming',
        'Pipeline de anonimización de telemetría conforme a ISO 27001 y CPNI',
        'Modelo base de correlación topológica para top-10 fallas recurrentes',
      ],
    },
    {
      phase: 'Q3-Q4',
      timeframe: 'Meses 7-12',
      focus: 'Casos de Uso de Alto Impacto (NOC Sentinel)',
      deliverables: [
        'Implementación del triaje de alarmas asistido por IA (reducción del 40% de ruido)',
        'Resolución autónoma de tickets Nivel 1 en entornos controlados',
        'Tablero ejecutivo de monitoreo de MTTR y costos energéticos',
      ],
    },
    {
      phase: 'Año 2+',
      timeframe: 'Meses 13-24',
      focus: 'Operaciones Autónomas & Self-Healing',
      deliverables: [
        'Despliegue de inteligencia distribuida para remediación proactiva',
        'Auto-reconfiguración de rutas y rebalanceo de carga en RAN/Core',
        'Gobernanza continua y optimización multicloud automatizada',
      ],
    },
  ];

  return {
    overallScore,
    tierName,
    strategyScore,
    dataScore,
    governanceScore,
    infrastructureScore,
    estimatedOpexReduction: `${opexPct}%`,
    estimatedMttrImprovement: `${mttrPct}%`,
    topOpportunities,
    topRisks,
    roadmap,
  };
};

export const defaultAssessment = calculateMaturityAssessment({
  companyName: 'Telecom Global',
  contactName: 'Director de Operaciones',
  email: 'cto@telecom-global.com',
  role: 'CTO / VP de Redes',
  networkType: 'mobile_5g',
  currentMaturity: 'experimenting',
  primaryChallenge: 'alarm_noise',
  dataReadiness: 3,
  strategyReadiness: 4,
  governanceReadiness: 4,
  infrastructureReadiness: 4,
});

export const translations = {
  es: {
    nav: {
      brandSub: 'Executive',
      strategy: 'Estrategia',
      security: 'Seguridad',
      platform: 'Plataforma',
      connect: 'Conectar',
      atlas: 'Atlas',
      sentinel: 'Sentinel',
      review: 'Revisión',
      requestAssessment: 'Request Assessment',
      bookAssessment: 'Reservar Evaluación',
      fullDemo: 'Ver Demo Completa',
      switchView: 'Modo de Pantalla',
    },
    views: {
      executive: 'Vista Ejecutiva (Estrategia)',
      overview: 'Vista Comercial (Conectar)',
      tour: 'Tour del Producto (Atlas/Sentinel)',
      interactive: 'Test de Madurez Interactivo',
    },
  },
  en: {
    nav: {
      brandSub: 'Executive',
      strategy: 'Strategy',
      security: 'Security',
      platform: 'Platform',
      connect: 'Connect',
      atlas: 'Atlas',
      sentinel: 'Sentinel',
      review: 'Review',
      requestAssessment: 'Request Assessment',
      bookAssessment: 'Book Assessment',
      fullDemo: 'Watch Full Demo',
      switchView: 'Screen View',
    },
    views: {
      executive: 'Executive View (Strategy)',
      overview: 'Commercial View (Connect)',
      tour: 'Product Tour (Atlas/Sentinel)',
      interactive: 'Interactive AI Assessment',
    },
  },
};
