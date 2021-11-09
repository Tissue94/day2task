
const arry = [`1`, `3`, `5`]

//배열 추가
arry.push(parseInt(Math.random() * 10))

console.log(arry)

arry.unshift(parseInt(Math.random() * 10))

console.log(arry)

//배열 삭제
const behindDel = arry.pop()

console.log(behindDel)

const frontDel = arry.shift()

console.log(frontDel)

const midDel = arry.splice(1, 1)

console.log(midDel)

console.log(arry)


