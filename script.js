

let contador = 1

setInterval( function() {
   document.getElementById('slide' + contador).checked = true

    contador ++

    if (contador > 7) {
        contador = 1
    }

}, 2000)