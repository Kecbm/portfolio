import Codigo from '../assets/08.Codigo.png';
import Testes from '../assets/12.Testes.png';
import novoCodigo from '../assets/13.Codigo.png';
import outroCodigo from '../assets/19.Codigo.png';
import Docker from '../assets/24.Docker.png';
import Dados from '../assets/25.Dados.png';
import novosDados from '../assets/27.Dados.png';
import Api from '../assets/28.Api.png';
import Voto from '../assets/30.Voto.png';

const newProjects = [
  { image: Voto, title: "BBB", description: 'Simulação da recepção, anti-fraude, contagem e auditoria dos votos do BBB', github: 'https://github.com/Kecbm/live-20220530-sistema-votacao' },
  { image: Api, title: "API", description: 'Aplicação para cadastrar, visualizar, pesquisar, editar e excluir informações', github: 'https://github.com/Kecbm/talker-manager' },
  { image: novosDados, title: "SQL", description: 'Tabela normalizada e acesso as informações desta através de queries SQL', github: 'https://github.com/Kecbm/one-for-all' },
  { image: Dados, title: "MySQL", description: 'Pratica de conceitos de SQL, utilizando o banco de dados Northwind', github: 'https://github.com/Kecbm/all-for-one' },
  { image: Docker, title: "Docker", description: 'Criação de "Conteiners" para as aplicações de frontend, backend e testes', github: 'https://github.com/Kecbm/docker-todo-list' },
  { image: outroCodigo, title: "RTL", description: 'Nesse projeto eu escrevi testes para uma aplicação React', github: 'https://github.com/Kecbm/react-testing-library' },
  { image: novoCodigo, title: "HOF's", description: 'Utilização das Higher Order Functions para manipular e criar arrays', github: 'https://github.com/Kecbm/zoo-functions' },
  { image: Testes, title: 'Testes', description: 'Testes unitários para funções em JavaScript utilizando o Jest', github: 'https://github.com/Kecbm/js-unit-tests' },
  { image: Codigo, title: 'Funções', description: 'Algoritmos em JavaScript utilizando variáveis e tipos primitivos', github: 'https://github.com/Kecbm/playground-functions' },
];

export default newProjects;
