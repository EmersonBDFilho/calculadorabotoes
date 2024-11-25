const display = document.querySelector("#display");

const buttons = document.getElementsByName("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(btn.id === "="){
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "del") {
            display.value = display.value.slice(0,-1)
            // coloquei o -1 para apagar da direita para a esquerda
        } else{
            display.value += btn.id
        }
    })
})

function trocarTema(){
    document.body.classList.toggle("dark-mode");
}