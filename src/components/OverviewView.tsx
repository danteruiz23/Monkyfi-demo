import React, { useState } from 'react';
import { AssessmentResult } from '../types';

interface OverviewViewProps {
  assessment: AssessmentResult;
  onRequestAssessment: () => void;
  onOpenChatbot: () => void;
  onOpenMetricsModal: () => void;
  onOpenSamplePlan: () => void;
  lang: 'es' | 'en';
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  assessment,
  onRequestAssessment,
  onOpenChatbot,
  onOpenMetricsModal,
  onOpenSamplePlan,
  lang,
}) => {
  const [selectedMaturity, setSelectedMaturity] = useState<string>('experimenting');
  const [activeFlowStep, setActiveFlowStep] = useState<number>(1);

  const isEs = lang === 'es';

  const maturityOptions = isEs
    ? [
        { id: 'exploring', label: 'Explorando' },
        { id: 'experimenting', label: 'Experimentando' },
        { id: 'piloting', label: 'Pilotando' },
        { id: 'scaling', label: 'Escalando' },
      ]
    : [
        { id: 'exploring', label: 'Exploring' },
        { id: 'experimenting', label: 'Experimenting' },
        { id: 'piloting', label: 'Piloting' },
        { id: 'scaling', label: 'Scaling' },
      ];

  const flowSteps = isEs
    ? [
        { id: 'descubrir', label: 'Descubrir', icon: 'search', detail: 'Mapeo de topología y fuentes de datos OSS/BSS' },
        { id: 'evaluar', label: 'Evaluar', icon: 'analytics', detail: 'Diagnóstico de brechas de IA y seguridad de datos' },
        { id: 'priorizar', label: 'Priorizar', icon: 'priority_high', detail: 'Selección de casos de uso con mayor ROI' },
        { id: 'pilotar', label: 'Pilotar', icon: 'rocket_launch', detail: 'Despliegue controlado en subred NOC de prueba' },
        { id: 'escalar', label: 'Escalar', icon: 'straighten', detail: 'Automatización distribuida en toda la red' },
      ]
    : [
        { id: 'descubrir', label: 'Discover', icon: 'search', detail: 'Mapping topology and OSS/BSS data feeds' },
        { id: 'evaluar', label: 'Assess', icon: 'analytics', detail: 'AI readiness diagnosis & data security' },
        { id: 'priorizar', label: 'Prioritize', icon: 'priority_high', detail: 'High-impact ROI use-case selection' },
        { id: 'pilotar', label: 'Pilot', icon: 'rocket_launch', detail: 'Controlled rollout in target test subnets' },
        { id: 'escalar', label: 'Scale', icon: 'straighten', detail: 'Distributed network-wide automation' },
      ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-32 relative px-4 md:px-0">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(0,245,255,0.14)] to-transparent opacity-30 blur-3xl pointer-events-none"></div>

        <h1 className="font-display-lg text-white mb-6 max-w-4xl tracking-tight leading-tight">
          {isEs
            ? 'Evaluación de Madurez de IA para Infraestructura de Telecomunicaciones y Digital.'
            : 'AI Maturity Assessment for Telecom & Digital Infrastructure.'}
        </h1>

        <p className="font-body-lg text-[#b9caca] max-w-2xl mb-12 text-base md:text-lg leading-relaxed">
          {isEs
            ? 'Convierta el ruido operativo en acción impulsada por IA. Una evaluación guiada por humanos para descubrir riesgos, bloquear el ruido y escalar la resiliencia.'
            : 'Turn operational noise into AI-driven action. A human-guided assessment to uncover risks, cut through alarm noise, and scale infrastructure resilience.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={onRequestAssessment}
            className="bg-[#00f5ff] text-[#003739] font-body-lg font-semibold py-3.5 px-8 rounded-full shadow-[0_0_15px_rgba(0,245,255,0.25)] hover:shadow-[0_0_25px_rgba(0,245,255,0.45)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            {isEs ? 'Reserve su Evaluación de IA' : 'Book Your AI Assessment'}
          </button>
          <button
            onClick={onOpenChatbot}
            className="bg-[#FFFDD0] text-[#432c00] font-body-lg font-semibold py-3.5 px-8 rounded-full border border-[#e9c083] hover:bg-[#ffdeae] shadow-[0_0_15px_rgba(242,201,139,0.2)] hover:shadow-[0_0_25px_rgba(242,201,139,0.35)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            {isEs ? 'Completar con Chatbot' : 'Complete with Chatbot'}
          </button>
        </div>

        <div className="mt-12 flex items-center gap-2 text-[#b9caca] font-tech-label text-xs">
          <span
            className="material-symbols-outlined text-[#00dce5] text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified_user
          </span>
          {isEs
            ? 'Revisado por humanos. No se requieren datos sensibles ni credenciales.'
            : 'Human-reviewed. No sensitive credentials or private keys required.'}
        </div>
      </section>

      {/* Lo que Recibe (Bento Grid) */}
      <section className="mb-32">
        <h2 className="font-headline-lg text-white mb-8 text-center">
          {isEs ? 'Lo que Recibe' : 'What You Receive'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Entregable 01: Resumen Ejecutivo y Análisis */}
          <div className="col-span-1 md:col-span-8 bg-[#171c25]/80 border border-white/10 rounded-xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f5ff] rounded-full filter blur-[90px] opacity-15 pointer-events-none"></div>
            <div>
              <div className="font-tech-label text-[#00dce5] mb-3 tracking-widest uppercase text-xs">
                {isEs ? 'ENTREGABLE 01' : 'DELIVERABLE 01'}
              </div>
              <h3 className="font-headline-md text-white mb-2 font-semibold">
                {isEs ? 'Resumen Ejecutivo y Análisis' : 'Executive Summary & Analysis'}
              </h3>
              <p className="font-body-sm text-[#b9caca] max-w-xl mb-6">
                {isEs
                  ? 'Una visión destilada de su postura operativa actual, traduciendo datos de red en inteligencia de negocios procesable.'
                  : 'A distilled overview of your operational posture, translating complex network telemetry into actionable business intelligence.'}
              </p>

              {/* Simplified Product Preview Scorecard Box */}
              <div className="bg-[#262a34]/60 border border-white/10 rounded-lg p-4 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-tech-label text-white text-xs">
                    {isEs ? 'Vista Previa del Análisis' : 'Analysis Preview'}
                  </span>
                  <span className="font-tech-label text-[#00f5ff] bg-[#00f5ff]/10 border border-[#00f5ff]/30 px-2 py-0.5 rounded text-[11px]">
                    {isEs ? 'Listo para Piloto' : 'Pilot Ready'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#1b2029] p-3.5 rounded border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body-sm text-[#dfe2f0] text-xs">
                        {isEs ? 'Estrategia' : 'Strategy'}
                      </span>
                      <span className="font-tech-score text-[#00f5ff] text-base">
                        {assessment.strategyScore.toFixed(1)}
                      </span>
                    </div>
                    <div className="w-full bg-[#0a0e17] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#00f5ff] h-full rounded-full transition-all duration-700"
                        style={{ width: `${(assessment.strategyScore / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-[#1b2029] p-3.5 rounded border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body-sm text-[#dfe2f0] text-xs">
                        {isEs ? 'Datos' : 'Data'}
                      </span>
                      <span className="font-tech-score text-[#e9c083] text-base">
                        {assessment.dataScore.toFixed(1)}
                      </span>
                    </div>
                    <div className="w-full bg-[#0a0e17] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#e9c083] h-full rounded-full transition-all duration-700"
                        style={{ width: `${(assessment.dataScore / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Entregable 02: Scorecard */}
          <div
            onClick={onOpenMetricsModal}
            className="col-span-1 md:col-span-4 bg-[#171c25]/80 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-start justify-between cursor-pointer hover:border-[#00f5ff]/40 transition-colors"
          >
            <div>
              <div className="font-tech-label text-[#e9c083] mb-3 tracking-widest uppercase text-xs">
                {isEs ? 'ENTREGABLE 02' : 'DELIVERABLE 02'}
              </div>
              <h3 className="font-headline-md text-white mb-2 font-semibold">
                {isEs ? 'Puntuación de Preparación' : 'Readiness Score'}
              </h3>
            </div>
            <div className="my-6">
              <div className="flex items-baseline gap-2">
                <span className="font-display-lg text-[56px] text-[#00dce5] leading-none">
                  {assessment.overallScore}
                </span>
                <span className="font-tech-label text-[#b9caca]">/100</span>
              </div>
              <div className="text-xs text-[#e9c083] font-medium mt-2">{assessment.tierName}</div>
            </div>
            <p className="font-body-sm text-[#b9caca] text-xs">
              {isEs
                ? 'Puntuación global de preparación para la integración de IA en telecomunicaciones.'
                : 'Overall composite readiness score for telecom AI integration and autonomous NOC.'}
            </p>
          </div>

          {/* Entregable 03: Opportunities */}
          <div className="col-span-1 md:col-span-4 bg-[#171c25]/80 border border-white/10 rounded-xl p-6 md:p-8">
            <div className="font-tech-label text-[#90cdff] mb-3 tracking-widest uppercase text-xs">
              {isEs ? 'ENTREGABLE 03' : 'DELIVERABLE 03'}
            </div>
            <h3 className="font-headline-md text-white mb-4 font-semibold">
              {isEs ? '3 Oportunidades Clave' : '3 Key Opportunities'}
            </h3>
            <ul className="space-y-3 font-body-sm text-[#b9caca] text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00dce5] text-[18px] mt-0.5 flex-shrink-0">
                  check_circle
                </span>
                <span>{isEs ? 'Triage Automatizado de Alarmas' : 'Automated Alarm Triage'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00dce5] text-[18px] mt-0.5 flex-shrink-0">
                  check_circle
                </span>
                <span>{isEs ? 'Mantenimiento Predictivo' : 'Predictive Maintenance'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00dce5] text-[18px] mt-0.5 flex-shrink-0">
                  check_circle
                </span>
                <span>{isEs ? 'Asignación Dinámica de Recursos' : 'Dynamic Resource Allocation'}</span>
              </li>
            </ul>
          </div>

          {/* Entregable 04: Risks */}
          <div className="col-span-1 md:col-span-4 bg-[#171c25]/80 border border-white/10 rounded-xl p-6 md:p-8">
            <div className="font-tech-label text-[#ffb4ab] mb-3 tracking-widest uppercase text-xs">
              {isEs ? 'ENTREGABLE 04' : 'DELIVERABLE 04'}
            </div>
            <h3 className="font-headline-md text-white mb-4 font-semibold">
              {isEs ? '3 Riesgos/Bloqueos' : '3 Risks / Blockers'}
            </h3>
            <ul className="space-y-3 font-body-sm text-[#b9caca] text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#ffb4ab] text-[18px] mt-0.5 flex-shrink-0">
                  warning
                </span>
                <span>
                  {isEs ? 'Incompatibilidad de Protocolos Legacy' : 'Legacy Protocol Incompatibilities'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#ffb4ab] text-[18px] mt-0.5 flex-shrink-0">
                  warning
                </span>
                <span>{isEs ? 'Silos de Datos en OSS/BSS' : 'Data Silos across OSS/BSS'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#ffb4ab] text-[18px] mt-0.5 flex-shrink-0">
                  warning
                </span>
                <span>
                  {isEs ? 'Brechas de Cumplimiento de Seguridad' : 'Security Compliance Gaps'}
                </span>
              </li>
            </ul>
          </div>

          {/* Recommended Engagement */}
          <div className="col-span-1 md:col-span-4 bg-[#171c25]/80 border border-white/10 rounded-xl p-6 md:p-8 border-t-2 border-t-[#00f5ff] flex flex-col justify-between">
            <div>
              <div className="font-tech-label text-[#00f5ff] mb-3 tracking-widest uppercase text-xs">
                {isEs ? 'HOJA DE RUTA' : 'ROADMAP'}
              </div>
              <h3 className="font-headline-md text-white mb-3 font-semibold">
                {isEs ? 'Compromiso Recomendado' : 'Recommended Engagement'}
              </h3>
              <p className="font-body-sm text-[#b9caca] mb-6 text-xs">
                {isEs
                  ? 'Basado en su puntuación, mapeamos la secuencia exacta de integraciones requeridas para alcanzar la resiliencia objetivo.'
                  : 'Based on your score, we map the exact sequence of integrations required to achieve target operational resilience.'}
              </p>
            </div>
            <button
              onClick={onOpenSamplePlan}
              className="text-[#00f5ff] font-tech-label text-xs hover:text-[#63f7ff] transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
            >
              <span>{isEs ? 'Ver Plan de Muestra' : 'View Sample Plan'}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Flujo de Evaluación */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-white">
            {isEs ? 'Flujo de Evaluación' : 'Assessment Flow'}
          </h2>
          <p className="font-tech-label text-[#b9caca] mt-2 tracking-widest uppercase text-xs">
            {isEs ? 'DE LA INGESTA AL IMPACTO' : 'FROM INGESTION TO IMPACT'}
          </p>
        </div>

        {/* Desktop Step Flow */}
        <div className="relative max-w-5xl mx-auto hidden md:block">
          <div className="absolute top-6 left-8 right-8 h-[1px] bg-white/10 -z-0"></div>
          <div className="flex justify-between items-start">
            {flowSteps.map((step, idx) => {
              const isSelected = activeFlowStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFlowStep(idx)}
                  className="flex flex-col items-center gap-3 bg-[#0a0e17] px-3 cursor-pointer group"
                >
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'border-[#00f5ff] text-[#00f5ff] bg-[#171c25] shadow-[0_0_15px_rgba(0,245,255,0.3)] scale-110'
                        : 'border-white/20 text-[#b9caca] bg-[#171c25] group-hover:border-white/40'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                  </div>
                  <span
                    className={`font-tech-label text-xs uppercase tracking-wider ${
                      isSelected ? 'text-[#00f5ff] font-bold' : 'text-white'
                    }`}
                  >
                    {step.label}
                  </span>
                  <span className="text-[11px] text-[#849495] text-center max-w-[130px] leading-tight">
                    {step.detail}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Step Flow */}
        <div className="md:hidden space-y-3 px-2">
          {flowSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-[#171c25] p-3 rounded-lg border border-white/10"
            >
              <div className="w-8 h-8 rounded-full bg-[#0a0e17] border border-[#00f5ff] text-[#00f5ff] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[16px]">{step.icon}</span>
              </div>
              <div>
                <span className="font-tech-label text-white text-xs uppercase">{step.label}</span>
                <p className="text-[11px] text-[#b9caca]">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intake Preview Section */}
      <section className="mb-24">
        <div className="bg-[#171c25]/80 border border-white/10 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="font-headline-lg text-white">
              {isEs ? 'Proceso Simple, Resultados Profundos' : 'Simple Process, Deep Results'}
            </h2>
            <p className="font-body-sm text-[#b9caca] mt-2 max-w-xl mx-auto text-xs md:text-sm">
              {isEs
                ? 'Nuestra evaluación está diseñada para requerir un esfuerzo mínimo de su equipo mientras produce información de alto impacto.'
                : 'Our assessment is engineered to require minimal effort from your engineers while yielding high-impact architectural insights.'}
            </p>
          </div>

          <div className="bg-[#121520] border border-white/10 rounded-xl p-5 md:p-6 shadow-inner">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <h3 className="font-headline-md text-[#e9feff] text-base md:text-lg font-medium">
                {isEs
                  ? 'Vista Previa de Ingreso: Contexto de Inteligencia'
                  : 'Intake Preview: Intelligence Context'}
              </h3>
              <span className="font-tech-label text-[#00f5ff] bg-[#00f5ff]/10 border border-[#00f5ff]/30 px-2 py-0.5 rounded text-[11px]">
                {isEs ? 'Ejemplo Interactivo' : 'Interactive Example'}
              </span>
            </div>

            <div className="mb-6">
              <label className="block font-tech-label text-[#b9caca] text-xs uppercase tracking-wider mb-3">
                {isEs ? 'Nivel Actual de Madurez de IA' : 'Current AI Maturity Level'}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {maturityOptions.map((opt) => {
                  const isSelected = selectedMaturity === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedMaturity(opt.id)}
                      className={`p-3 rounded border font-tech-label text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#00f5ff] bg-[#00f5ff]/15 text-[#00f5ff] shadow-[0_0_10px_rgba(0,245,255,0.2)]'
                          : 'border-white/10 bg-[#262a34] text-[#dfe2f0] hover:border-white/30'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="text-xs text-[#849495] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#e9c083]">info</span>
              <span>
                {isEs
                  ? 'Seleccione su nivel y haga clic en Iniciar para personalizar el cálculo con sus métricas reales.'
                  : 'Select your level and click Start to generate custom recommendations tailored to your network.'}
              </span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onRequestAssessment}
              className="bg-[#00f5ff] text-[#003739] font-body-lg font-semibold py-3.5 px-8 rounded-full shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              {isEs ? 'Inicie su Evaluación Ahora' : 'Start Your Assessment Now'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
