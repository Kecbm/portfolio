const projects = [
  {
    isSideProject: true,
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/charity.png',
    deploy: 'https://sos-enchentes.vercel.app/',
    github: 'https://github.com/sidssouza/sos-enchentes',
    en: {
      title: 'SOS Floods',
      description: 'Pop-up and fixed element for Vakinha SOS Enchentes Rio Grande do Sul',
    },
    pt: {
      title: 'SOS Enchentes',
      description: 'Pop-up e elemento fixo pra Vakinha SOS Enchentes Rio Grande do Sul',
    }
  },
  {
    isSideProject: true,
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/overview-pages-2.png',
    deploy: 'https://viewerjson.vercel.app/',
    github: 'https://github.com/Kecbm/viewer-json',
    en: {
      title: 'JSON Viewer',
      description: 'Accessible website where you upload and view JSON files simply and quickly',
    },
    pt: {
      title: 'Visualizador de JSON',
      description: 'Site acessível onde você carrega e visualiza arquivos JSON de forma simples e rápida',
    }
  },
  {
    isSideProject: true,
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/chicken.png',
    deploy: 'https://rinhadebackend.vercel.app/',
    github: 'https://github.com/Kecbm/rinhadebackend',
    en: {
      title: 'Backend Rinha',
      description: 'List of participants, Top 10, winner, ranking of languages and forks',
    },
    pt: {
      title: 'Rinha de backend',
      description: 'Lista de participantes, Top 10, vencedor, ranking das linguagens e forks',
    }
  },
  { 
    isSideProject: true,
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/fire-alt.png',
    deploy: 'https://tretadev.vercel.app/',
    github: 'https://github.com/Kecbm/tretadev',
    en: {
      title: 'Treta Dev',
      description: 'Explore the Dev Bubble bullshit, stay up to date with news and filter by themes',
    },
    pt: {
      title: 'Treta Dev',
      description: 'Explore as tretas da Bolha Dev, fique por dentro das novidades e filtre por temas',
    }
  },
  { 
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/joystick.png',
    deploy: 'https://trivia-kecbm.vercel.app/',
    github: 'https://github.com/Kecbm/trivia',
    en: {
      title: 'Trivia',
      description: 'A question and answer game based on the million show game',
    },
    pt: {
      title: 'Trivia',
      description: 'Um jogo de perguntas e respostas baseado no jogo show do milhão',
    }
  },
  { 
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/wallet.png',
    deploy: 'https://trybewallet-kecbm.vercel.app/',
    github: 'https://github.com/Kecbm/trybewallet',
    en: {
      title: 'Wallet',
      description: 'A wallet where you can control your spending and convert currencies',
    },
    pt: {
      title: 'Wallet',
      description: 'Uma carteira onde você pode controlar seus gastos e converter moedas',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/shopping-cart.png',
    deploy: 'https://frontend-online-store-kecbm.vercel.app/',
    github: 'https://github.com/Kecbm/frontend-online-store',
    en: {
      title: 'Online store',
      description: 'Search for products by terms and categories using the Mercado Livre API',
    },
    pt: {
      title: 'Online store',
      description: 'Pesquise produtos por termos e categorias a partir da API do Mercado Livre',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/music-library.png',
    deploy: 'https://trybetunes-kecbm.vercel.app/',
    github: 'https://github.com/Kecbm/trybetunes',
    en: {
      title: 'Trybetunes',
      description: 'Application to play music, create a favorites list and save your profile',
    },
    pt: {
      title: 'Trybetunes',
      description: 'Aplicação para reproduzir músicas, criar uma lista de favoritas e salvar seu perfil',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/controller.png',
    deploy: 'https://tryunfo-kecbm.vercel.app/',
    github: 'https://github.com/Kecbm/tryunfo',
    en: {
      title: 'Tryunfo',
      description: 'Page built by changing the state of a component and updating it in the browser',
    },
    pt: {
      title: 'Tryunfo',
      description: 'Página construida alterando o estado de um componente e atualizando-o no browser',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/planet.png',
    deploy: 'https://solar-system-kecbm.vercel.app/',
    github: 'https://github.com/Kecbm/solar-system',
    en: {
      title: 'Planets',
      description: 'Application frontend developed using class components in React',
    },
    pt: {
      title: 'Planetas',
      description: 'Aplicação desenvolvida utilizando componentes de classe em React',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/shop--v1.png',
    deploy: 'https://shopping-cart-kecbm.vercel.app/',
    github: 'https://github.com/Kecbm/shopping-cart',
    en: {
      title: 'Shopping',
      description: 'Web page built with requests to a Mercado Livre API',
    },
    pt: {
      title: 'Shopping',
      description: 'Página construida com requisições a uma API do Mercado Livre',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/inscription.png',
    deploy: 'https://kecbm.github.io/trybewarts/',
    github: 'https://github.com/Kecbm/trybewarts',
    en: {
      title: 'Trybewarts',
      description: 'Flexbox HTML and CSS forms to create flexible layouts',
    },
    pt: {
      title: 'Trybewarts',
      description: 'Formulários em HTML e CSS Flexbox para criar layouts flexíveis',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/shortlist.png',
    deploy: 'https://kecbm.github.io/todo-list/',
    github: 'https://github.com/Kecbm/todo-list',
    en: {
      title: 'Todo list',
      description: 'Application that simulates a to-do list using HTML, CSS and JavaScript',
    },
    pt: {
      title: 'Todo list',
      description: 'Aplicação que simula uma lista de tarefas utilizando HTML, CSS e JavaScript',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/paint-palette-with-brush.png',
    deploy: 'https://kecbm.github.io/pixels-art/',
    github: 'https://github.com/Kecbm/pixels-art',
    en: {
      title: 'Pixels art',
      description: 'Functional color palette built with HTML, CSS and JavaScript',
    },
    pt: {
      title: 'Pixels art',
      description: 'Paleta de cores funcional desenvolvida com HTML, CSS e JavaScript',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/maneki.png',
    deploy: 'https://apicat.vercel.app/',
    github: 'https://github.com/Kecbm/the-cat-api',
    en: {
      title: 'Cat API',
      description: 'Validations of data received from The Cat API with Zod on the frontend',
    },
    pt: {
      title: 'Cat API',
      description: 'Validações de dados recebidos da The Cat API com Zod no frontend',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/monospaced-font.png',
    deploy: 'https://wordle-kecbm.vercel.app/',
    github: 'https://github.com/Kecbm/wordle',
    en: {
      title: 'Wordle',
      description: 'Random word guessing game, similar to Termoo',
    },
    pt: {
      title: 'Wordle',
      description: 'Jogo de adivinhação de uma palavra aleatória, semelhante ao Termoo',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/abc.png',
    deploy: 'https://kecbm.github.io/lessons-learned/',
    github: 'https://github.com/Kecbm/lessons-learned',
    en: {
      title: 'Lessons',
      description: 'My first steps in studying web development',
    },
    pt: {
      title: 'Lições',
      description: 'Meus primeiros passos no estudo de desenvolvimento web',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/cards.png',
    deploy: 'https://codepen.io/klecianny-melo/pen/yLXqXRN',
    github: 'https://codepen.io/klecianny-melo/pen/yLXqXRN',
    en: {
      title: 'YU-GI-OH!',
      description: 'Application that simulates the gameplay of the famous card game YU-GI-OH!',
    },
    pt: {
      title: 'YU-GI-OH!',
      description: 'Aplicação que simula a jogabilidade do famoso jogo de cartas YU-GI-OH!',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/stadium.png',
    deploy: 'https://codepen.io/klecianny-melo/pen/BaZxmzb',
    github: 'https://codepen.io/klecianny-melo/pen/BaZxmzb',
    en: {
      title: 'Brasileirão',
      description: 'Score table of teams participating in Brasileirão 2021',
    },
    pt: {
      title: 'Brasileirão',
      description: 'Tabela de pontuação dos times participantes do Brasileirão 2021',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/games-folder.png',
    deploy: 'https://codepen.io/klecianny-melo/pen/powaWQg',
    github: 'https://codepen.io/klecianny-melo/pen/powaWQg',
    en: {
      title: 'Games',
      description: 'Application to add images of your favorite games',
    },
    pt: {
      title: 'Jogos',
      description: 'Aplicação para adicionar imagens dos seus jogos favoritos',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/literature.png',
    deploy: 'https://codepen.io/klecianny-melo/pen/dyRJqbY',
    github: 'https://codepen.io/klecianny-melo/pen/dyRJqbY',
    en: {
      title: 'Books',
      description: 'My list of around 70 books read from 2019 to 2021',
    },
    pt: {
      title: 'Livros',
      description: 'Minha lista de cerca de 70 livros lidos no período de 2019 á 2021',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/question-mark.png',
    deploy: 'https://codepen.io/klecianny-melo/pen/GREydvM',
    github: 'https://codepen.io/klecianny-melo/pen/GREydvM',
    en: {
      title: 'Mentalist',
      description: 'Game where the user must guess a random number between 0 and 10',
    },
    pt: {
      title: 'Mentalista',
      description: 'Jogo onde o usuário deve adivinhar um número aleatório entre 0 e 10',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/euro-exchange.png',
    deploy: 'https://codepen.io/klecianny-melo/pen/qBjVwoR',
    github: 'https://codepen.io/klecianny-melo/pen/qBjVwoR',
    en: {
      title: 'Converter',
      description: 'Application that converts any value from reais to Bitcoin',
    },
    pt: {
      title: 'Conversor',
      description: 'Aplicação que converte qualquer valor de real para Bitcoin',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/calculator--v1.png',
    deploy: 'https://codepen.io/klecianny-melo/pen/bGRYLME',
    github: 'https://codepen.io/klecianny-melo/pen/bGRYLME',
    en: {
      title: 'Calculator',
      description: 'Calculator that receives grades and informs a user academic average',
    },
    pt: {
      title: 'Calculadora',
      description: 'Calculadora que recebe notas e informa a média escolar de um usuário',
    }
  },
  {
    type: 'design',
    image: 'https://img.icons8.com/stickers/100/employee-card--v1.png',
    github: 'https://www.figma.com/community/file/1296913985805167955/cards?fuid=1071152937439462429',
    en: {
      title: 'Cards',
      description: 'My first UI Design project where I developed 4 types of cards',
    },
    pt: {
      title: 'Cards',
      description: 'Meu primeiro projeto de UI Design onde desenvolvi 4 tipos de cards',
    }
  },
  {
    type: 'frontend, backend, full stack',
    image: 'https://img.icons8.com/stickers/100/beer.png',
    github: 'https://github.com/Kecbm/delivery-app',
    en: {
      title: 'Delivery APP',
      description: 'Full Stack application of a beer delivery platform',
    },
    pt: {
      title: 'Delivery APP',
      description: 'Aplicação Full Stack de uma plataforma de delivery de cerveja',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/traffic-jam.png',
    github: 'https://github.com/Kecbm/car-shop',
    en: {
      title: 'Car Shop',
      description: 'API in TypeScript with vehicle CRUD and MSC layer tests',
    },
    pt: {
      title: 'Car Shop',
      description: 'API em TypeScript com CRUD de veículo e testes das camadas MSC',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/add-basket.png',
    github: 'https://github.com/Kecbm/commerce',
    en: {
      title: 'Commerce',
      description: 'Queries to query a MongoDB database',
    },
    pt: {
      title: 'Commerce',
      description: 'Queries para realizar consultas a um banco de dados MongoDB',
    }
  },
  {
    type: 'frontend, backend, full stack',
    image: 'https://img.icons8.com/stickers/100/stadium-.png',
    github: 'https://github.com/Kecbm/tfc',
    en: {
      title: 'TFC',
      description: 'Full stack application with a TypeScript API for an informative football website',
    },
    pt: {
      title: 'TFC',
      description: 'Aplicação full stack com uma API em TypeScript para um site informativo de futebol',
    }
  },
  {
    type: 'frontend, backend, full stack',
    image: 'https://img.icons8.com/stickers/100/device-shop.png',
    github: 'https://github.com/Kecbm/react-php',
    en: {
      title: 'CRM',
      description: 'CRUD full stack for companies using React on the frontend and PHP on the backend',
    },
    pt: {
      title: 'CRM',
      description: 'CRUD full stack de empresas utilizando React no frontend e PHP no backend',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/twitter.png',
    github: 'https://github.com/Kecbm/Tryitter',
    en: {
      title: 'Tryitter',
      description: 'Social network where technology students can communicate',
    },
    pt: {
      title: 'Tryitter',
      description: 'Rede social onde alunos de tecnologia podem se comunicar',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/candle-sticks.png',
    github: 'https://github.com/Kecbm/api-finance',
    en: {
      title: 'API finance',
      description: 'API that simulates a stock brokerage, with the sale and purchase of assets',
    },
    pt: {
      title: 'API finance',
      description: 'API que simula uma corretora de ações, com venda e compra de ativos',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/european-dragon.png',
    github: 'https://github.com/Kecbm/trybers-and-dragons',
    en: {
      title: 'Dragons',
      description: 'Application of SOLID and POO architecture principles in an RPG game structure',
    },
    pt: {
      title: 'Dragons',
      description: 'Aplicação dos princípios de arquitetura SOLID e POO em uma estrutura de jogos RPG',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/castle.png',
    github: 'https://github.com/Kecbm/trybesmith',
    en: {
      title: 'Medieval Store',
      description: 'API using Typescript and the MSC architecture (Models, Service and Controllers)',
    },
    pt: {
      title: 'Medieval Store',
      description: 'API utilizando Typescript e a arquitetura MSC (Models, Service e Controllers)',
    }
  },
  {
    type: 'frontend, backend, full stack',
    image: 'https://img.icons8.com/stickers/100/bicycle.png',
    github: 'https://github.com/Kecbm/stranger-things-backend',
    en: {
      title: 'Stranger Things',
      description: 'Deploy a React frontend application and Node backend on Heroku',
    },
    pt: {
      title: 'Stranger Things',
      description: 'Deploy de uma aplicação frontend React e backend Node no Heroku',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/typewriter-with-paper.png',
    github: 'https://github.com/Kecbm/blogs-api',
    en: {
      title: 'Blogs API',
      description: 'API in Node.js using the sequelize package to create the database',
    },
    pt: {
      title: 'Blogs API',
      description: 'API em Node.js utilizando o pacote sequelize para criação do banco de dados',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/source-code.png',
    github: 'https://github.com/Kecbm/c-sharp',
    en: {
      title: 'C sharp',
      description: 'Get started, logic and data with C# on Microsoft learn',
    },
    pt: {
      title: 'C sharp',
      description: 'Primeiros passos, lógica e dados com C# na Microsoft learn',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/server.png',
    github: 'https://github.com/Kecbm/store-manager',
    en: {
      title: 'Store',
      description: 'API in the REST standard with unit tests of the MSC layers (Models, Service and Controllers)',
    },
    pt: {
      title: 'Store',
      description: 'API no padrão REST com testes unitários das camadas MSC (Models, Service e Controllers)',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/elections.png',
    github: 'https://github.com/Kecbm/live-20220530-sistema-votacao',
    en: {
      title: 'BBB',
      description: 'Simulation of reception, anti-fraud, counting and auditing of BBB votes',
    },
    pt: {
      title: 'BBB',
      description: 'Simulação da recepção, anti-fraude, contagem e auditoria dos votos do BBB',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/api-settings.png',
    github: 'https://github.com/Kecbm/talker-manager',
    en: {
      title: 'API',
      description: 'Application to register, view, search, edit and delete information',
    },
    pt: {
      title: 'API',
      description: 'Aplicação para cadastrar, visualizar, pesquisar, editar e excluir informações',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/venn-diagram.png',
    github: 'https://github.com/Kecbm/one-for-all',
    en: {
      title: 'SQL',
      description: 'Standardized table and access to its information through SQL queries',
    },
    pt: {
      title: 'SQL',
      description: 'Tabela normalizada e acesso as informações desta através de queries SQL',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/combo-chart.png',
    github: 'https://github.com/Kecbm/all-for-one',
    en: {
      title: 'MySQL',
      description: 'Practice SQL concepts using the Northwind database',
    },
    pt: {
      title: 'MySQL',
      description: 'Pratica de conceitos de SQL, utilizando o banco de dados Northwind',
    }
  },
  {
    type: 'backend',
    image: 'https://img.icons8.com/stickers/100/storage_1.png',
    github: 'https://github.com/Kecbm/docker-todo-list',
    en: {
      title: 'Docker',
      description: 'Creation of "Containers" for front end, back end and testing applications',
    },
    pt: {
      title: 'Docker',
      description: 'Criação de "Conteiners" para as aplicações de frontend, backend e testes',
    }
  },
  {
    type: 'frontend, backend, full stack',
    image: 'https://img.icons8.com/stickers/100/cooking-book.png',
    github: 'https://github.com/Kecbm/recipes-app',
    en: {
      title: 'Recipes',
      description: 'View, search, filter, favorite and monitor the preparation of recipes and drinks!',
    },
    pt: {
      title: 'Recipes',
      description: 'Ver, buscar, filtrar, favoritar e acompanhar a preparação de receitas e drinks!',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/r2-d2.png',
    github: 'https://github.com/Kecbm/StarWars',
    en: {
      title: 'StarWars',
      description: 'List with filters of planets from the Star Wars universe using Context API and Hooks',
    },
    pt: {
      title: 'StarWars',
      description: 'Lista com filtros de planetas do universo de Star Wars usando Context API e Hooks',
    }
  },
  {
    type: 'frontend',
    image: 'https://img.icons8.com/stickers/100/placeholder-thumbnail-xml.png',
    github: 'https://github.com/Kecbm/react-testing-library',
    en: {
      title: 'RTL',
      description: 'In this project, tests were developed for a React application',
    },
    pt: {
      title: 'RTL',
      description: 'Nesse projeto foi desenvolvido testes para uma aplicação React',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/binary-file.png',
    github: 'https://github.com/Kecbm/zoo-functions',
    en: {
      title: "HOF's",
      description: 'Using Higher Order Functions to manipulate and create arrays',
    },
    pt: {
      title: "HOF's",
      description: 'Utilização das Higher Order Functions para manipular e criar arrays',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/test-tube.png',
    github: 'https://github.com/Kecbm/js-unit-tests',
    en: {
      title: 'Tests',
      description: 'Unit tests built for JavaScript functions using Jest',
    },
    pt: {
      title: 'Testes',
      description: 'Testes unitários construídos para funções em JavaScript utilizando o Jest',
    }
  },
  {
    image: 'https://img.icons8.com/stickers/100/code.png',
    github: 'https://github.com/Kecbm/playground-functions',
    en: {
      title: 'Functions',
      description: 'Algorithms in JavaScript using variables and primitive types',
    },
    pt: {
      title: 'Funções',
      description: 'Algoritmos em JavaScript utilizando variáveis e tipos primitivos',
    }
  },
];

export default projects;
