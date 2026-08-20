import React from 'react';
import { AssessmentResult } from '../types';

interface MetricsModalProps {
  isOpen: boolean;
  onClose: () => void;
  assessment: AssessmentResult;
  lang: 'es' | 'en';
}

export const MetricsModal: React.FC<MetricsModalProps> = ({
  isOpen,
  onClose,
  assessment,
  lang,
}) => {
  if (!isOpen) return null;
  const isEs = lang === 'es';

  const domainScores = [
    {
      name: isEs ? 'Estrategia & Patrocinio Ejecutivo' : 'Strategy & Executive Buy-in',
      score: assessment.strategyScore,
      benchmark: 3.4,
      desc: isEs
        ? 'Alineación de objetivos de negocio y mandatos para inversión en automatización de red.'
        : 'Business goal alignment and executive mandate for network automation investment.',
      color: '#00f5ff',
    },
    {
      name: isEs ? 'Arquitectura de Datos & Ingesta OSS/BSS' : 'Data Architecture & OSS Ingestion',
      score: assessment.dataScore,
      benchmark: 2.5,
      desc: isEs
        ? 'Disponibilidad de streams en tiempo real (Kafka, gRPC), calidad de logs y resolución de silos.'
        : 'Availability of real-time streaming, log quality, and elimination of legacy data silos.',
      color: '#e9c083',
    },
    {
      name: isEs ? 'Seguridad Zero-Trust & Cumplimiento CPNI' : 'Zero-Trust Security & CPNI Compliance',
      score: assessment.governanceScore,
      benchmark: 3.8,
      desc: isEs
        ? 'Políticas de anonimización de telemetría de suscriptores y aislamiento de inferencia.'
        : 'Subscriber telemetry anonymization, RBAC, and localized edge inference isolation.',
      color: '#90cdff',
    },
    {
      name: isEs ? 'Infraestructura de Cómputo & Edge AI' : 'Compute Infrastructure & Edge AI',
      score: assessment.infrastructureScore,
      benchmark: 3.1,
      desc: isEs
        ? 'Capacidad de despliegue de micro-modelos en subestaciones y centros de conmutación.'
        : 'Deployment capability of micro-models across regional substations and central offices.',
      color: '#00dce5',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#121520] border border-white/20 rounded-2xl shadow-2xl p-6 md:p-8 my-8 text-white">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#b9caca] hover:text-white rounded-full hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        <div className="mb-6 border-b border-white/10 pb-4">
          <div className="font-tech-label text-[#00f5ff] text-xs uppercase tracking-widest mb-1">
            {isEs ? 'DESGLOSE DE MÉTRICAS & BENCHMARKS' : 'DETAILED METRICS BREAKDOWN & BENCHMARKS'}
          </div>
          <h2 className="font-headline-lg text-white font-bold">
            {isEs ? 'Cuadro de Mando de Preparación de IA' : 'AI Readiness Scorecard'}
          </h2>
          <p className="font-body-sm text-[#b9caca] text-xs md:text-sm mt-1">
            {isEs
              ? 'Comparativa detallada frente al percentil 75 de operadores de telecomunicaciones globales.'
              : 'Detailed comparative analysis against the 75th percentile of global telecom operators.'}
          </p>
        </div>

        {/* Global Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#171c25] p-5 rounded-xl border border-white/10">
            <span className="text-xs font-tech-label text-[#849495] uppercase block mb-1">
              {isEs ? 'Puntaje General' : 'Composite Score'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-display-lg text-4xl text-[#00dce5] leading-none">
                {assessment.overallScore}
              </span>
              <span className="font-tech-label text-[#b9caca]">/100</span>
            </div>
            <span className="text-xs text-[#e9c083] font-medium mt-2 block">
              {assessment.tierName}
            </span>
          </div>

          <div className="bg-[#171c25] p-5 rounded-xl border border-white/10">
            <span className="text-xs font-tech-label text-[#849495] uppercase block mb-1">
              {isEs ? 'Ahorro OPEX Proyectado' : 'Projected OPEX Reduction'}
            </span>
            <div className="font-display-lg text-4xl text-[#00f5ff] leading-none">
              {assessment.estimatedOpexReduction}
            </div>
            <span className="text-xs text-[#b9caca] mt-2 block">
              {isEs ? 'En costos de energía y soporte L1' : 'In power consumption and L1 support'}
            </span>
          </div>

          <div className="bg-[#171c25] p-5 rounded-xl border border-white/10">
            <span className="text-xs font-tech-label text-[#849495] uppercase block mb-1">
              {isEs ? 'Optimización de MTTR' : 'MTTR Resolution Gain'}
            </span>
            <div className="font-display-lg text-4xl text-[#e9c083] leading-none">
              {assessment.estimatedMttrImprovement}
            </div>
            <span className="text-xs text-[#b9caca] mt-2 block">
              {isEs ? 'Aislamiento de causa raíz acelerado' : 'Accelerated root-cause correlation'}
            </span>
          </div>
        </div>

        {/* Domain Metrics Breakdown with Progress Bars */}
        <div className="space-y-6 mb-8">
          <h3 className="font-headline-md text-white text-lg font-semibold">
            {isEs ? 'Puntuación por Dominio Operativo' : 'Score by Operational Domain'}
          </h3>

          <div className="space-y-4">
            {domainScores.map((domain, idx) => (
              <div key={idx} className="bg-[#171c25]/80 p-4 rounded-xl border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <span className="font-medium text-sm text-white">{domain.name}</span>
                  <div className="flex items-center gap-4 text-xs font-tech-label">
                    <span>
                      <span className="text-[#849495]">{isEs ? 'Actual:' : 'Actual:'} </span>
                      <strong style={{ color: domain.color }}>{domain.score.toFixed(1)} / 5.0</strong>
                    </span>
                    <span>
                      <span className="text-[#849495]">{isEs ? 'Benchmark:' : 'Benchmark:'} </span>
                      <span className="text-[#dfe2f0]">{domain.benchmark.toFixed(1)} / 5.0</span>
                    </span>
                  </div>
                </div>

                <div className="w-full bg-[#0a0e17] h-2.5 rounded-full overflow-hidden relative">
                  {/* Benchmark marker line */}
                  <div
                    className="absolute top-0 bottom-0 w-[2px] bg-white/40 z-10"
                    style={{ left: `${(domain.benchmark / 5) * 100}%` }}
                    title={`Benchmark Telco: ${domain.benchmark}`}
                  ></div>
                  {/* Actual Score Bar */}
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${(domain.score / 5) * 100}%`,
                      backgroundColor: domain.color,
                      boxShadow: `0 0 10px ${domain.color}80`,
                    }}
                  ></div>
                </div>

                <p className="text-xs text-[#849495] mt-2">{domain.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#00f5ff] text-[#003739] font-tech-label text-xs uppercase font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(0,245,255,0.3)] hover:shadow-[0_0_25px_rgba(0,245,255,0.5)] transition-all cursor-pointer"
          >
            {isEs ? 'Cerrar Desglose' : 'Close Breakdown'}
          </button>
        </div>
      </div>
    </div>
  );
};
