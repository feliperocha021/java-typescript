##  Opções do arquivo tsconfig.json

- **target**: Define o para o compilador qual a versão de destino do javascript queremos compilar.

- EX:
    "target": "es2016"

- **"lib**: permite especificar quais reecursos e APIs o TS deve conhecer e nos permitir usar. 

Valores padrões quando não está sendo usado: todos os recursos da versão definida no **target** e APIs do DOM.

- EX:
    "lib": ["es2016", "dom", "DOM.Iterable", Script]

    Exemplo com valores padrões

- **allowJs**: permite incluir o arquivo js junto ao arquivo ts para o processo de compilação.

- EX:
    "allowJs": true

**checkJs**: verifica a sintaxe no código js e relata qualquer erro

- EX:
    "checkJs": true

**jsx**: especifica qual código jsx é gerado 

- EX:
    "jsx": "preserve"

**declaration**: Gere arquivos .d.ts a partir de arquivos TypeScript e JavaScript em seu projeto.

- EX:
    "declaration": "true"

**declarationMap**: Crie o SourCemaps para os arquivos d.ts.

- EX:
    "declarationMap": true

**sourceMap**: Usado para depuração de arquivos ts no navegador na opção Sources no modo desenvolvedor do navegador através da criação de arquivo.js.map

- EX:
    "sourceMap": true

**rootDir**: informar ao compilador em qual pasta ele deve procurar os arquivos typescripts para compilação

- EX:
    "rootDir": "./"

**outDir**: informar ao compilador em qual pasta ele deve gerar os arquivos js gerados pela compilação

- EX:
    "outDir": "./"

**noEmi**: informa ao compilador para não gerar o arquivo js de saída

- EX:
    "noEmit": true

**noEmitOnError**: nunca irá gerar um arquivo js se houver erro no arquivo ts

- Ex:
    "noEmitOnError": true

**removeComments**: os comentários do arquivo ts são apagados do arquivo de saída js

- Ex:
    "removeComments": true

**strict**: Faz a verificação estrita de tipo. Vem definido como true e também habilitará todas as opções abaixo dela que estão comentadas

- Ex:
    "strict": true

