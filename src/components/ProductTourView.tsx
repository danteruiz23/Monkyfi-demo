import React, { useState } from 'react';
import { AssessmentResult } from '../types';

interface ProductTourViewProps {
  assessment: AssessmentResult;
  onRequestAssessment: () => void;
  onOpenMetricsModal: () => void;
  onOpenSamplePlan: () => void;
  lang: 'es' | 'en';
}

export const ProductTourView: React.FC<ProductTourViewProps> = ({
  assessment,
  onRequestAssessment,
  onOpenMetricsModal,
  onOpenSamplePlan,
  lang,
}) => {
  const [selectedImageModal, setSelectedImageModal] = useState<string | null>(null);

  const isEs = lang === 'es';

  const discoverImg =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDXY2h5V6sssKCDbQ2l7_i0Z0O41UiiX0JEcfCho8Ire6CeZI05A2lWmiSO0Th8XcsobZWE87pFqpxZnU2WeaG6rmXtmOmUttAJkb-28S0qXrf9IorgF9E_H17Nmb_2CG_30GC9w_luncJ4oio3ZXFPLep2ld4b1qlwztOONR9dlrkapdYh5BDLT2vjGAG4wIwSsSzCsqhWpEToDKnQCHnhszrZicfqCKdQrR3Bf8lsBPnsQonv7Pxs';
  const assessImg =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB-LUIyweKUUwOZk-ITNyKWCQrsusBcIN8dkQVHMuBEfWOFxaFZb_IzyqGED8P5ZyrBUfvsdVSCosiSDsj61ud9q5vE_XRRtc1pK-SAOF9xiHbtLWH22GsAMUXmQwIx1R5bc8zOkRMVmoKU_6GgPJhMvgG1NfvKumOPdrW43MGH-f0Q-lkZxp6IIvySp8l1fwk7W7Lq4OuTvrF6gNBsw-ERyufG6BFA1uJtQN0HbHCKCvRXQZ5tuyLg';

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-32 relative px-4 md:px-0">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(0,245,255,0.15)] to-transparent opacity-25 blur-3xl pointer-events-none"></div>

        <div className="font-tech-label text-[#e9c083] mb-4 tracking-widest uppercase text-xs">
          {isEs ? 'IA CON RAÍCES EN TELECOMUNICACIONES' : 'TELECOM-ROOTED AI PLATFORM'}
        </div>

        <h1 className="font-display-lg text-white mb-6 max-w-4xl tracking-tight leading-tight">
          {isEs
            ? 'Experimenta el Flujo de Evaluación de Monkyfi.'
            : 'Experience the Monkyfi Assessment Flow.'}
        </h1>

        <p className="font-body-lg text-[#b9caca] max-w-2xl mb-10 text-base md:text-lg leading-relaxed">
          {isEs
            ? 'Un recorrido inmersivo por nuestra plataforma de evaluación guiada por humanos. Descubre cómo transformamos la infraestructura heredada en operaciones inteligentes.'
            : 'An immersive walkthrough of our human-guided assessment platform. See how legacy telecom infrastructure transforms into autonomous intelligent operations.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={onRequestAssessment}
            className="bg-[#00f5ff] text-[#003739] font-body-lg font-semibold py-3.5 px-8 rounded-full shadow-[0_0_15px_rgba(0,245,255,0.25)] hover:shadow-[0_0_25px_rgba(0,245,255,0.45)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            {isEs ? 'Ver Demo Completa' : 'Watch Full Demo'}
          </button>
        </div>
      </section>

      {/* Product Tour Section 1: Discover */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-[#171c25]/50 border-y border-white/10 rounded-2xl mb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 z-10">
            <div className="w-12 h-12 rounded-full bg-[#1b2029] border border-[#00f5ff] flex items-center justify-center text-[#00f5ff] shadow-[0_0_10px_rgba(0,245,255,0.2)] mb-4">
              <span className="material-symbols-outlined text-[22px]">search</span>
            </div>

            <div className="font-tech-label text-[#00dce5] tracking-widest uppercase text-xs">
              {isEs ? 'PASO 01' : 'STEP 01'}
            </div>

            <h2 className="font-headline-lg text-white font-bold">
              {isEs ? 'Descubrir (Ingreso)' : 'Discover (Ingestion)'}
            </h2>

            <p className="font-body-lg text-[#b9caca] max-w-xl text-sm md:text-base leading-relaxed">
              {isEs
                ? 'Mapea la topología de tu red e identifica los cuellos de botella operativos iniciales mediante nuestro formulario de ingesta seguro, diseñado específicamente para restricciones de telecomunicaciones y protección de CPNI.'
                : 'Map your network topology and identify operational friction points using our secure intake protocol, built specifically for telecom constraints and CPNI data protection.'}
            </p>

            <ul className="space-y-3 font-body-sm text-[#b9caca] mt-6 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#00dce5] text-[18px] mt-0.5">
                  check_circle
                </span>
                <span>{isEs ? 'Recopilación de datos sin fricciones' : 'Frictionless data harvesting'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#00dce5] text-[18px] mt-0.5">
                  check_circle
                </span>
                <span>{isEs ? 'Identificación de sistemas heredados' : 'Legacy protocol identification'}</span>
              </li>
            </ul>
          </div>

          <div
            onClick={() => setSelectedImageModal(discoverImg)}
            className="flex-1 relative w-full aspect-video rounded-xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#00f5ff]/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none flex items-center justify-center">
              <span className="px-3 py-1.5 bg-[#0a0e17]/80 rounded-full font-tech-label text-xs text-[#00f5ff] border border-[#00f5ff]/40">
                {isEs ? 'Click para Ampliar' : 'Click to Enlarge'}
              </span>
            </div>
            <img
              alt="Interfaz de Evaluación - Descubrir"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-left-top scale-100 group-hover:scale-105 transition-transform duration-700"
              src={discoverImg}
            />
          </div>
        </div>
      </section>

      {/* Product Tour Section 2: Assess */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-[#0a0e17] rounded-2xl mb-24 border border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-6 z-10">
            <div className="w-12 h-12 rounded-full bg-[#1b2029] border border-[#e9c083] flex items-center justify-center text-[#e9c083] shadow-[0_0_10px_rgba(233,192,131,0.2)] mb-4">
              <span
                className="material-symbols-outlined text-[22px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                analytics
              </span>
            </div>

            <div className="font-tech-label text-[#e9c083] tracking-widest uppercase text-xs">
              {isEs ? 'PASO 02' : 'STEP 02'}
            </div>

            <h2 className="font-headline-lg text-white font-bold">
              {isEs ? 'Evaluar (Puntuación)' : 'Assess (Scoring)'}
            </h2>

            <p className="font-body-lg text-[#b9caca] max-w-xl text-sm md:text-base leading-relaxed">
              {isEs
                ? 'Nuestro motor de IA analiza tus datos de entrada para generar un Cuadro de Mando de Preparación exhaustivo. Evalúa la viabilidad en estrategia, arquitectura de datos, madurez de procesos y gobernanza de seguridad.'
                : 'Our AI engine processes intake telemetry to generate an exhaustive Readiness Scorecard across strategic viability, data architecture, process maturity, and zero-trust security.'}
            </p>

            <button
              onClick={onOpenMetricsModal}
              className="mt-6 border border-[#e9c083] text-[#e9c083] font-tech-label text-xs py-2.5 px-6 rounded hover:bg-[#e9c083]/10 transition-colors flex items-center gap-2 cursor-pointer shadow-[0_0_10px_rgba(233,192,131,0.1)]"
            >
              <span>{isEs ? 'Explorar Métricas' : 'Explore Metrics'}</span>
              <span className="material-symbols-outlined text-[16px]">bar_chart</span>
            </button>
          </div>

          <div
            onClick={() => setSelectedImageModal(assessImg)}
            className="flex-1 relative w-full aspect-video rounded-xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#e9c083]/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none flex items-center justify-center">
              <span className="px-3 py-1.5 bg-[#0a0e17]/80 rounded-full font-tech-label text-xs text-[#e9c083] border border-[#e9c083]/40">
                {isEs ? 'Click para Ampliar' : 'Click to Enlarge'}
              </span>
            </div>
            <img
              alt="Cuadro de Mando de Preparación de IA"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
              src={assessImg}
            />
          </div>
        </div>
      </section>

      {/* Product Tour Section 3: Prioritize & Pilot */}
      <section className="py-20 relative overflow-hidden bg-[#171c25]/40 border-t border-white/10 rounded-2xl mb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,245,255,0.06)_0%,_transparent_60%)] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center mb-16">
          <h2 className="font-headline-lg text-white mb-3">
            {isEs ? 'Siguientes Fases' : 'Next Phases'}
          </h2>
          <p className="font-body-lg text-[#b9caca] max-w-2xl mx-auto text-sm md:text-base">
            {isEs
              ? 'De la evaluación teórica a la implementación táctica en el NOC.'
              : 'From theoretical strategy to tactical deployment in the live telecom NOC.'}
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Prioritize */}
          <div className="bg-[#1b2029] border border-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-[#90cdff]/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#262a34] border border-[#90cdff] flex items-center justify-center text-[#90cdff] mb-6">
              <span className="material-symbols-outlined text-[22px]">priority_high</span>
            </div>

            <h3 className="font-headline-lg text-white mb-4 text-2xl font-semibold">
              {isEs ? 'Priorizar Oportunidades' : 'Prioritize Opportunities'}
            </h3>

            <p className="font-body-sm text-[#b9caca] mb-6 text-xs md:text-sm leading-relaxed">
              {isEs
                ? 'Aislar los casos de uso de IA de mayor impacto, como la automatización del triaje de alarmas y el mantenimiento predictivo, equilibrando el valor comercial con la complejidad técnica.'
                : 'Isolate high-yield AI use cases such as alarm triage automation and predictive maintenance, balancing commercial ROI with technical feasibility.'}
            </p>

            <div className="space-y-2 mt-auto">
              <div className="flex justify-between text-xs font-tech-label text-[#849495] mb-1">
                <span>{isEs ? 'Impacto Operativo' : 'Operational Impact'}</span>
                <span className="text-[#90cdff]">88%</span>
              </div>
              <div className="h-2 w-full bg-[#31353f] rounded-full overflow-hidden">
                <div className="h-full bg-[#90cdff] w-[88%] rounded-full"></div>
              </div>

              <div className="flex justify-between text-xs font-tech-label text-[#849495] mb-1 pt-2">
                <span>{isEs ? 'Facilidad de Integración' : 'Integration Feasibility'}</span>
                <span className="text-[#00f5ff]">74%</span>
              </div>
              <div className="h-2 w-full bg-[#31353f] rounded-full overflow-hidden">
                <div className="h-full bg-[#00f5ff]/70 w-[74%] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Pilot */}
          <div className="bg-[#1b2029] border border-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-[#00f5ff]/50 transition-colors border-t-2 border-t-[#00f5ff] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f5ff]/10 rounded-bl-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="w-12 h-12 rounded-full bg-[#262a34] border border-[#00f5ff] flex items-center justify-center text-[#00f5ff] mb-6 z-10 relative">
                <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
              </div>

              <h3 className="font-headline-lg text-white mb-4 text-2xl font-semibold z-10 relative">
                {isEs ? 'Ejecutar Piloto' : 'Deploy Pilot'}
              </h3>

              <p className="font-body-sm text-[#b9caca] mb-6 text-xs md:text-sm leading-relaxed z-10 relative">
                {isEs
                  ? 'Despliega integraciones enfocadas de Monkyfi Sentinel en entornos controlados para probar la auto-resolución de tickets de Nivel 1 antes de escalar en toda la red.'
                  : 'Roll out focused Monkyfi Sentinel integrations in sandboxed environments to validate Level-1 ticket auto-resolution prior to network-wide scaling.'}
              </p>
            </div>

            <button
              onClick={onOpenSamplePlan}
              className="bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/30 font-tech-label text-xs py-3 px-4 rounded w-full hover:bg-[#00f5ff]/20 transition-colors z-10 relative cursor-pointer"
            >
              {isEs ? 'Ver Plan de Compromiso' : 'View Engagement Plan'}
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Enlarge Image */}
      {selectedImageModal && (
        <div
          onClick={() => setSelectedImageModal(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl w-full bg-[#121520] border border-white/20 rounded-2xl overflow-hidden p-2 shadow-2xl">
            <button
              onClick={() => setSelectedImageModal(null)}
              className="absolute top-4 right-4 z-20 bg-black/60 text-white rounded-full p-2 hover:bg-[#00f5ff] hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <img
              src={selectedImageModal}
              alt="Screenshot Preview"
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-xl object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
