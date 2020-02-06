var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101)
  var objectItem = {itemName: item, itemPrice: price}
  cart.push(objectItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var sentence = "In your cart, you have"
  for (var x = 0; x <= cart.length; x++){
    var n = cart[x]
    if (cart.length === 0){
      return "Your shopping cart is empty."
    } else if (cart.length === 1){
      sentence = sentence + ` ${n.itemName} at $${n.itemPrice}.`
      return sentence
    }else if (x === (cart.length-1)){
      sentence = sentence + ` and ${n.itemName} at $${n.itemPrice}.`
      return sentence
    } else{
      sentence = sentence + ` ${n.itemName} at $${n.itemPrice},`
    }
  }
  return sentence
}

function total() {
  var money = 0
  for (var x = 0; x < cart.length; x++){
    var price = cart[x]
    money += price.itemPrice
  }
  return money
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (Object.keys(cart[i]) === item){
      cart = [...cart.slice(0,i),...cart.slice[i+1]]
      return cart
    }else{
    continue}
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
}
