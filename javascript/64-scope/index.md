# Scope
- controla como as variáveis e funções são organizadas e acessadas pelo **Javascript engine**
- o escopo infoma onde a variável ou função é criada e quando podem ser acessadas

**Global Scope**: As variáveis e funções que não estão dentro de outra função ou em nenhum outro bloco de código.

**Function Scope**: cada função possui seu próprio escopo e só são acessíveis dentro dessa função.

**Block Scope**: variáveis const ou let declaradas dentro de um bloco de código são acessíveis apenas no mesmo. Ex: if, while, for

**Lexical Scope**: A maneira como as variáveis são organizadas e acessadas é inteiramente conttrolada pelo posicionamento da função e do bloco. Veja o exemplo em index.js
