
let menu = document.getElementById('menu')
let orderList = document.getElementById('orderList')

menu.addEventListener('mouseover',()=>{
  orderList.style.display = 'block'
  console.log('hapo vipi')
})
menu.addEventListener('mouseout',()=>{
  orderList.style.display = 'none'
  console.log('hapo vipi')
})
console.log(orderList)


const products = [
  {
    id:"3",
    image:"chikfla.images/salads.png",
    price: 7.99,
    name:"salad"
  },
  {
    id:"1",
    image:'chikfla.images/treats.png',
    price: 100,
    name:"limited time flavors"
  },
  {
    id:"2",
    image:"chikfla.images/Beverages.png",
    price: 10.99,
    name:"beverage"
  } 
]
let generateHTML = ""

products.forEach((menu)=>{
 generateHTML += `<div class="meals">
 <img src="${menu.image}">
 <div>${menu.name}</div>
  $${menu.price}
  </div>
`
});
console.log(generateHTML)
 document.querySelector('.products').innerHTML = generateHTML


