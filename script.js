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
let valorVermelho = 1
let redVictory = 4
let valorPreto = 2
let isBlack = false //F: Esta variável faz com que decida qual peça está jogando, e ao final do turno troca de jogador
//F: A função pega a primeira classe do quadrado clicado, que representa a sua coluna e verifica a partir da linha se já há
//algumas "peça" nela (hasChildNodes), caso não tenha ela insere o disco, troca de jogador e termina a função
//caso contrário, se tiver, ela verifica a próxima linha
function addDisco() {
     let parentClass = this.className
     let firstClass = parentClass.split(' ')[0]
     if (!isBlack) {
          for (let linha = 6; linha >= 0; linha--) {
               if (document.querySelector(`#${firstClass}L${linha}`).hasChildNodes()) {
                    continue
               } else {
                    let discoVermelho = document.createElement('div');
                    discoVermelho.className = 'vermelho'
                    document.querySelector(`#${firstClass}L${linha}`).appendChild(discoVermelho);
                    let valueOfColumn = Number(firstClass.split('')[1])
                    matrix[linha - 1][valueOfColumn - 1] = valorVermelho
                    console.log(matrix)
                    isBlack = true
                    break
               }
          }
     } else {
          for (let linha = 6; linha >= 0; linha--) {
               if (document.querySelector(`#${firstClass}L${linha}`).hasChildNodes()) {
                    continue
               } else {
                    let discoPreto = document.createElement('div');
                    discoPreto.className = 'preto'
                    document.querySelector(`#${firstClass}L${linha}`).appendChild(discoPreto);
                    let valueOfColumn = Number(firstClass.split('')[1])
                    matrix[linha - 1][valueOfColumn - 1] = valorPreto
                    console.log(matrix)
                    isBlack = false
                    break
               }
          }
     }
}

let matrix = [
     [0, 0, 0, 1, 0, 0, 0],
     [1, 1, 1, 1, 0, 0, 0],
     [0, 0, 0, 1, 0, 0, 0],
     [0, 0, 0, 1, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0],
     [2, 2, 2, 2, 0, 0, 0]
]

console.log(matrix)

const edgeX = matrix[0].length - 1;
const edgeY = matrix.length - 3;

function redHorizontalVictory() {
     let counterRed = 0
     for (let y = 0; y < matrix.length; y++) {
          for (let x = 0; x < edgeX; x++) {
               let cell = matrix[y][x];
               if (cell !== 0 && cell !== valorPreto) {
                    if (cell === matrix[y][x + 1] && cell === matrix[y][x + 2] && cell === matrix[y][x + 3]) {
                         counterRed ++
                    }
                    if (cell === matrix[y][x - 1] && cell === matrix[y][x - 2] && cell === matrix[y][x - 3]) {
                         counterRed ++
                    }
                    if (cell === matrix[y][x - 1] && cell === matrix[y][x + 1] && cell === matrix[y][x + 2]) {
                         counterRed ++
                    }
                    if (cell === matrix[y][x - 2] && cell === matrix[y][x - 1] && cell === matrix[y][x + 1]) {
                         counterRed ++
                    }
               }
          }
     }
     /* console.log(counterRed) */
     return counterRed
}
redHorizontalVictory()

function blackHorizontalVictory() {
     let counterblack = 0
     for (let y = 0; y < matrix.length; y++) {
          for (let x = 0; x < edgeX; x++) {
               let cell = matrix[y][x];
               if (cell !== 0 && cell !== valorVermelho) {
                    if (cell === matrix[y][x + 1] && cell === matrix[y][x + 2] && cell === matrix[y][x + 3]) {
                         counterblack ++
                    }
                    if (cell === matrix[y][x - 1] && cell === matrix[y][x - 2] && cell === matrix[y][x - 3]) {
                         counterblack ++
                         console.log(counterblack)
                    }
                    if (cell === matrix[y][x - 1] && cell === matrix[y][x + 1] && cell === matrix[y][x + 2]) {
                         counterblack ++
                         console.log(counterblack)
                    }
                    if (cell === matrix[y][x - 2] && cell === matrix[y][x - 1] && cell === matrix[y][x + 1]) {
                         counterblack ++
                         console.log(counterblack)
                    }
               }
          }
     }
     console.log(counterblack)
     return counterblack
}
blackHorizontalVictory()

function redVerticalVictory() {
     let counterRed = 0
     for (let y = 0; y < edgeY; y++) {
          for (let x = 0; x < matrix[0].length; x++) {
               cell = matrix[y][x];
               if (cell !== 0 && cell !== valorPreto) {
                    if (cell === matrix[y + 1][x] && cell === matrix[y + 2][x] && cell === matrix[y + 3][x]) {
                         counterRed ++
                    }
               }
          }
     }
     console.log(counterRed)
}
redVerticalVictory()


