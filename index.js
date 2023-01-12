let products = [];
function addProduct(name, price) {
  products.push({ name, price, quantity: 1, liked: false });
  update();
}
function removeProduct(number) {
  products.splice(number, 1);
  update();
}
function Quantity(number, amount) {
  products[number].quantity += amount;
  update();
}
function Like(number) {
  products[number].liked = !products[number].liked;
  update();
}
function update() {
    let El = document.getElementById("pproducts");
    El.innerHTML = `<tr class="H1">
    <th>Your cart</th>
  </tr>`;  

  
let total = 0;
for (let i = 0; i < products.length; i++) {
    let prod = products[i];
    total += prod.price * prod.quantity;

    let El2 = document.createElement("tr");
    El2.classList.add("pproduct");

       El2.innerHTML = `

       <td><div class="name">${prod.name}</div></td>
       <td><div class="ty"price">$ ${prod.price}</div></td>
       <td><div  class="quantity-container">
       <button onclick="Quantity(${i}, 1)"class="quantity"><i class="fa-solid fa-circle-plus"></i></button>
       <span class="quantity-value">${prod.quantity}</span>
       <button  onclick="Quantity(${i}, -1)"class="quantity"><i class="fa-solid fa-circle-minus"></i></button>
       </div></td>
       <td> <button  onclick="removeProduct(${i})"><i class="fa-solid fa-trash"></i></button></td>
       <td> <button ><span onclick="Like(${i})" class="heart${prod.liked ? ' liked':''}"><i class="fa-solid fa-heart"></i></span></button></td>
       
     `;
 
     El.appendChild(El2);
   }
 
   document.getElementById("tot").innerHTML = `$${total}`;
 }
 

 addProduct('Kingdom Hearts',300) 
 addProduct ('Pathfinder',250) 
 addProduct('Simili Black',350) 
 
 