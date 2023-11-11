# FrontendAlmox
## Vite - setup do projeto react
1. Para instalar o Vite basta rodar npm create vite@latest (deve estar em letras minúsculas)
  >npm create vite@latest
2. selecionar react e dps javascript comum

obs: Por ter o node_modules no git ignore ele não salva do git, já q eh só rodar npm install quando
# Aulas
Não tem uma seção para cada aula, só anoto aquilo que acho importante e separo por aula

1. Aula 1
  - Vite eh um setup do react que é uma biblioteca do Nextjs, um framework que renderiza componentes do servidor para melhor desempenho

2. Aula 2
  - O react é baseado em substituir os elementos da tela recarregando arquivos diferentes, por isso eh chamado de single page aplication
  - o exemplo inicial do Vite é inicializado com npm run dev
  - A página é exibida em um localhost mostrado pelo terminal
  - Ele executa o index.html onde nele só tem uma div chamada `root`
    - Nela é importada os elementos através do arquivp .jsx main
    - O main referencia o arquivo App.jsx que tem os elementos vistos na tela de exemplo do Vite.
    - Importante deixar os arquivos com os mesmos nomes das funções por questão de organização
    - Por padrão cada função retorna um unico elemento, por isso eh criado um fragment `<> </>` para a gente construir a página ali dentro.

3. Aula 3
  - Minificação: css em uma unica linha pra o arquivo ficar mais leve e carrega mais rápido
  - Elementos aninhados tbm demoram mais para carregar, ex: `.classe>section>header>div>h1{}`
  - CSS-in-Js: Cria componentes performáticos a prova de colisão. 
  - Styled Components: Componetização dos estilos para aplicações React (Sem colisão de classes, melhor desempenho, estilos dinâmicos, fácil manutenção)

4. Style Component
  - >npm install --save styled-components
  - mudo os arquivos .css para .js
  - instalar o vscode-styled-components

5. Componentização
  - Criada pasta de componentes 
  - Cada componente tem um arquivo .jxs que é o arquivo react responsável por tranformar em função em exportar esse componentes
  - Cada componente possui um arquivo .js que é o CSS daquele compoentes escrito em javascript

6. React Icons
  - Biblioteca que reune diversos icones em svg
  - >npm install react-icons --save
  - [React Icons](https://react-icons.github.io/react-icons/)

7. React Router Dom
  - Biblioteca de auxilo de rotas
  - >npm install react-router-dom
  - Separar dois arquivos de routes
    - App: rota para quando o usuário está logado
    - Auth: rotas de autenticação para quando o usuário não estiver logado