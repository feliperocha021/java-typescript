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