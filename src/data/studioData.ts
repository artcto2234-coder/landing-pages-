export interface Modality {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  benefits: string[];
  targetAudience: string;
  equipment: string[];
  image: string;
  highlight: boolean;
}

export interface Plan {
  id: string;
  title: string;
  sessionsPerWeek: string;
  description: string;
  popular?: boolean;
  features: string[];
  recommendedFor: string;
  whatsappMessage: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  content: string;
  condition: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const STUDIO_INFO = {
  name: "Mover Pilates e Fisioterapia",
  tagline: "Reconecte seu corpo ao movimento livre de dor.",
  city: "Ariquemes - RO",
  neighborhood: "Jardim Europa",
  address: "R. Maceió, 2253 - Sl E - Jardim Europa, Ariquemes - RO, 76870-425",
  phone: "+55 69 99231-9020",
  phoneDigits: "5569992319020",
  googleMapsUrl: "https://maps.google.com/?cid=5294959996203136829&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  operatingHours: {
    weekdays: "Segunda a Sexta: 06:00 às 21:00",
    saturdays: "Sábados: 08:00 às 12:00",
    sundays: "Domingos: Fechado"
  },
  whatsappDefaultMsg: "Olá! Gostaria de mais informações sobre as aulas de Pilates e Fisioterapia na Mover em Ariquemes.",
  whatsappBookingMsg: "Olá! Gostaria de agendar uma aula experimental na Mover Pilates e Fisioterapia."
};

export const MODALITIES: Modality[] = [
  {
    id: "aparelhos",
    name: "Pilates em Aparelhos",
    badge: "Mais Procurado",
    tagline: "Precisão biomecânica, molas com resistência gradual e postura impecável.",
    description: "Sessões conduzidas nos clássicos aparelhos Reformer, Cadillac, Wunda Chair e Ladder Barrel. O sistema de molas fornece suporte seguro para articulações ao mesmo tempo em que desafia a musculatura estabilizadora profunda.",
    benefits: [
      "Fortalecimento do Powerhouse (abdômen profundo e lombar)",
      "Descompressão vertebral e correção postural milimétrica",
      "Zero impacto articular com resistência progressiva",
      "Aulas em turmas com no máximo 3 a 4 alunos"
    ],
    targetAudience: "Pessoas de todas as idades, desde quem busca sair do sedentarismo até praticantes avançados.",
    equipment: ["Reformer Clássico", "Cadillac", "Wunda Chair", "Ladder Barrel"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    highlight: true
  },
  {
    id: "fisioterapia",
    name: "Fisioterapia & Reabilitação",
    badge: "Cuidado Clínico",
    tagline: "Tratamento individualizado com foco na causa raiz da sua dor.",
    description: "Abordagem fisioterapêutica completa integrada ao movimento consciente. Diagnóstico funcional de desequilíbrios musculares, hérnias de disco, ciatalgia, tendinopatias e reabilitação pós-cirúrgica.",
    benefits: [
      "Alívio efetivo de dores crônicas na coluna e no pescoço",
      "Reeducação postural global e restauração do padrão de marcha",
      "Fisioterapeutas dedicados com registro profissional ativo",
      "Plano terapêutico personalizado com métricas de evolução"
    ],
    targetAudience: "Pessoas com dores agudas ou crônicas, restrições articulares ou prescrição médica de reabilitação.",
    equipment: ["Aparelhos Clínicos", "Bandagens Elásticas", "Liberação Miofascial", "Eletroterapia e Calor"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    highlight: false
  },
  {
    id: "gestantes",
    name: "Pilates para Gestantes & Pós-Parto",
    badge: "Materno-Infantil",
    tagline: "Uma gestação mais leve, um parto seguro e recuperação acelerada.",
    description: "Exercícios adaptados para cada trimestre da gestação. Fortalecemos o assoalho pélvico, estabilizamos a cintura pélvica e aliviamos a sobrecarga lombar decorrente do centro de gravidade alterado.",
    benefits: [
      "Prevenção e controle da diástase abdominal",
      "Fortalecimento do assoalho pélvico para o parto",
      "Alívio imediato do inchaço nas pernas e dor ciática",
      "Ambiente acolhedor e ritmo adaptado aos batimentos e respiração"
    ],
    targetAudience: "Gestantes a partir da liberação médica obstétrica e puérperas no pós-parto imediato ou tardio.",
    equipment: ["Bolas Suíças", "Reformer com Molas Leves", "Apoios Ergonômicos", "Faixas de Resistência"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
    highlight: false
  },
  {
    id: "longevidade",
    name: "Pilates para Longevidade & 60+",
    badge: "Autonomia & Vitalidade",
    tagline: "Mais equilíbrio, mobilidade e independência para viver os melhores anos.",
    description: "Programa voltado para a manutenção da saúde óssea, flexibilidade articular e segurança motora na terceira idade. Estimula o reflexo proprioceptivo para prevenção de quedas e alívio da rigidez matinal.",
    benefits: [
      "Aumento significativo do equilíbrio e da coordenação motora",
      "Manutenção e estímulo da densidade mineral óssea",
      "Redução da rigidez provocada por artrose e artrite",
      "Estímulo cognitivo por meio de padrões motores integrados"
    ],
    targetAudience: "Adultos maduros e idosos que desejam envelhecer com vigor físico e liberdade de movimento.",
    equipment: ["Reformer com Suporte", "Bastões de Equilíbrio", "Acessórios de Propriocepção", "Faixas Suaves"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    highlight: false
  },
  {
    id: "solo",
    name: "Mat Pilates & Funcional",
    badge: "Core Profundo",
    tagline: "O domínio do próprio peso corporal com acessórios de precisão.",
    description: "A essência clássica de Joseph Pilates no solo, potencializada com halteres leves, rolos de espuma, flex rings (círculo mágico) e fitas elásticas. Desenvolve força isométrica incomparável e autocontrole.",
    benefits: [
      "Consciência corporal aguçada em qualquer ambiente",
      "Tonificação abdominal e paravertebral intensa",
      "Ganho expressivo de mobilidade torácica e flexibilidade",
      "Melhora na capacidade pulmonar e controle do estresse"
    ],
    targetAudience: "Alunos que buscam intensificar o controle corporal e potencializar o rendimento esportivo.",
    equipment: ["Magic Circle", "Rolos Miofasciais", "Bolas de Areia (Tonning Balls)", "Mats Ergonômicos"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    highlight: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dra. Mariana Vasconcelos",
    role: "Médica Cardiologista",
    location: "Ariquemes - RO",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=180&q=80",
    rating: 5,
    content: "Passava mais de 10 horas sentada no consultório e chegava em casa com dores insuportáveis na lombar. Com 2 meses de Pilates na Mover, as dores sumiram completamente. A atenção das instrutoras faz toda a diferença!",
    condition: "Alívio de lombalgia crônica"
  },
  {
    name: "Carlos Eduardo Silveira",
    role: "Empresário do Agronegócio",
    location: "Jardim Europa, Ariquemes",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=180&q=80",
    rating: 5,
    content: "Tinha muito preconceito achando que Pilates era só alongamento. Me enganei redondamente! O trabalho de força no Reformer é sensacional, melhorou minha postura e minha disposição no trabalho e na fazenda.",
    condition: "Postura e fortalecimento de core"
  },
  {
    name: "Renata Fagundes",
    role: "Advogada e Mãe",
    location: "Ariquemes - RO",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=180&q=80",
    rating: 5,
    content: "Fiz o Pilates para gestantes do 4º até a véspera do parto na Mover. Não tive inchaço nas pernas nem dores nas costas, e o retorno pós-parto foi incrivelmente rápido. Espaço impecável, super acolhedor.",
    condition: "Pilates gestacional e pós-parto"
  },
  {
    name: "Seu Osvaldo Nogueira (67 anos)",
    role: "Aposentado",
    location: "Setor 01, Ariquemes",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80",
    rating: 5,
    content: "Minhas articulações estavam travando por causa da artrose nos joelhos. Hoje subo escadas sem medo, tenho firmeza para brincar com meus netos e recuperei a alegria de me movimentar. Recomendo de olhos fechados.",
    condition: "Mobilidade e equilíbrio 60+"
  }
];

export const PLANS: Plan[] = [
  {
    id: "plano-2x",
    title: "Plano Foco & Equilíbrio",
    sessionsPerWeek: "2x por semana",
    description: "Ideal para quem quer criar regularidade, combater o sedentarismo e eliminar dores na rotina.",
    popular: false,
    features: [
      "Turmas com no máximo 3 a 4 alunos",
      "Acesso completo aos aparelhos de Pilates",
      "Avaliação postural inicial individual",
      "Horários fixos com flexibilidade de reposição",
      "Acompanhamento personalizado por Fisioterapeuta",
      "Ambiente 100% climatizado e higienizado"
    ],
    recommendedFor: "Manutenção da saúde e alívio de estresse postural",
    whatsappMessage: "Olá! Gostaria de consultar os valores e horários disponíveis para o Plano 2x por semana na Mover."
  },
  {
    id: "plano-3x",
    title: "Plano Transformação Integral",
    sessionsPerWeek: "3x por semana",
    description: "Nosso plano mais procurado. Resultados visíveis em menos tempo com máxima evolução de força e postura.",
    popular: true,
    features: [
      "3 sessões semanais nos aparelhos clássicos",
      "Máximo 3 a 4 alunos por turma (atenção integral)",
      "Avaliação postural e cinético-funcional inclusa",
      "Monitoramento mensal de evolução física",
      "Prioridade na escolha de horários concorridos",
      "Política facilitada de reposição de faltas",
      "Suporte direto para dúvidas de mobilidade"
    ],
    recommendedFor: "Reeducação postural acelerada, tonificação e reabilitação contínua",
    whatsappMessage: "Olá! Gostaria de saber os valores do Plano Transformação (3x por semana) na Mover Pilates."
  },
  {
    id: "plano-reab",
    title: "Fisioterapia Personalizada",
    sessionsPerWeek: "Individual (1 a 1)",
    description: "Atendimento 100% individual e focado em lesões específicas, hérnias agudas e reabilitação física.",
    popular: false,
    features: [
      "Sessão individual exclusiva com fisioterapeuta",
      "Diagnóstico cinético-funcional detalhado",
      "Protocolo terapêutico de alívio rápido da dor",
      "Combinação de Pilates clínico, RPG e terapia manual",
      "Liberação miofascial e recursos térmicos",
      "Transição segura para o Pilates em aparelhos"
    ],
    recommendedFor: "Dores agudas, pós-cirúrgicos e hérnias de disco diagnosticadas",
    whatsappMessage: "Olá! Gostaria de agendar uma avaliação individual de Fisioterapia na Mover Pilates e Fisioterapia."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Nunca fiz Pilates na vida. Consigo começar do zero?",
    answer: "Com certeza! Nossas turmas são formadas por no máximo 3 a 4 pessoas, e cada aluno realiza os exercícios no seu próprio ritmo com orientação contínua. As molas dos aparelhos auxiliam o corpo antes de dificultar, tornando a prática acessível e acolhedora desde o primeiro dia."
  },
  {
    question: "Tenho hérnia de disco ou dor crônica na coluna. O Pilates é seguro para mim?",
    answer: "Sim, é amplamente recomendado pela medicina. Nossas instrutoras são fisioterapeutas especializadas. Realizamos uma avaliação prévia para identificar quais movimentos descomprimem sua coluna e estabilizam os músculos que a sustentam, eliminando a dor sem risco de lesão."
  },
  {
    question: "Qual é a diferença entre Pilates e musculação convencional?",
    answer: "Enquanto a musculação costuma focar em grupos musculares isolados com cargas pesadas, o Pilates trabalha o corpo como uma unidade integrada. A ênfase é na musculatura profunda (core), alinhamento da coluna, flexibilidade e respiração, sem impacto articular e sem sobrecarregar ligamentos."
  },
  {
    question: "Como funciona a aula experimental na Mover?",
    answer: "A aula experimental é a sua oportunidade de conhecer o nosso espaço no Jardim Europa, experimentar os aparelhos clássicos (Reformer, Cadillac, Chair) e conversar pessoalmente com nossa equipe sobre seus objetivos e histórico de saúde. Basta clicar no botão de contato para escolher seu horário!"
  },
  {
    question: "Qual roupa devo vestir para as aulas?",
    answer: "Recomendamos roupas confortáveis e flexíveis que permitam movimentos livres (como legging, bermuda ciclista, calça de moletom leve e camiseta confortável). A prática é feita descalça ou com meias antiderrapantes para maior aderência aos aparelhos."
  },
  {
    question: "Como são as reposições de aulas em caso de imprevisto?",
    answer: "Entendemos que imprevistos acontecem! Avisando a recepção com antecedência mínima de 2 horas através do WhatsApp, sua aula fica disponível para agendamento de reposição conforme os horários disponíveis na grade do mês."
  }
];

export const STUDIO_DIFFERENTIALS = [
  {
    title: "Turmas com Máximo de 4 Alunos",
    description: "Nunca colocamos turmas superlotadas. Você tem a atenção de um personal com a motivação e troca do studio.",
    icon: "Users"
  },
  {
    title: "Condução por Fisioterapeutas",
    description: "Olhar clínico afiado. Não apenas passamos exercícios, nós corrigimos a biomecânica para proteger sua coluna.",
    icon: "HeartPulse"
  },
  {
    title: "Aparelhos de Padrão Internacional",
    description: "Equipamentos em madeira nobre e aço com molas de alta precisão que garantem segurança e conforto ergonômico.",
    icon: "Sparkles"
  },
  {
    title: "Localização Nobre e Fácil Acesso",
    description: "Situado no Jardim Europa em Ariquemes - RO, com facilidade de estacionamento, ambiente climatizado e silencioso.",
    icon: "MapPin"
  }
];
