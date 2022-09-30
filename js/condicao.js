
var idade = 10
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Não vota')
}else if (idade < 18 || idade > 65){
    console.log('Voto Opcional')
}else{
    console.log('Voto Obrigatorio')
}

var agora = new Date()
var diaSem = agora.getDay()
diaSem = 0
//.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
         console.log('Terça')
         break
    case 3:
        console.log('Quarta')
         break
    case 4:
         console.log('Quinta')
         break
    case 5:
        console.log('Sexta')
         break
    case 6:
        console.log('Sabado')
         
    default:
        console.log('[ERRO] Dia inválido"')
}
       
