let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let result = document.querySelector('div#res')
let valores = []

function eNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function naLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}



function Adicionar(){
    if (eNumero(num.value) && ! naLista(num.value, valores)){
//sempre esqueco de que para adicionar um valor no array tem que usar push.
        valores.push(Number(num.value))
// aqui é onde faz aparecer o que foi adicionado.

        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        item.value = `lista${valores}`
        lista.appendChild(item)

    }else{

        window.alert('Valor inválido ou já adicionado na lista.')
    }

//limpa os valores, e traz foco para escrever de novo
num.value = ''
num.focus()

}

//agr criar o que vai acontecer quando clicar em finalizar

function Finalizar(){

if (valores.length == 0){
    window.alert('Digite um valor antes de finalizar.')

}else{
    // com length voce fica sabendo o comprimento.

    let total = valores.length
    let maior = valores[0]
    let menor = valores [0]
    let soma = 0
    let media = 0


    for(let pos in valores){

        soma += valores[pos]

        if(valores[pos] > maior)
        maior = valores[pos]

        if(valores[pos] < menor)
        menor = valores[pos]
    }

    media = soma/total

    result.innerHTML += `Ao todo, temos ${total} valores cadastrados`
    result.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
    result.innerHTML += `<p>O menor valor cadastrado foi ${menor}. </p>`
    result.innerHTML += `<p>A soma dos valores ${valores} é ${soma}.</p>`
    result.innerHTML += `<p>A média entre os valores é ${media}.</p>`

}


}