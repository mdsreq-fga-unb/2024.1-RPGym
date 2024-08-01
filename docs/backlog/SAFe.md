
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
| F1                 | US01    | Eu, como usuário, gostaria de realizar meu cadastro de conta para que eu possa acessar e utilizar as funcionalidades na plataforma. Além disso, quero poder editar minhas informações ou excluir minha conta. | - O sistema deve incluir campos obrigatórios como nome, e-mail, senha, gênero e idade.<br>- O sistema deve validar os dados inseridos, garantindo que o e-mail não esteja já em uso ou em formatos inválidos.<br>- O sistema deve incluir todas as informações inseridas do usuário.<br>- O sistema deve ter a possibilidade de editar os campos como nome, e-mail, senha, gênero e idade.<br>- O sistema deve validar as novas informações antes de salvá-las. |
| F1 | US02 | Eu, como usuário registrado, quero fazer login na plataforma para acessá-la totalmente. | - O sistema deve permitir o login usando e-mail e senha cadastrados.<br>- O sistema deve validar as credenciais fornecidas, garantindo que correspondam a um usuário existente.<br>- O sistema deve exibir uma mensagem de erro caso as credenciais sejam inválidas.<br>- O sistema deve permitir a recuperação de senha em caso de esquecimento.<br>- O sistema deve redirecionar o usuário para a página inicial após um login bem-sucedido. |
| F1 | US03 | Eu, como usuário que esqueceu a senha, quero recuperar a minha senha para poder acessar minha conta novamente. | - O sistema deve permitir que o usuário solicite a recuperação de senha.<br>- O sistema deve enviar um link de recuperação para o e-mail associado à conta do usuário.<br>- O sistema deve validar o link de recuperação para garantir sua autenticidade e validade.<br>- O sistema deve permitir que o usuário crie uma nova senha após acessar o link de recuperação.<br>- O sistema deve confirmar a alteração da senha e permitir o login com a nova senha. |
| F1 | US04 | Eu, como usuário, desejo editar minhas informações anteriormente cadastradas. | - O sistema deve permitir a edição de informações como nome, e-mail, senha, gênero e idade.<br>- O sistema deve validar as novas informações antes de salvá-las.<br>- O sistema deve exibir uma mensagem de confirmação de sucesso ou erro após a edição.<br>- O sistema deve garantir que o e-mail atualizado não esteja em uso por outro usuário.<br>- O sistema deve permitir a visualização das informações atualizadas após a edição. |
| F1 | US05 | Como usuário, quero ter a opção de deletar minha conta e todos os meus dados pessoais do aplicativo, para que eu tenha controle sobre minhas informações e possa sair da plataforma se desejar. | - O sistema deve oferecer uma opção para deletar a conta do usuário.<br>- O sistema deve solicitar uma confirmação antes de proceder com a exclusão.<br>- O sistema deve garantir que todos os dados pessoais do usuário sejam removidos permanentemente.<br>- O sistema deve exibir uma mensagem de confirmação após a exclusão bem-sucedida.<br>- O sistema deve desativar o acesso à conta imediatamente após a exclusão. |
| F2 | US06 | Eu, como usuário, quero registrar minhas atividades físicas. | - O sistema deve permitir que o usuário registre diferentes tipos de atividades físicas, como corrida, levantamento de peso, etc.<br>- O sistema deve permitir a edição ou exclusão de registros de atividades. |
| F3 | US07 | Eu, como usuário, quero poder visualizar relatórios das minhas atividades físicas para acompanhar meu progresso. | - O sistema deve gerar relatórios detalhados com base nas atividades físicas registradas.<br>- O sistema deve permitir a filtragem dos relatórios por data, tipo de atividade e outros critérios.<br>- O sistema deve atualizar os relatórios automaticamente com base nas novas atividades registradas. |
| F4 | US08 | Eu, como usuário, quero ganhar pontos por cada atividade física registrada para me motivar a manter uma rotina de exercícios. | - O sistema deve atribuir pontos a cada atividade física registrada com base na intensidade e duração.<br>- O sistema deve atualizar o saldo de pontos do usuário após o registro de cada atividade.<br>- O sistema deve exibir a pontuação acumulada do usuário em um local visível, como no perfil ou em um painel de progresso.<br>- O sistema deve fornecer uma tabela ou gráfico que mostre como os pontos são acumulados ao longo do tempo.<br>- O sistema deve ter um sistema de recompensas ou desafios relacionados à acumulação de pontos para incentivar a continuidade das atividades. |
| F5 | US09 | Eu, como usuário, desejo customizar o meu personagem na plataforma. | - O sistema deve oferecer opções de customização para o personagem, como roupas, acessórios e características físicas.<br>- O sistema deve permitir que o usuário visualize as alterações em tempo real enquanto personaliza o personagem.<br>- O sistema deve armazenar as personalizações feitas pelo usuário e aplicá-las ao personagem.<br>- O sistema deve oferecer uma variedade de itens e opções de customização para garantir uma experiência personalizada.<br>- O sistema deve permitir a alteração das personalizações a qualquer momento. |
| F6 | US11 | Eu, como usuário, desejo poder ver minha pontuação para comparar com outros usuários. | O sistema deve rastrear e comparar o desempenho dos participantes em termos de pontos acumulados<br>- O sistema deve exibir tabelas de classificação ou rankings que mostrem a posição dos usuários nas competições.|
| F7 | US12 | Eu, como usuário, gostaria de poder comprar itens na loja para customizar minha conta. | - O sistema deve oferecer uma loja virtual onde os usuários possam comprar itens para customizar suas contas.<br>- O sistema deve permitir a visualização de itens disponíveis para compra, incluindo descrições e preços.<br>- O sistema deve permitir que os usuários comprem itens usando pontos acumulados.<br>- O sistema deve aplicar os itens comprados à conta do usuário e permitir a visualização das customizações.<br>- O sistema deve atualizar o inventário e as opções da loja com base nas compras realizadas e nas promoções disponíveis. |
| F8 | US13 | Eu, como usuário, gostaria de criar meu próprio grupo para que eu possa adicionar amigos e interagir com eles dentro da plataforma. | - O sistema deve permitir que o usuário crie um novo grupo e defina um nome e descrição para o grupo.<br>- O sistema deve permitir que o usuário convide amigos para o grupo.<br>- O sistema deve fornecer funcionalidades de chat ou mensagens para que os membros do grupo possam se comunicar.<br>- O sistema deve permitir que o usuário gerencie as configurações do grupo, como adicionar ou remover membros.|
| F9 | US14 | Eu, como usuário, gostaria de participar de desafios para melhorar meu engajamento e desempenho na plataforma. | - O sistema deve oferecer uma variedade de desafios relacionados a atividades físicas.<br>- O sistema deve permitir que o usuário se inscreva em desafios individuais ou em grupo.<br>- O sistema deve rastrear o progresso do usuário em relação aos desafios e fornecer atualizações regulares.<br>- O sistema deve exibir classificações ou rankings baseados no desempenho dos participantes nos desafios. |

## Histórico de Versões

|  **Data**  |**Versão** |    **Descrição**     |   **Editores**   |
| :--------: | :-------: | :------------------: | :--------------: |
| 01/08/2024 |   `1.0`   |  Criação do Framework      | Lucas  |