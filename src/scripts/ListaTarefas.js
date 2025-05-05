var listaHtml = document.getElementById("lista");
var inputs = document.querySelectorAll("input[type='checkbox']");
var btnAbrirFiltros = document.getElementById("btnFiltros");
var btnAdd = document.getElementById("btnAdd");
var barraInput = document.getElementById("pesquisa");

var tarefas = JSON.parse(localStorage.getItem("tarefas"));

window.addEventListener("load", () => {
    preencherLista();
});

barraInput.addEventListener("input", () => {
    let query = document.getElementById("pesquisa").value;
    preencherLista(query);
});

btnAbrirFiltros.addEventListener("click", () => {
    let modalFiltros = `
    <div id="modal" class="modalFiltros">
        <div id="corpoModal">
            <h3>Filtros</h3>
            <div id="divBotoes">
                <button id="btnAddFiltro" class="btn">Adicionar</button>
                <button class="btn btnFechar" id="btnFechar" class="btn">Fechar</button>
            </div>
        </div>
    </div>`;

    abrirModalFiltros(modalFiltros);
})

btnAdd.addEventListener("click", () => {
    let modalAdd = `
    <div id="modal" class="modalCriacao">
        <form id="corpoModal">
            <h3>Nova tarefa</h3>
            <input required class="barraInput" id="nomeModal" maxlength="22" placeholder="Nome">
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

    abrirModalTarefas(modalAdd);
});

function abrirModalTarefas(modal) {
    let div = document.createElement('div');
    let header = document.querySelector('header');
    div.innerHTML = modal;
    document.body.insertBefore(div, header);
    inputs = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = "disabled";
    }
    var corpoModal = document.getElementById('corpoModal');
    corpoModal.addEventListener('submit', (e) => {
        e.preventDefault();
        addTarefa();
        fecharModal();
    })
    btnFechar = document.getElementById("btnFechar");
    btnFechar.addEventListener("click", () => {
        fecharModal();
    })
}
function abrirModalFiltros(modal) {
    let div = document.createElement('div');
    let header = document.querySelector('header');
    div.innerHTML = modal;
    document.body.insertBefore(div, header);
    inputs = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = "disabled";
    }
    btnFechar = document.getElementById("btnFechar");
    btnFechar.addEventListener("click", () => {
        fecharModal();
    })
}

function fecharModal() {
    let modal = document.getElementById("modal");
    inputs = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = "";
    }
    modal.remove();
}

function preencherLista(query) {
    listaHtml.innerHTML = "";
    tarefas = JSON.parse(localStorage.getItem("tarefas"));
    if (tarefas) {
        conteudo = "";
        for (let i = 0; i < tarefas.length; i++) {
            console.log(query === "" || query == null);
            if (query === "" || query == null) {
                conteudo += `
                <div id="${tarefas[i].id}" class="tarefa">
                    <div class="round">
                        <input type="checkbox" id="checkbox${tarefas[i].id}" />
                        <label for="checkbox${tarefas[i].id}"></label>
                    </div>
                    <div class="textoTarefa">
                        <div class="nodoTexto">${tarefas[i].nome}</div>
                        <div class="nodoTexto">${tarefas[i].dataadd.slice(0, 10).split('-').reverse().join('/')}</div>
                        <div class="nodoTexto">${tarefas[i].categoria}</div>
                        <div class="nodoTexto">${tarefas[i].datavenc.slice(0, 10).split('-').reverse().join('/')}</div>
                    </div>
                </div>
                `
            }
            else if (tarefas[i].nome.includes(query)) {
                conteudo += `
                <div id="${tarefas[i].id}" class="tarefa">
                    <div class="round">
                        <input type="checkbox" id="checkbox${tarefas[i].id}" />
                        <label for="checkbox${tarefas[i].id}"></label>
                    </div>
                    <div class="textoTarefa">
                        <div class="nodoTexto">${tarefas[i].nome}</div>
                        <div class="nodoTexto">${tarefas[i].dataadd.slice(0, 10).split('-').reverse().join('/')}</div>
                        <div class="nodoTexto">${tarefas[i].categoria}</div>
                        <div class="nodoTexto">${tarefas[i].datavenc.slice(0, 10).split('-').reverse().join('/')}</div>
                    </div>
                </div>
                `
            }
        }
        if (!(conteudo.length > 0)) {
            conteudo = `<div id="divVazio"><p id="semTarefas"><strong>Nada encontrado</strong></p></div>`;
        }
        listaHtml.innerHTML = conteudo;
    }
    else {
        listaHtml.innerHTML = `<div id="divVazio"><p id="semTarefas"><strong>Não há tarefas registradas</strong></p></div>`;
    }
}

function addTarefa() {
    let nomeModal = document.getElementById("nomeModal").value;
    let descModal = document.getElementById("descModal").value;
    let selectTipos = document.getElementById("selectTipos").value;
    let dataAddModal = document.getElementById("dataAddModal").value;
    let dataVencModal = document.getElementById("dataVencModal").value;

    const novaTarefa = {
        id: generateUUID(),
        nome: nomeModal,
        desc: descModal,
        categoria: selectTipos,
        dataadd: dataAddModal,
        datavenc: dataVencModal
    }

    var tarefas = [];
    if (JSON.parse(localStorage.getItem("tarefas"))) {
        tarefas = JSON.parse(localStorage.getItem("tarefas"));
    }
    tarefas.push(novaTarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    preencherLista();
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