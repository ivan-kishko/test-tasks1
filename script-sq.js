//test 2
console.log('task 2')
for (let i=1; i < 100; i++) {
    if(i % 7 === 0 && i % 3 === 0) {
        console.log('OpenSource')
    } else if (i % 7 === 0) {
        console.log('Source')
    } else if (i % 3 === 0) {
        console.log('Open')
    } else {
        console.log(i)
    }
}

//test3
console.log('task 3')
let container = document.querySelector('.container1')
console.log(container.children)

//test4
console.log('task 4')
const sumOfIntegers = (arr) => {
    let intArr = arr.filter(el => Number.isInteger(+el))
    return intArr.reduce((acc, el) => acc + Number(el), 0)
}
console.log(sumOfIntegers(['1', 'a', '25', '13.1']))

//test5
const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log('task 5')
        console.log(res.filter(obj => obj.id === 5))
        return res.filter(obj => obj.id === 5)
    })

//test6
console.log('task 6')
const value1 = 'Softeq'
const value2 = '#rules'

const pattern = /^[A-Za-z#]{6,}$/i
console.log(value1.match(pattern))
console.log(value2.match(pattern))


//test7
console.log('task 7')
const alphabet = () => {
    let arr = []
    for(let i=65; i<91; i++) {
        arr.push(String.fromCharCode(i))
    }
    return arr
}

console.log(alphabet())

//test8
console.log('task 8')
let answer = Math.round(Math.random() * 1000000 + 1)
const verify = (guess) => {
    if (guess > answer) {
        return 1
    } else if (guess < answer) {
        return -1
    } else {
        return 0
    }
}

let verifyCount = 3
let range = [1, 1000000]
const solver = (num = 500000) => {
    if (answer === 1) return 'Solved, the number was: 1, you needed 1 try'
    if (answer === 1000000) return 'Solved, the number was: 1000000, you needed 2 tries'
    if (verify(num) === 0) return 'Solved, the number was: ' + num + ', you needed ' + verifyCount + ' tries'
    if (verifyCount === 50) return 'Sorry, you are out of tries!'

    if (num > answer) {
        verifyCount++
        range[1] = num
        return solver(Math.round((range[1] + range[0]) / 2))
    }
    if (num < answer) {
        verifyCount++
        range[0] = num
        return solver(Math.round((range[1] + range[0]) / 2))
    }
}

console.log(answer)
console.log(solver())

