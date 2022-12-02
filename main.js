const backscreen = document.getElementById("back");
const cartbtn = document.getElementById("cartm");

cartbtn.addEventListener("click", (eo) => {
  backscreen.style.width = "80%";
});
const closew = document.getElementById("closee");
closew.addEventListener("click", (eo) => {
  backscreen.style.width = "0";
});

// to show the form window
const btncheckout = document.getElementById("formbtn");
const windowcheckbox = document.getElementById("check-box");
console.log(windowcheckbox);
btncheckout.addEventListener("click", (eo) => {
  windowcheckbox.classList.add("activecheck");
});

const closecheck = document.getElementById("Closeee");
closecheck.addEventListener("click", (eo) => {
  windowcheckbox.classList.remove("activecheck");
});

const allback = document.getElementById("addarea");
allback.addEventListener("click", (eo) => {
  if (eo.target.classList == "icon-close") {
    eo.target.parentElement.remove();
    calculationpricee();
  }
});

const areaproduct = document.querySelectorAll(".pro-card");
const areainfo = document.getElementById("thebox");

areaproduct.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const informationbox = document.getElementById("info-box");
    informationbox.style.display = "block";
    const img = item.getElementsByClassName("imgsrc")[0].getAttribute("src");
    //start small Imgs
    const img1 = item.getElementsByClassName("imgsrc1")[0].getAttribute("src");
    const img2 = item.getElementsByClassName("imgsrc2")[0].getAttribute("src");
    const img3 = item.getElementsByClassName("imgsrc3")[0].getAttribute("src");
    //end small Imgs
    const name = item.getElementsByClassName("name")[0].innerText;
    const price = item.getElementsByClassName("theprice")[0].innerText;
    const pricesale = item.getElementsByClassName("sale")[0].innerText;

    const openinfo = `
    <h1>Product Information</h1>
    <div class="allinfopro">
  <div class="larg">
    <img class="thisimg" id="large-img" src="${img}" alt="" />
  </div>
  <div class="small-pro">
    <img class="smaall" src="${img}" alt="" />
    <img class="smaall" src="${img1}" alt="" />
    <img class="smaall" src="${img2}" alt="" />
    <img class="smaall" src="${img3}" alt="" />
  </div>
  <div class="informations">
    <span>T-Shirt</span>
    <h3 class="thisname">${name}</h3>
   <span  class="theprice thisprice" >${price}</span>
    <span class="sale thissale" >${pricesale}</span>
    <div class="size-num">
      <h4>Num : <input style="hight :60px;" class="thisnum" type="number" value="1" /></h4>
      <h4>
        Size :
        <select class="thissize">
          <option>Small</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
      </h4>
    </div>
  
    <h4>Product Informations :</h4>
    <div class="infolist">
    <span>Heat Resistant Cotton Material For Extra Comfort</sspan>
    <span>Casual T-Shirt Classic Design</span>
    <span>Assures long lasting durability</span>
    <span>Easy to clean and maintain</span>
    </div>
  <div class="buy">
    <h4>To Buy Select Number And Size</h4>
    <button class="btnaddcart" id="tocart">Add To Cart</button>
    <button class="addcartdone" id="vbtn" >Add To Cart</button>
  </div>
    </div>
  </div>
        `;
    areainfo.innerHTML = openinfo;

    const btnaddtocart = document.querySelectorAll(".btnaddcart");
    btnaddtocart.forEach((item) => {
      item.addEventListener("click", (eo) => {
        item.classList.add("xnone");

        // show Done botton
        const viewdonebtn = document.getElementById("vbtn");
        viewdonebtn.classList.add("vbtn");

        // // to add button checkout
        // const checkout = document.createElement("button");
        // backscreen.append(checkout);
        // checkout.classList.add("btntotalcart");
        // checkout.innerHTML = `
        // <p>Checkout</p>
        // <p id="totalprice">$0</p>
        // `;

        // show message "add"
        const areamsg = item.parentElement.parentElement.parentElement;
        const message = document.createElement("div");
        areamsg.append(message);
        message.classList.add("donemessage");
        message.innerHTML = "Added to cart";
        setTimeout(() => {
          message.remove();
        }, 2000);
        // ______________________
        // add the product to the cart
        //  when we add a product to the cart
        const emptyarea = document.getElementById("empty");
        emptyarea.style.display = "none";

        // add item to cart

        const allproducts = document.getElementById("addarea");
        const Card = item.parentElement.parentElement.parentElement;

        const Cart = item.parentElement.parentElement;

        const Img =
          Card.getElementsByClassName("thisimg")[0].getAttribute("src");
        console.log(Img);
        const Name = Cart.getElementsByClassName("thisname")[0].innerText;
        console.log(Name);
        const Price = Cart.getElementsByClassName("thisprice")[0].innerText;
        console.log(Price);
        const Pricesale = Cart.getElementsByClassName("thissale")[0].innerText;
        console.log(Pricesale);
        const Num = Cart.getElementsByClassName("thisnum")[0].value;
        console.log(Num);
        const Size = Cart.getElementsByClassName("thissize")[0].value;
        console.log(Size);
        const addedproducts = `
        <div class="addedcart" >
        <div class="img">
      <img src="${Img}" style="width: 70px; border-radius: 50% ; margin: 0 10px; " alt="" />
      </div>
      <div class="name"><h4 style="font-size: 13px ;">${Name}</h4></div>
      <div class="quantity"><input type="number" value="${Num}" min="1" class="input-quantity" style="margin-left: 5px; width: 40px;cursor:pointer; height: 30px; padding: 3px;"id="input-quantity" />
      </div>
      <div class="thesize">${Size}</div>
      <div class="price"><span style="font-size: 15px ; margin: 0 10px" class="theprice">${Price}</span> <span style="font-size: 15px ;" class="sale">${Pricesale}</span>
        </div>
          <span class="icon-close"></span>
        </div>

        `;
        allproducts.innerHTML += addedproducts;
        calculationpricee();

        const Alll = document.querySelectorAll(".addedcart");

        localStorage.setItem("product", Alll);
      });
    });

    // to change photos
    const large = document.getElementById("large-img");
    const small = document.getElementsByClassName("smaall");

    small[0].onclick = function () {
      large.src = small[0].src;
    };
    small[1].onclick = function () {
      large.src = small[1].src;
    };
    small[2].onclick = function () {
      large.src = small[2].src;
    };
    small[3].onclick = function () {
      large.src = small[3].src;
    };
  });
});

const closeinfobox = document.getElementById("Closee");
closeinfobox.addEventListener("click", (eo) => {
  eo.target.parentElement.style.display = "none";
});

// // // // calculate the price

const calculationpricee = () => {
  const totalproducts = document.getElementById("totalPrice");
  const totalproductsn = document.getElementById("totalprice");
  const allPro = document.querySelectorAll(".addedcart");

  let totaal = 0;

  allPro.forEach((item) => {
    const Price = Number(
      item.getElementsByClassName("sale")[0].innerText.replace("$", "")
    );
    const Quantity = Number(
      item.getElementsByClassName("input-quantity")[0].value
    );
    totaal = totaal + Price * Quantity;
  });
  totalproductsn.innerText = `$${totaal}`;
  totalproducts.innerText = `$${totaal}`;
};

backscreen.addEventListener("change", (eo) => {
  calculationpricee();
});
