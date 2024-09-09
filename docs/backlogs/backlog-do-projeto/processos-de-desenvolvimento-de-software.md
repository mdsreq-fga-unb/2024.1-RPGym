# Processo de Desenvolvimento de Software

## Framework de Sommerville:

### Questões Técnicas

1. Qual é o tamanho do sistema que está sendo desenvolvido? Pequeno.
2. Que tipo de sistema está sendo desenvolvido? Sistema Web.
3. Qual é a vida útil prevista para o sistema? Indeterminado.
4. O sistema está sujeito a controle externo? Não.

### Questões Humanas

1. Qual é o nível de competência dos projetistas e programadores do time de desenvolvimento? Médio.
2. Como está organizado o time de desenvolvimento? Desenvolvedores Front-End e Back-End e Dono do Produto.
3. Quais são as tecnologias disponíveis para apoiar o desenvolvimento do sistema? ReactJS, NodeJS, Notion, MongoDB, Discord, Trello, Miro, Figma e GitHub.

### Questões Organizacionais

1. É importante ter uma especificação e um projeto (design) bem detalhados antes de passar para a implementação talvez por motivos contratuais? Não.
2. É realista uma estratégia de entrega incremental, na qual o software é entregue aos clientes ou outros stakeholders e um rápido feedback é obtido? Sim.
3. Os representantes do cliente estarão disponíveis e dispostos a participar do time de desenvolvimento? Sim.
4. Existem questões culturais que possam afetar o desenvolvimento do sistema? Não.

## Atividades da Engenharia de Requisitos

Aqui está uma explicação breve dentro de cada célula da tabela para cada "atividade":

| Atividade                 | Método                                                                                           | Ferramenta                            | Entrega                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------- | ---------------------------------------------------------------------- |
| Elicitação e Descoberta:    | Reuniões com o cliente<br /> (Sprint Planning): **Coleta de informações e requisitos diretamente com o cliente para entender suas necessidades.** | Discord<br />GitHub Pages             | Diagrama de Ishikawa<br />Documentação de requisitos                   |
| Análise e Consenso        | Avaliação da equipe acerca dos requisitos levantados<br /> (Entre o desenvolvimento das Sprints): **Revisão dos requisitos coletados e consenso da equipe sobre o que foi identificado.** | Discord<br />GitHub Pages             | Documento com os requisitos levantados                                 |
| Declaração                | Histórias de usuário <br />(Sprint Planning): **Definição de requisitos como histórias de usuário, que detalham as funcionalidades desejadas.** | Discord<br />GitHub Pages<br />Trello | Backlog do Produto                                                     |
| Representação             | Realizar protótipo do sistema<br /> (Sprint Planning): **Criação de protótipos para visualizar e validar as funcionalidades do sistema antes do desenvolvimento.** | Figma                                 | Protótipo disponível no Backlog do Produto                             |
| Verificação e Validação   | Coleta de feedbacks com o cliente e com a monitora<br />(Após entrega da Missão): **Recolher feedback para garantir que o sistema atende às expectativas e ajustar conforme necessário.** | Discord                               | Atualização dos Backlogs conforme feedback                             |
| Organização e Atualização| Reuniões com a equipe <br />(Desenvolvimento durante as Sprints): **Reuniões para revisar e atualizar o progresso, ajustar prioridades e manter o backlog e repositórios atualizados.** | Discord<br />GitHub Pages<br />Trello | Backlog atualizado<br /> Repositório no GitHub<br /> Kanban atualizado |

---

## Abordagem

Buscamos utilizar uma abordagem de desenvolvimento ágil com algumas práticas do framework SCRUM e também do XP.

### SCRUM

Deve ser considerado que o tempo de duração de uma Sprint é de uma semana.

A seguir segue uma lista das cerimônias que serão utilizadas do Scrum:

| Cerimônia            | Descrição                                                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sprint Planning      | Reunião realizada no início de cada Sprint, onde serão definidas a entrega da Sprint.                                                                                                                              |
| Sprint Retrospective | Reunião realizada ao final de cada sprint, realizaremos uma reunião para analisar a dinâmica de trabalho da equipe e das ferramentas utilizadas, visando melhorar qualquer aspecto que não atenda às expectativas. |
| Product Backlog      | Documento que possui uma lista ordenada em ordem de prioridade dos requisitos do produto que precisam ser desenvolvidos para atender aos objetivos do projeto.                                                     |

### XP

A seguir segue uma lista das práticas que serão utilizados do XP:

| Prática                        | Descrição                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Integração Contínua            | Integrar o código frequentemente, código esse que deve ser integrado ao repositório do GitHub                                                   |
| Propriedade Coletiva do Código | Todos os membros da equipe são responsáveis por todo o código do projeto, o que promove a colaboração, a transparência e a qualidade do código. |

---

## Histórico de Versão

|    Data    | Versão |                   Descrição                    |                 Autor(es)                  |
| :--------: | :----: | :--------------------------------------------: | :----------------------------------------: |
| 01/07/2024 |  1.1   |    Criação do documento de Visão do Projeto    | [Mateus Vieira](https://github.com/matix0) |
| 27/08/2024 |  1.2   |  Atualização para conformidade com o Projeto   | [Mateus Vieira](https://github.com/matix0) |
| 04/09/2024 |  2.0   | Modificação segundo issue aberta pela monitora | [Mateus Vieira](https://github.com/matix0) |
| 04/09/2024 |  2.1   | Modificação segundo issue aberta pela monitora | [Lucas Heler](https://github.com/Akaeboshi) |
