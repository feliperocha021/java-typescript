const path = require('path');

module.exports = {
  entry: "typescript\de88a93-webpack\index.ts", // arquivo que deve ser executado primeiro
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'typescript\de88a93-webpack\dist')
  }
}