import Calculadora from '../assets/01.Calculadora.png';
import Conversor from '../assets/02.Conversor.png';
import Mentalista from '../assets/03.Mentalista.png';
import Livro from '../assets/04.Livro.png';
import Jogos from '../assets/04.Jogos.png';
import Futebol from '../assets/05.Futebol.png';
import Cartas from '../assets/06.Cartas.png';
import Licoes from '../assets/07.Licoes.png';
import Codigo from '../assets/08.Codigo.png';
import Arte from '../assets/09.Arte.png';
import ListaTarefas from '../assets/10.Lista.png';
import Formulario from '../assets/11.Formulario.png';
import Testes from '../assets/12.Testes.png';
import novoCodigo from '../assets/13.Codigo.png';
import Loja from '../assets/14.Loja.png';
import Planeta from '../assets/15.Planeta.png';
import novoJogo from '../assets/16.Jogo.png';
import Musica from '../assets/17.Musica.png';
import Carrinho from '../assets/18.Carrinho.png';
import outroCodigo from '../assets/19.Codigo.png';
import Carteira from '../assets/20.Carteira.png';
import outroJogo from '../assets/21.Jogo.png';
import Star from '../assets/22.Star.png';
import Lista from '../assets/23.Lista.png';
import Docker from '../assets/24.Docker.png';
import Dados from '../assets/25.Dados.png';
import Questao from '../assets/26.Questao.png';
import novosDados from '../assets/27.Dados.png';
import Api from '../assets/28.Api.png';
import Voto from '../assets/30.Voto.png';
import Servidor from '../assets/31.Servidor.png';
import Csharp from "../assets/32.Csharp.png";
import Escrever from '../assets/33.Escrever.png';
import Bicicleta from '../assets/34.Bicicleta.png';
import Medieval from '../assets/35.Medieval.png';
import Dragao from '../assets/36.Dragao.png';
import Acoes from '../assets/37.Acoes.png';
import Twitter from '../assets/38.Twitter.png';
import CRM from '../assets/39.CRM.png';
import BlogPost from '../assets/40.BlogPost.png';
import Estadio from '../assets/41.Estadio.png';
import Cesta from '../assets/42.Cesta.png';
import Venda from '../assets/43.Venda.png';
import Cerveja from '../assets/44.Cerveja.png';

const projects = [
  { isSideProject: true, image: 'https://img.icons8.com/stickers/100/chicken.png', title: 'Rinha de backend', description: 'Lista de participantes, Top 10, vencedor, ranking das linguagens e forks', deploy: 'https://rinhadebackend.vercel.app/', github: 'https://github.com/Kecbm/rinhadebackend' },
  { isSideProject: true, image: 'https://img.icons8.com/stickers/100/fire-alt.png', title: 'Treta Dev', description: 'Explore as tretas da Bolha Dev, fique por dentro das novidades e filtre por temas', deploy: 'https://tretadev.vercel.app/', github: 'https://github.com/Kecbm/tretadev' },
  { image: 'https://img.icons8.com/stickers/100/maneki.png', title: 'Cat API', description: 'Validações de dados recebidos da The Cat API com Zod no frontend', deploy: 'https://apicat.vercel.app/', github: 'https://github.com/Kecbm/the-cat-api' },
  { image: Questao, title: 'Wordle', description: 'Jogo de adivinhação de uma palavra aleatória, semelhante ao Termoo', deploy: 'https://wordle-kecbm.vercel.app/', github: 'https://github.com/Kecbm/wordle' },
  { image: outroJogo, title: 'Trivia', description: 'Um jogo de perguntas e respostas baseado no jogo show do milhão', deploy: 'https://trivia-kecbm.vercel.app/', github: 'https://github.com/Kecbm/trivia' },
  { image: Carteira, title: 'Wallet', description: 'Uma carteira onde você pode controlar seus gastos e converter moedas', deploy: 'https://trybewallet-kecbm.vercel.app/', github: 'https://github.com/Kecbm/trybewallet' },
  { image: Carrinho, title: 'Online store', description: 'Pesquise produtos por termos e categorias a partir da API do Mercado Livre', deploy: 'https://frontend-online-store-kecbm.vercel.app/', github: 'https://github.com/Kecbm/frontend-online-store' },
  { image: Musica, title: 'Trybetunes', description: 'Aplicação para reproduzir músicas, criar uma lista de favoritas e salvar seu perfil', deploy: 'https://trybetunes-kecbm.vercel.app/', github: 'https://github.com/Kecbm/trybetunes' },
  { image: novoJogo, title: 'Tryunfo', description: 'Página construida alterando o estado de um componente e atualizando-o no browser', deploy: 'https://tryunfo-kecbm.vercel.app/', github: 'https://github.com/Kecbm/tryunfo' },
  { image: Planeta, title: 'Planetas', description: 'Aplicação desenvolvida utilizando componentes de classe em React', deploy: 'https://solar-system-kecbm.vercel.app/', github: 'https://github.com/Kecbm/solar-system' },
  { image: Loja, title: 'Shopping', description: 'Página construida com requisições a uma API do Mercado Livre', deploy: 'https://shopping-cart-kecbm.vercel.app/', github: 'https://github.com/Kecbm/shopping-cart' },
  { image: Formulario, title: 'Trybewarts', description: 'Formulários em HTML e CSS Flexbox para criar layouts flexíveis', deploy: 'https://kecbm.github.io/trybewarts/', github: 'https://github.com/Kecbm/trybewarts' },
  { image: ListaTarefas, title: 'Todo list', description: 'Aplicação que simula uma lista de tarefas utilizando HTML, CSS e JavaScript', deploy: 'https://kecbm.github.io/todo-list/', github: 'https://github.com/Kecbm/todo-list' },
  { image: Arte, title: 'Pixels art', description: 'Paleta de cores funcional desenvolvida com HTML, CSS e JavaScript', deploy: 'https://kecbm.github.io/pixels-art/', github: 'https://github.com/Kecbm/pixels-art' },
  { image: Licoes, title: 'Lições', description: 'Meus primeiros passos no estudo de desenvolvimento web', deploy: 'https://kecbm.github.io/lessons-learned/', github: 'https://github.com/Kecbm/lessons-learned' },
  { image: Cartas, title: 'YU-GI-OH!', description: 'Aplicação que simula a jogabilidade do famoso jogo de cartas YU-GI-OH!', deploy: 'https://codepen.io/klecianny-melo/pen/yLXqXRN', github: 'https://codepen.io/klecianny-melo/pen/yLXqXRN' },
  { image: Futebol, title: 'Brasileirão', description: 'Tabela de pontuação dos times participantes do Brasileirão 2021', deploy: 'https://codepen.io/klecianny-melo/pen/BaZxmzb', github: 'https://codepen.io/klecianny-melo/pen/BaZxmzb' },
  { image: Jogos, title: 'Jogos', description: 'Aplicação para adicionar imagens dos seus jogos favoritos', deploy: 'https://codepen.io/klecianny-melo/pen/powaWQg', github: 'https://codepen.io/klecianny-melo/pen/powaWQg' },
  { image: Livro, title: 'Livros', description: 'Minha lista de cerca de 70 livros lidos no período de 2019 á 2021', deploy: 'https://codepen.io/klecianny-melo/pen/dyRJqbY', github: 'https://codepen.io/klecianny-melo/pen/dyRJqbY' },
  { image: Mentalista, title: 'Mentalista', description: 'Jogo onde o usuário deve adivinhar um número aleatório entre 0 e 10', deploy: 'https://codepen.io/klecianny-melo/pen/GREydvM', github: 'https://codepen.io/klecianny-melo/pen/GREydvM' },
  { image: Conversor, title: 'Conversor', description: 'Aplicação que converte qualquer valor de real para bitcoin', deploy: 'https://codepen.io/klecianny-melo/pen/qBjVwoR', github: 'https://codepen.io/klecianny-melo/pen/qBjVwoR' },
  { image: Calculadora, title: 'Calculadora', description: 'Calculadora que recebe notas e informa a média escolar de um usuário', deploy: 'https://codepen.io/klecianny-melo/pen/bGRYLME', github: 'https://codepen.io/klecianny-melo/pen/bGRYLME' },
  { image: Cerveja, title: "Delivery APP", description: 'Aplicação Full Stack de uma plataforma de delivery de cerveja', github: 'https://github.com/Kecbm/delivery-app' },
  { image: Venda, title: "Car Shop", description: 'API em TypeScript com CRUD de veículo e testes das camadas MSC', github: 'https://github.com/Kecbm/car-shop' },
  { image: Cesta, title: "Commerce", description: 'Queries para realizar consultas a um banco de dados MongoDB', github: 'https://github.com/Kecbm/commerce' },
  { image: Estadio, title: "TFC", description: 'Aplicação full stack com uma API em TypeScript para um site informativo de futebol', github: 'https://github.com/Kecbm/tfc' },
  { image: BlogPost, title: "Meus Blog Posts", description: 'Repositório destinado a documentar todos os meus Blog Posts', github: 'https://github.com/Kecbm/blog-posts' },
  { image: CRM, title: "CRM", description: 'CRUD full stack de empresas utilizando React no frontend e PHP no backend', github: 'https://github.com/Kecbm/react-php' },
  { image: Twitter, title: "Tryitter", description: 'Rede social onde alunos de tecnologia podem se comunicar', github: 'https://github.com/Kecbm/Tryitter' },
  { image: Acoes, title: "API finance", description: 'API que simula uma corretora de ações, com venda e compra de ativos', github: 'https://github.com/Kecbm/api-finance' },
  { image: Dragao, title: "Dragons", description: 'Aplicação dos princípios de arquitetura SOLID e POO em uma estrutura de jogos RPG', github: 'https://github.com/Kecbm/trybers-and-dragons' },
  { image: Medieval, title: "Medieval Store", description: 'API utilizando Typescript e a arquitetura MSC (Models, Service e Controllers)', github: 'https://github.com/Kecbm/trybesmith' },
  { image: Bicicleta, title: 'Stranger Things', description: 'Deploy de uma aplicação frontend React e backend Node no Heroku', github: 'https://github.com/Kecbm/stranger-things-backend' },
  { image: Escrever, title: "Blogs API", description: 'API em Node.js utilizando o pacote sequelize para criação do banco de dados', github: 'https://github.com/Kecbm/blogs-api' },
  { image: Csharp, title: "C sharp", description: 'Primeiros passos, lógica e dados com C# na Microsoft learn', github: 'https://github.com/Kecbm/c-sharp' },
  { image: Servidor, title: "Store", description: 'API no padrão REST com testes unitários das camadas MSC (Models, Service e Controllers)', github: 'https://github.com/Kecbm/store-manager' },
  { image: Voto, title: "BBB", description: 'Simulação da recepção, anti-fraude, contagem e auditoria dos votos do BBB', github: 'https://github.com/Kecbm/live-20220530-sistema-votacao' },
  { image: Api, title: "API", description: 'Aplicação para cadastrar, visualizar, pesquisar, editar e excluir informações', github: 'https://github.com/Kecbm/talker-manager' },
  { image: novosDados, title: "SQL", description: 'Tabela normalizada e acesso as informações desta através de queries SQL', github: 'https://github.com/Kecbm/one-for-all' },
  { image: Dados, title: "MySQL", description: 'Pratica de conceitos de SQL, utilizando o banco de dados Northwind', github: 'https://github.com/Kecbm/all-for-one' },
  { image: Docker, title: "Docker", description: 'Criação de "Conteiners" para as aplicações de frontend, backend e testes', github: 'https://github.com/Kecbm/docker-todo-list' },
  { image: Lista, title: "Recipes", description: 'Ver, buscar, filtrar, favoritar e acompanhar a preparação de receitas e drinks! ', github: 'https://github.com/Kecbm/recipes-app' },
  { image: Star, title: 'StarWars', description: 'Lista com filtros de planetas do universo de Star Wars usando Context API e Hooks', github: 'https://github.com/Kecbm/StarWars' },
  { image: outroCodigo, title: "RTL", description: 'Nesse projeto foi desenvolvido testes para uma aplicação React', github: 'https://github.com/Kecbm/react-testing-library' },
  { image: novoCodigo, title: "HOF's", description: 'Utilização das Higher Order Functions para manipular e criar arrays', github: 'https://github.com/Kecbm/zoo-functions' },
  { image: Testes, title: 'Testes', description: 'Testes unitários construídos para funções em JavaScript utilizando o Jest', github: 'https://github.com/Kecbm/js-unit-tests' },
  { image: Codigo, title: 'Funções', description: 'Algoritmos em JavaScript utilizando variáveis e tipos primitivos', github: 'https://github.com/Kecbm/playground-functions' },
];

export default projects;
