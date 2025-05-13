var menuInferior = document.getElementById("menuInferior");
var menuEscondido = document.getElementById("menuEscondido");

var btnMenu = document.getElementById("btnMenu");

btnMenu.addEventListener("click", () => {
    if (menuInferior.style.height == "100%") {
        menuInferior.style.height = "8%";
        menuEscondido.style.display = "none";
    }
    else {
        menuInferior.style.height = "100%";
        menuEscondido.style.display = "flex";
    }

})