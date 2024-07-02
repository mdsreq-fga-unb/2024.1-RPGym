# PROCESSO DE DESENVOLVIMENTO DE SOFTWARE

## Framework de Sommerville:

### Questões Técnicas

1. Qual é o tamanho do sistema que está sendo desenvolvido? Pequeno.
2. Que tipo de sistema está sendo desenvolvido? Sistema Web.
3. Qual é a vida útil prevista para o sistema? Indeterminado.
4. O sistema está sujeito a controle externo? Não.

### Questões Humanas

1. Qual é o nível de competência dos projetistas e programadores do time de desenvolvimento? Médio.
2. Como está organizado o time de desenvolvimento? Desenvolvedores Front-End e Back-End e Scrum
   Master.
3. Quais são as tecnologias disponíveis para apoiar o desenvolvimento do sistema? ReactJS, NodeJS,
   Notion,(SQL ou noSQL em processo de escolha), Discord, Google Meet, Google Drive, Trello, Miro,
   GitHub.

### Questões Organizacionais

1. É importante ter uma especificação e um projeto (design) bem detalhados antes de passar para a
   implementação talvez por motivos contratuais? Não.
2. É realista uma estratégia de entrega incremental, na qual o software é entregue aos clientes ou outros
   stakeholders e um rápido feedback é obtido? Sim.
3. Os representantes do cliente estarão disponíveis e dispostos a participar do time de desenvolvimento?
   Sim.
4. Existem questões culturais que possam afetar o desenvolvimento do sistema? Não.

| Atividade                     | Método                                                                                      | Ferramenta                                | Entrega                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------- |
| Elicitação e Descoberta     | Reuniões com o cliente (Sprint Planning)                                                    | Discord, Notion                            | Ata da reunião com o cliente, Definição do problema                  |
| Análise e Consenso           | Avaliação da equipe acerca dos requisitos levantados (Entre o desenvolvimento das Sprints) | Discord, Notion                            | Documento com os requisitos levantados                                  |
| Declaração                  | Histórias de usuário (Sprint Planning)                                                     | Notion                                    | Documento de requisitos com adição das histórias de usuário         |
| Representação               | Realizar protótipo do sistema (Sprint Planning)                                             | Figma                                     | Protótipo de baixa fidelidade                                          |
| Verificação e Validação   | Testes (Desenvolvimento durante as Sprints) Reuniões com o cliente (Sprint Review)          | Discord, Frameworks de testes (a escolher) | Documento de efetividade dos testes Documento de validação do cliente |
| Organização e Atualização | Reuniões com a equipe (Desenvolvimento durante as Sprints)                                  | Notion, Discord, GitHub, Trello              | Documentação atualizada Repositório no GitHub Kanban atualizado      |

## SCRUM

A seguir segue uma lista das cerimônias que serão utilizadas do Scrum:

| Cerimônia                  | Descrição                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Daily Scrum                 | Reunião diária realizada online via canal de texto no discord/zap (a definir), onde cada um deve relatar os o progresso do trabalho desde a última daily.                                                                                                                                                                                                                          |
| Sprint Planning             | Reunião realizada no início de cada Sprint, onde serão definidas a entrega da Sprint.                                                                                                                                                                                                                                                                                              |
| Sprint Retrospective/Review | Reunião realizada ao final de cada sprint, realizaremos uma reunião para analisar a dinâmica de trabalho da equipe e das ferramentas utilizadas, visando melhorar qualquer aspecto que não atenda às expectativas. Durante a revisão da sprint, validaremos o que foi implementado, alinharemos expectativas e atualizaremos o Product Backlog com a participação do cliente. |
| Product Backlog             | Documento que possui uma lista ordenada em ordem de prioridade dos requisitos do produto que precisam ser desenvolvidos para atender aos objetivos do projeto.                                                                                                                                                                                                                        |

## XP

A seguir segue uma lista das práticas que serão utilizados do XP:

| Prática                        | Descrição                                                                                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Programação em Pares          | Duas pessoas trabalham juntas em um mesmo código, alternando entre quem está "dirigindo" (escrevendo código) e quem está "navegando" (revisando e dando feedback). |
| Integração Contínua          | Integrar o código frequentemente, código esse que deve ser integrado ao repositório do GitHub                                                                       |
| Padrões de codificação       | Estabelecer e seguir diretrizes de codificação para garantir consistência e qualidade no código produzido pela equipe.                                             |
| Propriedade Coletiva do Código | Todos os membros da equipe são responsáveis por todo o código do projeto, o que promove a colaboração, a transparência e a qualidade do código.                 |
| Metáfora                       | Explicar o projeto de forma simples para o cliente, mantendo assim um melhor entendimento e melhorando o alinhamento equipe-cliente.                                   |
| Jogo do Planejamento            | Realizada na Sprint Planning, utilizado para priorizar as tarefas da Sprint                                                                                            |
| Refatoração                   | Melhorar a estrutura interna do código sem alterar seu comportamento externo, mantendo-o limpo e de fácil compreensão.                                              |

| Data | Versão                                   | Descrição                                          | Autor(es)                     |
| :------------: | :--------------------------------------: | :-----------------------------------------------: | :--------------------------: |
01/07/2024 | 1.1 | Criação do documento de Visão do Projeto | [Mateus Vieira](https://github.com/matix0) |