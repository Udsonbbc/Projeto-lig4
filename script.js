document.querySelector('#start').addEventListener('click', setGame);
document.querySelector('#reset').addEventListener('click', reset);

function reset() {
     document.location.reload(true)
}

function setGame() {

     let funcaoColuna = document.querySelectorAll('td');
     for (let i = 0; i < funcaoColuna.length; i++) {
          funcaoColuna[i].innerHTML = ''
          funcaoColuna[i].addEventListener('click', addDisco);
     }
     document.querySelector('#ganhou').innerHTML = ''
     matrix = [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
     ]
     isBlack = false
     indicacao()
     document.querySelector('#start').textContent = 'Iniciar o jogo'
}

let vitoriaVermelho = 0
let vitoriaPreto = 0

function placar() {
     let placarVermelho = document.querySelector('.placarVermelho')
     let placarPreto = document.querySelector('.placarPreto')
     placarVermelho.innerHTML = ''
     placarVermelho.textContent = vitoriaVermelho
     placarPreto.innerHTML = ''
     placarPreto.textContent = vitoriaPreto
}

function remove() {

     let funcaoColuna = document.querySelectorAll('td');
     for (let i = 0; i < funcaoColuna.length; i++) {
          funcaoColuna[i].removeEventListener('click', addDisco);
     }
}
function remover() {

     let funcaoColuna = document.querySelectorAll('.coluna');
     for (let i = 0; i < funcaoColuna.length; i++) {
          funcaoColuna[i].removeEventListener('click', addDisco);
     }
}

function indicacao() {
     if (!isBlack) {
          let local = document.querySelector('.discos')
          local.innerHTML = ''
          let para = document.createElement('p')
          para.textContent = 'Jogador Vermelho'
          para.classList.add('msgVermelho')
          local.appendChild(para)
     } else {
          let local = document.querySelector('.discos')
          local.innerHTML = ''
          let para = document.createElement('p')
          para.textContent = 'Jogador Preto'
          para.classList.add('msgPreto')
          local.appendChild(para)
     }
}

let redValue = 1
let blackValue = 2
let isBlack = false

function addDisco() {
     let firstClass = this.className
     if (!isBlack) {
          for (let line = 6; line >= 0; line--) {
               if (document.querySelector(`#${firstClass}L${line}`).hasChildNodes()) {
                    continue
               } else {
                    let discoVermelho = document.createElement('div');
                    discoVermelho.className = 'vermelho'
                    document.querySelector(`#${firstClass}L${line}`).appendChild(discoVermelho);
                    discoVermelho.classList.add(`animacao${line}`)
                    let valueOfColumn = Number(firstClass.split('')[1])
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
                    discoPreto.classList.add(`animacao${line}`)
                    let valueOfColumn = Number(firstClass.split('')[1])
                    matrix[line - 1][valueOfColumn - 1] = blackValue
                    isBlack = false
                    break
               }
          }
     }
     indicacao()
     vitoriaHorizontal()
     vitoriaVertical()
     vitoriaDiagonalDireita()
     vitoriaDiagonalEsquerda()
     empate()
     placar()
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
let valordeEmpate = false

function vitoriaHorizontal() {
     for (let y = 0; y < matrix.length; y++) {
          for (let x = 0; x < endOfColumn; x++) {
               let posicao = matrix[y][x];
               if (posicao !== 0) {
                    if (posicao === matrix[y][x + 1] && posicao === matrix[y][x + 2] && posicao === matrix[y][x + 3]) {
                         if (posicao === 1) {
                              vitoriaRed()
                         } else {
                              vitoriaBlack()
                         }
                    }
               }
          }
     }
     return valordeEmpate
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
     return valordeEmpate
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
     return valordeEmpate
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
     return valordeEmpate
}

const temDisco = (elemento) => elemento === 0;

function empate() {
     if (!matrix[0].some(temDisco)
          && !vitoriaHorizontal()
          && !vitoriaVertical()
          && !vitoriaDiagonalDireita()
          && !vitoriaDiagonalEsquerda()) {

          document.querySelector('.discos').innerHTML = ''
          let msg = document.createElement('p');
          msg.textContent = 'O Jogo empatou';
          msg.classList.add('empatou');
          document.querySelector('#ganhou').appendChild(msg)
          remove()
          document.querySelector('#start').textContent = 'Continuar o jogo?'
     }
}

function vitoriaBlack() {
     local = document.getElementById('ganhou')
     local.innerHTML = ''
     para = document.createElement('p')
     para.textContent = 'Jogador Preto Ganhou'
     para.classList.add('msgPreto')
     local.appendChild(para)
     remove()
     valordeEmpate = true
     document.querySelector('.discos').innerHTML = ''
     vitoriaPreto++
     document.querySelector('#start').textContent = 'Continuar o jogo?'
}



function vitoriaRed() {
     local = document.getElementById('ganhou')
     local.innerHTML = ''
     para = document.createElement('p')
     para.textContent = 'Jogador Vermelho Ganhou'
     para.classList.add('msgVermelho')
     local.appendChild(para)
     remove()
     valordeEmpate = true
     document.querySelector('.discos').innerHTML = ''
     vitoriaVermelho++
     document.querySelector('#start').textContent = 'Continuar o jogo?'
}
