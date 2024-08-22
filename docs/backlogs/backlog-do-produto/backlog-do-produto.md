# Backlog do produto

<p>O Backlog do produto é uma lista dinâmica e priorizada de tudo que precisa ser feito para desenvolver, aprimorar ou corrigir um produto. Ele é essencialmente o "coração" do processo de desenvolvimento, especialmente em metodologias ágeis, como o Scrum.</p>
<p>O Backlog do produto é criado e mantido pelo Product Owner, que é responsável por garantir que ele esteja alinhado com a visão e os objetivos do produto. A lista pode incluir novas funcionalidades, melhorias em funcionalidades existentes, correções de bugs, mudanças técnicas, ou qualquer outro trabalho necessário para a evolução do produto.</p>
<p>Os itens no Backlog do produto são chamados de histórias (ou User Stories), e cada uma delas descreve uma necessidade ou requisito de forma que todos na equipe possam entender. Essas histórias são priorizadas de acordo com o valor que entregam ao usuário e ao negócio, permitindo que a equipe de desenvolvimento trabalhe primeiro nas tarefas que trazem maior impacto.</p>
<p>Um ponto importante sobre o Backlog do produto é que ele não é estático. Conforme o desenvolvimento avança e novas informações são descobertas, itens podem ser adicionados, removidos ou reordenados. Isso permite que a equipe seja ágil e responda rapidamente às mudanças nas necessidades dos usuários ou no mercado.</p>

## Requisitos

### Requisitos Funcionais

| **Número** | **Requisito**                                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RF01              | O sistema deve permitir ao usuário realizar o cadastro de conta, incluindo campos obrigatórios como nome, e-mail, senha, gênero e idade.                        |
| RF02              | O sistema deve validar os dados inseridos no cadastro, garantindo que o e-mail não esteja em uso e que os formatos sejam válidos.                                |
| RF03              | O sistema deve permitir ao usuário inserir e verificar seu peso e altura para visualizar seu IMC.                                                                 |
| RF04              | O sistema deve armazenar as informações de peso, altura e IMC do usuário e permitir a visualização dessas informações.                                      |
| RF05              | O sistema deve permitir ao usuário visualizar todos os registros de suas atividades físicas, incluindo dias, calorias gastas e moedas adquiridas.                |
| RF06              | O sistema deve calcular e adicionar moedas ao usuário com base nas calorias gastas, respeitando um limite máximo diário de moedas.                              |
| RF07              | O sistema deve permitir ao usuário visualizar e gastar moedas em campeonatos disponíveis, com informações sobre status, preço e prêmio.                      |
| RF08              | O sistema deve permitir ao usuário competir com outros participantes dos campeonatos e receber um prêmio baseado na classificação.                             |
| RF09              | O sistema deve permitir ao usuário criar um grupo, convidar amigos e gerenciar as informações do grupo, incluindo chat e lista de pedidos para entrada.         |
| RF10              | O sistema deve permitir ao usuário recuperar sua conta através do e-mail e redefinir a senha.                                                                    |
| RF11              | O sistema deve permitir ao usuário acessar estatísticas de outros usuários, incluindo gráficos de atividades físicas, moedas e participação em campeonatos. |
| RF12              | O sistema deve permitir ao usuário criar e personalizar seu personagem virtual, com opções para cabelo, cor da pele, características faciais e vestimentas.    |
| RF13              | O sistema deve permitir ao usuário gastar moedas para comprar customizações na loja, com diversas opções e preços.                                           |
| RF14              | O sistema deve permitir ao usuário receber desafios diários e semanais, recompensando-o com moedas de ingresso e moedas para loja.                               |
| RF15              | O sistema deve permitir ao usuário realizar login com suas credenciais e exibir uma mensagem de erro caso o login ou senha estejam incorretos.                    |
| RF16              | O sistema deve permitir ao usuário editar suas informações de conta, como nome, e-mail, senha, gênero e idade, e excluir a conta.                              |
| RF17              | O sistema deve permitir ao usuário cancelar a inscrição em campeonatos, com reembolso de 60% das moedas gastas, se o campeonato estiver aberto.                 |
| RF18              | O sistema deve permitir ao usuário excluir um grupo que criou, expulsar todos os membros e remover o código do grupo do banco de dados.                          |
| RF19              | O sistema deve permitir ao usuário expulsar um membro do grupo, se o usuário for o administrador, e confirmar a expulsão.                                       |

### Requisitos Não Funcionais

| **Número** | **Requisito**                                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| RNF01             | O sistema deve ser capaz de suportar uma alta carga de usuários simultâneos sem degradação significativa no desempenho.                        |
| RNF02             | O sistema deve garantir a segurança dos dados dos usuários, incluindo criptografia de senhas e proteção contra acessos não autorizados.       |
| RNF03             | O sistema deve ter uma interface intuitiva e fácil de usar, com feedback claro para ações do usuário.                                          |
| RNF04             | O sistema deve ser acessível em diferentes dispositivos e navegadores, garantindo compatibilidade com a maioria das plataformas.                  |
| RNF05             | O sistema deve ter tempos de resposta rápidos, com um tempo de carregamento de página não superior a 3 segundos em condições normais de rede. |

## User Story Mapping

| **Épico**                         | **História de Usuário**                          | **Prioridade** |
| ---------------------------------------- | -------------------------------------------------------- | -------------------- |
| **E01 - Gestão do Usuário**      | US01 - Realizar o cadastramento do usuário              | Alta                 |
| **E01 - Gestão do Usuário**      | US02 - Obter os dados físicos da pessoa                 | Alta                 |
| **E01 - Gestão do Usuário**      | US03 - Visualizar o histórico de exercícios praticados | Alta                 |
| **E01 - Gestão do Usuário**      | US08 - Recuperar a conta                                 | Alta                 |
| **E01 - Gestão do Usuário**      | US13 - Realizar o login do usuário                      | Alta                 |
| **E01 - Gestão do Usuário**      | US14 - Edição de dados                                 | Alta                 |
| **E02 - Personalização**         | US10 - Criar personagem                                  | Baixa                |
| **E02 - Personalização**         | US19 - Editar o personagem                               | Baixa                |
| **E03 - Interação Social**       | US07 - Criação de grupo                                | Alta                 |
| **E03 - Interação Social**       | US09 - Acessar as estatísticas de outros usuários      | Alta                 |
| **E03 - Interação Social**       | US16 - Edição das informações do grupo               | Alta                 |
| **E03 - Interação Social**       | US17 - Exclusão do grupo                                | Alta                 |
| **E03 - Interação Social**       | US18 - Expulsar usuário do grupo                        | Alta                 |
| **E04 - Economia e Recompensas**   | US04 - Obter moedas por exercícios realizados           | Baixa                |
| **E04 - Economia e Recompensas**   | US11 - Gastar em loja de customização                  | Baixa                |
| **E05 - Desafios e Competições** | US05 - Inscrição nos campeonatos                       | Alta                 |
| **E05 - Desafios e Competições** | US06 - Competir com os usuários do campeonato           | Alta                 |
| **E05 - Desafios e Competições** | US12 - Receber desafios                                  | Baixa                |
| **E05 - Desafios e Competições** | US15 - Cancelamento da inscrição dos campeonatos       | Alta                 |
| **E01 - Gestão do Usuário**      | US20 - Registro de Atividade                             | Alta                 |

# MVP

<p>O MVP, ou Produto Mínimo Viável (Minimum Viable Product), é um conceito fundamental no desenvolvimento de produtos e startups. Ele se refere à versão mais simples e funcional de um produto, criada com o objetivo de testar uma ideia no mercado com o mínimo de esforço e recursos possíveis. A ideia central do MVP é lançar rapidamente algo que resolva o problema principal do cliente, para validar hipóteses e obter feedback real dos usuários.</p>
<p>O MVP não precisa ser um produto completo ou polido, mas deve ser funcional o suficiente para ser usado por clientes reais. Esse feedback inicial é essencial, pois permite que a equipe de desenvolvimento entenda melhor as necessidades do mercado, identifique falhas ou melhorias necessárias e faça ajustes antes de investir mais tempo e recursos no produto final.</p>
<p>Esse processo de validação contínua permite que a equipe aprenda e evolua o produto de forma iterativa, reduzindo o risco de fracasso ao focar nas características que realmente importam para os usuários.</p>

## MVP 1

Chegamos a conclusão que as seguintes US serão realizadas para um minimo produto viável:

| Épico | História                                                |
| ------ | -------------------------------------------------------- |
| E01    | US01 - Realizar o cadastramento do usuário              |
| E01    | US02 - Obter os dados físicos da pessoa                 |
| E01    | US03 - Visualizar o histórico de exercícios realizados |
| E04    | US04 - Obter moedas por exercícios realizados           |
| E05    | US05 - Inscrição nos campeonatos                       |
| E05    | US06 - Competir com os usuários do campeonato           |
| E03    | US07 - Criação de grupo                                |
| E01    | US08 - Recuperar a conta                                 |
| E03    | US09 - Acessar as estatísticas de outros usuários      |
| E01    | US13 - Realizar o login do usuário                      |
| E01    | US14 - Edição de dados                                 |
| E05    | US15 - Cancelamento da inscrição dos campeonatos       |
| E03    | US16 - Edição das informações do grupo               |
| E03    | US17 - Exclusão do grupo                                |
| E03    | US18 - Expulsar usuário do grupo                        |

## MVP 2

Funcionalidades que ficariam para implementação futura:

| Épico | História                               |
| ------ | --------------------------------------- |
| E02    | US10 - Criar personagem                 |
| E02    | US19 - Editar o personagem              |
| E04    | US11 - Gastar em loja de customização |
| E04    | US12 - Receber desafios                 |

## Histórico de Versões

| **Data** | **Versão** | **Descrição** | **Editores** |
| :------------: | :---------------: | :-------------------: | :----------------: |
|   01/08/2024   |      `1.0`      | Criação do Backlog |       Lucas       |
|   12/08/2024   |      `2.0`      |  Ajustes do Backlog  |       Davi R       |
|   19/08/2024   |      `2.1`      |  Ajustes do Backlog  |   Mateus Vieira   |
