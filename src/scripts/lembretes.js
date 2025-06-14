var usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
if(usuarioCorrente != null) {
    idUsuario = usuarioCorrente.id; 
}

var hoje =  new Date();
var tarefas = usuarioCorrente.tarefas;



tarefas.forEach(tarefa => {
    dataVencimento = new Date(tarefa.datavenc);
    if (tarefa.lembrete == true 
        && tarefa.datavenc === hoje.toISOString().slice(0,10)){
        modal = `
        <div id="modal" class="modalAlerta">
            <div id="corpoModal">
                <h2>Lembrete!</h2>
                <h3>A tarefa "${tarefa.nome}" vence ${tarefa.datavenc.split('-').reverse().join('/')}!</h3>
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

sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));