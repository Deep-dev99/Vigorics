var cart = document.getElementsByClassName("remove");

for (let a = 0; a < cart.length; a++) {
  var rem = cart[a];
  rem.addEventListener("click", removefuncation);
}

function removefuncation(e) {
  var clickedB = e.target;
  clickedB.parentElement.parentElement.parentElement.remove();
  updateCart();
}

var quan = document.getElementsByClassName("quantity");
for (let n = 0; n < quan.length; n++) {
  var quanty = quan[n];
  quanty.addEventListener("change", quantye);
}

function quantye(passkaro) {
  var quanty = passkaro.target;
  if (isNaN(quanty.value) || quanty.value <= 0) {
    quanty.value = 1;
  }
  updateCart();
}

document.write = updateCart();

function updateCart() {
  var cartup = document.getElementsByClassName("cart-body");
  var total = 0;
  for (let b = 0; b < cartup.length; b++) {
    var upcart = cartup[b];

    var pricenikal = upcart.getElementsByClassName("price")[0];
    var quanikal = upcart.getElementsByClassName("quantity")[0];

    var actualprice = parseFloat(pricenikal.innerText.replace("$", ""));
    var actualquan = quanikal.value;
    var properprice = actualprice * actualquan;

    total = total + properprice;
  }
  return;
}

// var addcart =document.getElementsByClassName("add-cart");
// for (let c = 0; c < addcart.length; c++) {
//     var cartmay = addcart[c];
//     cartmay.addEventListener("click",addtocart);
// }
// console.log(addcart);
// function addtocart(chalu){
//     var cartmay=chalu.target;
//     var pwala = cartmay.parentElement.parentElement.parentElement.parentElement;
//     var callkarotitle = pwala.getElementsByClassName("card-title")[0].innerText;
//     var callkaroprice = pwala.getElementsByClassName("rupya")[0].innerText;
//     var callkarophoto = pwala.getElementsByClassName("card-img-top")[0].src;
//     console.log(callkarotitle, callkaroprice, callkarophoto);

//     localStorage.setItem("title", callkarotitle);
//     localStorage.setItem("price", callkaroprice);
//     localStorage.setItem("photo",callkarophoto);
//     additemtocart()

// }
const addtocart = document.getElementsByClassName("add-cart");
let items = [];
for (let b = 0; b < addtocart.length; b++) {
  addtocart[b].addEventListener("click", function (e) {
    if (typeof Storage !== "undefined") {
      let item = {
        id: b + 1,
        name: e.target.parentElement.parentElement.parentElement.children[0]
          .textContent,
        price:
          e.target.parentElement.parentElement.parentElement.children[2]
            .textContent,
        no: 1,
      };
     
      

      if (JSON.parse(localStorage.getItem("items")) === null) {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      } else {
        const localitems = JSON.parse(localStorage.getItem("items"));

        localitems.map((data) => {
          if (item.id == data.id) {
            item.no = data.no + 1;
          } else {
            items.push(data);
            window.location.reload();
          }
        });

        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      }
    } else {
      console.log("localstorage is not working");
    }
   
  });
}

// adding data to cart
const cartander = document.getElementsByClassName("modal-wrapper");
const cartbox = document.querySelector(".tab");
let tableData = "";
tableData +=
  "<tr><th>S no</th> <th>Item name</th> <th>Item no</th> <th>price</th> <th></th></tr>";

if (JSON.parse(localStorage.getItem("items")) == null) {
  tableData += '<tr><td colspan ="5">NO items found <i class="fa-sharp fa-solid fa-cart-arrow-down fa-xl"></i> <td></tr>';
} else {
  JSON.parse(localStorage.getItem("items")).map((data) => {
    tableData +=
      "<tr><th>" +
      data.id +
      "</th> <th>" +
      data.name +
      "</th> <th>" +
      data.no +
      "</th> <th class = paisa >" +
      data.price +
      "</th> <th><a href =# onclick=hatado(this);>Delete</a></th></tr>";
  });

}
cartbox.innerHTML = tableData;

function hatado(e) {
  items = [];
  JSON.parse(localStorage.getItem('items')).map((data) => {
    if (data.id != e.parentElement.parentElement.children[0].textContent) {
      items.push(data);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
  window.location.reload();
}

var perchse =document.getElementsByClassName("perchase")[0].addEventListener("click", clerlocal)

function clerlocal(){
localStorage.clear();
window.location.reload();
alert("Order placed successfully")


}







