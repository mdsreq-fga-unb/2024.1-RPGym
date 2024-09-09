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

Uma vez descritas as atividades da Engenharia de Requisitos, é necessário definir uma abordagem ou processo para realizá-las. O International Requirements Engineering Board (IREB), na publicação Handbook for the CPRE Foundation Level according to the IREB Standard de Glinz e autores (2022), apresenta um método para definição de processo de Engenharia de Requisitos baseado na análise das diferentes "facetas" do processo. Deve-se analisar quais extremos de cada eixo correspondem ao que se sabe e ao que é esperado do produto a ser desenvolvido. A partir disso, e com base no ciclo de vida e no processo de software já definidos, estabelece-se um processo a ser seguido para a execução das atividades de Engenharia de Requisitos. Na Figura 1, apresentamos o esquema das facetas do processo.
<div align="center">
  
![Facetas de Software](https://raw.githubusercontent.com/mdsreq-fga-unb/2024.1-RPGym/952b1801286952f7b4bee626769bd712e276240c/docs/assets/facetas.png)

Figura 1: Facetas do processo de Engenharia de Requisitos. Fonte: Glinz et al, 2022.

</div>
Analisando as descrições das facetas do processo de Engenharia de Requisitos, concluímos que o processo será iterativo, exploratório e orientado ao mercado. Os seguintes aspectos foram levados em consideração nesta análise:

- Os requisitos não são completamente conhecidos desde o início.
- Podemos realizar ciclos curtos de feedback pela proximidade do time de desenvolvimento com o cliente.
- Será necessária a priorização e negociação de requisitos devido à duração do projeto.
- Apesar de haver um cliente, ele é uma referência para o desenvolvimento do projeto, cujo objetivo é ser utilizado por clientes diversos, com usuários potenciais não identificáveis individualmente.
- Os requisitos serão prioritariamente elicitados pela equipe do projeto, mas com participação do cliente.

A partir dessas observações, e considerando a abordagem e o ciclo de vida ágil, bem como a utilização de processos de desenvolvimento ScrumXP, conclui-se que o processo de Engenharia de Requisitos a ser utilizado será o Orientado a Produto.

---

## Abordagem

Buscamos utilizar uma abordagem de desenvolvimento ágil com algumas práticas do framework SCRUM e também do XP.

### SCRUM

Deve ser considerado que o tempo de duração de uma Sprint é de uma semana. Porém devido a dificuldade nos membros em se organizarem semanalmente nos mesmos horários, houve um acordo em começar/terminar uma sprint no momento mais oportuno, causando algumas incoerências no tempo estipulado de sete dias. Podendo ter um pouco menos ou um pouco mais dias.

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
| 09/09/2024 |  2.1   | Modificação segundo issue aberta pela monitora | [Lucas Heler](https://github.com/Akaeboshi) |
