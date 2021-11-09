
//무작위 5명중 내가 키 몇 등인지 찾기

const readLine = require('readline-sync')

const heightArry = []
heightArry.push(parseInt(Math.random() * 40) + 150)
heightArry.push(parseInt(Math.random() * 40) + 150)
heightArry.push(parseInt(Math.random() * 40) + 150)
heightArry.push(parseInt(Math.random() * 40) + 150)

console.log(heightArry)

for (let i = 0; i < heightArry.length; i++) {
    let swap
    for (let j = 0; j < heightArry.length - 1 - i; j++) {
        if (heightArry[j] > heightArry[j + 1]){
            swap = heightArry[j]
            heightArry[j] = heightArry[j + 1]
            heightArry[j + 1] = swap
        }
    }
}
console.log(heightArry)

console.log(`당신의 키를 입력하시오`)

const yourHeight = parseInt(readLine.prompt())

console.log(`당신이 생각하는 키 등수를 입력하시오`)

let rank = parseInt(readLine.prompt())

if( yourHeight < heightArry[0]){
    if(rank === 5)
    {
        console.log(`정답입니다.`)
    } else {
        console.log(`오답입니다. 꼴등입니다.`)
    }
}
else if( yourHeight > heightArry[0] && yourHeight < heightArry[1])
{
    if(rank === 4){
        console.log(`정답입니다.`)
    } else {
        console.log(`오답입니다. 4등입니다.`)
    }
}
else if( yourHeight > heightArry[1] && yourHeight < heightArry[2])
{
    if(rank === 3){
        console.log(`정답입니다.`)
    } else {
        console.log(`오답입니다. 3등입니다.`)
    }
}
else if( yourHeight > heightArry[2] && yourHeight < heightArry[3])
{
    if(rank === 2){
        console.log(`정답입니다.`)
    } else {
        console.log(`오답입니다. 2등입니다.`)
    }
}
else if( yourHeight > heightArry[3])
{
    if(rank === 1){
        console.log(`정답입니다.`)
    } else {
        console.log(`오답입니다. 1등입니다.`)
    }
}