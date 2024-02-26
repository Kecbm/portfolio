const blogPosts = [
  {
    image: 'https://img.icons8.com/stickers/100/web-design.png',
    url: 'https://dev.to/kecbm/codigo-legado-razoes-para-respeitar-e-valorizar-4e9o',
    location: 'Dev.to',
    en: {
      title: 'Legacy Code: Reasons to Respect and Value',
      date: 'February 2024'
    },
    pt: {
      title: 'Código Legado: Razões para Respeitar e Valorizar',
      date: 'Fevereiro de 2024'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/remote-desktop.png',
    url: 'https://dev.to/kecbm/staircase-detail-112g',
    location: 'Dev.to',
    en: {
      title: 'Staircase detail',
      date: 'February 2024'
    },
    pt: {
      title: 'Staircase detail',
      date: 'Fevereiro de 2024'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/briefcase--v1.png',
    url: 'https://dev.to/kecbm/voce-deve-trabalhar-pra-voce-por-zarathon-viana-ldj',
    location: 'Dev.to',
    en: {
      title: 'You must work for yourself By Zarathon Viana',
      date: 'February 2024'
    },
    pt: {
      title: 'Você deve trabalhar pra você Por Zarathon Viana',
      date: 'Fevereiro de 2024'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/office.png',
    url: 'https://dev.to/kecbm/de-volta-ao-codigo-como-conquistei-minha-realocacao-no-mercado-de-tecnologia-4n5n',
    location: 'Dev.to',
    en: {
      title: 'Back to Code: How I Conquered My Relocation in the Technology Market',
      date: 'December 2023'
    },
    pt: {
      title: 'De Volta ao Código: Como Conquistei Minha Realocação no Mercado de Tecnologia',
      date: 'Dezembro de 2023'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/web.png',
    url: 'https://dev.to/kecbm/uncovering-the-react-universe-the-starter-guide-3jkf',
    location: 'Dev.to',
    en: {
      title: 'Uncovering the React Universe: The Starter Guide',
      date: 'November 2023'
    },
    pt: {
      title: 'Descobrindo o universo React: o guia para iniciantes',
      date: 'Novembro de 2023'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/hearing.png',
    url: 'https://dev.to/kecbm/the-power-of-active-listening-for-developers-2pd5',
    location: 'Dev.to',
    en: {
      title: 'The Power of Active Listening for Developers',
      date: 'November 2023'
    },
    pt: {
      title: 'O poder da escuta ativa para desenvolvedores',
      date: 'Novembro de 2023'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/book-shelf.png',
    url: 'https://br24.io/blog/playbook/',
    location: 'Br24',
    en: {
      title: 'Playbook: what it is, how to apply it, features and advantages',
      date: 'October 2023'
    },
    pt: {
      title: 'Playbook: o que é, como aplicar, funcionalidades e vantagens',
      date: 'Outubro de 2023'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/group-of-projects.png',
    url: 'https://br24.io/blog/cronograma-de-projeto/',
    location: 'Br24',
    en: {
      title: 'Project Schedule: what it is, how it works, how to set it up and advantages',
      date: 'September 2023'
    },
    pt: {
      title: 'Cronograma de Projeto: o que é, como funciona, como montar e vantagens',
      date: 'Setembro de 2023'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/graph.png',
    url: 'https://br24.io/blog/kpis/',
    location: 'Br24',
    en: {
      title: 'KPIs: what they are, what they are for, advantages and tips on how to apply',
      date: 'August 2023'
    },
    pt: {
      title: 'KPIs: o que são, para que servem, vantagens e dicas de como aplicar',
      date: 'Agosto de 2023'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/chatbot.png',
    url: 'https://br24.io/blog/chatgpt-entenda-como-funciona/',
    location: 'Br24',
    en: {
      title: 'What is ChatGPT: benefits, how it works and GPT-5 updates',
      date: 'July 2023'
    },
    pt: {
      title: 'O que é ChatGPT: benefícios, como funciona e atualizações GPT-5',
      date: 'Julho de 2023'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/books-1.png',
    url: 'https://dev.to/kecbm/como-otimizar-sua-semana-de-leitura-dicas-praticas-e-eficazes-480b',
    location: 'Dev.to',
    en: {
      title: 'How to optimize your reading week: practical and effective tips',
      date: 'June 2023'
    },
    pt: {
      title: 'Como otimizar sua semana de leitura: dicas práticas e eficazes',
      date: 'Junho de 2023'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/best-sales.png',
    url: 'https://br24.io/blog/controlar-meu-processo-de-vendas-com-bitrix24-crm/',
    location: 'Br24',
    en: {
      title: 'Sales CRM: benefits, how to use and differences of CRM Bitrix24',
      date: 'June 2023'
    },
    pt: {
      title: 'CRM de Vendas: benefícios, como utilizar e diferenciais do CRM Bitrix24',
      date: 'Junho de 2023'
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/my-computer.png',
    url: 'https://dev.to/kecbm/como-ser-um-dev-fora-da-curva-por-sseraphini-4og2',
    location: 'Dev.to',
    en: {
      title: 'How to be an out-of-the-box developer',
      date: 'April 2022'
    },
    pt: {
      title: 'Como ser uma pessoa desenvolvedora fora da curva',
      date: 'Abril de 2022'
    }
  }
];

export default blogPosts;
