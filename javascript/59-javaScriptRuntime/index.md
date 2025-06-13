# Bastidores
- o runtime do javascript é basicamente um ambiente que fornece os componentes necessários para executar
- No navegador consiste em 4 componentes: Web API, Microtask Queue & Callback Queue, Event Loop and Javascript Engine(stack, heap)
- **Javascript Engine**: executa o código js e cada navegador possui um modelo. Possuis as memórias stack e heap

- **Web API**: Fornece a API da web que contém o DOM, timer, fetch, console.log, etc.

- **Microtask Queue & Callback Queue**: Callback Queue contém todas as funções de retorno de chamadas de um evento ou de uma promessa que está pronto para ser executada. Microtask Queue também possui callbacks em aguardo para execução a diferença é que as callbacks atreladas a uma promessa que aguardam na Microtask Queue possui mais prioridade do que as callbacks que estão em Callback Queue

- **Event Loop**: Como o js possui thread única (executa o código um após o outro) o event loop envia as callbacks de fila para essa thread quando a mesma está ociosa para executa-las