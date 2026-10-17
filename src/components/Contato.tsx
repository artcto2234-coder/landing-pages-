import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Send, 
  Sparkles, 
  ChevronDown, 
  MessageSquare,
  Navigation,
  CheckCircle2
} from 'lucide-react';
import { STUDIO_INFO, FAQS } from '../data/studioData';

export const Contato: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `*Mensagem de Contato pelo Site Mover Pilates*\n\n` +
      `👤 *Nome:* ${contactName}\n` +
      `📱 *WhatsApp:* ${contactPhone}\n` +
      `💬 *Mensagem:* ${contactMsg}\n\n` +
      `_Enviado através da página de contato de Ariquemes - RO_`;
    
    setSentSuccess(true);
    setTimeout(() => {
      window.open(`https://wa.me/${STUDIO_INFO.phoneDigits}?text=${encodeURIComponent(formatted)}`, '_blank');
    }, 500);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#E31837] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Localização & Atendimento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Estamos prontos para <span className="text-[#E31837]">receber você</span> em Ariquemes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Venha tomar um café conosco no Jardim Europa, conhecer nossos aparelhos e fazer uma avaliação postural individual com fisioterapeuta.
          </p>
        </div>

        {/* Contact Info + Interactive Google Maps Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#E31837] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Endereço Oficial
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-display mt-0.5">
                    {STUDIO_INFO.address}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Bairro Jardim Europa · Ariquemes - Rondônia
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#E31837] hover:text-[#C4102C] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Traçar rota no Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Telefone & WhatsApp Direto
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                    {STUDIO_INFO.phone}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Atendimento humanizado para dúvidas e agendamentos
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href={`https://wa.me/${STUDIO_INFO.phoneDigits}?text=${encodeURIComponent(STUDIO_INFO.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Conversar no WhatsApp Agora</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Horários de Funcionamento
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-display mt-0.5">
                    Atendimento de Segunda a Sábado
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-800">Segunda a Sexta</span>
                  <span className="font-bold text-[#E31837]">06:00 às 21:00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-800">Sábados</span>
                  <span className="font-bold text-slate-700">08:00 às 12:00</span>
                </div>
                <div className="flex justify-between py-1.5 text-slate-400">
                  <span>Domingos e Feriados</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual & Direct Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Map Preview Container */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 h-72 sm:h-80 group">
              {/* Aesthetic map representation */}
              <div className="absolute inset-0 bg-[#E5E9EC]">
                {/* Stylized street grid SVG */}
                <svg className="w-full h-full opacity-60" viewBox="0 0 800 400" preserveAspectRatio="none">
                  <rect width="800" height="400" fill="#EAECEE" />
                  <path d="M0,120 L800,120 M0,240 L800,240 M200,0 L200,400 M500,0 L500,400 M650,0 L650,400" stroke="#CBD5E1" strokeWidth="10" />
                  <path d="M0,180 Q300,160 800,220" stroke="#FEE2E2" strokeWidth="18" fill="none" />
                  <path d="M0,180 Q300,160 800,220" stroke="#E31837" strokeWidth="4" fill="none" strokeDasharray="6 6" />
                </svg>
              </div>

              {/* Map pin overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="relative inline-block">
                  <span className="absolute -inset-2 rounded-full bg-[#E31837]/30 animate-ping" />
                  <div className="relative w-14 h-14 rounded-2xl bg-[#E31837] text-white flex items-center justify-center shadow-xl ring-4 ring-white">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>
                <div className="mt-3 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-lg border border-white/20 text-xs font-bold">
                  Mover Pilates & Fisioterapia
                  <div className="text-[10px] font-normal text-slate-300">R. Maceió, 2253 · Ariquemes</div>
                </div>
              </div>

              {/* Map action button */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold shadow-lg border border-slate-200 transition-all cursor-pointer group-hover:scale-105"
                >
                  <Navigation className="w-4 h-4 text-[#E31837]" />
                  <span>Ver no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Direct message form */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
              <h3 className="text-lg font-bold font-display text-slate-900 mb-1">
                Envie uma Mensagem Rápida
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Nossa recepção responde em poucos minutos no seu celular.
              </p>

              {sentSuccess ? (
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Mensagem preparada! Abrindo seu WhatsApp para envio instantâneo...</span>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Seu nome"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs sm:text-sm focus:ring-2 focus:ring-[#E31837] focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        WhatsApp (DDD)
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="(69) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs sm:text-sm focus:ring-2 focus:ring-[#E31837] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Como podemos te ajudar?
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      placeholder="Ex: Gostaria de saber horários para Pilates em Aparelhos no período da manhã..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs sm:text-sm focus:ring-2 focus:ring-[#E31837] focus:bg-white focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#E31837] hover:bg-[#C4102C] text-white font-bold text-xs uppercase tracking-wider shadow-glow flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Entrar em contato</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-slate-200/80">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E31837]">
              Tire Suas Dúvidas
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              Perguntas Frequentes sobre a Mover
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Tudo o que você precisa saber antes de iniciar sua primeira aula.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-display">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#E31837]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
