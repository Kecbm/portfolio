const articles = [
  {
    image: 'https://img.icons8.com/stickers/100/maintenance.png',
    url: 'https://dev.to/kecbm/technical-and-business-refinement-why-tech-teams-cannot-ignore-it-43i5',
    type: 'business',
    en: {
      title: 'Technical and business refinement',
    },
    pt: {
      title: 'Refinamento técnico e de negócio',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/class.png',
    url: 'https://dev.to/kecbm/pessoas-desenvolvedoras-precisam-estudar-todos-os-dias-5dea',
    type: 'career',
    en: {
      title: 'Developers need to study every day',
    },
    pt: {
      title: 'Pessoas desenvolvedoras precisam estudar todos os dias',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/communication.png',
    url: 'https://dev.to/kecbm/a-importancia-da-comunicacao-para-uma-pessoa-desenvolvedora-4349',
    type: 'soft skills',
    en: {
      title: 'The importance of Communication for a developer',
    },
    pt: {
      title: 'A importância da Comunicação para uma pessoa desenvolvedora',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/trophy.png',
    url: 'https://dev.to/kecbm/breaking-records-55ji',
    type: 'algorithm',
    en: {
      title: 'Breaking Records',
    },
    pt: {
      title: 'Quebrando recordes',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/brief.png',
    url: 'https://dev.to/kecbm/o-poder-das-tarefas-como-pequenas-entregas-levam-a-grandes-resultados-2of6',
    type: 'business',
    en: {
      title: 'The Power of Tasks: How Small Deliverables Lead to Big Results',
    },
    pt: {
      title: 'O Poder das Tarefas: Como Pequenas Entregas Levam a Grandes Resultados',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/abacus.png',
    url: 'https://dev.to/kecbm/divisible-sum-pairs-159h',
    type: 'algorithm',
    en: {
      title: 'Divisible sum pairs',
    },
    pt: {
      title: 'Pares de soma divisível',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/handshake-skin-type-3.png',
    url: 'https://dev.to/kecbm/como-cultivar-empatia-com-os-colegas-da-squad-dicas-para-um-ambiente-de-trabalho-saudavel-3fkj',
    type: 'soft skills',
    en: {
      title: 'How to Cultivate Empathy with Squad Colleagues',
    },
    pt: {
      title: 'Como Cultivar Empatia com os Colegas da Squad',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/film-soundtracks.png',
    url: 'https://dev.to/kecbm/desenvolvimento-orientado-ao-mvp-minimo-produto-viavel-km4',
    type: 'business',
    en: {
      title: 'MVP (Minimum Viable Product) Oriented Development',
    },
    pt: {
      title: 'Desenvolvimento Orientado ao MVP (Mínimo Produto Viável)',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/kangaroo.png',
    url: 'https://dev.to/kecbm/number-line-jumps-1ig',
    type: 'algorithm',
    en: {
      title: 'Number Line Jumps',
    },
    pt: {
      title: 'Saltos de linha numérica',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/resume-website.png',
    url: 'https://dev.to/kecbm/como-um-portfolio-pode-impulsionar-sua-carreira-5dk6',
    type: 'career',
    en: {
      title: 'How a Portfolio Can Boost Your Career',
    },
    pt: {
      title: 'Como um Portfólio Pode Impulsionar sua Carreira',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/bitten-apple.png',
    url: 'https://dev.to/kecbm/apple-and-orange-2g82',
    type: 'algorithm',
    en: {
      title: 'Apple and Orange',
    },
    pt: {
      title: 'Maçã e laranja',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/twitter.png',
    url: 'https://dev.to/kecbm/como-participar-da-bolha-dev-no-twitter-um-guia-para-desenvolvedores-11ol',
    type: 'career',
    en: {
      title: 'How to Join the Twitter Dev Bubble: A Guide for Developers',
    },
    pt: {
      title: 'Como Participar da Bolha Dev no Twitter: Um Guia para Desenvolvedores',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/blackboard.png',
    url: 'https://dev.to/kecbm/grading-students-5eok',
    type: 'algorithm',
    en: {
      title: 'Grading students',
    },
    pt: {
      title: 'Avaliando alunos',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/cancel.png',
    url: 'https://dev.to/kecbm/por-que-e-vital-aprender-a-dizer-nao-no-ambiente-profissional-cc3',
    type: 'soft skills',
    en: {
      title: 'Why it is vital to learn to say no in a professional environment',
    },
    pt: {
      title: 'Por que é vital aprender a dizer não no ambiente profissional',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/womens-watch.png',
    url: 'https://dev.to/kecbm/time-conversion-383d',
    type: 'algorithm',
    en: {
      title: 'Time conversion',
    },
    pt: {
      title: 'Conversão de tempo',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/web-design.png',
    url: 'https://dev.to/kecbm/codigo-legado-razoes-para-respeitar-e-valorizar-4e9o',
    type: 'business',
    en: {
      title: 'Legacy Code: Reasons to Respect and Value',
    },
    pt: {
      title: 'Código Legado: Razões para Respeitar e Valorizar',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/remote-desktop.png',
    url: 'https://dev.to/kecbm/staircase-detail-112g',
    type: 'algorithm',
    en: {
      title: 'Staircase detail',
    },
    pt: {
      title: 'Staircase detail',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/briefcase--v1.png',
    url: 'https://dev.to/kecbm/voce-deve-trabalhar-pra-voce-por-zarathon-viana-ldj',
    type:  'career',
    en: {
      title: 'You must work for yourself By Zarathon Viana',
    },
    pt: {
      title: 'Você deve trabalhar pra você Por Zarathon Viana',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/office.png',
    url: 'https://dev.to/kecbm/de-volta-ao-codigo-como-conquistei-minha-realocacao-no-mercado-de-tecnologia-4n5n',
    type:  'career',
    en: {
      title: 'Back to Code: How I Conquered My Relocation in the Technology Market',
    },
    pt: {
      title: 'De Volta ao Código: Como Conquistei Minha Realocação no Mercado de Tecnologia',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/web.png',
    url: 'https://dev.to/kecbm/uncovering-the-react-universe-the-starter-guide-3jkf',
    type:  'career',
    en: {
      title: 'Uncovering the React Universe: The Starter Guide',
    },
    pt: {
      title: 'Descobrindo o universo React: o guia para iniciantes',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/hearing.png',
    url: 'https://dev.to/kecbm/the-power-of-active-listening-for-developers-2pd5',
    type: 'soft skills',
    en: {
      title: 'The Power of Active Listening for Developers',
    },
    pt: {
      title: 'O poder da escuta ativa para desenvolvedores',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/book-shelf.png',
    url: 'https://br24.io/blog/playbook/',
    type: 'business',
    en: {
      title: 'Playbook: what it is, how to apply it, features and advantages',
    },
    pt: {
      title: 'Playbook: o que é, como aplicar, funcionalidades e vantagens',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/group-of-projects.png',
    url: 'https://br24.io/blog/cronograma-de-projeto/',
    type: 'business',
    en: {
      title: 'Project Schedule: what it is, how it works, how to set it up and advantages',
    },
    pt: {
      title: 'Cronograma de Projeto: o que é, como funciona, como montar e vantagens',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/graph.png',
    url: 'https://br24.io/blog/kpis/',
    type: 'business',
    en: {
      title: 'KPIs: what they are, what they are for, advantages and tips on how to apply',
    },
    pt: {
      title: 'KPIs: o que são, para que servem, vantagens e dicas de como aplicar',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/chatbot.png',
    url: 'https://br24.io/blog/chatgpt-entenda-como-funciona/',
    type: 'business',
    en: {
      title: 'What is ChatGPT: benefits, how it works and GPT-5 updates',
    },
    pt: {
      title: 'O que é ChatGPT: benefícios, como funciona e atualizações GPT-5',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/books-1.png',
    url: 'https://dev.to/kecbm/como-otimizar-sua-semana-de-leitura-dicas-praticas-e-eficazes-480b',
    type: 'career',
    en: {
      title: 'How to optimize your reading week: practical and effective tips',
    },
    pt: {
      title: 'Como otimizar sua semana de leitura: dicas práticas e eficazes',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/best-sales.png',
    url: 'https://br24.io/blog/controlar-meu-processo-de-vendas-com-bitrix24-crm/',
    type: 'business',
    en: {
      title: 'Sales CRM: benefits, how to use and differences of CRM Bitrix24',
    },
    pt: {
      title: 'CRM de Vendas: benefícios, como utilizar e diferenciais do CRM Bitrix24',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/my-computer.png',
    url: 'https://dev.to/kecbm/como-ser-um-dev-fora-da-curva-por-sseraphini-4og2',
    type: 'career',
    en: {
      title: 'How to be an out-of-the-box developer',
    },
    pt: {
      title: 'Como ser uma pessoa desenvolvedora fora da curva',
    }
  }
];

export default articles;
