## * & **
- * Representa qualquer nome de arquivo dentro de um diretório específico. Exemplo: "src/*.ts" seleciona todos os arquivos .ts dentro de src/, mas não inclui subdiretórios.

- ** Representa qualquer nível de diretório dentro da estrutura do projeto. Exemplo: "src/**/*" inclui todos os arquivos dentro de src/, incluindo subdiretórios.

## Exclude
- usar o `*` pode serve para representar qualquer coisa
- exemplo: *.dev.ts Todos os arquivos que terminam com isso não seram compilados
- especificar um diretório atual e suas subpastas: typescript/**/*.ts
- node_modules já excluído por padrão caso o exclude não seja definido, se não terá que colocar

## Include
- inclue os arquivos para o processo de compilação, contrário ao **exclude** 

## Files

- Usado para incluir arquivos por meio do caminho relativo e não por diretórios, ou seja, insere arquivo por arquivo
- Caso queira incluir múltiplos arquivos e subdiretórios use o includes