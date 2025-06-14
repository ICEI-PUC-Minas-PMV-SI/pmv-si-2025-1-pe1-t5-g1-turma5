var listaHtml = document.getElementById("lista");
var inputs = document.querySelectorAll("input[type='checkbox']");
var btnAbrirFiltros = document.getElementById("btnFiltros");
var btnAdd = document.getElementById("btnAdd");
var barraInput = document.getElementById("pesquisa");

var botaoSortNome = document.getElementById("sortNome");
var botaoSortDataAdd = document.getElementById("sortDataAdd");
var botaoSortPrioridade = document.getElementById("sortPrioridade");
var botaoSortDataVenc = document.getElementById("sortDataVenc");

botaoSortNome.addEventListener("click", () => {
    let query = document.getElementById("pesquisa").value;
    let setaNome = document.getElementById("setaNome");
    limparSort("nome");
    if(!setaNome.classList.contains("btnSeta")){
        setaNome.classList.add("btnSeta");        
        setaNome.innerHTML = "↓";
        preencherLista(query,"nome","down");
    }
    else if(setaNome.innerHTML == "↓") {      
        setaNome.innerHTML = "↑";
        preencherLista(query,"nome","up");
    }
    else {
        setaNome.innerHTML = "";
        setaNome.classList.remove("btnSeta");
        preencherLista(query);
    }
})

botaoSortPrioridade.addEventListener("click", () => {
    let query = document.getElementById("pesquisa").value;
    let setaPrioridade = document.getElementById("setaPrioridade");
    limparSort("prioridade");
    if(!setaPrioridade.classList.contains("btnSeta")){
        setaPrioridade.classList.add("btnSeta");        
        setaPrioridade.innerHTML = "↓";
        preencherLista(query,"prioridade","down");
    }
    else if(setaPrioridade.innerHTML == "↓") {      
        setaPrioridade.innerHTML = "↑";
        preencherLista(query,"prioridade","up");
    }
    else {
        setaPrioridade.innerHTML = "";
        setaPrioridade.classList.remove("btnSeta");
        preencherLista(query);
    }
})

botaoSortDataAdd.addEventListener("click", () => {
    let setaDataAdd = document.getElementById("setaDataAdd");
    let query = document.getElementById("pesquisa").value;
    limparSort("dataAdd");
    if(!setaDataAdd.classList.contains("btnSeta")){
        setaDataAdd.classList.add("btnSeta");        
        setaDataAdd.innerHTML = "↓";
        preencherLista(query,"dataAdd","down");
    }
    else if(setaDataAdd.innerHTML == "↓") {      
        setaDataAdd.innerHTML = "↑";
        preencherLista(query,"dataAdd","up");
    }
    else {
        setaDataAdd.innerHTML = "";
        setaDataAdd.classList.remove("btnSeta");
        preencherLista(query);
    }
})

botaoSortDataVenc.addEventListener("click", () => {
    let setaDataVenc = document.getElementById("setaDataVenc");
    let query = document.getElementById("pesquisa").value;
    limparSort("dataVenc");
    if(!setaDataVenc.classList.contains("btnSeta")){
        setaDataVenc.classList.add("btnSeta");        
        setaDataVenc.innerHTML = "↓";
        preencherLista(query,"dataVenc","down");
    }
    else if(setaDataVenc.innerHTML == "↓") {      
        setaDataVenc.innerHTML = "↑";
        preencherLista(query,"dataVenc","up");
    }
    else {
        setaDataVenc.innerHTML = "";
        setaDataVenc.classList.remove("btnSeta");
        preencherLista(query);
    }
})

function limparSort(tipo){
    let setaNome = document.getElementById("setaNome");
    let setaDataAdd = document.getElementById("setaDataAdd");
    let setaPrioridade = document.getElementById("setaPrioridade");
    let setaDataVenc = document.getElementById("setaDataVenc");
    if(tipo == "nome") {
        setaDataAdd.innerHTML = "";
        setaDataAdd.classList.remove("btnSeta");
        setaPrioridade.innerHTML = "";
        setaPrioridade.classList.remove("btnSeta");
        setaDataVenc.innerHTML = "";
        setaDataVenc.classList.remove("btnSeta");
    }
    if(tipo == "dataAdd"){
        setaNome.innerHTML = "";
        setaNome.classList.remove("btnSeta");
        setaPrioridade.innerHTML = "";
        setaPrioridade.classList.remove("btnSeta");
        setaDataVenc.innerHTML = "";
        setaDataVenc.classList.remove("btnSeta");
    }
    if(tipo == "dataVenc") {
        setaNome.innerHTML = "";
        setaNome.classList.remove("btnSeta");
        setaDataAdd.innerHTML = "";
        setaDataAdd.classList.remove("btnSeta");
        setaPrioridade.innerHTML = "";
        setaPrioridade.classList.remove("btnSeta");
    }
    if(tipo == "prioridade"){
        setaNome.innerHTML = "";
        setaNome.classList.remove("btnSeta");
        setaDataAdd.innerHTML = "";
        setaDataAdd.classList.remove("btnSeta");
        setaDataVenc.innerHTML = "";
        setaDataVenc.classList.remove("btnSeta");
    }
}

var tarefas = JSON.parse(localStorage.getItem("arquivadas"));

function fecharModal() {
    let modal = document.getElementById("modal");
    modal.remove();
}

function preencherLista(query, sort, tipo) {
    let filtro = document.getElementById("btnFiltros").innerHTML;
    if (filtro === "Filtros") {
        filtro = null;
    }
    listaHtml.innerHTML = "";
    tarefas = JSON.parse(localStorage.getItem("arquivadas"));
    
    if(sort == "nome"){ 
        if(tipo == "down"){
            tarefas.sort((a, b) => {
                if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
                    return -1;
                }
                if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
                    return 1;
                }
                return 0;
            })
        }
        else if(tipo == "up"){
            tarefas.sort((a, b) => {
                if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
                    return -1;
                }
                if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
                    return 1;
                }
                return 0;
            })
        }
    }
    if(sort == "prioridade"){ 
        const ordemPrioridade = {
        "Alta": 1,
        "Média": 2,
        "Baixa": 3
        };

        if (tipo == "down") {
            tarefas.sort((a, b) => {
                return ordemPrioridade[a.prioridade] - ordemPrioridade[b.prioridade];
            });
        } else if (tipo == "up") { 
            tarefas.sort((a, b) => {
                return ordemPrioridade[b.prioridade] - ordemPrioridade[a.prioridade];
            });
        }
    }
    if(sort == "dataAdd"){ 
        if(tipo == "down"){
            tarefas.sort((a, b) => {
                if (a.dataadd.toLowerCase() < b.dataadd.toLowerCase()) {
                    return -1;
                }
                if (a.dataadd.toLowerCase() > b.dataadd.toLowerCase()) {
                    return 1;
                }
                return 0;
            })
        }
        else if(tipo == "up"){
            tarefas.sort((a, b) => {
                if (a.dataadd.toLowerCase() > b.dataadd.toLowerCase()) {
                    return -1;
                }
                if (a.dataadd.toLowerCase() < b.dataadd.toLowerCase()) {
                    return 1;
                }
                return 0;
            })
        }
    }
    if(sort == "dataVenc"){ 
        if(tipo == "down"){
            tarefas.sort((a, b) => {
                if (a.datavenc.toLowerCase() < b.datavenc.toLowerCase()) {
                    return -1;
                }
                if (a.datavenc.toLowerCase() > b.datavenc.toLowerCase()) {
                    return 1;
                }
                return 0;
            })
        }
        else if(tipo == "up"){
            tarefas.sort((a, b) => {
                if (a.datavenc.toLowerCase() > b.datavenc.toLowerCase()) {
                    return -1;
                }
                if (a.datavenc.toLowerCase() < b.datavenc.toLowerCase()) {
                    return 1;
                }
                return 0;
            })
        }
    }
    
    if (tarefas) {
        conteudo = "";
        for (let i = 0; i < tarefas.length; i++) {
            if (filtro) {
                if (tarefas[i].categoria === filtro) {
                    if (query === "" || query == null) {
                        conteudo += `
                        <div id="${tarefas[i].id}" class="tarefa">
                            <input class="check" type="checkbox"
                            `;
                        if (tarefas[i].checked) conteudo += ` checked`;
                        conteudo += ` />
                            <div class="textoTarefa">
                                <div class="nodoTexto nome">${tarefas[i].nome}</div>
                                <div class="nodoTexto">${tarefas[i].dataadd.slice(0, 10).split('-').reverse().join('/')}</div>
                                <div class="nodoTexto">${tarefas[i].categoria}</div>
                                <div class="nodoTexto">${tarefas[i].datavenc.slice(0, 10).split('-').reverse().join('/')}</div>
                                <div class="nodoTexto">${tarefas[i].prioridade}</div>
                            </div>
                        </div>
                        `;
                    }
                    else if (tarefas[i].nome.toLowerCase().includes(query.toLowerCase()) || tarefas[i].desc.toLowerCase().includes(query.toLowerCase())) {
                        conteudo += `
                        <div id="${tarefas[i].id}" class="tarefa">
                            <input class="check" type="checkbox"`;
                        if (tarefas[i].checked) conteudo += ` checked`;
                        conteudo += ` />
                            <div class="textoTarefa">
                                <div class="nodoTexto nome">${tarefas[i].nome}</div>
                                <div class="nodoTexto">${tarefas[i].dataadd.slice(0, 10).split('-').reverse().join('/')}</div>
                                <div class="nodoTexto">${tarefas[i].categoria}</div>
                                <div class="nodoTexto">${tarefas[i].datavenc.slice(0, 10).split('-').reverse().join('/')}</div>
                                <div class="nodoTexto">${tarefas[i].prioridade}</div>
                            </div>
                        </div>
                            `;
                    }
                }
            }
            else if (query === "" || query == null) {
                conteudo += `
                <div id="${tarefas[i].id}" class="tarefa">
                    <input class="check" type="checkbox"
                    `;
                if (tarefas[i].checked) conteudo += ` checked`;
                conteudo += ` />
                    <div class="textoTarefa">
                        <div class="nodoTexto nome">${tarefas[i].nome}</div>
                        <div class="nodoTexto">${tarefas[i].dataadd.slice(0, 10).split('-').reverse().join('/')}</div>
                        <div class="nodoTexto">${tarefas[i].categoria}</div>
                        <div class="nodoTexto">${tarefas[i].datavenc.slice(0, 10).split('-').reverse().join('/')}</div>
                        <div class="nodoTexto">${tarefas[i].prioridade}</div>
                    </div>
                </div>
                `;
            }
            else if (tarefas[i].nome.toLowerCase().includes(query.toLowerCase()) || tarefas[i].desc.toLowerCase().includes(query.toLowerCase())) {
                conteudo += `
                <div id="${tarefas[i].id}" class="tarefa">
                    <input class="check" type="checkbox"`;
                if (tarefas[i].checked) conteudo += ` checked`;
                conteudo += ` />
                    <div class="textoTarefa">
                        <div class="nodoTexto nome">${tarefas[i].nome}</div>
                        <div class="nodoTexto">${tarefas[i].dataadd.slice(0, 10).split('-').reverse().join('/')}</div>
                        <div class="nodoTexto">${tarefas[i].categoria}</div>
                        <div class="nodoTexto">${tarefas[i].datavenc.slice(0, 10).split('-').reverse().join('/')}</div>
                        <div class="nodoTexto">${tarefas[i].prioridade}</div>
                    </div>
                </div>
                    `;
            }
        }
        if (!(conteudo.length > 0)) {
            conteudo = `<div id = "divVazio"> <p id="semTarefas"><strong>Nada encontrado</strong></p></div> `;
        }
        listaHtml.innerHTML = conteudo;
        var checkboxes = document.querySelectorAll(".check");
        checkboxes.forEach(box => {
            box.addEventListener("click", () => {
                trocarEstado(box.parentNode.id);
            })
        })
        var btnTarefas = document.querySelectorAll(".nome");
        btnTarefas.forEach(tarefa => {
            tarefa.addEventListener("click", () => {
                abrirModalGenerico(tarefa.parentNode.parentNode.id);
            })
        })
    }
    else {
        listaHtml.innerHTML = `<div id = "divVazio"> <p id="semTarefas"><strong>Não há tarefas registradas</strong></p></div> `;
    }
}


window.addEventListener("load", () => {
    preencherLista();
});

barraInput.addEventListener("input", () => {
    let query = document.getElementById("pesquisa").value;
    preencherLista(query);
});

btnAbrirFiltros.addEventListener("click", () => {
    abrirModalFiltros();
})

function abrirModalGenerico(id) {
    let tarefas = JSON.parse(localStorage.getItem("arquivadas"));
    let modal = ``;
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id == id) {
            modal = `
                <div id="modal" class="modalCriacao">
                    <div id="corpoModal">
                        <h3>Tarefa</h3>
                        <input readonly class="barraInput" id="nomeModal" maxlength="13" value="${tarefas[i].nome}">
                        <textarea readonly class="barraInput" id="descModal" maxlength="200">${tarefas[i].desc}</textarea> 
                        <div id="divTipo">
                            <label>Tipo</label>
                            <select disabled id="selectTipos">
                                <option value="" disabled selected>${tarefas[i].categoria}</option>
                                <option>Estudo</option>
                                <option>Lazer</option>
                                <option>Academia</option>
                                <option>Trabalho</option>
                                <option>Outro</option>
                            </select>
                        </div>
                        <div id="divPrioridade">
                            <label>Prioridade</label>
                            <select disabled id="selectPrioridade">
                                <option value="" disabled selected>Selecione</option>
                                <option>Alta</option>
                                <option>Média</option>
                                <option>Baixa</option>
                            </select>
                        </div>
                        <div id="divDatas">
                            <div>
                                <label>Data Inicio</label>
                                <input disabled value="${tarefas[i].dataadd}" class="inputData" id="dataAddModal" type="date">
                            </div>
                            <div>
                                <label>Data Fim</label>
                                <input disabled value="${tarefas[i].datavenc}" class="inputData" id="dataVencModal" type="date">
                            </div>
                        </div>
                        <div id="divBotoes">
                            <button class="btn btnArquivar" id="btnArquivar">Desarquivar</button>
                            <button class="btn btnExcluir" id="btnExcluir">Excluir</button>
                            <button class="btn btnFechar" id="btnFechar">Fechar</button>
                        </div>
                    </div>
                </div>`;
        }
    }
    let div = document.createElement('div');
    let header = document.querySelector('header');
    div.innerHTML = modal;
    document.body.insertBefore(div, header);
    btnArquivar = document.getElementById("btnArquivar");
    btnArquivar.addEventListener("click", () => {
        desarquivarTarefa(id);
    });
    btnExcluir = document.getElementById("btnExcluir");
    btnExcluir.addEventListener("click", () => {
        excluirTarefa(id);
    });
    btnFechar = document.getElementById("btnFechar");
    btnFechar.addEventListener("click", () => {
        fecharModal();
    });
}

function desarquivarTarefa(id) {
    let arquivadas = JSON.parse(localStorage.getItem("arquivadas"));
    var novaArquivada = {};
    for(let i = 0; i < arquivadas.length; i++){
        if(arquivadas[i].id == id){
            var index = arquivadas.indexOf(arquivadas[i]);
            novaArquivada = {
                idUsuario: arquivadas[i].idUsuario,
                id: arquivadas[i].id,
                checked: arquivadas[i].checked,
                nome: arquivadas[i].nome,
                desc: arquivadas[i].desc,
                categoria: arquivadas[i].categoria,
                prioridade: arquivadas[i].prioridade,
                dataadd: arquivadas[i].dataadd,
                datavenc: arquivadas[i].datavenc
            }
            arquivadas.splice(index, 1);
        }
    }
    localStorage.setItem("arquivadas", JSON.stringify(arquivadas));

    fecharModal();
    var tarefas = [];
    if (JSON.parse(localStorage.getItem("tarefas"))) {
        tarefas = JSON.parse(localStorage.getItem("tarefas"));
    }
    tarefas.push(novaArquivada);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    preencherLista();
}

function excluirTarefa(id) {
    let arquivadas = JSON.parse(localStorage.getItem("arquivadas"));
    var novaExcluida = {};
    for(let i = 0; i < arquivadas.length; i++){
        if(arquivadas[i].id == id){
            var index = arquivadas.indexOf(arquivadas[i]);
            novaExcluida = {
                idUsuario: arquivadas[i].idUsuario,
                id: arquivadas[i].id,
                checked: arquivadas[i].checked,
                nome: arquivadas[i].nome,
                desc: arquivadas[i].desc,
                categoria: arquivadas[i].categoria,
                prioridade: arquivadas[i].prioridade,
                dataadd: arquivadas[i].dataadd,
                datavenc: arquivadas[i].datavenc
            }
            arquivadas.splice(index, 1);
        }
    }
    localStorage.setItem("arquivadas", JSON.stringify(arquivadas));

    fecharModal();
    var excluidas = [];
    if (JSON.parse(localStorage.getItem("excluidas"))) {
        excluidas = JSON.parse(localStorage.getItem("excluidas"));
    }
    excluidas.push(novaExcluida);
    localStorage.setItem("excluidas", JSON.stringify(excluidas));
    preencherLista();
}

function abrirModalTarefas() {
    let modal = `
    <div id="modal" class="modalCriacao">
        <form id="corpoModal">
            <h3>Nova tarefa</h3>
            <input required class="barraInput" id="nomeModal" maxlength="13" placeholder="Nome">
            <textarea required class="barraInput" id="descModal" maxlength="200" placeholder="Descrição"></textarea> 
            <div id="divTipo">
                <label>Tipo</label>
                <select required id="selectTipos">
                    <option value="" disabled selected>Selecione</option>
                    <option>Estudo</option>
                    <option>Lazer</option>
                    <option>Academia</option>
                    <option>Trabalho</option>
                    <option>Outro</option>
                </select>
            </div>
            <div id="divPrioridade">
                <label>Prioridade</label>
                <select required id="selectPrioridade">
                    <option value="" disabled selected>Selecione</option>
                    <option>Alta</option>
                    <option>Média</option>
                    <option>Baixa</option>
                </select>
            </div>
            <div id="divDatas">
                <div>
                    <label>Data Inicio</label>
                    <input required class="inputData" id="dataAddModal" type="date">
                </div>
                <div>
                    <label>Data Fim</label>
                    <input required class="inputData" id="dataVencModal" type="date">
                </div>
            </div>
            <div id="divBotoes">
                <button id="btnAddModal" type="submit" class="btn">Adicionar</button>
                <button class="btn btnFechar" id="btnFechar">Cancelar</button>
            </div>
        </form>
    </div>`;
    let div = document.createElement('div');
    let header = document.querySelector('header');
    div.innerHTML = modal;
    document.body.insertBefore(div, header);
    var corpoModal = document.getElementById('corpoModal');
    corpoModal.addEventListener('submit', (e) => {
        e.preventDefault();
        addTarefa();
    })
    btnFechar = document.getElementById("btnFechar");
    btnFechar.addEventListener("click", () => {
        fecharModal();
    })
}
function abrirModalFiltros() {
    let modal = `
    <div id="modal" class="modalFiltros">
        <div id="corpoModal">
            <h3>Filtros</h3>
            <div id="divFiltros">
                <button class="btn btnEscolherFiltro" class="btn">Estudo</button>
                <button class="btn btnEscolherFiltro" class="btn">Lazer</button>
                <button class="btn btnEscolherFiltro" class="btn">Academia</button>
                <button class="btn btnEscolherFiltro" class="btn">Trabalho</button>
                <button class="btn btnEscolherFiltro" class="btn">Outro</button>   
            </div>
            <div id="divBotoes">
                <button class="btn btnFechar" id="btnFechar" class="btn">Fechar</button>
            </div>
        </div>
    </div>`;
    let div = document.createElement('div');
    let header = document.querySelector('header');
    div.innerHTML = modal;

    let btnsEscolherFiltro = div.querySelectorAll(".btnEscolherFiltro");

    let txtBtnFiltro = document.getElementById("btnFiltros").innerHTML;

    if (txtBtnFiltro !== "Filtros") {
        btnsEscolherFiltro.forEach(btn => {
            if (btn.innerHTML === txtBtnFiltro) {
                btn.id = "btnSelected";
                btnsEscolherFiltro.forEach(btn => {
                    if (btn.getAttribute('id') !== "btnSelected") {
                        btn.disabled = true;
                    }
                });
            }
        })
    }

    document.body.insertBefore(div, header);
    btnFechar = document.getElementById("btnFechar");
    btnFechar.addEventListener("click", () => {
        fecharModal();
    })
    btnsEscolherFiltro.forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (btn.getAttribute('id') == "btnSelected") {
                btn.id = "";
                btnsEscolherFiltro.forEach(btn => {
                    btn.disabled = false;
                });
                document.getElementById("btnFiltros").innerHTML = "Filtros";
                preencherLista();
            }
            else {
                document.getElementById("btnFiltros").innerHTML = btn.innerHTML;
                btn.id = "btnSelected";
                btnsEscolherFiltro.forEach(btn => {
                    if (btn.getAttribute('id') !== "btnSelected") {
                        btn.disabled = true;
                    }
                });
                preencherLista();
            }
        })
    })
}

function addTarefa() {
    let nomeModal = document.getElementById("nomeModal").value;
    let descModal = document.getElementById("descModal").value;
    let selectTipos = document.getElementById("selectTipos").value;
    let prioridade = document.getElementById("selectPrioridade").value;
    let dataAddModal = document.getElementById("dataAddModal").value;
    let dataVencModal = document.getElementById("dataVencModal").value;

    const novaTarefa = {
        idUsuario: 0,
        id: generateUUID(),
        checked: false,
        nome: nomeModal,
        desc: descModal,
        categoria: selectTipos,
        prioridade: prioridade,
        dataadd: dataAddModal,
        datavenc: dataVencModal,
        lembrete: true
    }
    if (dataAddModal > dataVencModal) {
        alert("A data de início não pode ser depois da data de término!");
    }
    else {
        fecharModal();
        var tarefas = [];
        if (JSON.parse(localStorage.getItem("arquivadas"))) {
            tarefas = JSON.parse(localStorage.getItem("arquivadas"));
        }
        tarefas.push(novaTarefa);
        localStorage.setItem("arquivadas", JSON.stringify(tarefas));
        preencherLista();
    }
}

function trocarEstado(id) {
    let tarefas = JSON.parse(localStorage.getItem("arquivadas"));
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id == id) {
            tarefas[i].checked = !tarefas[i].checked;
        }
    }
    localStorage.setItem("arquivadas", JSON.stringify(tarefas));
}

function sortNome(){

}

// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}