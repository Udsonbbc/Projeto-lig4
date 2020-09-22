//Evento de clique que irá iniciar o jogo, mostrando ao usuário os dois discos "Preto/Vermelho"
//F: Modifiquei o evento de 'onclick' para 'addEventListener'
let disco = document.getElementById("disco");
const disco2 = document.getElementById("disco2");
const vermelho = document.getElementById("button");
button.addEventListener('click', () => {
     disco.className = "vermelho";
     disco2.className = "preto";
});


//função dque adiciona os discos ma tabela, temos que estudar uma maneira de colocar os disco no começo da tabela, além disso é necessário criar uma
//função para definir qual disco será criado, vermelho ou preto.
document.body.addEventListener("dblclick", (e) => {
     let table = document.querySelector("td");
     disco = document.getElementById("disco");
     table.insertAdjacentElement("beforeend", disco)
})

//F: Adicionei uma classe para todos os quadrados da tabela e para elas distribui a função de adicionar a peça do jogo

let funcaoColuna = document.querySelectorAll('.coluna');
for (let i = 0; i < funcaoColuna.length; i++) {
     funcaoColuna[i].addEventListener('click', addDisco);
}
let isBlack = false //F: Esta variável faz com que decida qual peça está jogando, e ao final do turno troca de jogador
//F: A função pega a primeira classe do quadrado clicado, que representa a sua coluna e verifica a partir da linha se já há
//algumas "peça" nela (hasChildNodes), caso não tenha ela insere o disco, troca de jogador e termina a função
//caso contrário, se tiver, ela verifica a próxima linha
function addDisco() {
     let parentClass = this.className
     let firstClass = parentClass.split(' ')[0]
     console.log(firstClass)
     if (!isBlack) {
          for (let linha = 1; linha <= 7; linha++) {
               if (document.querySelector(`#${firstClass}L${linha}`).hasChildNodes()) {
                    console.log('não')
                    continue
               } else {
                    console.log('sim')
                    let discoVermelho = document.createElement('div');
                    discoVermelho.className = 'vermelho'
                    document.querySelector(`#${firstClass}L${linha}`).appendChild(discoVermelho);
                    isBlack = true
                    break
               }
          }
     } else {
          for (let linha = 1; linha <= 7; linha++) {
               if (document.querySelector(`#${firstClass}L${linha}`).hasChildNodes()) {
                    console.log('não')
                    continue
               } else {
                    console.log('sim')
                    let discoPreto = document.createElement('div');
                    discoPreto.className = 'preto'
                    document.querySelector(`#${firstClass}L${linha}`).appendChild(discoPreto);
                    isBlack = false
                    break
               }
          }
     }
}

