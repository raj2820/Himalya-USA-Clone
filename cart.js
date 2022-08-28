

let cartData = JSON.parse(localStorage.getItem("cart"))||[]
// console.log(cartData);
let arr = [];



if (cartData.length ===0) {

        let Title = document.createElement("h1");
        Title.innerText = `Shopping cart is empty`
        // let Line= document.createElement("hr");
    
        let des = document.createElement("p");
        des.innerText = `You have no items in your shopping cart.`
    
        let btn = document.createElement("button");
        btn.innerText = `Continue Shopping`
        btn.setAttribute("id", "shoppingBtn")
        btn.addEventListener("click", function () {
            ADDCART()
        })
    
        document.querySelector("#cartLogo").append(Title, des, btn);
    
    
}else{
  
function display(cartData) {

    document.querySelector("#cartLogo").innerHTML = null;

    cartData.forEach(function (el, index) {
 
                let div = document.createElement("div");
                div.setAttribute("class", "AddShopCart");
        
                let Line = document.createElement("hr");
        
                let Trash = document.createElement("img")
                Trash.src = "https://cdn0.iconfinder.com/data/icons/phosphor-light-vol-4/256/trash-simple-light-256.png"
                Trash.setAttribute("id", "TrashImg");
        
                Trash.addEventListener("click", function () {
        
                    remove(index)
                    remove(el, index)
        
                })
        
        
                let imageData = document.createElement("img");
                imageData.src = el.lazyload;
                imageData.setAttribute("id", "MedImage");
        
                let Name = document.createElement("h2");
                Name.innerText = el.title
                Name.setAttribute("id", "NameTitle");
        
                let price = document.createElement("h2");
                price.innerText = el.price
                price.setAttribute("id","PriceID");
        
        
                let Minsbtn = document.createElement("button");
                Minsbtn.innerText = `-`
                Minsbtn.setAttribute("id", "MinsBtnID")
                Minsbtn.addEventListener("click", function () {
                    SubFun(count, index)
                })

                let quantity = document.createElement("h3");
                quantity.innerText = el.quantity
                quantity.setAttribute("id", "quantity");
        
        
                let Plusbtn = document.createElement("button");
                Plusbtn.innerText = `+`
                Plusbtn.setAttribute("id", "Plusbtn")
                Plusbtn.addEventListener("click", function () {
                    AddFun(cartData ,index)
                })
        
               
            div.append(Trash, imageData, Name, price, Minsbtn, quantity, Plusbtn);
            document.querySelector("#cartLogo").append(div,Line);
                

})
}


display(cartData)


}





function ADDCART() {
    window.location.href = "./index.html"
}



function remove(el,index){
    let abc = cartData.filter(function(el,i){

        if(i == index)
        {
            remove(el)
            window.location.reload()
        }
        else
        {
            return i!==index
        }

    })
   localStorage.setItem("cart",JSON.stringify(abc))
  


}




let sum = 0
function AddFun(cartData ,index) {
  
   cartData[index].quantity++
    localStorage.setItem("cart",JSON.stringify(cartData))
   
    display(cartData)
}

 let TOTAL=0;

function SubFun(carData, index) {

    cartData[index].quantity--
    
    localStorage.setItem("cart",JSON.stringify(cartData))
    display(cartData)
}

function remove(index) {
    cartData.splice(index, 1)

    window.location.reload();

    localStorage.setItem("cart", JSON.stringify(cartData));
}

function TotalDisplay(cartData){

    cartData.forEach(function(el){
       Number(el.price)
        TOTAL = TOTAL + el.price;
        TOTAL*=el.quantity;
    })
        display(cartData)
}
TotalDisplay(cartData);
document.querySelector("#subtotalspan").append(`$${TOTAL}`)
document.querySelector("#subgrandtotalspan").append(`$${TOTAL}`)
localStorage.setItem("TOTAL",JSON.stringify(TOTAL))

document.querySelector("#ProceedID").addEventListener("click",checkoutFun);
let CheckoutArr=[];
function checkoutFun(cartData){
    cartData.forEach(function(el){
        CheckoutArr.push(el)
    })
   localStorage.setItem("checkout",JSON.stringify(CheckoutArr));
  
}
checkoutFun(cartData)







