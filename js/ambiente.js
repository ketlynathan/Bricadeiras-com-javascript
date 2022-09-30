let num = [5, 8, 2, 9, 3]
num.push(4)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
for (let pos in num ){
    console.log(`A posção ${pos} tem o valor ${num[pos]}`)

}
