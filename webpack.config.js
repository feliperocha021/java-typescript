const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'typescript', 'de88a93-webpack', 'index.ts'), // arquivo que deve ser executado primeiro
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'typescript', 'de88a93-webpack', 'dist'),
    publicPath: '/dist/' // procurar o arquivo empacotado nesse caminho
  },
  devtool: 'inline-source-map',
  module: {
    rules: [      /* Especifica o que fazer com oos arquivos, como imagens, css, etc*/
      {
        test: /\.ts$/, 
        use: 'ts-loader',
        exclude: [/node_modules/, path.resolve(__dirname, 'javascript')]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'typescript', 'de88a93-webpack')
    },
    liveReload: true,
    open: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}