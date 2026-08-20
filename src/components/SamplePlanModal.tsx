import React from 'react';

interface SamplePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'es' | 'en';
}

export const SamplePlanModal: React.FC<SamplePlanModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;
  const isEs = lang === 'es';

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
            {isEs ? 'ARQUITECTURA & PLAN DE COMPROMISO' : 'ARCHITECTURE & ENGAGEMENT PLAN'}
          </div>
          <h2 className="font-headline-lg text-white font-bold">
            {isEs
              ? 'Plan de Implementación: Monkyfi Sentinel & Atlas'
              : 'Implementation Plan: Monkyfi Sentinel & Atlas'}
          </h2>
          <p className="font-body-sm text-[#b9caca] text-xs md:text-sm mt-1">
            {isEs
              ? 'Metodología de 12 semanas para despliegue de piloto sin disrupción de tráfico de red.'
              : 'A 12-week deployment methodology designed for zero traffic disruption in live telecom networks.'}
          </p>
        </div>

        {/* 12-Week Sprint Schedule */}
        <div className="space-y-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#171c25] p-5 rounded-xl border border-white/10 border-t-2 border-t-[#00f5ff]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-tech-label text-xs text-[#00f5ff]">SEMANAS 1 - 4</span>
                <span className="material-symbols-outlined text-[#00f5ff] text-[18px]">hub</span>
              </div>
              <h4 className="font-medium text-white text-base mb-2">
                {isEs ? 'Fase 1: Ingesta Zero-Trust' : 'Phase 1: Zero-Trust Ingestion'}
              </h4>
              <p className="text-xs text-[#b9caca] leading-relaxed">
                {isEs
                  ? 'Conexión de conectores pasivos gRPC/Kafka para capturar streams de alarmas en NOC sin impactar OSS primario. Encriptación y ofuscación de IPs y CPNI.'
                  : 'Passive gRPC/Kafka connector deployment to ingest NOC alarm streams without OSS overhead. Anonymization of subscriber IP and CPNI data.'}
              </p>
            </div>

            <div className="bg-[#171c25] p-5 rounded-xl border border-white/10 border-t-2 border-t-[#e9c083]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-tech-label text-xs text-[#e9c083]">SEMANAS 5 - 8</span>
                <span className="material-symbols-outlined text-[#e9c083] text-[18px]">psychology</span>
              </div>
              <h4 className="font-medium text-white text-base mb-2">
                {isEs ? 'Fase 2: Correlación Sentinel' : 'Phase 2: Sentinel Correlation'}
              </h4>
              <p className="text-xs text-[#b9caca] leading-relaxed">
                {isEs
                  ? 'Calibración de modelos ML de correlación temporal y espacial sobre topología de red. Detección automática del 80% de alarmas derivadas.'
                  : 'ML model calibration across spatial and topological graphs. Automated identification of 80% of secondary and ghost alarm storms.'}
              </p>
            </div>

            <div className="bg-[#171c25] p-5 rounded-xl border border-white/10 border-t-2 border-t-[#90cdff]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-tech-label text-xs text-[#90cdff]">SEMANAS 9 - 12</span>
                <span className="material-symbols-outlined text-[#90cdff] text-[18px]">verified</span>
              </div>
              <h4 className="font-medium text-white text-base mb-2">
                {isEs ? 'Fase 3: Auto-Resolución L1' : 'Phase 3: L1 Auto-Resolution'}
              </h4>
              <p className="text-xs text-[#b9caca] leading-relaxed">
                {isEs
                  ? 'Ejecución asistida de playbooks de recuperación para tickets de nivel 1 con confirmación humana en el bucle (Human-in-the-Loop).'
                  : 'Assisted recovery playbook execution for L1 ticket automation with strict human-in-the-loop validation before scaling.'}
              </p>
            </div>
          </div>

          {/* Architecture Stack Diagram Representation */}
          <div className="bg-[#0a0e17] p-5 rounded-xl border border-white/10">
            <h4 className="text-xs font-tech-label text-[#00f5ff] uppercase tracking-wider mb-3">
              {isEs ? 'Arquitectura de Integración Segura' : 'Secure Integration Architecture'}
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center text-xs font-tech-label">
              <div className="p-3 bg-[#1b2029] rounded border border-white/10 w-full">
                <span className="text-[#dfe2f0] block font-bold">NOC &amp; Redes Telecom</span>
                <span className="text-[#849495] text-[10px]">5G RAN, Fiber, Core OSS</span>
              </div>
              <span className="text-[#00f5ff] font-bold">&rarr;</span>
              <div className="p-3 bg-[#1b2029] rounded border border-[#00f5ff]/40 text-[#00f5ff] w-full">
                <span className="block font-bold">Monkyfi Secure Gateway</span>
                <span className="text-[#849495] text-[10px]">Zero-Trust / Anonymizer</span>
              </div>
              <span className="text-[#00f5ff] font-bold">&rarr;</span>
              <div className="p-3 bg-[#1b2029] rounded border border-[#e9c083]/40 text-[#e9c083] w-full">
                <span className="block font-bold">Monkyfi Sentinel Core</span>
                <span className="text-[#849495] text-[10px]">Correlation &amp; AI Engine</span>
              </div>
              <span className="text-[#00f5ff] font-bold">&rarr;</span>
              <div className="p-3 bg-[#1b2029] rounded border border-white/10 w-full">
                <span className="text-[#dfe2f0] block font-bold">ITSM / ServiceNow</span>
                <span className="text-[#849495] text-[10px]">Auto-Remediation &amp; NOC UI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#00f5ff] text-[#003739] font-tech-label text-xs uppercase font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(0,245,255,0.3)] hover:shadow-[0_0_25px_rgba(0,245,255,0.5)] transition-all cursor-pointer"
          >
            {isEs ? 'Entendido' : 'Got it'}
          </button>
        </div>
      </div>
    </div>
  );
};
