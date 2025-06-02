##  Opções do arquivo tsconfig.json

- **target**: Define o para o compilador qual a versão de destino do javascript queremos compilar.

- EX:
    "target": "es2016"

- **"lib": []**: permite especificar quais reecursos e APIs o TS deve conhecer e nos permitir usar. 

Valores padrões quando não está sendo usado: todos os recursos da versão definida no **target** e APIs do DOM.

- EX:
    "lib": ["es2016", "dom", "DOM.Iterable", Script]

    Exemplo com valores padrões

