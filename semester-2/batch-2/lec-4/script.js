console.log("Asynchronous Programming")

console.log("Before")

function fun() {
  console.log("I am Fun")
}

setTimeout(fun, 0)

console.log("After")


console.log("Before")

let flag = true

function funLoop() {
  console.log("loop break")
  flag = false
}

setTimeout(funLoop, 2000)

console.log("After")
console.log("next")

while (flag) {}


console.log("Before")

const fun2 = () => {
  console.log("Set timeout 1")

  let timeInFuture = Date.now() + 7000

  while (Date.now() < timeInFuture) {}

  console.log("after while")
}

const fun1 = () => console.log("hello")

setTimeout(fun1, 2000)
setTimeout(fun2, 1000)

console.log("After")


console.log("Start")

setTimeout(() => {
  console.log("First Timeout (1s)")

  setTimeout(() => {
    console.log("Inner Timeout (0.5s)")
  }, 500)
}, 1000)

setTimeout(() => {
  console.log("Second Timeout (0s)")
}, 0)


function runTask() {
  console.log("Inside runTask")

  setTimeout(() => {
    console.log("Timeout inside runTask (300ms)")
  }, 300)

  function innerTask() {
    console.log("Inside innerTask")
  }

  innerTask()
}

runTask()


let i = 0

let id = setInterval(() => {
  console.log("I'm inside setInterval", ++i)

  if (i === 10) {
    clearInterval(id)
  }
}, 1000)
