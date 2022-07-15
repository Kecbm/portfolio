import Calculadora from '../assets/01.Calculadora.png';
import Conversor from '../assets/02.Conversor.png';
import Mentalista from '../assets/03.Mentalista.png';
import Livro from '../assets/04.Livro.png';
import Jogos from '../assets/04.Jogos.png';
import Futebol from '../assets/05.Futebol.png';
import Cartas from '../assets/06.Cartas.png';
import Licoes from '../assets/07.Licoes.png';
import Arte from '../assets/09.Arte.png';
import Lista from '../assets/10.Lista.png';
import Formulario from '../assets/11.Formulario.png';
import Loja from '../assets/14.Loja.png';
import Planeta from '../assets/15.Planeta.png';
import novoJogo from '../assets/16.Jogo.png';
import Musica from '../assets/17.Musica.png';
import Carrinho from '../assets/18.Carrinho.png';
import Carteira from '../assets/20.Carteira.png';
import outroJogo from '../assets/21.Jogo.png';
import Star from '../assets/22.Star.png';
import Questao from '../assets/26.Questao.png';
import Bicicleta from '../assets/34.Bicicleta.png';

const projects = [
  { image: Bicicleta, title: 'Stranger Things', description: 'Deploy de uma aplicação frontend React e backend Node no Heroku', deploy: 'https://kecbm-pd.herokuapp.com/', github: 'https://github.com/Kecbm/stranger-things-backend' },
  { image: Questao, title: 'Wordle', description: 'Jogo de adivinhação de uma palavra aleatória, semelhante ao Termoo', deploy: 'https://wordle-kecbm.vercel.app/', github: 'https://github.com/Kecbm/wordle' },
  { image: Star, title: 'StarWars', description: 'Lista com filtros de planetas do universo de Star Wars usando Context API e Hooks', deploy: 'https://star-wars-kecbm.vercel.app/', github: 'https://github.com/Kecbm/StarWars' },
  { image: outroJogo, title: 'Trivia', description: 'Um jogo de perguntas e respostas baseado no jogo show do milhão', deploy: 'https://trivia-kecbm.vercel.app/', github: 'https://github.com/Kecbm/trivia' },
  { image: Carteira, title: 'Wallet', description: 'Uma carteira onde você pode controlar seus gastos e converter moedas', deploy: 'https://trybewallet-kecbm.vercel.app/', github: 'https://github.com/Kecbm/trybewallet' },
  { image: Carrinho, title: 'Online store', description: 'Pesquise produtos por termos e categorias a partir da API do Mercado Livre', deploy: 'https://frontend-online-store-kecbm.vercel.app/', github: 'https://github.com/Kecbm/frontend-online-store' },
  { image: Musica, title: 'Trybetunes', description: 'Aplicação para reproduzir músicas, criar uma lista de favoritas e salvar seu perfil', deploy: 'https://trybetunes-kecbm.vercel.app/', github: 'https://github.com/Kecbm/trybetunes' },
  { image: novoJogo, title: 'Tryunfo', description: 'Página construida alterando o estado de um componente e atualizndo-o no browser', deploy: 'https://tryunfo-kecbm.vercel.app/', github: 'https://github.com/Kecbm/tryunfo' },
  { image: Planeta, title: 'Planetas', description: 'Aplicação desenvolvida utilizando componentes de classe em React', deploy: 'https://solar-system-kecbm.vercel.app/', github: 'https://github.com/Kecbm/solar-system' },
  { image: Loja, title: 'Shopping', description: 'Página construida com requisições a uma API do Mercado Livre', deploy: 'https://shopping-cart-kecbm.vercel.app/', github: 'https://github.com/Kecbm/shopping-cart' },
  { image: Formulario, title: 'Trybewarts', description: 'Formulários em HTML e CSS Flexbox para criar layouts flexíveis', deploy: 'https://kecbm.github.io/trybewarts/', github: 'https://github.com/Kecbm/trybewarts' },
  { image: Lista, title: 'Todo list', description: 'Aplicação que simula uma lista de tarefas utilizando HTML, CSS e JavaScript', deploy: 'https://kecbm.github.io/todo-list/', github: 'https://github.com/Kecbm/todo-list' },
  { image: Arte, title: 'Pixels art', description: 'Paleta de cores funcional desenvolvida com HTML, CSS e JavaScript', deploy: 'https://kecbm.github.io/pixels-art/', github: 'https://github.com/Kecbm/pixels-art' },
  { image: Licoes, title: 'Lições', description: 'Meus primeiros passos no estudo de desenvolvimento web', deploy: 'https://kecbm.github.io/lessons-learned/', github: 'https://github.com/Kecbm/lessons-learned' },
  { image: Cartas, title: 'YU-GI-OH!', description: 'Aplicação que simula a jogabilidade do famoso jogo de cartas YU-GI-OH!', deploy: 'https://codepen.io/klecianny-melo/pen/yLXqXRN', github: 'https://codepen.io/klecianny-melo/pen/yLXqXRN' },
  { image: Futebol, title: 'Brasileirão', description: 'Tabela de pontuação dos times participantes do Brasileirão 2021', deploy: 'https://codepen.io/klecianny-melo/pen/BaZxmzb', github: 'https://codepen.io/klecianny-melo/pen/BaZxmzb' },
  { image: Jogos, title: 'Jogos', description: 'Aplicação para adicionar imagens dos seus jogos favoritos', deploy: 'https://codepen.io/klecianny-melo/pen/powaWQg', github: 'https://codepen.io/klecianny-melo/pen/powaWQg' },
  { image: Livro, title: 'Livros', description: 'Minha lista de cerca de 70 livros lidos no período de 2019 á 2021', deploy: 'https://codepen.io/klecianny-melo/pen/dyRJqbY', github: 'https://codepen.io/klecianny-melo/pen/dyRJqbY' },
  { image: Mentalista, title: 'Mentalista', description: 'Jogo onde o usuário deve adivinhar um número aleatório entre 0 e 10', deploy: 'https://codepen.io/klecianny-melo/pen/GREydvM', github: 'https://codepen.io/klecianny-melo/pen/GREydvM' },
  { image: Conversor, title: 'Conversor', description: 'Aplicação que converte qualquer valor de real para bitcoin', deploy: 'https://codepen.io/klecianny-melo/pen/qBjVwoR', github: 'https://codepen.io/klecianny-melo/pen/qBjVwoR' },
  { image: Calculadora, title: 'Calculadora', description: 'Calculadora que recebe notas e informa a média escolar de um usuário', deploy: 'https://codepen.io/klecianny-melo/pen/bGRYLME', github: 'https://codepen.io/klecianny-melo/pen/bGRYLME' }
];

export default projects;
