var hoje =  new Date();
var tarefas = JSON.parse(localStorage.getItem("tarefas"));

tarefas.forEach(tarefa => {
    dataVencimento = new Date(tarefa.datavenc);
    if (tarefa.lembrete == true 
        && (dataVencimento.getTime() - hoje.getTime() <= 86400000 
            &&  dataVencimento.getTime() - hoje.getTime() > 0)){
        modal = `
        <div id="modal" class="modalAlerta">
            <div id="corpoModal">
                <h2>Lembrete!</h2>
                <h3>A tarefa "${tarefa.nome}" vence ${dataVencimento.toLocaleDateString()}!</h3>
                <button id="btnFechar" class="btn btnFechar">Fechar</button>
            </div>
        </div>
        `;
        let modalAlerta = document.createElement('div');
        let header = document.querySelector('header');
        modalAlerta.innerHTML = modal;
        document.body.insertBefore(modalAlerta, header);
       
        btnFechar = document.getElementById("btnFechar");
        btnFechar.addEventListener("click", () => {
            modalAlerta.remove();
        });
        tarefa.lembrete = false;
    } 
});

localStorage.setItem("tarefas", JSON.stringify(tarefas));