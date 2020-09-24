//Evento de clique que irá iniciar o jogo, mostrando ao usuário os dois discos "Preto/Vermelho"
//F: Modifiquei o evento de 'onclick' para 'addEventListener'
button.addEventListener('click', setGame);
buttonreset.addEventListener('click', reset);




//F: Adicionei uma classe para todos os quadrados da tabela e para elas distribui a função de adicionar a peça do jogo
function setGame() {

     let funcaoColuna = document.querySelectorAll('.coluna');
     for (let i = 0; i < funcaoColuna.length; i++) {
          funcaoColuna[i].innerHTML = ''
          funcaoColuna[i].addEventListener('click', addDisco);
     }
     indicacao()
}
function remover() {

     let funcaoColuna = document.querySelectorAll('.coluna');
     for (let i = 0; i < funcaoColuna.length; i++) {
          funcaoColuna[i].removeEventListener('click', addDisco);
     }
}

//TODO: Continuar a função que irá indicar qual peça está sendo colocada.
function indicacao() {
     if (!isBlack) {
          let local = document.querySelector('.discos')
          local.innerHTML = ''
          let para = document.createElement('p')
          local.appendChild(para)
          para.textContent = 'Jogador Vermelho'
          local.style.margin = '2vw 0'
          local.style.backgroundColor = 'red'
          local.style.color = 'white'
          local.style.textTransform = 'uppercase'
          local.style.fontSize = '1.5rem'
     } else {
          let local = document.querySelector('.discos')
          local.innerHTML = ''
          let para = document.createElement('p')
          local.appendChild(para)
          para.textContent = 'Jogador Preto'
          local.style.margin = '2vw 0'
          local.style.backgroundColor = 'black'
          local.style.color = 'white'
          local.style.textTransform = 'uppercase'
          local.style.fontSize = '1.5rem' 
     }
}

let redValue = 1
let blackValue = 2
let isBlack = false //F: Esta variável faz com que decida qual peça está jogando, e ao final do turno troca de jogador
//F: A função pega a primeira classe do quadrado clicado, que representa a sua coluna e verifica a partir da linha se já há
//algumas "peça" nela (hasChildNodes), caso não tenha ela insere o disco, troca de jogador e termina a função
//caso contrário, se tiver, ela verifica a próxima linha
function addDisco(x) {

     let firstClass = this.className.split(' ')[0] //Pega apenas a primeira Classe do click
     if (!isBlack) {
          for (let line = 6; line >= 0; line--) {//Verifica se tem disco dentro
               if (document.querySelector(`#${firstClass}L${line}`).hasChildNodes()) {
                    continue
               } else {
                    let discoVermelho = document.createElement('div');
                    discoVermelho.className = 'vermelho'
                    document.querySelector(`#${firstClass}L${line}`).appendChild(discoVermelho);
                    let valueOfColumn = Number(firstClass.split('')[1])// Separa o C do 1, por exemplo e pega o numero
                    matrix[line - 1][valueOfColumn - 1] = redValue
                    isBlack = true
                    break
               }
          }
     } else {
          for (let line = 6; line >= 0; line--) {
               if (document.querySelector(`#${firstClass}L${line}`).hasChildNodes()) {
                    continue
               } else {
                    let discoPreto = document.createElement('div');
                    discoPreto.className = 'preto'
                    document.querySelector(`#${firstClass}L${line}`).appendChild(discoPreto);
                    let valueOfColumn = Number(firstClass.split('')[1])
                    matrix[line - 1][valueOfColumn - 1] = blackValue
                    isBlack = false
                    break
               }
          }
     }
     vitoriaHorizontal()
     vitoriaVertical()
     vitoriaDiagonalDireita()
     vitoriaDiagonalEsquerda()
     indicacao()
}

let matrix = [
     [0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0]
]

const endOfColumn = matrix[0].length - 3;
const endOfLine = matrix.length - 3;

function vitoriaHorizontal() {
     for (let y = 0; y < matrix.length; y++) {
          for (let x = 0; x < endOfColumn; x++) {
               let posicao = matrix[y][x];
               if (posicao !== 0) {
                    if (posicao === matrix[y][x + 1] && posicao === matrix[y][x + 2] && posicao === matrix[y][x + 3]) {
                         if (posicao === 1) {
                              //TODO : Desabilitar a adição de novos discos;
                              // Aparecer a mensagem de quem venceu;
                              // posibilidade de resetar o jogo  
                              vitoriaRed()         
                              reset()
                         } else {
                              //TODO : Desabilitar a adição de novos discos;
                              // Aparecer a mensagem de quem venceu;
                              // posibilidade de resetar o jogo
                              vitoriaBlack() 
                         }
                    }
               }
          }
     }
}

function vitoriaVertical() {
     for (let y = 0; y < endOfLine; y++) {
          for (let x = 0; x < matrix[0].length; x++) {
               posicao = matrix[y][x];
               if (posicao !== 0) {
                    if (posicao === matrix[y + 1][x] && posicao === matrix[y + 2][x] && posicao === matrix[y + 3][x]) {
                         if (posicao === 1) {
                              vitoriaRed() 
                         } else {
                              vitoriaBlack()   
                         }
                    }
               }
          }
     }
}

function vitoriaDiagonalDireita() {
     for (let i = 0; i < endOfLine; i++) {
          for (let j = 3; j < matrix[0].length; j++) {
               let posicao = matrix[i][j]
               if (posicao !== 0) {
                    if (posicao === matrix[i + 1][j - 1] && posicao === matrix[i + 2][j - 2] &&
                         posicao === matrix[i + 3][j - 3]) {
                         if (posicao === 1) {
                              vitoriaRed() 
                               
                         } else {      
                              vitoriaBlack()
                         }
                    }
               }
          }

     }
}

function vitoriaDiagonalEsquerda() {
     for (let i = 0; i < endOfLine; i++) {
          for (let j = 0; j < endOfColumn; j++) {
               let posicao = matrix[i][j]
               if (posicao !== 0) {
                    if (posicao === matrix[i + 1][j + 1] && posicao === matrix[i + 2][j + 2] &&
                         posicao === matrix[i + 3][j + 3]) {
                         if (posicao === 1) {
                              vitoriaRed()

                         } else {
                              vitoriaBlack() 
                         }
                    }
               }
          }

     }
}

function vitoriaBlack(){
     local = document.getElementById('ganhou')
     local.innerHTML = ''
     para = document.createElement('p')
     local.appendChild(para)
     para.textContent = 'Jogador Preto Ganhou'
     local.style.margin = '2vw 0'
     local.style.backgroundColor = 'Black'
     local.style.color = 'white'
     local.style.textTransform = 'uppercase'
     local.style.fontSize = '1.5rem'
     remover()
    }



function vitoriaRed(){
     local = document.getElementById('ganhou')
     local.innerHTML = ''
     para = document.createElement('p')
     local.appendChild(para)
     para.textContent = 'Jogador Vermelho Ganhou'
     local.style.margin = '2vw 0'
     local.style.backgroundColor = 'Red'
     local.style.color = 'white'
     local.style.textTransform = 'uppercase'
     local.style.fontSize = '1.5rem'
     remover()
}

 function reset (){
     document.location.reload(true)
 }
