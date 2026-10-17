import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const encoded = encodeURIComponent(STUDIO_INFO.whatsappBookingMsg);
    window.open(`https://wa.me/${STUDIO_INFO.phoneDigits}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-3 max-w-xs border border-slate-200/90 text-xs animate-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-1.5 right-1.5 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Fechar mensagem"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 pr-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-ping" />
            <p className="font-semibold text-slate-800">
              Atendimento Online · Ariquemes
            </p>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Gostaria de agendar sua aula experimental? Fale agora no WhatsApp!
          </p>
        </div>
      )}

      {/* Main WhatsApp Button with subtle pulse */}
      <button
        onClick={handleClick}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Falar pelo WhatsApp com a Mover Pilates e Fisioterapia"
      >
        {/* Subtle pulse halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10 [animation-duration:3s]" />
        
        {/* Official WhatsApp icon svg */}
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.182-.076.355.101.173.45 1.056 1.34 1.849.697.621 1.285.814 1.468.905.183.091.29.076.398-.048.109-.124.467-.544.592-.731.125-.188.25-.157.42-.094.17.063 1.077.508 1.262.6.185.093.308.139.353.217.045.078.045.452-.099.857z"/>
        </svg>

        {/* Status dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
        </span>
      </button>
    </div>
  );
};
