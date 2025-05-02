let btnAdd = document.getElementById("btnAdd");
let modalAdd = document.getElementById("modalCriacao");
let btnCancel = document.getElementById("btnCancelModal");
btnAdd.addEventListener("click", () => {
    modalAdd.style.display = "flex";
});
btnCancel.addEventListener("click", () => {
    modalAdd.style.display = "none";
})