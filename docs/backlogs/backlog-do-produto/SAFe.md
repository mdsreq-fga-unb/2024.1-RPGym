
# Scale Agile Framework - SAFe


<p align="justify"> &emsp;&emsp;
O SAFe 6.0 é uma base de conhecimento de princípios, práticas e competências integradas comprovadas para alcançar agilidade empresarial usando Lean, Agile e DevOps. Ele é construído em torno da "Seven Core Competencies of Business Agility", que são fundamentais para alcançar e sustentar uma vantagem competitiva em uma era digital cada vez mais presente. O Modelo de requisitos utilizado pelo SAFe fornece uma estrutura de requisitos escalável que demonstra uma maneira de expressar comportamentos do sistema:</p>

- **Épicos:** uma iniciativa de desenvolvimento de solução significativa;
- **Capacidades:** representa uma grande funcionalidade de solução. Ela deve ser decomposta em funcionalidades a serem implementadas;
- **Features:** representa a funcionalidade da solução que fornece valor comercial, atende a uma necessidade das partes interessadas. Ela inclui uma hipótese de benefício e critérios de aceitação;
- **Histórias:** descrições curtas de uma pequena parte da funcionalidade desejada, escritas da perspectiva do usuário. Elas são o principal artefato usado para definir o comportamento do sistema no Agile.

## SAFe Backlog RPGym


### ***Tema Estratégico:*** 

<u> Incentivar o público de academia</u>


### Épicos

|  **Tema**  | **Épico** | **Descrição** |
| :--------: | :-------: | :-----------: |
| T1 |  E1    | Gestão do Usuário
| T2 |  E2    | Gestão das Atividades
| T3 |  E3    | Gestão da Interação social

### Capacidade

|  **Épico**  | **Capacidade** | **Descrição** |
| :---------: | :------------: | :------------:|
| E1 |  C1    | Administrar usuário
| E2 |  C2    | Gerenciar Registros
| E2 |  C3    | Gerenciar conta
| E3 |  C4    | Gerenciar interações sociais

### Funcionalidade

|  **Capacidade**  | **Funcionalidade** | **Descrição** |
| :---------: | :-----------: | :---------:|
| C1 |  F1    | Gerenciamento de usuário
| C2 |  F2    | Registro das Atividades
| C2 |  F3    | Visualização de Relatório dos Registros
| C3 |  F4    | Visualização da Pontuação
| C3 |  F5    | Customização da conta
| C3 |  F6    | Visualização de Progresso
| C3 |  F7    | Loja
| C4 |  F8    | Interação em Grupos
| C4 |  F9    | Participação de Desafios

### User Story

|  **Funcionalidade**  | **US** | **Descrição** | **Critérios de Aceitação** |
| :---------: | :-----------: | :---------:| :------------: |
| F1 | US01 | Eu, como usuário, gostaria de realizar meu cadastro de conta no sistema. | - O sistema deve incluir campos obrigatórios como nome, e-mail, senha, gênero e idade.<br>- O sistema deve validar os dados inseridos, garantindo que o e-mail não esteja já em uso ou formatos inválidos.<br>- O sistema deve incluir todas as informações inseridas do usuário.<br>- O email deve ser único.<br>- Deve haver uma mensagem de erro caso algum dado esteja inválido.<br>- Os dados devem ser persistidos. |
| F2 | US02 | Eu, como usuário, gostaria de inserir e verificar meu peso e altura para visualizar meu IMC. | - O sistema deve coletar os dados de peso, altura, idade e IMC do usuário.<br>- O usuário deve poder inserir e visualizar facilmente seu peso e altura.<br>- O sistema deve armazenar as informações inseridas.<br>- O usuário deve poder visualizar seu IMC calculado com base nos dados inseridos. |
| F3 | US03 | Eu, como usuário, gostaria de visualizar todos os meus registros de atividades físicas. | - O sistema deve possuir uma lista do histórico com os dias em que o usuário realizou atividades físicas.<br>- O sistema deve mostrar os dados de calorias gastas nos dias em que o usuário fez atividade física.<br>- O sistema deve registrar quantas moedas o usuário adquiriu em cada dia de atividade.<br>- O usuário deve poder visualizar uma lista histórica de suas atividades físicas.<br>- A lista deve estar paginada mensalmente para facilitar a navegação.<br>- Cada registro no histórico deve mostrar o dia, as calorias gastas e as moedas obtidas. |
| F4 | US04 | Eu, como usuário, gostaria de ganhar moedas equivalentes ao nível de esforço que fiz de exercício físico no dia, definindo um limite máximo de moedas por dia. | - O sistema deve calcular o nível de calorias gastas pelo usuário no dia.<br>- O sistema deve adicionar moedas ao usuário equivalentes a uma porcentagem baseada no nível de calorias gastas no dia.<br>- O sistema deve possuir um limite máximo de moedas que o usuário pode obter de acordo com as calorias gastas por semana.<br>- O usuário deve poder visualizar a quantidade atual de moedas.<br>- O usuário deve adquirir moedas ao finalizar um exercício. |
| F9 | US05 | Eu, como usuário, gostaria de gastar minhas moedas para me inscrever em um dos campeonatos disponíveis. | - O sistema deve exibir uma lista de campeonatos disponíveis.<br>- Cada campeonato deve ter vagas limitadas para inscrições.<br>- O sistema deve indicar o status de cada campeonato: Aberto, Em andamento ou Finalizado.<br>- Para cada campeonato aberto, o sistema deve mostrar o preço da inscrição.<br>- O sistema deve informar o prêmio que será concedido ao final de cada campeonato, independentemente do status.<br>- Campeonatos em andamento devem exibir o tempo restante até serem finalizados.<br>- O sistema deve especificar se o campeonato é Solo ou Em equipe.<br>- O usuário deve poder visualizar a lista de campeonatos.<br>- O usuário deve poder se inscrever em um campeonato. |
| F10 | US06 | Eu, como usuário, gostaria de competir com os usuários inscritos no campeonato em que me inscrevi até o tempo estipulado acabar, e receber meu prêmio. | - O sistema deve listar todos os jogadores ou equipes inscritos no campeonato, incluindo a quantidade atual de inscritos e a capacidade máxima permitida.<br>- A lista de jogadores ou equipes deve ser ordenada de forma crescente pela quantidade de pontos obtidos por cada participante.<br>- O sistema deve exibir a data e o horário de início do evento, bem como a situação atual do campeonato (Aberto, Em andamento, Finalizada).<br>- O tempo de término do campeonato deve ser definido pelo responsável e exibido quando o campeonato estiver Em andamento.<br>- Todos os usuários inscritos no campeonato devem receber uma notificação quando o campeonato entrar na situação Em andamento.<br>- O usuário deve poder visualizar a lista de participantes do campeonato.<br>- O usuário deve poder visualizar a quantidade de participantes e a capacidade máxima.<br>- O usuário deve receber uma notificação quando o campeonato começar.<br>- O usuário deve poder visualizar o prêmio do campeonato. |
| F9 | US07 | Eu, como usuário, gostaria de criar um grupo e convidar meus amigos para incentivar uns aos outros a praticar exercícios físicos. | - O sistema deve permitir o cadastramento de um novo grupo pelo usuário.<br>- O sistema deve permitir a inserção do nome do grupo.<br>- O sistema deve oferecer a seleção de uma foto pré-definida para o grupo.<br>- O sistema deve gerar um código único para o grupo, que somente o administrador pode copiar e compartilhar para convidar outros usuários.<br>- O sistema deve ter uma lista de pedidos para entrada no grupo, visível apenas para os administradores.<br>- O grupo deve ter uma funcionalidade de chat para os membros conversarem entre si.<br>- O usuário deve poder visualizar os integrantes do grupo.<br>- O usuário administrador deve poder visualizar o código do grupo.<br>- O administrador deve poder visualizar e gerenciar a lista de pedidos para entrar no grupo.<br>- O usuário deve poder enviar e receber mensagens no chat do grupo, visualizando suas próprias mensagens e as mensagens dos outros membros. |
| F1 | US08 | Eu, como usuário, gostaria de recuperar minha conta através do e-mail, redefinindo a senha, caso eu tenha esquecido. | - O sistema deve ter um botão opcional para iniciar o processo de recuperação de conta.<br>- O sistema deve permitir ao usuário inserir o e-mail associado à conta perdida.<br>- O sistema deve verificar se há uma conta registrada com o e-mail inserido.<br>- Se a conta existir, o sistema deve enviar um pedido de redefinição de senha para o e-mail do usuário.<br>- O sistema deve permitir a atualização da senha da conta associada ao e-mail.<br>- O usuário deve conseguir visualizar o botão de recuperação de conta.<br>- O usuário deve conseguir inserir o e-mail da conta vinculada.<br>- O usuário deve receber um e-mail para a redefinição de senha.<br>- O usuário deve conseguir acessar a conta anteriormente perdida usando a nova senha redefinida. |
| F1 | US09 | Eu, como usuário, gostaria de acessar as estatísticas de outros usuários, incluindo gráficos das atividades físicas realizadas, moedas ganhas e moedas totais no momento. | - O sistema deve exibir gráficos comparativos das atividades físicas diárias e das moedas adquiridas entre o usuário logado e o usuário do perfil.<br>- O sistema deve mostrar o nome e a data de registro do usuário do perfil.<br>- O sistema deve informar o grupo ao qual o usuário do perfil está participando, se houver.<br>- O sistema deve exibir a quantidade total de moedas do usuário do perfil.<br>- O sistema deve mostrar o histórico dos campeonatos em que o usuário do perfil participou, incluindo as posições alcançadas.<br>- O sistema deve permitir adicionar o usuário do perfil como amigo.<br>- O sistema deve permitir remover o usuário do perfil como amigo.<br>- O sistema deve possibilitar convidar o usuário do perfil para o grupo criado pelo usuário logado, caso ambos sejam amigos.<br>- O usuário deve conseguir visualizar o perfil de outro usuário.<br>- O usuário deve conseguir comparar seu próprio desenvolvimento com o usuário do perfil.<br>- O usuário deve conseguir adicionar e remover o usuário como amigo.<br>- O usuário deve conseguir convidar o usuário para o grupo. |
| F2 | US10 | Eu, como usuário, gostaria de criar e personalizar meu personagem da forma que eu desejar. | - O sistema deve oferecer um personagem padrão como ponto de partida.<br>- O sistema deve permitir a escolha de diferentes estilos de cabelo, independentemente do sexo selecionado.<br>- O sistema deve possibilitar a seleção da cor da pele do personagem.<br>- O sistema deve permitir a escolha de características faciais para o personagem.<br>- O sistema deve possibilitar a escolha das vestimentas do personagem.<br>- O sistema deve permitir a alteração da cor das vestimentas escolhidas.<br>- O sistema deve permitir a confirmação das personalizações feitas pelo usuário no personagem.<br>- O usuário deve conseguir visualizar o personagem criado.<br>- O usuário deve poder alterar o cabelo, a cor da pele, as características faciais e as vestimentas do personagem.<br>- O usuário deve poder confirmar as mudanças feitas no personagem. |
| F7 | US11 | Eu, como usuário, gostaria de gastar minhas moedas para comprar customizações na loja da plataforma, onde devo encontrar opções para personalizar meu personagem. | - O sistema deve ter uma seção dedicada na loja para customizações do personagem.<br>- A loja deve oferecer uma variedade de estilos de cabelo, cada um com seu preço.<br>- A loja deve ter uma seleção de acessórios, cada um com seu preço.<br>- A loja deve disponibilizar diversas facetas, cada uma com seu preço.<br>- A loja deve ter diferentes vestimentas, cada uma com seu preço.<br>- As moedas usadas na loja devem ser distintas das moedas usadas para inscrição em campeonatos.<br>- O sistema deve processar e efetivar a compra dos itens selecionados pelo usuário.<br>- O usuário deve poder visualizar os itens disponíveis em cada categoria (cabelos, acessórios, facetas, vestimentas). |
| F7 | US12 | Eu, como usuário, gostaria de receber desafios diários e semanais para serem realizados durante o dia/semana. Ao completar um desafio, serei recompensado com moedas de ingresso e moedas para usar na loja. | - O sistema deve atualizar as missões diariamente e semanalmente de forma aleatória para cada usuário.<br>- O sistema deve recompensar o usuário com moedas de ingresso e moedas para a loja ao cumprir um desafio.<br>- Cada desafio deve especificar a quantidade X de moedas de ingresso e Y de moedas para a loja.<br>- Desafios completados não devem poder ser realizados novamente no mesmo dia ou semana.<br>- O sistema deve exibir o progresso dos desafios, mostrando o quanto falta para completar cada um. |
| F8 | US13 | Eu, como usuário, gostaria de realizar meu login no sistema utilizando meu login e senha previamente cadastrados. | - O sistema deve permitir o acesso ao usuário com login e senha corretos.<br>- Se o login ou a senha estiverem incorretos, o sistema deve exibir uma mensagem de erro informando o usuário. |
| F8 | US14 | Eu, como usuário, gostaria de editar minhas informações na plataforma, incluindo nome, e-mail, senha, gênero e idade. | - O sistema deve permitir a edição dos campos nome, e-mail, senha, gênero e idade.<br>- As novas informações devem ser validadas antes de serem salvas.<br>- Deve haver a opção de excluir a conta, com uma confirmação antes da exclusão. |
| F9 | US15 | Eu, como usuário, gostaria de cancelar a inscrição em um dos campeonatos em que me inscrevi. | - O sistema deve permitir o cancelamento da inscrição apenas se o campeonato estiver na situação "Em Aberto".<br>- O usuário deve receber um estorno de 60% das moedas gastas na inscrição|
| F10 | US16 | Eu, como usuário, gostaria de editar as informações do meu grupo que criei. | - O sistema deve permitir a edição das informações do grupo (ver US07 - Criação de grupo #22) apenas para o administrador do grupo.<br>- O sistema deve bloquear a edição caso o usuário não seja o administrador.<br>- O sistema deve permitir a edição do nome e da foto do grupo, escolhidas entre as opções pré-definidas.<br>- O sistema deve confirmar e registrar as novas alterações feitas.<br>- O sistema deve oferecer a opção de cancelar o pedido de alteração do grupo. |
| F11 | US17 | Eu, como usuário, gostaria de excluir um grupo que criei anteriormente. | - O sistema deve permitir a exclusão do grupo (ver US07 - Criação de grupo #22) apenas se o usuário for o criador do grupo.<br>- O sistema deve expulsar todos os usuários do grupo quando o grupo for excluído.<br>- O sistema deve confirmar o pedido de exclusão antes de efetuar a exclusão.<br>- O sistema deve notificar todos os usuários do grupo sobre a exclusão.<br>- O sistema deve remover o código associado ao grupo do banco de dados, tornando-o disponível para futuros grupos criados por outros usuários. |
| F12 | US18 | Eu, como usuário, gostaria de retirar um usuário que está no grupo o qual sou administrador. | - O sistema deve permitir que o usuário administrador do grupo possa expulsar um usuário do grupo.<br>- O sistema deve confirmar o pedido de expulsão do usuário.<br>- O sistema deve eliminar e bloquear o acesso do usuário que foi expulso. |

## Histórico de Versões

|  **Data**  |**Versão** |    **Descrição**     |   **Editores**   |
| :--------: | :-------: | :------------------: | :--------------: |
| 01/08/2024 |   `1.0`   |  Criação do Framework     | Lucas  |
| 12/08/2024 |   `1.2`   |  Mudanças para melhor adaptação ao Backlog     | Lucas  |
