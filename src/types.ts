export type ViewMode = 'executive' | 'overview' | 'tour' | 'assessment';

export type Language = 'es' | 'en';

export interface AssessmentFormState {
  companyName: string;
  contactName: string;
  email: string;
  role: string;
  networkType: 'mobile_5g' | 'fiber_fttx' | 'cable_hybrid' | 'cloud_datacenter' | 'enterprise_iot';
  currentMaturity: 'exploring' | 'experimenting' | 'piloting' | 'scaling';
  primaryChallenge: 'alarm_noise' | 'mttr_reduction' | 'legacy_oss' | 'energy_cost' | 'security_compliance';
  dataReadiness: number; // 1 to 5
  strategyReadiness: number; // 1 to 5
  governanceReadiness: number; // 1 to 5
  infrastructureReadiness: number; // 1 to 5
}

export interface AssessmentResult {
  overallScore: number; // e.g. 84 / 100
  tierName: string;
  strategyScore: number; // out of 5.0
  dataScore: number; // out of 5.0
  governanceScore: number; // out of 5.0
  infrastructureScore: number; // out of 5.0
  estimatedOpexReduction: string;
  estimatedMttrImprovement: string;
  topOpportunities: {
    title: string;
    desc: string;
    impact: 'Alta' | 'Media' | 'Crítica';
  }[];
  topRisks: {
    title: string;
    desc: string;
    severity: 'Crítico' | 'Moderado' | 'Bajo';
  }[];
  roadmap: {
    phase: string;
    timeframe: string;
    focus: string;
    deliverables: string[];
  }[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedActions?: string[];
}
