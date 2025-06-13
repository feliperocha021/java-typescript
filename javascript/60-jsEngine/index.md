# Javascript Engine
- o javascript evolui para o processo de compilação com interpretador para uma mesclagem entre a compilação tradicional(compila tudo de uma vez e gera o .exe) mais o interpretador(compila e executa linha por linha) gerando o just in time(compila tudo e em seguida executa tudo)
## Como o JS é compilado no browser(navegador)
- O Javascript Engine é utilizado e realiza alguns passos:
1. verifica a sintaxe linha por linha
2. produz a árvore de sintxe abstrata
3. uso da árvore na compilação just in time e geração do código de máquina que é imediatamente executado
4. Otimização, recompilação e reexecução do código de máquina, pois ele quase sempre é gerado da forma menos otimizada nas primeiras compilações