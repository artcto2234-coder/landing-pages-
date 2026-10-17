import React, { useState } from 'react';
import { Check, Sparkles, Clock, Calendar, ArrowRight, ShieldCheck, HeartHandshake, HelpCircle } from 'lucide-react';
import { PLANS, STUDIO_INFO } from '../data/studioData';

interface PlanosAgendamentoProps {
  onOpenBooking: () => void;
}

export const PlanosAgendamento: React.FC<PlanosAgendamentoProps> = ({ onOpenBooking }) => {
  // Quick in-page booking scheduler state
  const [quickModality, setQuickModality] = useState('aparelhos');
  const [quickDay, setQuickDay] = useState('segunda');
  const [quickShift, setQuickShift] = useState('manha');
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim() || !quickPhone.trim()) {
      onOpenBooking();
      return;
    }

    const message = `*Agendamento Rápido via Site - Mover Pilates e Fisioterapia*\n\n` +
      `👤 *Nome:* ${quickName}\n` +
      `📱 *Telefone:* ${quickPhone}\n` +
      `✨ *Interesse:* ${quickModality === 'aparelhos' ? 'Pilates em Aparelhos' : quickModality === 'fisioterapia' ? 'Fisioterapia' : 'Pilates Gestante / Solo'}\n` +
      `📅 *Dia de preferência:* ${quickDay}\n` +
      `⏰ *Turno:* ${quickShift === 'manha' ? 'Manhã (06h às 11h)' : quickShift === 'tarde' ? 'Tarde (14h às 18h)' : 'Noite (18h às 21h)'}\n\n` +
      `_Aguardo retorno da equipe Mover para confirmação de horário em Ariquemes - RO._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${STUDIO_INFO.phoneDigits}?text=${encoded}`, '_blank');
  };

  return (
    <section id="planos" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#E31837] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Planos & Horários Flexíveis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            A frequência ideal para a sua <span className="text-[#E31837]">evolução contínua</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Consulte a disponibilidade na grade de horários de Ariquemes e agende sua aula experimental para conhecer nosso studio no Jardim Europa.
          </p>
        </div>

        {/* Operating Hours Summary Banner */}
        <div className="mb-14 max-w-4xl mx-auto p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#E31837] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Grade de Funcionamento Ampla
              </div>
              <div className="text-xs text-slate-600">
                Segunda a Sexta das <strong>06:00 às 21:00</strong> · Sábados das <strong>08:00 às 12:00</strong>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-700">Vagas por ordem de chegada</span>
          </div>
        </div>

        {/* Plans Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-white border-2 border-[#E31837] shadow-xl shadow-rose-500/10 -translate-y-2'
                  : 'bg-white border border-slate-200/80 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#E31837] text-white shadow-md">
                    Mais Escolhido
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Frequência Semanal
                  </span>
                  <div className="text-2xl font-black font-display text-slate-900 mt-1">
                    {plan.sessionsPerWeek}
                  </div>
                  <h3 className="text-lg font-bold text-[#E31837] mt-0.5">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="pt-4 border-t border-slate-100 space-y-3 mb-6">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    O que está incluso:
                  </span>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-rose-50 text-[#E31837] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-slate-100">
                <div className="mb-3 text-[11px] text-slate-500 italic">
                  💡 {plan.recommendedFor}
                </div>
                <button
                  onClick={() => {
                    const encoded = encodeURIComponent(plan.whatsappMessage);
                    window.open(`https://wa.me/${STUDIO_INFO.phoneDigits}?text=${encoded}`, '_blank');
                  }}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'bg-[#E31837] hover:bg-[#C4102C] text-white shadow-glow'
                      : 'bg-slate-900 hover:bg-[#E31837] text-white'
                  }`}
                >
                  <span>Consultar Disponibilidade</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive Quick Scheduler Card */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left explanation (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-10 text-white flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-rose-300 backdrop-blur-sm mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Agendamento Online
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">
                  Reserve seu horário experimental em menos de 1 minuto.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                  Preencha suas preferências e entraremos em contato imediatamente pelo WhatsApp para confirmar a melhor vaga para você.
                </p>

                <div className="mt-8 space-y-3.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#E31837]" />
                    <span>Sem fidelidade obrigatória no primeiro mês</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <HeartHandshake className="w-4 h-4 text-[#E31837]" />
                    <span>Avaliação física inclusa na matrícula</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#E31837]" />
                    <span>Horários de manhã cedo até a noite (06h às 21h)</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 text-xs text-slate-400">
                Endereço: R. Maceió, 2253 - Sl E - Jardim Europa, Ariquemes - RO
              </div>
            </div>

            {/* Right form (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 bg-white">
              <form onSubmit={handleQuickSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Modalidade de Interesse
                    </label>
                    <select
                      value={quickModality}
                      onChange={(e) => setQuickModality(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#E31837] focus:outline-none"
                    >
                      <option value="aparelhos">Pilates em Aparelhos (Studio)</option>
                      <option value="fisioterapia">Fisioterapia & RPG (Coluna/Dores)</option>
                      <option value="gestantes">Pilates para Gestantes / Pós-Parto</option>
                      <option value="longevidade">Pilates para Longevidade 60+</option>
                      <option value="solo">Mat Pilates & Solo Funcional</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Turno Preferido
                    </label>
                    <select
                      value={quickShift}
                      onChange={(e) => setQuickShift(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#E31837] focus:outline-none"
                    >
                      <option value="manha">Manhã (06h às 11h)</option>
                      <option value="tarde">Tarde (14h às 18h)</option>
                      <option value="noite">Noite (18h às 21h)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Dia Sugerido
                    </label>
                    <select
                      value={quickDay}
                      onChange={(e) => setQuickDay(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#E31837] focus:outline-none"
                    >
                      <option value="Segunda">Segunda-feira</option>
                      <option value="Terça">Terça-feira</option>
                      <option value="Quarta">Quarta-feira</option>
                      <option value="Quinta">Quinta-feira</option>
                      <option value="Sexta">Sexta-feira</option>
                      <option value="Sábado">Sábado</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nome completo"
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs sm:text-sm focus:ring-2 focus:ring-[#E31837] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(69) 99999-9999"
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs sm:text-sm focus:ring-2 focus:ring-[#E31837] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#E31837] hover:bg-[#C4102C] text-white font-bold text-xs uppercase tracking-wider shadow-glow flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.99]"
                  >
                    <span>Entrar em contato para Agendamento</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Seus dados são 100% confidenciais e protegidos pela LGPD</span>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
