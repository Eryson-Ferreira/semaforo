
/*
    - Vermelho: 15s
    - Amarelo: 3s
    - Verde: 10s
*/
/*
    - Luz acesa no momento
*/

let light = '' // 'red', 'yellow' & 'green'
const [red] = document.getElementsByClassName('vermelho')
const [yellow] = document.getElementsByClassName('amarelo')
const [green] = document.getElementsByClassName('verde')
const [button] = document.getElementsByClassName('buttonStop')
const [clock] = document.getElementsByClassName('clock')

    //red
function turnOnLight(color) {
    if (color === 'red') {
        red.style.opacity = 1
        yellow.style.opacity = 0.5
        green.style.opacity = 0.5
        light = 'red'
    } 
    //Yellow
    else if (color === 'yellow') {
        red.style.opacity = 0.5
        yellow.style.opacity = 1
        green.style.opacity = 0.5
        light = 'yellow'
    } 
    //green
    else if (color === 'green') {
        red.style.opacity = 0.5
        yellow.style.opacity = 0.5
        green.style.opacity = 1
        light = 'green'
    }
}
//contador
let contador = 0;
const second = 1000
// Utilizei setInterval para executar a função no tempo determinado
let interval = setInterval(() =>  {
    if(contador >= 0 && contador < 10) {
        turnOnLight('green');
        clock.innerHTML = 9 - contador
    } else if (contador >= 10 && contador < 13) {
        turnOnLight('yellow')
        clock.innerHTML = ''
    } else if (contador >= 13) {
        turnOnLight('red')
        clock.innerHTML = 27 - contador
        
    } 
    
    contador = (contador +  1) % 28;
}, second);

function onStop (){
    if (light === 'green' && contador < 7) {
        contador = 7

        button.setAttribute('disabled', true)
        setTimeout(() => {
            button.removeAttribute('disabled')
        }, 60 * second);
    }
}

//ERYSON LUZ...
