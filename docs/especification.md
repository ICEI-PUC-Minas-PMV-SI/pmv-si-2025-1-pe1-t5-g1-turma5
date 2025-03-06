# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Motorista de aplicativo | ter uma listagem do meu dia-a-dia | não me esquecer de nada importante |
| Estudante | uma forma de categorizar minhas tarefas | ter menos estresse |
| Supervisora | saber quando uma tarefa foi marcada como concluída | ter uma melhor noção do decorrer dos meus dias |
| Programadora | ter um acesso rápido e fácil aos meus afazeres do trabalho | aumentar minha produtividade |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais (RF)
 Requisitos funcionais são os requisitos que falam **o que o sistema deve fazer**. Descreve as funcionalidades, comportamentos e interações do sistema com o usuário. Tabela de requisitos funcionais para o Gerenciador de Tarefas:

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----|  
| RF-001 |	O usuário poderá adicionar tarefas a serem cumpridas	| Alta |
| RF-002 |	As tarefas poderão ter título, descrição, data e hora |	Alta |
| RF-003 |	O usuário poderá mudar o status da tarefa usando um checkbox, assim transferindo a tarefa de “Pendente” para “Concluída” |	Alta |
| RF-004 |	O usuário poderá editar e excluir uma tarefa depois de adicionada | Alta |
| RF-005 |	O sistema deverá ter os seguintes menus: Tarefas, Arquivo, Lixeira	| Alta |
| RF-006 |	O usuário poderá definir a prioridade das tarefas | Média |
| RF-007 |	O usuário poderá criar etiquetas para organizar suas tarefas | Média |
| RF-008 |	O sistema deverá contar com filtros para buscar tarefas de diferentes formas | Média |
| RF-009 |	O sistema deverá contar com ordenamento de tarefas	| Média |
| RF-010 |	O sistema deverá ter um sistema de “Lembretes”, que irá avisar o usuário sobre o momento de fazer a tarefa |	Baixa |
| RF-011 |	O sistema deverá contar com um calendário para o usuário navegar e adicionar tarefas | Baixa |


### Requisitos não Funcionais (RNF)
 Definem **como** o sistema deve operar, **suas qualidades, restrições e características técnicas**. Eles descrevem aspectos como desempenho, segurança, usabilidade, escalabilidade e compatibilidade. Tabela de requisitos não funcionais para o Gerenciador de Tarefas:

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
| RNF-001 |	O sistema deve carregar a página em menos de 3 segundos	| Alta |
| RNF-002	| Adicionar, editar ou excluir tarefas deve ter tempo inferior a 2 segundos	| Alta |
| RNF-003	| O sistema deve funcionar em todos os navegadores	| Alta |
| RNF-004	| O sistema deve estar disponível 24 horas por dia, 7 dias por semana	| Alta |
| RNF-005	| O sistema deve salvar automaticamente o que o usuário fizer durante a utilização do sistema	| Média |
| RNF-006	| O sistema deve ser responsivo e se adaptar a todos os tamanhos e telas	| Média |
| RNF-007	| O sistema deve ter uma interface intuitiva.		| Baixa |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
