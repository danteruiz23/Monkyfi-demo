import React, { useState } from 'react';
import { ChatMessage } from '../types';
import { MonkyfiLogo } from './MonkyfiLogo';

interface ChatbotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchAssessment: () => void;
  lang: 'es' | 'en';
}

export const ChatbotDrawer: React.FC<ChatbotDrawerProps> = ({
  isOpen,
  onClose,
  onLaunchAssessment,
  lang,
}) => {
  const isEs = lang === 'es';

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: isEs
        ? '¡Hola! Soy el Asistente de IA de Monkyfi. Puedo ayudarte a evaluar la madurez de tu red de telecomunicaciones, explicar cómo mitigamos el ruido de alarmas en el NOC o detallar nuestra política Zero-Trust. ¿Por dónde te gustaría empezar?'
        : 'Hello! I am the Monkyfi AI Assistant. I can help evaluate your telecom network readiness, explain how we eliminate NOC alarm noise, or detail our Zero-Trust security policy. Where would you like to start?',
      timestamp: 'Ahora',
      suggestedActions: isEs
        ? [
            '¿Cómo reducen el ruido de alarmas?',
            '¿Cómo garantizan la seguridad de datos?',
            'Iniciar Evaluación Rápida',
          ]
        : [
            'How do you reduce alarm noise?',
            'How is data security guaranteed?',
            'Start Quick Assessment',
          ],
    },
  ]);

  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: 'Ahora',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Generate intelligent assistant answer
    setTimeout(() => {
      let botReply = '';
      let actions: string[] | undefined = undefined;

      const lower = text.toLowerCase();
      if (lower.includes('ruido') || lower.includes('alarma') || lower.includes('noise')) {
        botReply = isEs
          ? 'Monkyfi Sentinel utiliza correlación topológica y algoritmos temporales de clustering para agrupar tormentas de alarmas en un único incidente raíz, suprimiendo hasta un 42% del ruido innecesario en el NOC.'
          : 'Monkyfi Sentinel uses topological correlation and temporal clustering to group alarm storms into a single root-cause incident, suppressing up to 42% of unnecessary NOC alert fatigue.';
        actions = isEs ? ['Iniciar Evaluación', 'Ver Plan de Muestra'] : ['Start Assessment', 'View Sample Plan'];
      } else if (
        lower.includes('seguridad') ||
        lower.includes('zero-trust') ||
        lower.includes('cpni') ||
        lower.includes('security')
      ) {
        botReply = isEs
          ? 'Nuestra política Zero-Trust garantiza que no se almacenen credenciales ni IPs privadas en la nube. Toda la telemetría se anonimiza en el borde y cumplimos con los estándares ISO 27001 y CPNI.'
          : 'Our Zero-Trust policy ensures no private subscriber IP or credentials leave your perimeter. All telemetry is sanitized at the edge, fully complying with ISO 27001 and CPNI mandates.';
        actions = isEs ? ['Iniciar Evaluación Rápida'] : ['Start Quick Assessment'];
      } else if (lower.includes('evaluación') || lower.includes('iniciar') || lower.includes('start') || lower.includes('assessment')) {
        botReply = isEs
          ? '¡Excelente! Puedes abrir el asistente interactivo para ingresar los parámetros de tu red y obtener tu puntuación personalizada.'
          : 'Great! You can launch our interactive wizard to input your network parameters and calculate your custom scorecard.';
        onLaunchAssessment();
      } else {
        botReply = isEs
          ? 'Entiendo tu consulta sobre infraestructura de telecomunicaciones. Con Monkyfi Connect, ayudamos a los CTOs a pasar de la incertidumbre a una hoja de ruta con ROI medible (hasta 37% de reducción en OPEX y 60% en MTTR).'
          : 'Understood. With Monkyfi Connect, we help CTOs transition from uncertainty to a board-ready roadmap with measurable ROI (up to 37% OPEX reduction and 60% MTTR gain).';
        actions = isEs ? ['Iniciar Evaluación Rápida'] : ['Start Quick Assessment'];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: botReply,
          timestamp: 'Ahora',
          suggestedActions: actions,
        },
      ]);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-lg bg-[#121520] border-l border-white/20 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#171c25]">
          <div className="flex items-center gap-3">
            <MonkyfiLogo variant="icon" size="sm" />
            <div>
              <h3 className="font-semibold text-white text-sm">Monkyfi AI Assistant</h3>
              <span className="text-[11px] text-[#00f5ff] flex items-center gap-1 font-tech-label">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] animate-ping"></span>
                Online • Telecom Sentinel
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#b9caca] hover:text-white hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#00f5ff] text-[#003739] font-medium rounded-br-none'
                    : 'bg-[#1b2029] text-[#dfe2f0] border border-white/10 rounded-bl-none shadow-md'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-[#849495] mt-1 px-1">{msg.timestamp}</span>

              {msg.suggestedActions && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {msg.suggestedActions.map((action, aIdx) => (
                    <button
                      key={aIdx}
                      onClick={() => {
                        if (action.includes('Evaluación') || action.includes('Assessment')) {
                          onLaunchAssessment();
                        } else {
                          handleSend(action);
                        }
                      }}
                      className="text-xs bg-[#262a34] hover:bg-[#00f5ff]/20 text-[#00f5ff] border border-[#00f5ff]/30 px-3 py-1.5 rounded-full font-tech-label transition-colors cursor-pointer"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Footer */}
        <div className="p-4 border-t border-white/10 bg-[#171c25]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isEs ? 'Escribe una pregunta sobre IA en Telecom...' : 'Ask about Telecom AI...'
              }
              className="flex-1 bg-[#1b2029] border border-white/15 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
            />
            <button
              type="submit"
              className="bg-[#00f5ff] text-[#003739] rounded-full p-2.5 flex items-center justify-center hover:shadow-[0_0_10px_rgba(0,245,255,0.4)] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
