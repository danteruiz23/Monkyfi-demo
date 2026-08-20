import React, { useState } from 'react';
import { AssessmentResult } from '../types';

interface ExecutiveViewProps {
  assessment: AssessmentResult;
  onRequestAssessment: () => void;
  onOpenMetricsModal: () => void;
  onOpenSamplePlan: () => void;
  lang: 'es' | 'en';
}

export const ExecutiveView: React.FC<ExecutiveViewProps> = ({
  assessment,
  onRequestAssessment,
  onOpenMetricsModal,
  onOpenSamplePlan,
  lang,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const isEs = lang === 'es';

  const steps = isEs
    ? [
        { name: 'Alineación', icon: 'target', desc: 'Definición de metas de ROI con líderes técnicos (CTO/COO).' },
        { name: 'Auditoría Data', icon: 'dataset', desc: 'Mapeo de silos OSS/BSS y calidad de telemetría de red.' },
        { name: 'Modelado', icon: 'model_training', desc: 'Simulación de algoritmos de triaje y predicción de fallas.' },
        { name: 'Ejecución', icon: 'presentation', desc: 'Presentación del Cuadro de Mando y Roadmap Board-Ready.' },
      ]
    : [
        { name: 'Alignment', icon: 'target', desc: 'Defining ROI targets with technical leadership (CTO/COO).' },
        { name: 'Data Audit', icon: 'dataset', desc: 'Mapping OSS/BSS silos and network telemetry quality.' },
        { name: 'Modeling', icon: 'model_training', desc: 'Simulating triage algorithms and outage prediction.' },
        { name: 'Execution', icon: 'presentation', desc: 'Delivering the Board-Ready Scorecard and Roadmap.' },
      ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-36 relative px-4 md:px-0">
        {/* Radial Glow Ambient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(0,245,255,0.12)] via-transparent to-transparent opacity-60 blur-3xl pointer-events-none"></div>

        <h1 className="font-display-lg text-white mb-8 max-w-4xl tracking-tight leading-tight">
          {isEs ? 'De la Incertidumbre a la Estrategia.' : 'From Uncertainty to Strategy.'}
        </h1>

        <p className="font-body-lg text-[#b9caca] max-w-3xl mb-12 text-base md:text-lg leading-relaxed">
          {isEs
            ? 'Cuantifique el impacto operativo y financiero de la IA en sus redes de telecomunicaciones. Una evaluación estratégica diseñada para líderes técnicos (CTO/COO) enfocada en mitigar riesgos, asegurar el cumplimiento y definir un mapa de ruta hacia el ROI.'
            : 'Quantify the operational and financial impact of AI across your telecom networks. A strategic assessment tailored for technical leaders (CTO/COO) to mitigate risk, enforce compliance, and chart a clear ROI roadmap.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={onRequestAssessment}
            className="bg-[#00f5ff] text-[#003739] font-body-lg font-semibold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(0,245,255,0.25)] hover:shadow-[0_0_30px_rgba(0,245,255,0.45)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            {isEs ? 'Request a Strategic Assessment' : 'Request a Strategic Assessment'}
          </button>
        </div>
      </section>

      {/* El Entregable (Bento Grid) */}
      <section className="mb-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-tech-label text-[#00f5ff] mb-2 tracking-widest uppercase">
              {isEs ? 'ENTREGABLE ESTRATÉGICO' : 'STRATEGIC DELIVERABLE'}
            </div>
            <h2 className="font-headline-lg text-white">
              {isEs ? 'El Entregable: Tu Mapa de Ruta AI' : 'The Deliverable: Your AI Roadmap'}
            </h2>
          </div>
          <button
            onClick={onOpenSamplePlan}
            className="self-start md:self-auto text-xs font-tech-label text-[#e9c083] hover:text-[#ffdeae] border border-[#5d4210] hover:border-[#e9c083] px-4 py-2 rounded transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">visibility</span>
            {isEs ? 'Ver Muestra Detallada' : 'View Detailed Sample'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Board-Ready Executive Summary */}
          <div className="col-span-1 md:col-span-8 bg-[#171c25]/70 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between hover:border-[#00f5ff]/40 transition-colors duration-500 group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00f5ff] rounded-full filter blur-[110px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#00dce5]">assignment_turned_in</span>
                <div className="font-tech-label text-[#00dce5] tracking-widest uppercase text-xs">
                  {isEs ? 'RESUMEN EJECUTIVO / NIVEL DIRECTORIO' : 'EXECUTIVE SUMMARY / BOARD-LEVEL'}
                </div>
              </div>
              <h3 className="font-headline-md text-white mb-4 text-2xl font-semibold">
                Board-Ready Executive Summary
              </h3>
              <p className="font-body-lg text-[#b9caca] max-w-2xl leading-relaxed">
                {isEs
                  ? 'Un documento conciso y respaldado por datos que traduce la complejidad de su red en métricas de negocio. Proyecta reducciones en OPEX, eficiencias en la resolución de incidentes (MTTR) y delinea los recursos necesarios para la modernización de la red hacia operaciones autónomas.'
                  : 'A concise, data-backed brief translating network complexity into executive business metrics. Projects OPEX reductions, MTTR efficiency gains, and outlines required investments for autonomous network modernization.'}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-xs font-tech-label text-[#849495] block uppercase">
                    {isEs ? 'Reducción Proyectada OPEX' : 'Projected OPEX Reduction'}
                  </span>
                  <span className="font-tech-score text-[#00f5ff] text-xl font-bold">
                    {assessment.estimatedOpexReduction}
                  </span>
                </div>
                <div className="w-[1px] h-8 bg-white/10"></div>
                <div>
                  <span className="text-xs font-tech-label text-[#849495] block uppercase">
                    {isEs ? 'Mejora en MTTR' : 'MTTR Resolution Gain'}
                  </span>
                  <span className="font-tech-score text-[#e9c083] text-xl font-bold">
                    {assessment.estimatedMttrImprovement}
                  </span>
                </div>
              </div>
              <button
                onClick={onOpenMetricsModal}
                className="text-xs font-tech-label text-[#00f5ff] hover:underline flex items-center gap-1 cursor-pointer"
              >
                {isEs ? 'Desglosar Métricas' : 'Breakdown Metrics'} &rarr;
              </button>
            </div>
          </div>

          {/* Scorecard */}
          <div
            onClick={onOpenMetricsModal}
            className="col-span-1 md:col-span-4 bg-[#171c25]/70 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-start justify-between cursor-pointer hover:border-[#00f5ff]/40 transition-colors group"
          >
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div className="font-tech-label text-[#e9c083] mb-4 tracking-widest uppercase text-xs">
                  {isEs ? 'MÉTRICA CLAVE' : 'KEY METRIC'}
                </div>
                <span className="material-symbols-outlined text-[#849495] group-hover:text-[#00f5ff] transition-colors text-[20px]">
                  open_in_new
                </span>
              </div>
              <h3 className="font-headline-md text-white mb-2 font-semibold">
                {isEs ? 'Índice de Madurez AI' : 'AI Maturity Index'}
              </h3>
            </div>

            <div className="my-6 flex flex-col gap-1 w-full">
              <div className="flex items-baseline gap-2">
                <span className="font-display-lg text-[64px] leading-none text-[#00dce5] font-light tracking-tighter">
                  {assessment.overallScore}
                </span>
                <span className="font-tech-label text-[#b9caca] text-lg">/100</span>
              </div>
              <div className="text-sm text-[#e9c083] font-medium mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e9c083] animate-pulse"></span>
                <span>{assessment.tierName}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#0a0e17] h-2 rounded-full mt-4 overflow-hidden p-[1px]">
                <div
                  className="bg-gradient-to-r from-[#00dce5] to-[#00f5ff] h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                  style={{ width: `${assessment.overallScore}%` }}
                ></div>
              </div>
            </div>

            <span className="text-xs font-tech-label text-[#849495] uppercase">
              {isEs ? 'CLICK PARA ANÁLISIS POR DOMINIO' : 'CLICK FOR DOMAIN ANALYSIS'}
            </span>
          </div>

          {/* Strategic Roadmap */}
          <div className="col-span-1 md:col-span-12 bg-[#171c25]/70 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 border-l-4 border-l-[#00f5ff]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <div className="font-tech-label text-[#00dce5] mb-2 tracking-widest uppercase text-xs">
                  {isEs ? 'PROYECCIÓN DE VALOR' : 'VALUE PROJECTION'}
                </div>
                <h3 className="font-headline-md text-white font-semibold">
                  Strategic Roadmap &amp; ROI
                </h3>
              </div>
              <div className="mt-2 sm:mt-0 px-3 py-1 bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-[#00f5ff] rounded font-tech-label text-xs">
                {isEs ? 'HORIZONTE 24 MESES' : '24-MONTH HORIZON'}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              {assessment.roadmap.map((item, idx) => (
                <div
                  key={idx}
                  className="space-y-3 bg-[#121520]/60 p-5 rounded-xl border border-white/5 hover:border-white/15 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-light text-white font-tech-score">
                      {item.phase}
                    </div>
                    <span className="font-tech-label text-xs text-[#e9c083]">{item.timeframe}</span>
                  </div>
                  <div className="font-medium text-[#e9feff] text-base">{item.focus}</div>
                  <ul className="space-y-2 text-xs text-[#b9caca] mt-3">
                    {item.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-[#00f5ff] mt-0.5">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zero Trust Data Policy */}
      <section className="mb-36">
        <div className="bg-[#171c25]/40 border border-white/10 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,245,255,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
          
          <div className="w-16 h-16 rounded-2xl bg-[#00f5ff]/10 border border-[#00f5ff]/30 mx-auto flex items-center justify-center mb-6 text-[#00dce5] shadow-[0_0_20px_rgba(0,245,255,0.15)]">
            <span className="material-symbols-outlined text-[36px]">shield_lock</span>
          </div>

          <h2 className="font-headline-lg text-white mb-6">
            {isEs ? 'Seguridad por Diseño (Zero-Trust Data Policy)' : 'Security by Design (Zero-Trust Data Policy)'}
          </h2>
          
          <p className="font-body-lg text-[#b9caca] max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-base">
            {isEs
              ? 'La soberanía de sus datos operativos es innegociable. Nuestro marco de evaluación opera bajo estrictos protocolos de Zero-Trust, garantizando que su topología de red y telemetría sensible permanezcan encriptadas, anonimizadas y conformes con los estándares de la industria de telecomunicaciones.'
              : 'Operational data sovereignty is non-negotiable. Our framework operates under strict Zero-Trust protocols, ensuring network topology, subscriber telemetry, and sensitive logs remain encrypted, anonymized, and fully telecom-compliant.'}
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm font-tech-label uppercase tracking-widest text-[#b9caca]">
            <div className="flex items-center gap-2 bg-[#0a0e17] px-4 py-2 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-[#e9c083] text-[18px]">verified</span>
              <span>ISO 27001 Ready</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a0e17] px-4 py-2 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-[#e9c083] text-[18px]">verified</span>
              <span>Data Anonymization</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a0e17] px-4 py-2 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-[#e9c083] text-[18px]">verified</span>
              <span>On-Premise Deployable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Evaluación Estratégica */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-white">
            {isEs ? 'Proceso de Evaluación Estratégica' : 'Strategic Assessment Process'}
          </h2>
          <p className="font-tech-label text-[#b9caca] mt-3 tracking-widest uppercase text-xs md:text-sm">
            {isEs ? 'METODOLOGÍA ÁGIL PARA TELECOM' : 'AGILE TELECOM METHODOLOGY'}
          </p>
        </div>

        {/* Desktop Process Stepper */}
        <div className="relative max-w-4xl mx-auto hidden md:block">
          {/* Connecting line */}
          <div className="absolute top-7 left-12 right-12 h-[1px] bg-white/15 -z-0"></div>

          <div className="grid grid-cols-4 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-[#0a0e17] border transition-all duration-300 flex items-center justify-center ${
                      isSelected
                        ? 'border-[#00f5ff] text-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.35)] scale-110'
                        : 'border-white/20 text-[#b9caca] group-hover:border-white/50'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px]">{step.icon}</span>
                  </div>
                  <span
                    className={`font-tech-label mt-4 text-xs tracking-wider uppercase transition-colors ${
                      isSelected ? 'text-[#00f5ff] font-bold' : 'text-[#dfe2f0]'
                    }`}
                  >
                    {step.name}
                  </span>
                  <p className="text-xs text-[#849495] mt-2 max-w-[180px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Process Stepper */}
        <div className="md:hidden space-y-4 px-2">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#171c25] border border-white/10 rounded-xl p-4 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#0a0e17] border border-[#00f5ff] text-[#00f5ff] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
              </div>
              <div>
                <div className="font-tech-label text-white text-xs uppercase tracking-wider">
                  {step.name}
                </div>
                <p className="text-xs text-[#b9caca] mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
