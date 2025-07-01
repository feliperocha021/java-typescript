- A desvantagem de usar o module E6 para importar/exportar é que o navegador faz várias solicitações para baixar os arquivos js dependentes

- Webpack é uma ferramenta para agrupar e minificar o código JS reduzindo o núumero de solicitações e melhorando o carregamento dá página

- instalando o webpack npm i --save-dev webpack webpack-cli webpack-dev-server ts-loader

- webpack	O empacotador principal — responsável por processar e compilar o projeto
- webpack-cli	Permite rodar o Webpack via terminal (npx webpack, por exemplo)
- webpack-dev-server	Cria um servidor local com recarregamento automático (live-reload)
- ts-loader  faz o papel de tradutor entre o TypeScript e o JavaScript, integrando o compilador tsc (TypeScript Compiler) ao Webpack.