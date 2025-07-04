# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.teste.com.br <br> 2) Clique em criar conta <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "Continuar".
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a parte 2 do cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "Criar conta" <br> 
**Requisitos associados** | RF-001
**Resultado esperado** | Usuário cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.


**Caso de Teste** | **Adicionar nova tarefa**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página ListaTarefas.html <br> 2) Clique no botão "Adicionar" <br> 3) Preencha todos os campos do formulário <br> 4) Clique em "Adicionar"
**Requisitos associados** | RF-001
**Resultado esperado** | Tarefa adicionada à lista
**Dados de entrada** | Inserção de dados sobre a tarefa
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1YTCFkv3jlrJdIl1sjXsFXT9_GUmXQ2mg/view?usp=sharing | 


**Caso de Teste** | **Pesquisar tarefa**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página ListaTarefas.html, arquivado.html ou lixeira.html <br> 2) Clique na barra "Buscar" <br> 3) Digite o nome ou a descrição da tarefa que deseja pesquisar
**Requisitos associados** | RF-001
**Resultado esperado** | Apenas tarefas com título ou descrição equivalente ao conteúdo da pesquisa serão mostradas na tela 
**Dados de entrada** | Texto na barra de pesquisa
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1ShUX2t1SK4oYnz7cDg_q7N54kwYmLDLs/view?usp=sharing | 

**Caso de Teste** | **Arquivar tarefa**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página ListaTarefas.html <br> 2) Clique no título da tarefa <br> 3) Clique em "Arquivar"
**Requisitos associados** | RF-003
**Resultado esperado** | A tarefa desaparecerá da lista de tarefas e estará presente na lista de arquivadas.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1aLMybVZ5z3sOA_7Ud0Y6g9reUxMki1ej/view?usp=sharing | 

**Caso de Teste** | **Desarquivar tarefa**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página arquivado.html <br> 2) Clique no título da tarefa <br> 3) Clique em "Desarquivar"
**Requisitos associados** | RF-003
**Resultado esperado** | A tarefa desaparecerá da lista de arquivadas e estará presente na lista de tarefas.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1uPKJtuXM98Ch2GqT4CHvuCuJGg3gFJeJ/view?usp=sharing | 

**Caso de Teste** | **Editar tarefa**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página ListaTarefas.html <br> 2) Clique no título da tarefa <br> 3) Clique em "Editar" <br> 4) Altere os campos que desejar <br> 5) Clique em confirmar
**Requisitos associados** | RF-003
**Resultado esperado** | Apenas tarefas com título ou descrição equivalente ao conteúdo da pesquisa serão mostradas na tela 
**Dados de entrada** | Inserção de novos dados nos campos da tarefa
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1lZI62PyWmAlN674TRrlFaSLHHsPPHeQf/view?usp=sharing | 

**Caso de Teste** | **Filtrar tarefas**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página ListaTarefas.html, arquivado.html ou lixeira.html <br> 2) Clique no botão "Filtros" <br> 3) Clique no filtro que deseja <br> 4) Clique em "Fechar"
**Requisitos associados** | RF-008
**Resultado esperado** | Apenas tarefas com filtro equivalente ao selecionado serão mostradas na tela 
**Dados de entrada** | Filtro selecionado
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1QIvSPBZPm9nuTiL896Ts_1AqxAWbxIOj/view?usp=sharing | 


**Caso de Teste** | **Marcar e desmarcar como Concluida**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página ListaTarefas.html, arquivado.html ou lixeira.html <br> 2) Na presença de uma tarefa, clique no círculo verde à esquerda do título da tarefa
**Requisitos associados** | RF-004
**Resultado esperado** | Se a tarefa estava marcada como "Concluida" (Circulo preenchido), vai ser marcada como "Pendente" (Círculo não preenchido) e vice-versa.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1xM9d60oT-xxZQ5ptpuRw58j0TCi_jZvW/view?usp=sharing | 

**Caso de Teste** | **Ordenar tarefas**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página ListaTarefas.html, arquivado.html ou lixeira.html <br> 2) Clique nos itens de cabeçalho "Nome", "Data Add", "Data Venc" ou "Prioridade"
**Requisitos associados** | RF-009
**Resultado esperado** | A cada clique, as tarefas serão ordenadas de forma crescente ou decrescente de acordo com o item selecionado.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1kR4v1WKf8aqo0SMS8WOc2TwdxzNiabRa/view?usp=sharing | 

**Caso de Teste** | **Lembrete**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página ListaTarefas.html
**Requisitos associados** | RF-006
**Resultado esperado** | Caso haja alguma tarefa que vence hoje, será alertado na tela.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1yAZfZuQfrT2YTvJIqf7Ce-STGVB3Igph/view?usp=sharing | 

**Caso de Teste** | **Enviar tarefas para lixeira**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página arquivado.html <br> 2) Clique no título da tarefa <br> 3) Clique em "Excluir"
**Requisitos associados** | RF-003
**Resultado esperado** | A tarefa desaparecerá da lista de arquivadas e aparecerá na lista de excluídas (lixeira)
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1ySOQSLDYpxTIH0oLSwZ-x86v61gGxGBc/view?usp=sharing | 

**Caso de Teste** | **Mostrar funcionalidades**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página index.html <br> 2) Clique na opção "Funcionalidades" <br> 
**Requisitos associados** | ---
**Resultado esperado** | A página faz um scroll até a seção que apresenta as funcionalidades do site.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1mKUoVOKpuZ0YNS9umK3MkwcJOSUxMl4c | 

**Caso de Teste** | **Mostrar planos**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página index.html <br> 2) Clique na opção "Planos" <br> 
**Requisitos associados** | ---
**Resultado esperado** | A página faz um scroll até a seção que apresenta as funcionalidades do site.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1mKUoVOKpuZ0YNS9umK3MkwcJOSUxMl4c | 

**Caso de Teste** | **Mostrar contato**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página index.html <br> 2) Clique na opção "Contato" <br> 
**Requisitos associados** | ---
**Resultado esperado** | A página faz um scroll até a seção que apresenta as funcionalidades do site.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1mKUoVOKpuZ0YNS9umK3MkwcJOSUxMl4c | 

**Caso de Teste** | **Comece gratuitamente**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página index.html <br> 2) Clique na opção "Comece gratuitamente" <br> 
**Requisitos associados** | ---
**Resultado esperado** | Ao clicar no botão, o usuário deve ser levado para a página de cadastro.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1mKUoVOKpuZ0YNS9umK3MkwcJOSUxMl4c | 

**Caso de Teste** | **Cadastre-se**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página index.html <br> 2) Clique na opção "Cadastre-se" <br> 
**Requisitos associados** | ---
**Resultado esperado** | Ao clicar no botão, o usuário deve ser levado para a página de cadastro.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1mKUoVOKpuZ0YNS9umK3MkwcJOSUxMl4c | 


**Caso de Teste** | **Login**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página index.html <br> 2) Clique na opção "Login" <br> 
**Requisitos associados** | ---
**Resultado esperado** | Ao clicar no botão, o usuário deve ser levado para a página de login.
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1mKUoVOKpuZ0YNS9umK3MkwcJOSUxMl4c | 


**Caso de Teste** | **Restaurando Tarefa da Lixeira**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página lixeira.html ou propriamente a tela de lixeira <br> 2) Clique na tarefa <br> 3) Clique no botão "Restaurar"
**Requisitos associados** | RF-003
**Resultado esperado** | Ao clicar no botão de restaurar, a respectiva tarefa deve retornar à tela de lista de tarefas
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1myOO-hz0yOPYY1F66fyek3N0Lp8VajoL/view?usp=drive_link | 


**Caso de Teste** | **Excluindo Definitivamente Uma Tarefa da Lixeira**
 :--------------: | ------------
**Procedimento**  | 1) Esteja presente na página lixeira.html ou propriamente a tela de lixeira <br> 2) Clique na tarefa <br> 3) Clique no botão "Excluir" 4) Veja que a tarefa sumiu da tela
**Requisitos associados** | RF-003
**Resultado esperado** | Ao clicar no botão de excluir, a respectiva tarefa é excluída permanentemente da tela de tarefas da lixeira
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1AIxIcCHobbEeOYxLR99H77mCoxIiDGn9/view?usp=drive_link | 

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



