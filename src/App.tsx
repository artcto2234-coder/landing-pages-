/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Modalidades } from './components/Modalidades';
import { Sobre } from './components/Sobre';
import { PlanosAgendamento } from './components/PlanosAgendamento';
import { Depoimentos } from './components/Depoimentos';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedModality, setSelectedModality] = useState<string | undefined>(undefined);

  const handleOpenBooking = (modalityId?: string) => {
    setSelectedModality(modalityId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-[#E31837] selection:text-white flex flex-col font-sans">
      {/* Sticky Navigation Bar */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Flow (Strict section order: inicio -> modalidades -> sobre -> planos -> contato) */}
      <main className="flex-1">
        {/* 1. Início (Hero, Stats, Headline) */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Modalidades (Aparelhos, Solo, Gestantes, Fisioterapia, Longevidade) */}
        <Modalidades onSelectModality={(id) => handleOpenBooking(id)} />

        {/* 3. Sobre (História, 6 Princípios, Antes vs Depois, Diferenciais Clínicos) */}
        <Sobre onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Planos & Agendamento Online Expresso */}
        <PlanosAgendamento onOpenBooking={() => handleOpenBooking()} />

        {/* Avaliações Reais de Alunos & Prova Social */}
        <Depoimentos />

        {/* 5. Contato, Localização em Ariquemes - RO, Mapa e FAQ */}
        <Contato />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <WhatsAppFloat />

      {/* Quick Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultModality={selectedModality}
      />
    </div>
  );
}
