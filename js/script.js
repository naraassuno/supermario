/*ADICIONANDO O JUMP À IMAGEM DO MÁRIO*/

//adicionando imagens
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')


//função jump: adiciona a animação jump à imagem do Mario
const jump = () =>{
  mario.classList.add('jump')

  setTimeout(()=>{
    mario.classList.remove('jump')
  },500)
}

//Loop: verificar se o mario bateu ou não no pipe

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft; 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
   
    console.log(marioPosition)

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px` 

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
},10)

document.addEventListener('keydown',jump) //evento: sempre que uma tecla for apertada, irá chamar a função jump
