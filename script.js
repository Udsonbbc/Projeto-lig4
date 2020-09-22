//Evento de clique que irá iniciar o jogo, mostrando ao usuário os dois discos "Preto/Vermelho"
let disco = document.getElementById("disco");
const disco2 = document.getElementById("disco2");
const vermelho = document.getElementById("button");
button.onclick = function() {
     disco.className = "vermelho";
     disco2.className = "preto";
    };


//função dque adiciona os discos ma tabela, temos que estudar uma maneira de colocar os disco no começo da tabela, além disso é necessário criar uma
//função para definir qual disco será criado, vermelho ou preto.
    document.body.addEventListener("dblclick", (e) => {
         let table = document.querySelector("td");
         disco = document.getElementById("disco");
         table.insertAdjacentElement("beforeend", disco)
    })

