# Execution Context
- A pliha de chamada do código do  javascript é executado em uma pilha de chamadas no modo "último a entrar, primeiro a sair"
- **Execution Context** é como um container ou um pedaço de memória que armazena as informações necessárias e executa na pliha de chamada um trecho de todo o código js, por exemplo, armazenar e executar uma função quando chamada.
- Tudo que é definido em escopo global é armazenado e executado no **Global Execution Context**
- Ordem de inserção na pilha (A execução iniciará pelo último inserido já que é uma pilha): 
1. Global Execution Context
2. Várias Executions Contexts
- O Global Execution Context só sai da pilha quando o programa é encerrado