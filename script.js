
let btn = document.getElementById('btn');
let texto = document.getElementById('texto');

btn.addEventListener('click', function(){
    reverseString(texto.value);
});

function reverseString(texto){
    let textoRevertido = '';
    for(let i=texto.length-1;i>=0;i--){
        textoRevertido += texto[i];
    }
    console.log(textoRevertido);
}