# Aula 27 - Angular

- Angular é uma plataforma e framework para construção da interface de aplicações usando HTML, CSS e, principalmente, JavaScript, criada pelos desenvolvedores da Google. Possui alguns elementos básicos que tornam essa construção interessante. Dentre os principais, podemos destacar os componentes, templates, diretivas, roteamento, módulos, serviços, injeção de dependências e ferramentas de infraestrutura que automatizam tarefas, como a de executar os testes unitários de uma aplicação. Alguns outros pontos dessa plataforma que merecem destaque são o fato de que ela é open source, possui uma grande comunidade, existem várias empresas utilizando e tem muito material de estudo para quem deseja se aperfeiçoar.

-----------------------------------------------------------------------------------------------------------------------------------------

Angular CLI

Angular CLI é a ferramenta oficial para inicializar e trabalhar com projetos em Angular. Depois de instalar a Angular CLI, você precisa executar um comando para gerar um projeto e outro para servi-lo usando um servidor de desenvolvimento local para rodar sua aplicação. Como ocorre com a maioria das ferramentas de front-end nos dias de hoje, a Angular CLI foi criada com base no Node.js.

-----------------------------------------------------------------------------------------------------------------------------------------

Node.js

O Node.js é uma tecnologia de servidor que permite que você execute o JavaScript no servidor e crie aplicações da web no lado do servidor. No entanto, o Angular é uma tecnologia de front-end. Portanto, mesmo que você precise instalar o Node.js em sua máquina de 
desenvolvimento, é apenas para a execução da CLI.

-----------------------------------------------------------------------------------------------------------------------------------------

A CLI oferece os comandos a seguir:

- add: adiciona suporte a uma biblioteca externa em seu projeto;
- build (b): compila uma aplicação do Angular em seu diretório de saída, chamado dist/ no caminho de saída fornecido. Este comando deve ser executado dentro de um diretório de espaço de trabalho;
- config: obtém ou configura os valores de configuração do Angular;
- doc (d): abre a documentação oficial do Angular (angular.io) em um navegador, buscando uma palavra-chave determinada;
- e2e (e): faz o build e serve uma aplicação do Angular, depois executa testes de ponta a ponta usando o Protractor;
- generate (g): gera e/ou modifica arquivos com base em um esquema;
- help: lista os comandos disponíveis e suas descrições breves;
- lint (l): executa as ferramentas de linting no código da aplicação em Angular em uma determinada pasta de projeto;
- new (n): cria um espaço de trabalho e uma aplicação inicial em Angular;
- run: executa um destino personalizado definido em seu projeto;
- serve (s): faz o build e serve sua aplicação, fazendo um novo build a cada alteração de arquivos;
- test (t): executa os testes unitários em um projeto;
- update: atualiza sua aplicação e suas dependências (https://update.angular.io/);
- version (v): mostra a versão da Angular CLI;
- extrai as mensagens i18n do código-fonte.

-----------------------------------------------------------------------------------------------------------------------------------------

Criando um novo projeto:
Vejamos a função de cada diretório/arquivo:

- /e2e/: contém os testes end-to-end (simulação do comportamento do usuário) do site;
- /node_modules/: todas as bibliotecas de terceiros são instaladas nesta pasta usando npm install;
- /src/: contém o código-fonte da aplicação. A maior parte do trabalho será feita aqui;
- /app/: contém módulos e componentes;
- /assets/: contém os ativos estáticos, como imagens, ícones e estilos;
- /environments/: contém arquivos de configuração específicos do ambiente (produção e desenvolvimento);
- browserslist: necessário para o autoprefixador para suporte ao CSS;
- favicon.ico: o favicon;
- index.html: o arquivo HTML principal;
- karma.conf.js: o arquivo de configuração para o Karma (uma ferramenta de testes);
- main.ts: o arquivo inicial principal, a partir de onde o AppModule é iniciado;
- polyfills.ts: polyfills necessários ao Angular;
- styles.css: o arquivo de folha de estilos (stylesheet) global do projeto;
- test.ts: um arquivo de configuração para o Karma;
- tsconfig.*.json: os arquivos de configuração para o TypeScript;
- angular.json: contém as configurações para a CLI;
- package.json: contém as informações básicas do projeto (nome, descrição e dependências);
- README.md: um arquivo em markdown que contém a descrição do projeto;
- tsconfig.json: o arquivo de configuração para o TypeScript;
- tslint.json: o arquivo de configuração para o TSlint (uma ferramenta de análise estática).
