window.onload = ()=> {
    const btn = document.getElementById('btn');
    const texto = document.getElementById('texto');

    btn.addEventListener('click', function(){
        let textoValue = texto.value;
        reverseString(textoValue);
    });
}

/**
 * Revierte el texto ingresado y lo imprime al revés
 * @param {string} texto - Texto a revertir
 */
function reverseString(texto){
    let textoRevertido = texto.split('').reverse().join('');
    console.log(textoRevertido);
}