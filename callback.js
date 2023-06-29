function somar(num1, num2, callback) {
    let resultado = num1 + num2;
    callback(resultado)
}

somar(2, 3, imprimirResultado)

function imprimirResultado(resultado) {
    console.log("O resultado da soma é: " + resultado)
}


const letters = ["a", "b", "c", "d"];



function forEach(array, callBackParaRodarEmCadaItem) {
    for(let index = 0; index < array.length; index ++) {
        const letraAtual = array[index]
        callBackParaRodarEmCadaItem(letraAtual, index, array)
    }
}

forEach(letters, function(letraAtual, index, array) {
console.log(letraAtual)
}) 


function somar (num1, num2, callback) {
    let resultados =  num1 + num2 
    callback(resultados)
}

function imprimirResultados (resultados) {
    console.log('Seu resultado é ' + resultados)
}

somar(2, 5, imprimirResultados)