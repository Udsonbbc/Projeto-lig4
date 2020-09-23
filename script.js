//Evento de clique que irá iniciar o jogo, mostrando ao usuário os dois discos "Preto/Vermelho"
//F: Modifiquei o evento de 'onclick' para 'addEventListener'
let disco = document.getElementById("disco");
const disco2 = document.getElementById("disco2");
const vermelho = document.getElementById("button");
button.addEventListener('click', setGame);


//função dque adiciona os discos ma tabela, temos que estudar uma maneira de colocar os disco no começo da tabela, além disso é necessário criar uma
//função para definir qual disco será criado, vermelho ou preto.
document.body.addEventListener("dblclick", (e) => {
     let table = document.querySelector("td");
     disco = document.getElementById("disco");
     table.insertAdjacentElement("beforeend", disco)
})

//F: Adicionei uma classe para todos os quadrados da tabela e para elas distribui a função de adicionar a peça do jogo
function setGame() {

     let funcaoColuna = document.querySelectorAll('.coluna');
     for (let i = 0; i < funcaoColuna.length; i++) {
          funcaoColuna[i].addEventListener('click', addDisco);
     }
}
let isBlack = false //F: Esta variável faz com que decida qual peça está jogando, e ao final do turno troca de jogador
//F: A função pega a primeira classe do quadrado clicado, que representa a sua coluna e verifica a partir da linha se já há
//algumas "peça" nela (hasChildNodes), caso não tenha ela insere o disco, troca de jogador e termina a função
//caso contrário, se tiver, ela verifica a próxima linha
function addDisco() {
     let parentClass = this.className
     let firstClass = parentClass.split(' ')[0]
     if (!isBlack) {
          for (let linha = 1; linha <= 6; linha++) {
               if (document.querySelector(`#${firstClass}L${linha}`).hasChildNodes()) {
                    continue
               } else {
                    let discoVermelho = document.createElement('div');
                    discoVermelho.className = 'vermelho'
                    let valorVermelho = 1
                    document.querySelector(`#${firstClass}L${linha}`).appendChild(discoVermelho);
                    discValueRed.push(valorVermelho)
                    console.log(discValueRed)
                    isBlack = true
                    break
               }
          }
     } else {
          for (let linha = 1; linha <= 6; linha++) {
               if (document.querySelector(`#${firstClass}L${linha}`).hasChildNodes()) {
                    continue
               } else {
                    let discoPreto = document.createElement('div');
                    discoPreto.className = 'preto'
                    let valorPreto = 2
                    document.querySelector(`#${firstClass}L${linha}`).appendChild(discoPreto);
                    discValueBlack.push(valorPreto)
                    console.log(discValueBlack)
                    isBlack = false
                    break
               }
          }
     }
     Op(this)
}

let discValueRed = [];
let discValueBlack = [];


let linhas = document.querySelectorAll('tr');
console.log(linhas.length)
let coluna = document.querySelectorAll('.ultimaLinha td').length
console.log(coluna)
// CONDIÇÃO DE VITÓRIA HORIZONTALMENTE 

function Op(e) {

     for (let i = 0; i < linhas.length; i++){

          for (let j = 0; j < coluna.length - 3; j++){


          }
     }

     // if (e.hasChildNodes()) {
     //      let colunaInt = e.id.split('')
     //      console.log(colunaInt)
     //      let classComparar = e.children[0].className
     //      for (let i = 1; i <= 3; i++) {
     //           console.log(Number(colunaInt[1]) + i)
     //      }
     // } else {
     //      console.log('oi')
     // }

     // if (classComparar === (colunaInt[1])
}

// // HORIZONTAL
// // iterate each row
// for(let y = 0; y < board.length; y++){

//      // iterate each cell in the row
//      for(let x = 0; x < edgeX; x++) {
//        let cell = board[y][x];

//        // Only check if cell is filled
//        if(cell !== 0) {

//          // Check the next two cells for the same value
//          if(cell === board[y][x+1] && cell === board[y][x+2] ) {
//            console.log("3 in a row vertical found at " + (x+1) + ":" + (y+1))
//          }
//        }
//      }
//    }