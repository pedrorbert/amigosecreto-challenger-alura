# amigosecreto-challenger-alura

Com certeza! Com base em todo o material que você forneceu, preparei um README.md completo e bem-estruturado para o seu repositório no GitHub.

Este arquivo usa a formatação Markdown, que é o padrão para documentação no GitHub. Você pode simplesmente criar um arquivo chamado README.md na pasta principal do seu projeto e colar o conteúdo abaixo nele.

Projeto Amigo Secreto 🎁
Uma aplicação web simples e interativa para realizar sorteios de amigo secreto. Este projeto foi desenvolvido como um desafio de lógica de programação, utilizando tecnologias front-end fundamentais: HTML, CSS e JavaScript.

Prévia da Aplicação
<img width="1919" height="913" alt="image" src="https://github.com/user-attachments/assets/84f41a50-85f3-4551-b701-d1d62270ede3" />


✨ Funcionalidades
Adicionar Participantes: Permite inserir o nome dos amigos um a um em uma lista.

Validação de Dados: Impede a adição de nomes em branco ou duplicados.

Sorteio Inteligente: Realiza o sorteio garantindo que ninguém se presenteie e que todos participem.

Exibição Clara do Resultado: Mostra a lista de quem presenteia quem de forma organizada.

Interface Responsiva: O layout se adapta a diferentes tamanhos de tela (desktop e mobile).

💻 Tecnologias Utilizadas
HTML5: Para a estrutura semântica e o conteúdo da página.

CSS3: Para a estilização, layout e responsividade.

JavaScript (ES6+): Para toda a lógica de programação, interatividade e manipulação do DOM.

📂 Estrutura dos Arquivos
O projeto está organizado da seguinte forma:

/
|-- assets/
|   |-- amigo-secreto.png
|   |-- play_circle_outline.png
|-- index.html         (Estrutura da página)
|-- style.css          (Estilos visuais)
|-- app.js             (Lógica da aplicação)
|-- README.md          (Documentação do projeto)
index.html: Contém todos os elementos visíveis da página, como o cabeçalho, o campo de input para nomes, os botões e as listas onde os resultados são exibidos.

style.css: Define a aparência da aplicação. Utiliza CSS Variables para um tema de cores consistente e Flexbox para organizar o layout dos elementos.

app.js: O cérebro da aplicação. Controla todas as ações, como adicionar amigos, validar dados e executar a lógica do sorteio.

🚀 Como Executar o Projeto

Abra o arquivo index.html diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

Dica: Para uma melhor experiência de desenvolvimento, você pode usar a extensão Live Server no Visual Studio Code, que atualiza a página automaticamente a cada alteração no código. O arquivo launch.json que você possui já está configurado para depuração no Chrome.

🔍 Detalhes do Código
O código foi escrito de forma a separar estrutura, estilo e lógica, seguindo as boas práticas de desenvolvimento web.

HTML (index.html)
A estrutura é semântica, utilizando tags como <main>, <header>, <section> e <ul>.

Os botões possuem o atributo onclick, que chama diretamente as funções JavaScript (adicionarAmigo() e sortearAmigo()), simplificando a conexão entre a interface e a lógica.

As listas <ul> com id="listaAmigos" e id="resultado" servem como contêineres que são preenchidos dinamicamente pelo JavaScript.

CSS (style.css)
Utiliza Variáveis CSS (ex: --color-primary) no seletor :root para facilitar a manutenção do tema de cores.

O layout principal é construído com Flexbox, que permite alinhar e distribuir os elementos de forma eficiente e responsiva.

Possui estados :hover para os botões, melhorando a experiência do usuário ao indicar que são clicáveis.

JavaScript (app.js)
A lógica principal está contida em duas funções globais, além de uma função auxiliar.

adicionarAmigo()

Pega o valor do campo de input (id="amigo").

Valida se o campo não está vazio e se o nome não é um duplicado.

Adiciona o nome a um array global chamado amigos.

Cria um novo elemento <li> e o insere na lista visível na tela (id="listaAmigos").

Limpa o campo de input para a próxima entrada.

sortearAmigo()

Primeiro, verifica se há um número mínimo de participantes (3) para o sorteio fazer sentido.

Chama a função embaralhar() para randomizar a ordem do array amigos.

Itera sobre o array embaralhado para criar os pares. A lógica amigos[i] presenteia amigos[i + 1] é usada, com um tratamento especial para que o último da lista presenteie o primeiro, fechando o ciclo e garantindo que ninguém se auto-presenteie.

Exibe cada par em um novo <li> na lista de resultados (id="resultado").

embaralhar(lista)

Função auxiliar que implementa o algoritmo Fisher-Yates Shuffle. Este é o método padrão para criar uma permutação aleatória e justa de uma lista finita.
