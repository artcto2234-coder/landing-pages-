import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, Send, CheckCircle2, Phone, User, MessageSquare } from 'lucide-react';
import { STUDIO_INFO, MODALITIES } from '../data/studioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultModality?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultModality
}) => {
  const [selectedModality, setSelectedModality] = useState<string>(
    defaultModality || MODALITIES[0].id
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [shift, setShift] = useState('manha');
  const [day, setDay] = useState('segunda');
  const [goal, setGoal] = useState('dores');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const modalityName = MODALITIES.find(m => m.id === selectedModality)?.name || 'Pilates em Aparelhos';
    
    const shiftLabels: Record<string, string> = {
      manha: 'Manhã (06h às 11h)',
      tarde: 'Tarde (14h às 18h)',
      noite: 'Noite (18h às 21h)'
    };

    const dayLabels: Record<string, string> = {
      segunda: 'Segunda-feira',
      terca: 'Terça-feira',
      quarta: 'Quarta-feira',
      quinta: 'Quinta-feira',
      sexta: 'Sexta-feira',
      sabado: 'Sábado'
    };

    const goalLabels: Record<string, string> = {
      dores: 'Alívio de dores na coluna e articulações',
      postura: 'Correção postural e reeducação motora',
      fortalecimento: 'Fortalecimento muscular profundo e flexibilidade',
      gestante: 'Acompanhamento gestacional / pós-parto',
      longevidade: 'Equilíbrio e autonomia (Terceira Idade)'
    };

    // Format WhatsApp pre-filled text
    const message = `*Agendamento de Aula Experimental - Mover Pilates e Fisioterapia*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *Telefone:* ${phone}\n` +
      `✨ *Modalidade de interesse:* ${modalityName}\n` +
      `🎯 *Objetivo principal:* ${goalLabels[goal] || goal}\n` +
      `⏰ *Turno preferido:* ${shiftLabels[shift] || shift}\n` +
      `📅 *Dia de preferência:* ${dayLabels[day] || day}\n` +
      (notes ? `📝 *Observação:* ${notes}\n` : '') +
      `\n_Enviado pelo site oficial da Mover Pilates (Ariquemes - RO)_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STUDIO_INFO.phoneDigits}?text=${encodedMessage}`;

    // Mark as submitted
    setSubmitted(true);

    // Open WhatsApp in a few moments or direct user
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#E31837] to-[#C4102C] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Aula Experimental Exclusiva
            </span>
            <h3 className="text-xl font-bold font-display tracking-tight text-white">
              Agende sua Experiência na Mover
            </h3>
            <p className="text-xs text-rose-100 mt-0.5">
              Ariquemes - RO · Atendimento com Fisioterapeutas
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-display">
                Solicitação Preparada com Sucesso!
              </h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Você está sendo redirecionado para o nosso WhatsApp oficial <strong>(+55 69 99231-9020)</strong> com todos os seus dados organizados para confirmarmos o melhor dia e horário para você.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    const encodedMessage = encodeURIComponent(`Olá! Quero confirmar meu agendamento na Mover Pilates para ${name}.`);
                    window.open(`https://wa.me/${STUDIO_INFO.phoneDigits}?text=${encodedMessage}`, '_blank');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E31837] hover:bg-[#C4102C] text-white font-medium rounded-xl shadow-glow transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Abrir WhatsApp Agora
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-all text-sm"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Modality selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  1. Modalidade Desejada
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {MODALITIES.map((mod) => (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => setSelectedModality(mod.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedModality === mod.id
                          ? 'border-[#E31837] bg-rose-50/60 ring-2 ring-[#E31837]/20 font-medium text-slate-900'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900">{mod.name}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{mod.tagline}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  2. Seu Objetivo Principal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:bg-white"
                >
                  <option value="dores">Alívio de dores na coluna, lombar ou pescoço</option>
                  <option value="postura">Reeducação postural e correção de hábitos</option>
                  <option value="fortalecimento">Fortalecimento profundo e flexibilidade</option>
                  <option value="gestante">Pilates para Gestantes ou Pós-parto</option>
                  <option value="longevidade">Longevidade, equilíbrio e saúde 60+</option>
                </select>
              </div>

              {/* Time preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    <Clock className="w-3.5 h-3.5 inline mr-1 text-[#E31837]" />
                    Turno Preferido
                  </label>
                  <select
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:bg-white"
                  >
                    <option value="manha">Manhã (06h às 11h)</option>
                    <option value="tarde">Tarde (14h às 18h)</option>
                    <option value="noite">Noite (18h às 21h)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    <Calendar className="w-3.5 h-3.5 inline mr-1 text-[#E31837]" />
                    Dia Sugerido
                  </label>
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:bg-white"
                  >
                    <option value="segunda">Segunda-feira</option>
                    <option value="terca">Terça-feira</option>
                    <option value="quarta">Quarta-feira</option>
                    <option value="quinta">Quinta-feira</option>
                    <option value="sexta">Sexta-feira</option>
                    <option value="sabado">Sábado de manhã</option>
                  </select>
                </div>
              </div>

              {/* Personal Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    <User className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Ana Silva"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    <Phone className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
                    WhatsApp (com DDD)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: (69) 99999-9999"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Alguma observação de saúde ou dor atual? (opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Sinto dor na lombar quando fico muito tempo em pé..."
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#E31837] hover:bg-[#C4102C] text-white font-semibold text-sm tracking-wide shadow-glow flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Confirmar e Agendar no WhatsApp
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  Atendimento humanizado sem espera · Rua Maceió, Jardim Europa, Ariquemes - RO
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
