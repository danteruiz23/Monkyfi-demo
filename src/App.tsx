import React, { useState } from 'react';
import { ViewMode, Language, AssessmentResult } from './types';
import { defaultAssessment, translations } from './data/assessmentData';
import { MonkyfiLogo } from './components/MonkyfiLogo';
import { ExecutiveView } from './components/ExecutiveView';
import { OverviewView } from './components/OverviewView';
import { ProductTourView } from './components/ProductTourView';
import { AssessmentModal } from './components/AssessmentModal';
import { MetricsModal } from './components/MetricsModal';
import { SamplePlanModal } from './components/SamplePlanModal';
import { ChatbotDrawer } from './components/ChatbotDrawer';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('executive');
  const [lang, setLang] = useState<Language>('es');
  const [assessment, setAssessment] = useState<AssessmentResult>(defaultAssessment);

  // Modals state
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const [isMetricsModalOpen, setIsMetricsModalOpen] = useState(false);
  const [isSamplePlanOpen, setIsSamplePlanOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const t = translations[lang];
  const isEs = lang === 'es';

  return (
    <div className="min-h-screen bg-[#0A0C14] text-[#dfe2f0] flex flex-col font-sans selection:bg-[#00f5ff]/30 selection:text-white">
      {/* Top Banner / Multi-screen Switcher Toolbar */}
      <div className="bg-[#0f1422] border-b border-white/10 px-4 py-2 text-xs font-tech-label flex flex-wrap items-center justify-between gap-3 sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse"></span>
          <span className="text-[#849495] uppercase tracking-wider hidden sm:inline">
            {t.nav.switchView}:
          </span>
          <div className="flex bg-[#171c25] p-0.5 rounded-lg border border-white/10">
            <button
              onClick={() => setCurrentView('executive')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                currentView === 'executive'
                  ? 'bg-[#00f5ff] text-[#003739] font-bold shadow-[0_0_10px_rgba(0,245,255,0.3)]'
                  : 'text-[#b9caca] hover:text-white'
              }`}
            >
              {isEs ? 'Estrategia (Ejecutivo)' : 'Strategy (Executive)'}
            </button>
            <button
              onClick={() => setCurrentView('overview')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                currentView === 'overview'
                  ? 'bg-[#00f5ff] text-[#003739] font-bold shadow-[0_0_10px_rgba(0,245,255,0.3)]'
                  : 'text-[#b9caca] hover:text-white'
              }`}
            >
              {isEs ? 'Conectar (Comercial)' : 'Connect (Commercial)'}
            </button>
            <button
              onClick={() => setCurrentView('tour')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                currentView === 'tour'
                  ? 'bg-[#00f5ff] text-[#003739] font-bold shadow-[0_0_10px_rgba(0,245,255,0.3)]'
                  : 'text-[#b9caca] hover:text-white'
              }`}
            >
              {isEs ? 'Tour Plataforma (Atlas/Sentinel)' : 'Platform Tour (Atlas/Sentinel)'}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          {/* Quick interactive test button */}
          <button
            onClick={() => setIsAssessmentModalOpen(true)}
            className="flex items-center gap-1.5 text-[#e9c083] hover:text-[#ffdeae] font-tech-label text-xs transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">tune</span>
            <span className="hidden sm:inline">
              {isEs ? 'Diagnóstico Personalizado' : 'Custom Diagnostic'}
            </span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center gap-1 border-l border-white/15 pl-3">
            <button
              onClick={() => setLang('es')}
              className={`px-1.5 py-0.5 rounded text-[11px] ${
                lang === 'es' ? 'text-[#00f5ff] font-bold' : 'text-[#849495] hover:text-white'
              }`}
            >
              ES
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 rounded text-[11px] ${
                lang === 'en' ? 'text-[#00f5ff] font-bold' : 'text-[#849495] hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="border-b border-white/10 bg-[#0A0C14]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => setCurrentView('executive')}
            className="cursor-pointer hover:opacity-90 transition-opacity"
          >
            <MonkyfiLogo
              variant="full"
              size="md"
              subtitle={
                currentView === 'executive'
                  ? 'Executive'
                  : currentView === 'overview'
                  ? 'Connect'
                  : 'Platform'
              }
            />
          </div>

          {/* Nav Links based on active view context */}
          <nav className="hidden lg:flex items-center gap-8 font-tech-label text-xs tracking-wider uppercase text-[#b9caca]">
            {currentView === 'executive' ? (
              <>
                <button
                  onClick={() => setCurrentView('executive')}
                  className="text-white hover:text-[#00f5ff] transition-colors"
                >
                  {t.nav.strategy}
                </button>
                <button
                  onClick={() => setIsMetricsModalOpen(true)}
                  className="hover:text-[#00f5ff] transition-colors"
                >
                  {t.nav.security}
                </button>
                <button
                  onClick={() => setCurrentView('tour')}
                  className="hover:text-[#00f5ff] transition-colors"
                >
                  {t.nav.platform}
                </button>
                <button
                  onClick={() => setIsSamplePlanOpen(true)}
                  className="hover:text-[#00f5ff] transition-colors"
                >
                  {t.nav.review}
                </button>
              </>
            ) : currentView === 'overview' ? (
              <>
                <button
                  onClick={() => setCurrentView('overview')}
                  className="text-white hover:text-[#00f5ff] transition-colors"
                >
                  {t.nav.connect}
                </button>
                <button
                  onClick={() => setCurrentView('tour')}
                  className="hover:text-[#00f5ff] transition-colors"
                >
                  {t.nav.atlas}
                </button>
                <button
                  onClick={() => setIsSamplePlanOpen(true)}
                  className="hover:text-[#00f5ff] transition-colors"
                >
                  {t.nav.sentinel}
                </button>
                <button
                  onClick={() => setIsMetricsModalOpen(true)}
                  className="hover:text-[#00f5ff] transition-colors"
                >
                  {t.nav.review}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setCurrentView('tour')}
                  className="text-white hover:text-[#00f5ff] transition-colors"
                >
                  Descubrir
                </button>
                <button
                  onClick={() => setIsMetricsModalOpen(true)}
                  className="hover:text-[#00f5ff] transition-colors"
                >
                  Evaluar
                </button>
                <button
                  onClick={() => setIsSamplePlanOpen(true)}
                  className="hover:text-[#00f5ff] transition-colors"
                >
                  Priorizar
                </button>
                <button
                  onClick={() => setIsSamplePlanOpen(true)}
                  className="hover:text-[#00f5ff] transition-colors"
                >
                  Pilotar
                </button>
              </>
            )}
          </nav>

          {/* Action CTA Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsChatbotOpen(true)}
              className="p-2 rounded-full border border-white/15 bg-[#171c25] hover:border-[#00f5ff] text-[#b9caca] hover:text-[#00f5ff] transition-colors cursor-pointer"
              title={isEs ? 'Abrir Asistente AI' : 'Open AI Assistant'}
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </button>

            <button
              onClick={() => setIsAssessmentModalOpen(true)}
              className="bg-[#00f5ff] text-[#003739] font-tech-label text-xs uppercase font-bold py-2.5 px-5 rounded-full shadow-[0_0_15px_rgba(0,245,255,0.25)] hover:shadow-[0_0_20px_rgba(0,245,255,0.45)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              {currentView === 'executive'
                ? isEs
                  ? 'Request Assessment'
                  : 'Request Assessment'
                : isEs
                ? 'Reservar Evaluación'
                : 'Book Assessment'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Screen Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-12 md:py-16">
        {currentView === 'executive' && (
          <ExecutiveView
            assessment={assessment}
            onRequestAssessment={() => setIsAssessmentModalOpen(true)}
            onOpenMetricsModal={() => setIsMetricsModalOpen(true)}
            onOpenSamplePlan={() => setIsSamplePlanOpen(true)}
            lang={lang}
          />
        )}

        {currentView === 'overview' && (
          <OverviewView
            assessment={assessment}
            onRequestAssessment={() => setIsAssessmentModalOpen(true)}
            onOpenChatbot={() => setIsChatbotOpen(true)}
            onOpenMetricsModal={() => setIsMetricsModalOpen(true)}
            onOpenSamplePlan={() => setIsSamplePlanOpen(true)}
            lang={lang}
          />
        )}

        {currentView === 'tour' && (
          <ProductTourView
            assessment={assessment}
            onRequestAssessment={() => setIsAssessmentModalOpen(true)}
            onOpenMetricsModal={() => setIsMetricsModalOpen(true)}
            onOpenSamplePlan={() => setIsSamplePlanOpen(true)}
            lang={lang}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#07090F] py-14 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3">
            <MonkyfiLogo variant="full" size="md" />
            <p className="text-xs text-[#849495] font-body-sm max-w-md">
              {isEs
                ? 'Plataforma de Evaluación de Madurez de IA y Estrategia para Infraestructura de Telecomunicaciones y Redes Digitales.'
                : 'AI Maturity Assessment and Strategic Engineering Platform for Telecom & Digital Infrastructure.'}
            </p>
          </div>

          {/* Compliance & Security Trust Badges */}
          <div className="flex flex-wrap gap-4 text-xs font-tech-label text-[#b9caca]">
            <div className="flex items-center gap-1.5 bg-[#121520] px-3 py-1.5 rounded-lg border border-white/10">
              <span className="material-symbols-outlined text-[#e9c083] text-[16px]">
                verified_user
              </span>
              <span>ISO 27001 Ready</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#121520] px-3 py-1.5 rounded-lg border border-white/10">
              <span className="material-symbols-outlined text-[#00f5ff] text-[16px]">lock</span>
              <span>Zero-Trust CPNI</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#121520] px-3 py-1.5 rounded-lg border border-white/10">
              <span className="material-symbols-outlined text-[#90cdff] text-[16px]">dns</span>
              <span>On-Premise Ready</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#849495] font-tech-label">
          <div>© {new Date().getFullYear()} Monkyfi Technologies. All rights reserved.</div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <button
              onClick={() => setIsSamplePlanOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {isEs ? 'Metodología NOC' : 'NOC Methodology'}
            </button>
            <button
              onClick={() => setIsMetricsModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {isEs ? 'Benchmarks Globales' : 'Global Benchmarks'}
            </button>
            <button
              onClick={() => setIsAssessmentModalOpen(true)}
              className="hover:text-[#00f5ff] transition-colors cursor-pointer"
            >
              {isEs ? 'Evaluación de Madurez' : 'Maturity Assessment'}
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Modals & Drawers */}
      <AssessmentModal
        isOpen={isAssessmentModalOpen}
        onClose={() => setIsAssessmentModalOpen(false)}
        onAssessmentCompleted={(res) => setAssessment(res)}
        lang={lang}
      />

      <MetricsModal
        isOpen={isMetricsModalOpen}
        onClose={() => setIsMetricsModalOpen(false)}
        assessment={assessment}
        lang={lang}
      />

      <SamplePlanModal
        isOpen={isSamplePlanOpen}
        onClose={() => setIsSamplePlanOpen(false)}
        lang={lang}
      />

      <ChatbotDrawer
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onLaunchAssessment={() => {
          setIsChatbotOpen(false);
          setIsAssessmentModalOpen(true);
        }}
        lang={lang}
      />
    </div>
  );
};
export default App;
