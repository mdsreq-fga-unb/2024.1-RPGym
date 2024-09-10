# Backlog do produto

<p>O Backlog do produto é uma lista dinâmica e priorizada de tudo que precisa ser feito para desenvolver, aprimorar ou corrigir um produto. Ele é essencialmente o "coração" do processo de desenvolvimento, especialmente em metodologias ágeis, como o Scrum.</p>
<p>Deve ser criado e mantido pelo Product Owner, que é responsável por garantir que ele esteja alinhado com a visão e os objetivos do produto. A lista pode incluir novas funcionalidades, melhorias em funcionalidades existentes, correções de bugs, mudanças técnicas, ou qualquer outro trabalho necessário para a evolução do produto.</p>
<p>Um ponto importante sobre o Backlog do produto é que ele não é estático. Conforme o desenvolvimento avança e novas informações são descobertas, itens podem ser adicionados, removidos ou reordenados. Isso permite que a equipe seja ágil e responda rapidamente às mudanças nas necessidades dos usuários ou no mercado.</p>

## Requisitos

### Requisitos Funcionais

| **Número** | **Requisito**                                                                                                                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RF01       | O sistema deve permitir ao usuário realizar o cadastro de conta, incluindo campos obrigatórios como nome, e-mail, senha e idade.                                                                                                        |
| RF02       | O sistema deve validar os dados inseridos no cadastro, garantindo que o e-mail não esteja em uso e que os formatos sejam válidos.                                                                                                       |
| RF03       | O sistema deve permitir ao usuário inserir e verificar seu peso e altura para visualizar seu IMC.                                                                                                                                       |
| RF04       | O sistema deve armazenar as informações de peso, altura e IMC do usuário e permitir a visualização e atualização desses dados.                                                                                                          |
| RF05       | O sistema deve permitir ao usuário visualizar todos os registros de suas atividades físicas, incluindo dias e moedas adquiridas, com opções de filtragem por data e tipo de atividade.                                 |
| RF06       | O sistema deve calcular e adicionar moedas ao usuário com base nas atividades feitas, respeitando um limite máximo diário de moedas e um limite máximo semanal, se aplicável.                                                             |
| RF07       | O sistema deve permitir ao usuário visualizar e gastar moedas em campeonatos disponíveis, com informações sobre status, preço e prêmio.                                                                                                 |
| RF08       | O sistema deve permitir ao usuário competir com outros participantes dos campeonatos e receber um prêmio baseado na classificação.                                                                                                      |
| RF09       | O sistema deve permitir ao usuário criar um grupo, gerenciar as informações do grupo, e ter funcionalidade de chat.                                                                    |
| RF10       | O sistema deve permitir ao usuário recuperar sua conta através do e-mail e redefinir a senha.                                                                                                                                           |
| RF11       | O sistema deve permitir ao usuário acessar estatísticas de outros usuários, incluindo as atividades físicas, moedas e participação em campeonatos, com comparações de desempenho.                      |
| RF12       | O sistema deve permitir ao usuário criar e personalizar seu personagem virtual, com opções para cabelo, cor da pele, características faciais e vestimentas, e aplicar as personalizações de forma visível em todas as telas relevantes. |
| RF13       | O sistema deve permitir ao usuário gastar moedas para comprar customizações na loja, com diversas opções e preços, e gerenciar o estoque de itens personalizados, se aplicável.                                                         |
| RF14       | O sistema deve permitir ao usuário receber desafios diários e semanais, recompensando-o com moedas de ingresso e para loja, e atualizar os desafios periodicamente com critérios definidos.                                      |
| RF15       | O sistema deve permitir ao usuário realizar login com suas credenciais e exibir uma mensagem de erro caso o login ou senha estejam incorretos.                                                                                          |
| RF16       | O sistema deve permitir ao usuário editar suas informações de conta, como nome, e-mail, senha, gênero e idade, e excluir a conta com validação dos dados e confirmação de exclusão.                                                     |
| RF17       | O sistema deve permitir ao usuário cancelar a inscrição em campeonatos, com reembolso de 60% das moedas gastas, se o campeonato estiver aberto, e definir políticas adicionais para cancelamento, se necessário.                        |
| RF18       | O sistema deve permitir ao usuário excluir um grupo que criou, expulsar todos os membros e remover o código do grupo do banco de dados, com processo de exclusão e notificação para os membros.                                         |
| RF19       | O sistema deve permitir ao usuário expulsar um membro do grupo, se o usuário for o administrador, e confirmar a expulsão com notificação para o usuário expulso.                                                                        |

### Requisitos Não Funcionais

O padrão URPS+ é uma metodologia para classificar Requisitos Não Funcionais que abrange Usabilidade, Confiabilidade, Performance, Suportabilidade e outros requisitos adicionais que não se encaixam diretamente nesses grupos.

U (Usability): Requisitos de usabilidade. Estão relacionados à Interação Humano-Computação. Envolvem a definição da facilidade de uso, de aprendizado, à eficiência, eficácia e acessibilidade do software;
R (Reliability): Requisitos de confiabilidade. Especificam a tolerância a falhas, a possibilidade de recuperação de falhas, entre outros;
P (Performance): Requisitos de desempenho. Especificam limites de tempo, consumo de memória, disco etc.
S (Supportability): Requisitos de manutenibilidade. Especificam a facilidade de dar manutenção no sistema, sua flexibilidade, entre outros.
+: Outros requisitos não-funcionais.

| **Número** | **Requisito**                                                                                                                                 | **Tipo**           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| RNF01      | O sistema deve ser capaz de suportar uma alta carga de usuários simultâneos sem degradação significativa no desempenho.                        | P (Performance)        |
| RNF02      | O sistema deve garantir a segurança dos dados dos usuários, incluindo criptografia de senhas e proteção contra acessos não autorizados.        | S (Segurança)          |
| RNF03      | O sistema deve ter uma interface intuitiva e fácil de usar, com feedback claro para ações do usuário.                                            | U (Usabilidade)       |
| RNF04      | O sistema deve ter tempos de resposta rápidos, com um tempo de carregamento de página não superior a 3 segundos em condições normais de rede.  | P (Performance)         |
| RNF05      | O sistema deve ser compatível com navegadores como Chrome, Firefox, Safari e Edge, e deve ser otimizado para dispositivos móveis e desktop. | U (Usabilidade))          |
| RNF06      | O sistema deve funcionar de forma eficiente em dispositivos com diferentes resoluções de tela, de smartphones a monitores 4K. | U (Usabilidade)  |

## Scale Agile Framework - SAFe

<p align="justify">O SAFe 6.0 é uma base de conhecimento de princípios, práticas e competências integradas comprovadas para alcançar agilidade empresarial usando Lean, Agile e DevOps. Ele é construído em torno da "Seven Core Competencies of Business Agility", que são fundamentais para alcançar e sustentar uma vantagem competitiva em uma era digital cada vez mais presente. O Modelo de requisitos utilizado pelo SAFe fornece uma estrutura de requisitos escalável que demonstra uma maneira de expressar comportamentos do sistema:</p>

- **Épicos:** uma iniciativa de desenvolvimento de solução significativa;
- **Capacidades:** representa uma grande funcionalidade de solução. Ela deve ser decomposta em funcionalidades a serem implementadas;
- **Features:** representa a funcionalidade da solução que fornece valor comercial, atende a uma necessidade das partes interessadas. Ela inclui uma hipótese de benefício e critérios de aceitação;
- **Histórias:** descrições curtas de uma pequena parte da funcionalidade desejada, escritas da perspectiva do usuário. Elas são o principal artefato usado para definir o comportamento do sistema no Agile.

### **_Tema Estratégico:_**

_Incentivar o público de academia_

### Épicos

| **Tema** | **Épico** |       **Descrição**        |
| :------: | :-------: | :------------------------: |
|    T1    |    E1     |     Gestão do Usuário      |
|    T2    |    E2     |   Gestão das Atividades    |
|    T3    |    E3     | Gestão da Interação social |

### Capacidade

| **Épico** | **Capacidade** |        **Descrição**         |
| :-------: | :------------: | :--------------------------: |
|    E1     |       C1       |     Administrar usuário      |
|    E2     |       C2       |     Gerenciar Registros e Progresso      |
|    E2     |       C3       |       Gerenciar conta        |
|    E3     |       C4       | Gerenciar interações sociais |

### Funcionalidade

| **Capacidade** | **Funcionalidade** |              **Descrição**              |
| :------------: | :----------------: | :-------------------------------------: |
|       C1       |         F1         |        Gerenciamento de usuário         |
|       C1       |         F2         |     Recuperação de conta e login        |
|       C2       |         F3         | Registro das Atividades e Acompanhamento de Progresso |
|       C2       |         F4         |       Pontuação e Moedas                |
|       C3       |         F5         |          Customização da conta          |
|       C3       |         F6         |                  Loja                   |
|       C4       |         F7         |Interação entre Usuários(Contas e Grupos)|
|       C4       |         F8         |        Participação de Campeonatos      |

### User Story

| **Número** | **US** | **Descrição**                                                                                                                                 | **Critérios de Aceitação**                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| F1         | US01   | Eu, como usuário, gostaria de realizar meu cadastro de conta no sistema para acessar o sistema.                                              | - Campos obrigatórios: nome (1-50 caracteres), e-mail (formato válido), senha (8-20 caracteres), idade (1-99).<br>- Validação: e-mail deve ser único e ter formato válido.<br>- Mensagens de erro claras para dados inválidos.<br>- Dados devem ser persistidos no banco. |
| F3         | US02   | Eu, como usuário, gostaria de inserir e verificar meu peso e altura para visualizar meu IMC.                                                | - Campos obrigatórios: peso (número decimal, 0-300 kg), altura (número decimal, 0.5-3 m), idade (número inteiro).<br>- O IMC deve ser calculado e exibido corretamente com base nos dados inseridos.<br>- Dados devem ser armazenados no banco. |
| F3         | US03   | Eu, como usuário, gostaria de registrar e visualizar minhas atividades físicas para ter uma referência do meu progresso físico ao longo do tempo. | - Exibição de lista com atividades passadas.<br>- Cada registro deve mostrar a atividade realizada, seu tempo gasto e a descrição da atividade.<br>- Histórico deve ser responsivo para facilitar a navegação.<br>- Deve ter um botão para o cadastro da atividade.|
| F4         | US04   | Eu, como usuário, gostaria de ganhar moedas equivalentes ao nível de esforço que fiz de exercício físico no dia para gamificar minha experiência de treino e torná-la mais divertida. | - Cálculo de moedas baseado em nível de atividade.<br>- Exibição do saldo de moedas atual do usuário.<br>- Moedas devem ser adicionadas ao finalizar um exercício.<br>- Percentual de moedas baseado nas atividades do dia. |
| F4         | US05   | Eu, como usuário, gostaria de gastar minhas moedas para me inscrever em um dos campeonatos disponíveis.                                    | - Exibição de lista de campeonatos disponíveis.<br>- O sistema deve emitir um alerta quando o saldo do usuario for inferior ao valor do desafio. <br>- Cada campeonato deve mostrar status (Aberto, Em andamento, Finalizado), preço da inscrição, e prêmio.<br>- Capacidade máxima e número de inscritos devem ser visíveis.<br>- Opção de inscrição em campeonatos abertos. |
| F8        | US06   | Eu, como usuário, gostaria de competir com outros usuários em capeonatos para batalhar com os outros usuários e ter a chance de ganhar prêmios. | - Lista de participantes do campeonato com quantidade atual e capacidade máxima.<br>- Ordenação por pontos.<br>- Exibição da data, horário e status do campeonato.<br>- Notificações sobre o status do campeonato.<br>- Informações sobre o prêmio. |
| F7         | US07   | Eu, como usuário, gostaria de criar um grupo para incentivar uns aos outros a praticar exercícios físicos.                                 | - Campos obrigatórios: nome do grupo (1-50 caracteres).<br>- Visualização dos integrantes do grupo. |
| F2         | US08   | Eu, como usuário, gostaria de recuperar minha conta através do e-mail, redefinindo a senha, caso eu tenha esquecido.                      | - Campo para inserção de e-mail.<br>- Verificação de existência de conta com o e-mail.<br>- Envio de e-mail com link para redefinição de senha.<br>- Atualização de senha através do link enviado.<br>- Mensagens de erro e sucesso claras. |
| F7         | US09   | Eu, como usuário, gostaria de visualizar outro usuario que tem grupos incomuns comigo para facilitar a comunicação.                                                                 | - Exibição de nome, data de registro e saldo de moedas do perfil acessado.<br>- Disponível apenas para usuários no mesmo grupo |
| F5         | US10   | Eu, como usuário, gostaria de criar e personalizar meu personagem da forma que eu desejar.                                                | - Escolha de estilos de cabelo, cor da pele, características faciais e vestimentas.<br>- Alteração e confirmação das personalizações.<br>- Visualização do personagem criado. |
| F6         | US11   | Eu, como usuário, gostaria de gastar minhas moedas em customizações na loja da plataforma para personalizar meu personagem.                | - Seção dedicada para customizações na loja.<br>- Variedade de itens com preços. <br>- Processamento e confirmação de compra. |
| F3         | US12   | Eu, como usuário, gostaria de receber desafios diários e semanais para serem realizados durante o dia/semana para ser recompensado com moedas para usar na loja. | - Atualização e visualização de desafios diários e semanais.<br>- Recompensas em moedas de ingresso e moedas para a loja.<br>- Desafios não repetitivos no mesmo período.<br>- Exibição de progresso do desafio. |
| F2         | US13   | Eu, como usuário, gostaria de realizar meu login no sistema utilizando email e senha previamente cadastrados para acessar as funcionalidades do sistema. | - Validação de email e senha.<br>- O campo de login deve aceitar somente email. <br>- Mensagem de erro para credenciais incorretas.<br>- Acesso às funcionalidades do sistema após login bem-sucedido. |
| F1         | US14   | Eu, como usuário, gostaria de editar minhas informações na plataforma para corrigir dados incorretos ou desatualizados.                      | - Campos editáveis: nome, senha, peso, altura, idade.<br>- Validação de novas informações.<br>- Atualização e confirmação das mudanças feitas. |
| F8         | US15   | Eu, como usuário, gostaria de cancelar a inscrição em um dos campeonatos em que me inscrevi para gerenciar melhor minha participação em campeonatos conforme minhas necessidades. | - Cancelamento apenas para campeonatos em status "Em Aberto".<br>- Estorno de 60% das moedas gastas na inscrição. |
| F7        | US16   | Eu, como usuário, gostaria de editar as informações do meu grupo que criei para refletir mudanças no propósito ou estilo do grupo.           | - Somente o criador do grupo pode fazer edição. <br>- Confirmação e registro das alterações.<br>- Opção de cancelar pedido de alteração. |
| F7        | US17   | Eu, como usuário, gostaria de excluir um grupo que criei anteriormente para eliminar um grupo que foi criado por engano ou já não é mais ativo. | - Exclusão permitida apenas para o criador do grupo.<br>- Expulsão de todos os membros.<br>- Confirmação antes da exclusão.<br>- Remoção do grupo do banco de dados. |
| F7        | US18   | Eu, como usuário, gostaria de retirar um usuário que está no grupo que eu criei como forma de manter a harmonia do grupo. | - Exclusão do usuário apenas pelo criador.<br>- Confirmação do pedido de expulsão.<br>- Bloqueio de acesso do usuário expulso. |
| F7        | US19   | Eu, como usuário, gostaria de conversar com outros usuários via chat nos grupos que faço parte para gerenciar a dinâmica e a participação do grupo de maneira eficaz. | - Envio e visualização de mensagens no chat.<br>- Armazenamento das mensagens por tempo indeterminado.<br>- Acesso ao chat apenas para membros do grupo. |


## MVP

<p>O MVP, ou Produto Mínimo Viável (Minimum Viable Product), é um conceito fundamental no desenvolvimento de produtos e startups. Ele se refere à versão mais simples e funcional de um produto, criada com o objetivo de testar uma ideia no mercado com o mínimo de esforço e recursos possíveis. A ideia central do MVP é lançar rapidamente algo que resolva o problema principal do cliente, para validar hipóteses e obter feedback real dos usuários.</p>
<p>O MVP não precisa ser um produto completo ou polido, mas deve ser funcional o suficiente para ser usado por clientes reais. Esse feedback inicial é essencial, pois permite que a equipe de desenvolvimento entenda melhor as necessidades do mercado, identifique falhas ou melhorias necessárias e faça ajustes antes de investir mais tempo e recursos no produto final.</p>
<p>Esse processo de validação contínua permite que a equipe aprenda e evolua o produto de forma iterativa, reduzindo o risco de fracasso ao focar nas características que realmente importam para os usuários.</p>

### MVP 1

| US  | Descrição                                                                                                                     |
| --- | ----------------------------------------------------------------------------------------------------------------------------- |
| 01  | Cadastro de Usuário: Implementar cadastro de usuário, incluindo front e back, validação e persistência.          | Alta 
| 02  | Cálculo de IMC: Implementar a funcionalidade para cálculo do IMC do usuário, incluindo front, back e persistência.  | Baixo 
| 03  | Registro de Atividades Físicas: Registrar e visualizar atividades físicas, incluindo histórico paginado.       | Alta 
| 07  | Criação e Gestão de Grupos: Implementar criação incluindo persistência e gerenciamento de membros. | Alta 3
| 13  | Login: Implementar funcionalidade de login, incluindo validação de e-mail e senha.                              | Alta 
| 14  | Edição de Informações: Permitir edição de informações pessoais do usuário, validação e exclusão de conta.           | Média 
| 16  | Edição de Informações do Grupo: Permitir edição das informações do grupo.                                 | Média 
| 17  | Exclusão de Grupo: Implementar exclusão de grupo, confirmação de exclusão.                                     | Alta 
| 18  | Expulsão de Usuário do Grupo: Implementar expulsão de usuário de grupo, com confirmação e bloqueio de acesso.          | Alta 

### MVP 2

| US  | Descrição                                                                                                                               |
| --- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 04  | Cálculo de Moedas: Calcular e exibir moedas baseadas em atividades físicas, incluindo front e back.                      | Baixo
| 05  | Campeonatos: Implementar inscrição e visualização de campeonatos, incluindo status, preço e prêmios.                        | Alto
| 06  | Participantes de Campeonatos: Visualizar lista de participantes e capacidade do campeonato, notificar inscritos.           | Média
| 08  | Recuperação de Conta: Implementar recuperação de conta via e-mail, incluindo verificação e atualização de senha.        | Alto
| 09  | Perfil de Usuário: Visualizar perfil de outros usuários.                                                            | Baixo 
| 10  | Personalização de Personagem: Implementar personalização do personagem do usuário, incluindo seleção de características e persistência. | Alto
| 11  | Loja de Customizações: Implementar seção para customizações na loja, com categorias de itens e persistência de compras.       | Baixo
| 12  | Desafios Diários e Semanais: Implementar desafios diários e semanais, atualizar aleatoriamente, e recompensas.              | Média
| 15  | Cancelar inscrições em Campeonatos              | Média
| 19  | Chat de Grupo: Implementar a função de Chat para que os usuários possam conversar entre si.                          | Alta

## Definition of Done (DoD) e Definition of Ready (DoR)

### DOR

**US01** - Eu, como usuário, gostaria de realizar meu cadastro de conta no sistema para acessar o sistema. 
| Critério                                                                                                           | Checklist |
|-------------------------------------------------------------------------------------------------------------------|-----------|
| Todos compreenderam o Requisito?                                                                           | [ ✅]       |
| Documentação do levantamento dos requisitos feita de forma objetiva e clara, de forma que possa ser consultada depois? | [ ✅]       |
| A equipe é capaz de realizar o desenvolvimento desse Requisito?                                                   | [✅ ]       |
| O Product Owner aceitou e validou o requisito?                                                                    | [✅ ]       |

US02 - Eu, como usuário, gostaria de inserir e verificar meu peso e altura para visualizar meu IMC. 

| Critério                                                                                                           | Checklist |
|-------------------------------------------------------------------------------------------------------------------|-----------|
| Todos compreenderam o Requisito?                                                                           | [ ✅]       |
| Documentação do levantamento dos requisitos feita de forma objetiva e clara, de forma que possa ser consultada depois? | [ ✅]       |
| A equipe é capaz de realizar o desenvolvimento desse Requisito?                                                   | [✅ ]       |
| O Product Owner aceitou e validou o requisito?                                                                    | [✅ ]       |

US03 - Eu, como usuário, gostaria de registrar e visualizar minhas atividades físicas para ter uma referência do meu progresso físico ao longo do tempo.

| Critério                                                                                                           | Checklist |
|-------------------------------------------------------------------------------------------------------------------|-----------|
| Todos compreenderam o Requisito?                                                                           | [ ✅]       |
| Documentação do levantamento dos requisitos feita de forma objetiva e clara, de forma que possa ser consultada depois? | [ ✅]       |
| A equipe é capaz de realizar o desenvolvimento desse Requisito?                                                   | [✅ ]       |
| O Product Owner aceitou e validou o requisito?                                                                    | [✅ ]       |

US07 - Eu, como usuário, gostaria de criar um grupo para incentivar uns aos outros a praticar exercícios físicos. 

| Critério                                                                                                           | Checklist |
|-------------------------------------------------------------------------------------------------------------------|-----------|
| Todos compreenderam o Requisito?                                                                           | [ ✅]       |
| Documentação do levantamento dos requisitos feita de forma objetiva e clara, de forma que possa ser consultada depois? | [ ✅]       |
| A equipe é capaz de realizar o desenvolvimento desse Requisito?                                                   | [✅ ]       |
| O Product Owner aceitou e validou o requisito?                                                                    | [✅ ]       |

US13 - Eu, como usuário, gostaria de realizar meu login no sistema utilizando email e senha previamente cadastrados para acessar as funcionalidades do sistema.

| Critério                                                                                                           | Checklist |
|-------------------------------------------------------------------------------------------------------------------|-----------|
| Todos compreenderam o Requisito?                                                                           | [ ✅]       |
| Documentação do levantamento dos requisitos feita de forma objetiva e clara, de forma que possa ser consultada depois? | [ ✅]       |
| A equipe é capaz de realizar o desenvolvimento desse Requisito?                                                   | [✅ ]       |
| O Product Owner aceitou e validou o requisito?                                                                    | [✅ ]       |

US14 - Eu, como usuário, gostaria de editar minhas informações na plataforma para corrigir dados incorretos ou desatualizados. 

| Critério                                                                                                           | Checklist |
|-------------------------------------------------------------------------------------------------------------------|-----------|
| Todos compreenderam o Requisito?                                                                           | [ ✅]       |
| Documentação do levantamento dos requisitos feita de forma objetiva e clara, de forma que possa ser consultada depois? | [ ✅]       |
| A equipe é capaz de realizar o desenvolvimento desse Requisito?                                                   | [✅ ]       |
| O Product Owner aceitou e validou o requisito?                                                                    | [✅ ]       |

US16 - Eu, como usuário, gostaria de editar as informações do meu grupo que criei para refletir mudanças no propósito ou estilo do grupo. 

| Critério                                                                                                           | Checklist |
|-------------------------------------------------------------------------------------------------------------------|-----------|
| Todos compreenderam o Requisito?                                                                           | [ ✅]       |
| Documentação do levantamento dos requisitos feita de forma objetiva e clara, de forma que possa ser consultada depois? | [ ✅]       |
| A equipe é capaz de realizar o desenvolvimento desse Requisito?                                                   | [✅ ]       |
| O Product Owner aceitou e validou o requisito?                                                                    | [✅ ]       |

US17 - Eu, como usuário, gostaria de excluir um grupo que criei anteriormente para eliminar um grupo que foi criado por engano ou já não é mais ativo.

| Critério                                                                                                           | Checklist |
|-------------------------------------------------------------------------------------------------------------------|-----------|
| Todos compreenderam o Requisito?                                                                           | [ ✅]       |
| Documentação do levantamento dos requisitos feita de forma objetiva e clara, de forma que possa ser consultada depois? | [ ✅]       |
| A equipe é capaz de realizar o desenvolvimento desse Requisito?                                                   | [✅ ]       |
| O Product Owner aceitou e validou o requisito?                                                                    | [✅ ]       |

US18 - Eu, como usuário, gostaria de retirar um usuário que está no grupo que eu criei como forma de manter a harmonia do grupo.

| Critério                                                                                                           | Checklist |
|-------------------------------------------------------------------------------------------------------------------|-----------|
| Todos compreenderam o Requisito?                                                                           | [ ✅]       |
| Documentação do levantamento dos requisitos feita de forma objetiva e clara, de forma que possa ser consultada depois? | [ ✅]       |
| A equipe é capaz de realizar o desenvolvimento desse Requisito?                                                   | [✅ ]       |
| O Product Owner aceitou e validou o requisito?                                                                    | [✅ ]       |

### DOD

**US01** - Eu, como usuário, gostaria de realizar meu cadastro de conta no sistema para acessar o sistema. 
| Critério                                                                                                  | Checklist |
|-----------------------------------------------------------------------------------------------------------|-----------|
| O Requisito atende aos critérios do backlog?                                                              | [✅]      |
| Todas as funcionalidades foram implementadas e estão operacionais conforme descrito?                      | [✅]      |
| O Requisito não causou alguma instabilidade no sistema?                                                   | [✅]      |
| Testes manuais foram realizados para verificar que o fluxo de trabalho funciona conforme esperado?        | [✅]      |
| O código foi integrado ao repositório principal sem conflitos.                                            | [✅]      |


US02 - Eu, como usuário, gostaria de inserir e verificar meu peso e altura para visualizar meu IMC. 

| Critério                                                                                                  | Checklist |
|-----------------------------------------------------------------------------------------------------------|-----------|
| O Requisito atende aos critérios do backlog?                                                              | [✅]      |
| Todas as funcionalidades foram implementadas e estão operacionais conforme descrito?                      | [✅]      |
| O Requisito não causou alguma instabilidade no sistema?                                                   | [✅]      |
| Testes manuais foram realizados para verificar que o fluxo de trabalho funciona conforme esperado?        | [✅]      |
| O código foi integrado ao repositório principal sem conflitos.                                            | [✅]      |


US03 - Eu, como usuário, gostaria de registrar e visualizar minhas atividades físicas para ter uma referência do meu progresso físico ao longo do tempo.

| Critério                                                                                                  | Checklist |
|-----------------------------------------------------------------------------------------------------------|-----------|
| O Requisito atende aos critérios do backlog?                                                              | [✅]      |
| Todas as funcionalidades foram implementadas e estão operacionais conforme descrito?                      | [✅]      |
| O Requisito não causou alguma instabilidade no sistema?                                                   | [✅]      |
| Testes manuais foram realizados para verificar que o fluxo de trabalho funciona conforme esperado?        | [✅]      |
| O código foi integrado ao repositório principal sem conflitos.                                            | [✅]      |


US07 - Eu, como usuário, gostaria de criar um grupo para incentivar uns aos outros a praticar exercícios físicos. 

| Critério                                                                                                  | Checklist |
|-----------------------------------------------------------------------------------------------------------|-----------|
| O Requisito atende aos critérios do backlog?                                                              | [✅]      |
| Todas as funcionalidades foram implementadas e estão operacionais conforme descrito?                      | [✅]      |
| O Requisito não causou alguma instabilidade no sistema?                                                   | [✅]      |
| Testes manuais foram realizados para verificar que o fluxo de trabalho funciona conforme esperado?        | [✅]      |
| O código foi integrado ao repositório principal sem conflitos.                                            | [✅]      |


US13 - Eu, como usuário, gostaria de realizar meu login no sistema utilizando email e senha previamente cadastrados para acessar as funcionalidades do sistema.

| Critério                                                                                                  | Checklist |
|-----------------------------------------------------------------------------------------------------------|-----------|
| O Requisito atende aos critérios do backlog?                                                              | [✅]      |
| Todas as funcionalidades foram implementadas e estão operacionais conforme descrito?                      | [✅]      |
| O Requisito não causou alguma instabilidade no sistema?                                                   | [✅]      |
| Testes manuais foram realizados para verificar que o fluxo de trabalho funciona conforme esperado?        | [✅]      |
| O código foi integrado ao repositório principal sem conflitos.                                            | [✅]      |


US14 - Eu, como usuário, gostaria de editar minhas informações na plataforma para corrigir dados incorretos ou desatualizados. 

|Critério                                                                                                  | Checklist |
|-----------------------------------------------------------------------------------------------------------|-----------|
| O Requisito atende aos critérios do backlog?                                                              | [✅]      |
| Todas as funcionalidades foram implementadas e estão operacionais conforme descrito?                      | [✅]      |
| O Requisito não causou alguma instabilidade no sistema?                                                   | [✅]      |
| Testes manuais foram realizados para verificar que o fluxo de trabalho funciona conforme esperado?        | [✅]      |
| O código foi integrado ao repositório principal sem conflitos.                                            | [✅]      |

US16 - Eu, como usuário, gostaria de editar as informações do meu grupo que criei para refletir mudanças no propósito ou estilo do grupo. 

| Critério                                                                                                  | Checklist |
|-----------------------------------------------------------------------------------------------------------|-----------|
| O Requisito atende aos critérios do backlog?                                                              | [✅]      |
| Todas as funcionalidades foram implementadas e estão operacionais conforme descrito?                      | [✅]      |
| O Requisito não causou alguma instabilidade no sistema?                                                   | [✅]      |
| Testes manuais foram realizados para verificar que o fluxo de trabalho funciona conforme esperado?        | [✅]      |
| O código foi integrado ao repositório principal sem conflitos.                                            | [✅]      |


US17 - Eu, como usuário, gostaria de excluir um grupo que criei anteriormente para eliminar um grupo que foi criado por engano ou já não é mais ativo.

| Critério                                                                                                  | Checklist |
|-----------------------------------------------------------------------------------------------------------|-----------|
| O Requisito atende aos critérios do backlog?                                                              | [✅]      |
| Todas as funcionalidades foram implementadas e estão operacionais conforme descrito?                      | [✅]      |
| O Requisito não causou alguma instabilidade no sistema?                                                   | [✅]      |
| Testes manuais foram realizados para verificar que o fluxo de trabalho funciona conforme esperado?        | [✅]      |
| O código foi integrado ao repositório principal sem conflitos.                                            | [✅]      |

US18 - Eu, como usuário, gostaria de retirar um usuário que está no grupo que eu criei como forma de manter a harmonia do grupo.

| Critério                                                                                                  | Checklist |
|-----------------------------------------------------------------------------------------------------------|-----------|
| O Requisito atende aos critérios do backlog?                                                              | [✅]      |
| Todas as funcionalidades foram implementadas e estão operacionais conforme descrito?                      | [✅]      |
| O Requisito não causou alguma instabilidade no sistema?                                                   | [✅]      |
| Testes manuais foram realizados para verificar que o fluxo de trabalho funciona conforme esperado?        | [✅]      |
| O código foi integrado ao repositório principal sem conflitos.                                            | [✅]      |



## Níveis de Prioridade

Na matriz apresentada, foram consideradas três dimensões para avaliar cada feature: perspectiva de negócios, entendimento técnico e urgência.

Na dimensão de perspectiva de negócios, aplicou-se a técnica MoSCoW, categorizando as histórias de usuário em quatro grupos: MUST (essenciais), SHOULD (importantes), COULD (desejáveis) e WON'T (não serão implementadas agora).

O entendimento técnico foi baseado na avaliação da equipe sobre a facilidade de implementação e sua capacidade de desenvolver cada história. Utilizou-se três classificações para expressar o nível de compreensão: BAIXO, MÉDIO e ALTO.

### Critérios Utilizados:

**1. Perspectiva de Negócio:** Classificamos as US com base no valor que trazem ao produto final:
- **MUST:** Funcionalidades essenciais, sem as quais o produto não atenderia os requisitos principais.
- **SHOULD:** Funcionalidades importantes, mas que podem ser adiadas.
- **COULD:** Têm um valor menor e podem ser adicionadas conforme houver tempo e recursos.

**2. Entendimento Técnico:** Avaliamos o nível de familiaridade da equipe com a implementação da funcionalidade:
- **ALTO:** A equipe já tem conhecimento consolidado sobre a US.
- **MEDIANO:** Existe algum conhecimento, mas podem surgir desafios técnicos.
- **BAIXO:** A equipe tem pouco ou nenhum conhecimento sobre a funcionalidade.

**3. Urgência:** Classificamos a urgência com base na necessidade de entrega da funcionalidade no MVP:
- **ALTA:** Essenciais para o MVP.
- **MÉDIA:** Podem ser entregues posteriormente.
- **BAIXA:** Podem ser adiadas para uma versão futura.

### Tabela de Prioridade

| US   | Descrição                                                                                                                     | Negócio  | Técnico | Urgência |
| ---- | ----------------------------------------------------------------------------------------------------------------------------- | -------- | ------- | -------- |
| 01   | Cadastro de Usuário: Implementar cadastro de usuário, incluindo front e back, validação e persistência.                        | MUST     | ALTO    | ALTA     |
| 02   | Cálculo de IMC: Implementar a funcionalidade para cálculo do IMC do usuário, incluindo front, back e persistência.             | MUST    | ALTO    | ALTA    |
| 03   | Registro de Atividades Físicas: Registrar e visualizar atividades físicas, incluindo histórico paginado.                      | MUST     | MÉDIA    | ALTA     |
| 04   | Cálculo de Moedas: Calcular e exibir moedas baseadas em atividades físicas, incluindo front e back.                           | SHOULD    | MÉDIA   | MÉDIA    |
| 05   | Campeonatos: Implementar inscrição e visualização de campeonatos, incluindo status, preço e prêmios.                         | SHOULD     | BAIXO | MÉDIA     |
| 06   | Participantes de Campeonatos: Visualizar lista de participantes e capacidade do campeonato, notificar inscritos.              | SHOULD   | BAIXO | MÉDIA    |
| 07   | Criação e Gestão de Grupos: Implementar criação, persistência e gerenciamento de membros.                                      | MUST     | MEDIANO | ALTA     |
| 08   | Recuperação de Conta: Implementar recuperação de conta via e-mail, incluindo verificação e atualização de senha.              | MUST     | ALTO    | ALTA     |
| 09   | Perfil de Usuário: Visualizar perfil de outros usuários.                                                                     | SHOULD    | ALTO    | MÉDIA    |
| 10   | Personalização de Personagem: Implementar personalização do personagem do usuário, incluindo seleção de características.       | COULD     | BAIXO   | BAIXA     |
| 11   | Loja de Customizações: Implementar seção para customizações na loja, com categorias de itens e persistência de compras.       | COULD    | BAIXO   | BAIXA    |
| 12   | Desafios Diários e Semanais: Implementar desafios diários e semanais, atualizar aleatoriamente, e recompensas.                | SHOULD   | MEDIANO | MÉDIA    |
| 13   | Login: Implementar funcionalidade de login, incluindo validação de e-mail e senha.                                             | MUST     | ALTO    | ALTA     |
| 14   | Edição de Informações: Permitir edição de informações pessoais do usuário, validação e exclusão de conta.                     | MUST   | MEDIANO | ALTA    |
| 16   | Edição de Informações do Grupo: Permitir edição das informações do grupo.                                                     | MUST  | MEDIANO | ALTA    |
| 17   | Exclusão de Grupo: Implementar exclusão de grupo, confirmação de exclusão.                                                    | MUST     | MEDIANO | ALTA     |
| 18   | Expulsão de Usuário do Grupo: Implementar expulsão de usuário de grupo, com confirmação e bloqueio de acesso.                 | MUST     | MEDIANO | ALTA     |
| 19   | Chat de Grupo: Implementar a função de Chat para que os usuários possam conversar entre si.                                   | SHOULD     | BAIXO    | MÉDIA     |

Com essa tabela podemos fazer uma qualificação melhor das nossas prioridades na aplicação e no MVP.

## Desenvolvimento do Produto

A tabela abaixo foi confeccionada com base no nosso modelo SAFe e contém uma lista das tarefas baseadas nas histórias de usuário, contendo o que é necessário a ser realizado no FrontEnd e no BackEnd, além também dos critérios de aceitação.

| **História de Usuário**                             | **Tarefa**                                                               | **Front**                                                                                | **Back**                                                            | **Critérios de Aceitação**                                                                                                     | **Prioridade** |
| --------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| **US01 - Cadastro de Usuário**                      | Implementar o cadastro de usuário no sistema.                            | Criar tela de cadastro (nome, e-mail, senha). Implementar validação e mensagens de erro. | Persistência no banco de dados. Verificação de e-mail único.        | Cadastro deve funcionar com dados válidos, erros para dados inválidos ou e-mail já registrado. Persistência no banco de dados. | Alta           |
| **US02 - Cálculo de IMC**                           | Implementar cálculo do IMC do usuário.                                   | Criar formulário para peso e altura. Tela para exibir IMC calculado.                     | Implementar cálculo do IMC e persistência no banco de dados.        | Inserir dados e calcular IMC corretamente. Dados devem ser salvos no banco de dados.                                           | Baixo          |
| **US03 - Registro de Atividades Físicas**           | Implementar registro e histórico de atividades físicas.                  | Tela de histórico paginada mensalmente. Exibir calorias e moedas.                        | Registro de atividades e cálculo de calorias e moedas.              | Registro e visualização de atividades físicas. Histórico paginado e informações corretas.                                      | Alta           |
| **US04 - Cálculo de Moedas**                        | Implementar cálculo e exibição de moedas baseadas em atividades físicas. | Exibir moedas e feedback visual após adicionar moedas.                                   | Cálculo baseado em calorias gastas. Limite máximo semanal.          | Cálculo correto das moedas e feedback ao ganhar. Limitação semanal.                                                            | Baixo          |
| **US05 - Campeonatos**                              | Implementar a funcionalidade de inscrição e visualização de campeonatos. | Criar lista de campeonatos, exibir status, preço e prêmio.                               | Inscrição e persistência de dados no banco de dados.                | Visualização e inscrição em campeonatos, exibição de status e prêmios, registro correto de inscrições.                         | Alta           |
| **US06 - Participantes de Campeonatos**             | Implementar visualização de participantes de campeonatos.                | Visualizar lista de participantes, capacidade máxima.                                    | Notificação de início e gestão de participantes em tempo real.      | Lista de participantes e capacidade máxima correta. Notificação para inscritos.                                                | Média          |
| **US07 - Criação e Gestão de Grupos**               | Implementar criação e gestão de grupos.                                  | Criar grupo, convite de amigos.                                                    | Persistência e gestão de grupos e membros no banco de dados.        | Criação e gestão de grupos, persistência de dados.                                                     | Alta           |
| **US08 - Recuperação de Conta**                     | Implementar recuperação de conta via e-mail.                             | Processo de recuperação via e-mail e verificação.                                        | Envio de e-mail para redefinição e atualização de senha.            | Recuperação de conta, envio de link para redefinição de senha, atualização de senha.                                           | Alta           |
| **US09 - Perfil de Usuário**                        | Implementar visualização de perfil de outros usuários.                   | Visualização de perfil, informações, gráficos comparativos.                              | Adicionar/remover amigos, visualização de histórico e comparativos. | Visualização de perfis com detalhes, gráficos comparativos, adicionar/remover amigos.                                          | Baixo          |
| **US10 - Personalização de Personagem**             | Implementar personalização de personagem do usuário.                     | Personalização de características (cabelo, pele, etc.).                                  | Persistência e atualização das personalizações.                     | Personalização com diferentes características, persistência e exibição correta.                                                | Alta           |
| **US11 - Loja de Customizações**                    | Implementar seção na loja para customizações do personagem.              | Seção de loja com categorias de itens.                                                   | Compra e atualização de itens, persistência no banco de dados.      | Acesso à loja, compra e atualização de customizações, persistência correta.                                                    | Baixo          |
| **US12 - Desafios Diários e Semanais**              | Implementar desafios diários e semanais.                                 | Lista de desafios, progresso e recompensas.                                              | Atualização de desafios e configuração de recompensas.              | Atualização diária e semanal de desafios, recebimento de recompensas.                                                          | Média          |
| **US13 - Login**                                    | Implementar funcionalidade de login.                                     | Tela de login, validação de e-mail e senha.                                              | Verificação de login e senha, mensagens de erro.                    | Login com e-mail e senha corretos, mensagem de erro para dados incorretos.                                                     | Alta           |
| **US14 - Edição de Informações**                    | Implementar edição de informações pessoais.                              | Tela de edição, validação de novas informações.                                          | Persistência de informações, funcionalidade de exclusão de conta.   | Edição e validação de informações, persistência correta, exclusão de conta.                                                    | Média          |
| **US15 - Cancelamento de Inscrição em Campeonatos** | Implementar cancelamento de inscrição em campeonatos.                    | Opção de cancelamento, política de estorno.                                              | Lógica de cancelamento e estorno de moedas.                         | Cancelamento permitido em campeonatos "Em Aberto", estorno de 60% das moedas.                                                  | Média          |
| **US16 - Edição de Informações do Grupo**           | Implementar edição de informações do grupo.                              | Tela de edição, bloqueio para não-administradores.                                       | Persistência e gestão de pedidos de alteração.                      | Edição apenas para administradores, persistência correta das alterações, opção de cancelar pedido.                             | Média          |
| **US17 - Exclusão de Grupo**                        | Implementar exclusão de grupo.                                           | Opção de exclusão, confirmação antes da exclusão.                                        | Exclusão do grupo e notificação para membros.                       | Exclusão apenas para criador, notificação aos membros, remoção do código do grupo.                                             | Média          |
| **US18 - Expulsão de Usuário do Grupo**             | Implementar expulsão de usuário de grupo.                                | Opção de expulsão, confirmação antes da remoção.                                         | Eliminação de acesso do usuário expulso, persistência das mudanças. | Expulsão permitida para administradores, bloqueio de acesso, persistência correta.                                             | Média          |
| **US19 - Chat de Grupo**                            | Implementar chat de usuário de grupo.                                    | Opção de enviar, ver outras mensagens.                                                   | Persistência das mensagens enviadas.                                | Chat com envio e recebimento de mensagens dos usuários                                                                         | Alta          |

### Problemas e Alterações encontradas no Desenvolvimento do Projeto

Durante o desenvolvimento, enfrentamos desafios significativos que impactaram a execução do projeto. Os principais problemas foram a falta de tempo devido ao cronograma apertado e a saída de dois membros-chave da equipe, o que afetou nossa capacidade de implementar todas as funcionalidades planejadas inicialmente. Diante dessas dificuldades, revisamos o backlog para adaptar o escopo do MVP às novas circunstâncias e garantir a entrega de um produto funcional e de valor para os usuários dentro dos limites disponíveis.

#### Estratégia de MVP Atual

##### Nova Estratégia de MVP

A nova estratégia de MVP concentra-se nas funcionalidades essenciais que garantem uma experiência básica e sólida para os usuários, alinhando-se às prioridades mais críticas do projeto. O MVP atual inclui as seguintes funcionalidades:

1. **Cadastro de Usuário (US01):** Implementar o cadastro de usuário, incluindo validação e persistência dos dados.
2. **Cálculo de IMC (US02):** Permitir que o usuário insira e visualize seu IMC, oferecendo uma visão básica de suas métricas de saúde.
3. **Registro de Atividades Físicas (US03):** Registrar e visualizar o histórico de atividades físicas, fundamental para o acompanhamento do progresso do usuário.
4. **Criação e Gestão de Grupos (US07):** Implementar a criação e gestão de grupos para promover interação e apoio entre usuários.
5. **Login (US13):** Implementar o login do usuário com validação de e-mail e senha para acesso seguro.
6. **Edição de Informações (US14):** Permitir a edição e exclusão de informações pessoais do usuário.
7. **Edição e Exclusão de Grupos (US16, US17):** Permitir a edição e exclusão de grupos, além da expulsão de usuários, para uma gestão eficaz das comunidades.
8. **Expulsão de Usuário do Grupo (US18):** Implementar a expulsão de usuários de grupos, com confirmação e bloqueio de acesso.

A decisão de priorizar essas funcionalidades visa oferecer uma base sólida para a plataforma, garantindo que os usuários possam se cadastrar, registrar suas atividades e gerenciar suas contas e informações de forma eficiente. Essas funcionalidades são fundamentais para a usabilidade básica da plataforma e para a experiência inicial do usuário.

#### Funcionalidades Retiradas do MVP 1 e Previstas no MVP 2

##### Funcionalidades Retiradas

1. **Criação e Personalização de Personagem (US10):** Originalmente planejadas para permitir a criação e personalização detalhada do personagem, essas funcionalidades foram adiadas. Embora ofereçam valor significativo em termos de engajamento, não são essenciais para o funcionamento básico da plataforma.

2. **Loja de Customizações (US11):** A implementação da loja onde os usuários poderiam comprar itens de personalização foi removida. Esta funcionalidade é secundária em relação às necessidades básicas de funcionalidade e interação. Entra no mesmo critério do tópico acima, a implementação de customizações no geral vão muito mais da perspectiva visual da aplicação, que demorariam muito mais e não seriam de utilidade grande no escopo viável no MVP 1 que foca nos funcionamentos de base.

3. **Desafios Diários e Semanais (US12):** Embora os desafios possam aumentar o engajamento dos usuários, a prioridade foi dada às funcionalidades básicas de registro e interação, que são cruciais para a plataforma funcionar de forma coesa.

4. **Visualização de Estatísticas de Outros Usuários e Chat de Grupo (US09 e US19):** A funcionalidade de visualizar estatísticas de outros usuários junto da funcionalidade de Chat nos grupos foram removidas para focar na implementação dos recursos fundamentais de gestão pessoal evitando esse tipo de interação que necessitaria de uma quantidade maior de trabalho.

O adiamento dessas funcionalidades foram necessários para garantir que o MVP fosse entregue dentro do cronograma reduzido e com a equipe reduzida. Essas funcionalidades adicionais foram consideradas de menor prioridade em comparação com as funções básicas que garantem a operação inicial da plataforma.

#### Comparação entre Backlogs

##### Backlog Antigo (MVP 1 e MVP 2)

- **MVP 1** incluía funcionalidades amplas como visualização de estatísticas de outros usuários, criação de grupos, e gerenciamento de campeonatos, além de funcionalidades de cadastro e edição de informações.
- **MVP 2** previa a implementação de funcionalidades adicionais, como criação e personalização de personagens, loja de customizações e desafios diários.

##### Backlog Atual

- **MVP Atual** simplifica o escopo para focar em funcionalidades essenciais, como cadastro de usuário, cálculo de IMC, registro de atividades físicas, e gestão de grupos. As funcionalidades que foram removidas do MVP 1 e 2, como personalização de personagens e loja de customizações, foram adiadas para garantir a entrega de um produto funcional dentro das novas restrições de tempo e equipe.

O MVP Atual é mais enxuto e concentrado, refletindo a necessidade de priorizar a entrega de uma plataforma básica e funcional. Enquanto o backlog antigo incluía uma ampla gama de funcionalidades, o atual concentra-se no núcleo essencial para a operação da plataforma e a satisfação inicial dos usuários. As funcionalidades adicionais foram adiadas para futuras implementações, permitindo que a equipe se concentre nas partes mais críticas e garanta a entrega oportuna do produto.

Essa abordagem ajustada garante que, mesmo com os desafios enfrentados, a plataforma possa ser lançada com uma base sólida, e funcionalidades adicionais possam ser adicionadas conforme o tempo e os recursos permitirem.

## Histórico de Versões

|  **Data**  | **Versão** |     **Descrição**      | **Editores**  |
| :--------: | :--------: | :--------------------: | :-----------: |
| 01/08/2024 |   `1.0`    |   Criação do Backlog   |     Lucas     |
| 12/08/2024 |   `2.0`    |   Ajustes do Backlog   |    Davi R     |
| 19/08/2024 |   `2.1`    |   Ajustes do Backlog   | Mateus Vieira |
| 27/08/2024 |   `2.2`    | Refinamento do Backlog | Mateus Vieira |
| 27/08/2024 |   `2.3`    | Ajustes do Backlog     | Lucas Heler   |
| 08/09/2024 |   `3.0`    | Modificações do Backlog SAFe  | Lucas Heler  |
| 08/09/2024 |   `3.1`    | Alterações em medidas das Issues abertas | Lucas Heler  |
| 09/09/2024 |   `3.2`    | Melhorias no Backlog | Lucas Heler  |
| 09/09/2024 |   `3.3`    | Revisão de Backlog | Dara Maria  |
