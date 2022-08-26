const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//Crie duas funcões que recebem como parâmetro um objeto.
//1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

const caixaAlta = (objeto) => {
    let novoCaixaAlta = []
    for(i in objeto){
        novoCaixaAlta[i] = objeto[i].toUpperCase()
    }
    return novoCaixaAlta
}
console.log(caixaAlta(objeto))

//2. A segunda deve retornar os valores do objeto como texto corrido.

const textoCorrido = (objeto) => {
    let novoTextoCorrido = []
    for(i in objeto){
        novoTextoCorrido += objeto[i] + ', '
    }
    return novoTextoCorrido
}
console.log(textoCorrido(objeto))

//3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

const imprimir = (callback, objeto) =>{
    console.log(callback(objeto))
}
imprimir(textoCorrido,objeto)

