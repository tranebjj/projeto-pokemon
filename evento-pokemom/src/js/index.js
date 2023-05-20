const botaoAlterarTema = document.getElementById("botao-alterar-tema");

console.log(botaoAlterarTema)

const body = document.querySelector("body")
console.log(body);


const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    console.log("clicou no botao");

    const ModoEscuroEstaAtivo =  body.classList.contains("modo-escuro")

    console.log(ModoEscuroEstaAtivo);

if (ModoEscuroEstaAtivo) {
     
    body.classList.remove("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src/imagem/sun.png")
}else{

    body.classList.add("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src/imagem/caterpie.gif")
   
    
 }   
});