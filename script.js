document.body.addEventListener('keyup', (evento) =>{
    tocarSom(evento.code.toLowerCase())
})

document.querySelector('#tocar').addEventListener('click', () =>{
    let sons = document.querySelector('#input').value

    if(sons !== ''){
        let sonsLista = sons.split('')
        melodia(sonsLista)
    }
})

function tocarSom(som) {
    let audioElemet = document.querySelector(`#s_${som}`)
    let teclaElemnet = document.querySelector(`div[data-key="${som}"]`)
    if(audioElemet){
        audioElemet.currentTime = 0
        audioElemet.play()
    }

    if(teclaElemnet){
        teclaElemnet.classList.add('ativa')

        setTimeout(()=>{
            teclaElemnet.classList.remove('ativa')
        }, 300)
    }
}

function melodia(sonsLista) {
    let wait = 0

    for(let sonsItens of sonsLista){
        setTimeout(()=>{
            tocarSom(`key${sonsItens}`)
        }, wait)
        wait += 160
    }
}