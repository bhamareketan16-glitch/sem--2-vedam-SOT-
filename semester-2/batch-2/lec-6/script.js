const cart = ["shirt", "trousers", "shoes", "shades"]

console.log("cart items", cart)

createOrder(cart)
  .then(function (orderId) {
    console.log("order created")
    console.log("order id is", orderId)

    return orderId
  })
  .then(function (orderId) {
    console.log("going for payment with order id", orderId)

    return proceedToPayment(orderId)
  })
  .then(function (paymentInfo) {
    console.log("payment response received")
    console.log(paymentInfo)

    return paymentInfo
  })
  .catch(function (err) {
    console.log("error happened")
    console.log(err.message)
  })
  .then(function () {
    console.log("this will always execute")
  })



function createOrder(cart) {

  function validateCart(cart) {
    return false
  }

  console.log("creating order...")

  const promise = new Promise(function (resolve, reject) {

    console.log("inside promise")

    if (!validateCart(cart)) {

      console.log("cart validation failed")

      setTimeout(function () {
        reject(new Error("Cart is invalid"))
      }, 2000)

      return
    }

    console.log("cart validated")

    const orderId = "11011"

    setTimeout(function () {
      console.log("order created successfully")
      resolve(orderId)
    }, 4000)
  })

  return promise
}



function proceedToPayment(orderId) {
  console.log("payment started for", orderId)

  return new Promise(function (resolve, reject) {

    setTimeout(function () {
      console.log("payment processing...")
      resolve("Payment Successful")
    }, 3000)
  })
}
