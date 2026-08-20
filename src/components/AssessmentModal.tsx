import React, { useState } from 'react';
import { AssessmentFormState, AssessmentResult } from '../types';
import { calculateMaturityAssessment } from '../data/assessmentData';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAssessmentCompleted: (result: AssessmentResult) => void;
  lang: 'es' | 'en';
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  onAssessmentCompleted,
  lang,
}) => {
  const isEs = lang === 'es';

  const [form, setForm] = useState<AssessmentFormState>({
    companyName: '',
    contactName: '',
    email: '',
    role: 'CTO / VP de Redes',
    networkType: 'mobile_5g',
    currentMaturity: 'experimenting',
    primaryChallenge: 'alarm_noise',
    dataReadiness: 3,
    strategyReadiness: 4,
    governanceReadiness: 4,
    infrastructureReadiness: 4,
  });

  const [step, setStep] = useState<number>(1);
  const [generatedResult, setGeneratedResult] = useState<AssessmentResult | null>(null);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      const result = calculateMaturityAssessment(form);
      setGeneratedResult(result);
      onAssessmentCompleted(result);
      setStep(4);
    }
  };

  const handleApply = () => {
    if (generatedResult) {
      onAssessmentCompleted(generatedResult);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#121520] border border-white/20 rounded-2xl shadow-2xl p-6 md:p-8 my-8 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#b9caca] hover:text-white rounded-full hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f5ff] animate-pulse"></span>
            <span className="font-tech-label text-[#00f5ff] text-xs uppercase tracking-widest">
              {isEs ? 'EVALUACIÓN ESTRATÉGICA DE IA' : 'STRATEGIC AI ASSESSMENT'}
            </span>
          </div>
          <h2 className="font-headline-lg text-white">
            {step === 4
              ? isEs
                ? 'Resultados de Preparación para su Red'
                : 'AI Readiness Results for Your Network'
              : isEs
              ? 'Diagnóstico de Madurez de IA en Telecomunicaciones'
              : 'Telecom AI Maturity Diagnostic'}
          </h2>
          <p className="font-body-sm text-[#b9caca] text-xs md:text-sm mt-1">
            {step === 4
              ? isEs
                ? 'Análisis sintético generado para su perfil operativo y arquitectura de red.'
                : 'Synthetic analysis generated for your operational network profile.'
              : isEs
              ? 'Complete este breve formulario para calcular su puntuación de madurez, ahorro en OPEX y hoja de ruta.'
              : 'Complete this brief form to calculate your readiness score, OPEX savings, and custom roadmap.'}
          </p>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center font-tech-score text-xs ${
                  step >= 1 ? 'bg-[#00f5ff] text-[#003739]' : 'bg-[#262a34] text-white'
                }`}
              >
                1
              </span>
              <span className="text-xs font-tech-label text-[#dfe2f0]">
                {isEs ? 'Perfil & Red' : 'Profile & Network'}
              </span>
            </div>
            <div className="w-10 h-[1px] bg-white/20"></div>
            <div className="flex items-center gap-3">
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center font-tech-score text-xs ${
                  step >= 2 ? 'bg-[#00f5ff] text-[#003739]' : 'bg-[#262a34] text-white'
                }`}
              >
                2
              </span>
              <span className="text-xs font-tech-label text-[#dfe2f0]">
                {isEs ? 'Desafíos Operativos' : 'Operational Challenges'}
              </span>
            </div>
            <div className="w-10 h-[1px] bg-white/20"></div>
            <div className="flex items-center gap-3">
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center font-tech-score text-xs ${
                  step >= 3 ? 'bg-[#00f5ff] text-[#003739]' : 'bg-[#262a34] text-white'
                }`}
              >
                3
              </span>
              <span className="text-xs font-tech-label text-[#dfe2f0]">
                {isEs ? 'Madurez por Dominio' : 'Domain Maturity'}
              </span>
            </div>
          </div>
        )}

        {/* Step 1: Profile & Network */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-tech-label text-[#b9caca] uppercase mb-1">
                  {isEs ? 'Empresa / Operador' : 'Company / Operator'}
                </label>
                <input
                  type="text"
                  placeholder="Ej. Telco Iberoamérica"
                  value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  className="w-full bg-[#1b2029] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                />
              </div>

              <div>
                <label className="block text-xs font-tech-label text-[#b9caca] uppercase mb-1">
                  {isEs ? 'Cargo / Rol' : 'Role / Title'}
                </label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full bg-[#1b2029] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                >
                  <option value="CTO / VP de Redes">CTO / VP de Redes &amp; Infraestructura</option>
                  <option value="COO / Director de Operaciones NOC">
                    COO / Director de Operaciones NOC
                  </option>
                  <option value="Arquitecto Principal de IA & Telecom">
                    Arquitecto Principal de IA &amp; Telecom
                  </option>
                  <option value="Director de Innovación Digital">
                    Director de Innovación Digital
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-tech-label text-[#b9caca] uppercase mb-1">
                {isEs ? 'Topología Principal de Infraestructura' : 'Main Infrastructure Topology'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'mobile_5g', label: '5G Mobile & RAN / Core' },
                  { id: 'fiber_fttx', label: 'FTTx / Red Óptica' },
                  { id: 'cable_hybrid', label: 'Cable HFC / DOCSIS' },
                  { id: 'cloud_datacenter', label: 'Telco Cloud & Edge DCs' },
                  { id: 'enterprise_iot', label: 'IoT & Redes Privadas' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setForm({
                        ...form,
                        networkType: item.id as AssessmentFormState['networkType'],
                      })
                    }
                    className={`p-3 rounded-lg border text-xs font-tech-label text-left transition-all cursor-pointer ${
                      form.networkType === item.id
                        ? 'border-[#00f5ff] bg-[#00f5ff]/15 text-[#00f5ff]'
                        : 'border-white/10 bg-[#1b2029] text-[#dfe2f0] hover:border-white/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleNext}
                className="bg-[#00f5ff] text-[#003739] font-tech-label text-xs uppercase font-bold py-3 px-6 rounded-full hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all cursor-pointer"
              >
                {isEs ? 'Siguiente: Desafíos' : 'Next: Challenges'} &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Operational Challenges & Posture */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-tech-label text-[#b9caca] uppercase mb-2">
                {isEs ? 'Principal Desafío Operativo' : 'Primary Operational Bottleneck'}
              </label>
              <div className="space-y-2">
                {[
                  {
                    id: 'alarm_noise',
                    title: 'Ruido Excesivo de Alarmas en NOC',
                    desc: 'Cientos de alertas redundantes por hora causadas por fallas en cascada.',
                  },
                  {
                    id: 'mttr_reduction',
                    title: 'Tiempos Altos de Resolución (MTTR)',
                    desc: 'Dificultad para aislar causa raíz en incidentes cross-domain.',
                  },
                  {
                    id: 'legacy_oss',
                    title: 'Silos de Datos & Protocolos Propietarios',
                    desc: 'Sistemas heredados (SNMP, CORBA) sin pipelines streaming unificados.',
                  },
                  {
                    id: 'energy_cost',
                    title: 'Eficiencia Energética & Costos OPEX',
                    desc: 'Consumo continuo en celdas y data centers sin modulación dinámica.',
                  },
                  {
                    id: 'security_compliance',
                    title: 'Gobernanza de Datos CPNI / Zero-Trust',
                    desc: 'Riesgos de compliance al exponer telemetría de suscriptores.',
                  },
                ].map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() =>
                      setForm({
                        ...form,
                        primaryChallenge: opt.id as AssessmentFormState['primaryChallenge'],
                      })
                    }
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      form.primaryChallenge === opt.id
                        ? 'border-[#00f5ff] bg-[#00f5ff]/10 text-white'
                        : 'border-white/10 bg-[#1b2029] text-[#b9caca] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm text-white">{opt.title}</span>
                      <span
                        className={`material-symbols-outlined text-[18px] ${
                          form.primaryChallenge === opt.id ? 'text-[#00f5ff]' : 'text-white/20'
                        }`}
                      >
                        {form.primaryChallenge === opt.id
                          ? 'radio_button_checked'
                          : 'radio_button_unchecked'}
                      </span>
                    </div>
                    <p className="text-xs text-[#849495] mt-1">{opt.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-tech-label text-[#b9caca] hover:text-white px-4 py-2"
              >
                &larr; {isEs ? 'Atrás' : 'Back'}
              </button>
              <button
                onClick={handleNext}
                className="bg-[#00f5ff] text-[#003739] font-tech-label text-xs uppercase font-bold py-3 px-6 rounded-full hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all cursor-pointer"
              >
                {isEs ? 'Siguiente: Madurez' : 'Next: Domain Maturity'} &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Domain Maturity Sliders */}
        {step === 3 && (
          <div className="space-y-5">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-tech-label text-[#b9caca] mb-1">
                  <span>{isEs ? 'Calidad y Accesibilidad de Datos' : 'Data Quality & Ingestion'}</span>
                  <span className="text-[#00f5ff]">{form.dataReadiness} / 5</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={form.dataReadiness}
                  onChange={(e) => setForm({ ...form, dataReadiness: Number(e.target.value) })}
                  className="w-full accent-[#00f5ff] bg-[#262a34] h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-tech-label text-[#b9caca] mb-1">
                  <span>
                    {isEs ? 'Alineación Estratégica & Sponsor Ejecutivo' : 'Executive Sponsor Alignment'}
                  </span>
                  <span className="text-[#00f5ff]">{form.strategyReadiness} / 5</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={form.strategyReadiness}
                  onChange={(e) =>
                    setForm({ ...form, strategyReadiness: Number(e.target.value) })
                  }
                  className="w-full accent-[#00f5ff] bg-[#262a34] h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-tech-label text-[#b9caca] mb-1">
                  <span>{isEs ? 'Gobernanza y Seguridad Zero-Trust' : 'Zero-Trust Governance'}</span>
                  <span className="text-[#e9c083]">{form.governanceReadiness} / 5</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={form.governanceReadiness}
                  onChange={(e) =>
                    setForm({ ...form, governanceReadiness: Number(e.target.value) })
                  }
                  className="w-full accent-[#e9c083] bg-[#262a34] h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-tech-label text-[#b9caca] mb-1">
                  <span>
                    {isEs ? 'Infraestructura & Capacidad de Cómputo Edge' : 'Edge Computing Infrastructure'}
                  </span>
                  <span className="text-[#90cdff]">{form.infrastructureReadiness} / 5</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={form.infrastructureReadiness}
                  onChange={(e) =>
                    setForm({ ...form, infrastructureReadiness: Number(e.target.value) })
                  }
                  className="w-full accent-[#90cdff] bg-[#262a34] h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="text-xs font-tech-label text-[#b9caca] hover:text-white px-4 py-2"
              >
                &larr; {isEs ? 'Atrás' : 'Back'}
              </button>
              <button
                onClick={handleNext}
                className="bg-[#00f5ff] text-[#003739] font-tech-label text-xs uppercase font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all cursor-pointer"
              >
                {isEs ? 'Generar Puntuación de Madurez' : 'Generate Maturity Score'} &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Results Display */}
        {step === 4 && generatedResult && (
          <div className="space-y-6">
            {/* Scorecard Hero */}
            <div className="bg-[#171c25] border border-white/15 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="font-tech-label text-[#e9c083] text-xs uppercase tracking-wider mb-1">
                  {isEs ? 'ÍNDICE DE MADUREZ CALCULADO' : 'CALCULATED AI MATURITY INDEX'}
                </div>
                <div className="font-headline-lg text-white font-bold">{generatedResult.tierName}</div>
                <p className="text-xs text-[#b9caca] mt-1">
                  {isEs
                    ? 'Evaluado para infraestructura telecomunicaciones de alta disponibilidad.'
                    : 'Evaluated for high-availability telecom infrastructure.'}
                </p>
              </div>

              <div className="flex items-baseline gap-2 bg-[#0a0e17] px-6 py-4 rounded-xl border border-[#00f5ff]/30">
                <span className="font-display-lg text-5xl text-[#00dce5] leading-none">
                  {generatedResult.overallScore}
                </span>
                <span className="font-tech-label text-[#b9caca] text-lg">/100</span>
              </div>
            </div>

            {/* Impact Metric Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#1b2029] p-3 rounded-lg border border-white/10 text-center">
                <span className="text-[11px] font-tech-label text-[#849495] block">
                  {isEs ? 'Estrategia' : 'Strategy'}
                </span>
                <span className="font-tech-score text-[#00f5ff] text-lg font-bold">
                  {generatedResult.strategyScore.toFixed(1)} / 5.0
                </span>
              </div>
              <div className="bg-[#1b2029] p-3 rounded-lg border border-white/10 text-center">
                <span className="text-[11px] font-tech-label text-[#849495] block">
                  {isEs ? 'Datos' : 'Data'}
                </span>
                <span className="font-tech-score text-[#e9c083] text-lg font-bold">
                  {generatedResult.dataScore.toFixed(1)} / 5.0
                </span>
              </div>
              <div className="bg-[#1b2029] p-3 rounded-lg border border-white/10 text-center">
                <span className="text-[11px] font-tech-label text-[#849495] block">
                  {isEs ? 'Ahorro OPEX' : 'OPEX Reduction'}
                </span>
                <span className="font-tech-score text-[#00f5ff] text-lg font-bold">
                  {generatedResult.estimatedOpexReduction}
                </span>
              </div>
              <div className="bg-[#1b2029] p-3 rounded-lg border border-white/10 text-center">
                <span className="text-[11px] font-tech-label text-[#849495] block">
                  {isEs ? 'Mejora MTTR' : 'MTTR Gain'}
                </span>
                <span className="font-tech-score text-[#90cdff] text-lg font-bold">
                  {generatedResult.estimatedMttrImprovement}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-tech-label text-[#b9caca] hover:text-white px-4 py-2 text-center"
              >
                {isEs ? 'Recalcular Parámetros' : 'Recalculate'}
              </button>
              <button
                onClick={handleApply}
                className="bg-[#00f5ff] text-[#003739] font-tech-label text-xs uppercase font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all cursor-pointer"
              >
                {isEs ? 'Aplicar a Tableros' : 'Apply to Dashboards'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
