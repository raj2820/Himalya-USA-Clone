

let cartData = JSON.parse(localStorage.getItem("cart"))||[]
// console.log(cartData);
let arr = [];

    if (cartData === "") {


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
    
    }




function display(cartData) {

    document.querySelector("#cartLogo").innerHTML=null;

    cartData.forEach(function (el, index) {
       


        let div = document.createElement("div");
        div.setAttribute("class", "AddShopCart");

        let Line = document.createElement("hr");

        let Trash = document.createElement("img")
        Trash.src = "https://cdn0.iconfinder.com/data/icons/phosphor-light-vol-4/256/trash-simple-light-256.png"
        Trash.setAttribute("id", "TrashImg");

        Trash.addEventListener("click", function () {
            remove(el, index)
        })


        let imageData = document.createElement("img");
        imageData.src = el.lazyload;
        imageData.setAttribute("id", "MedImage");

        let Name = document.createElement("h2");
        Name.innerText = el.title
        Name.setAttribute("id", "NameTitle");


        let Minsbtn = document.createElement("button");
        Minsbtn.innerText = `-`
        Minsbtn.setAttribute("id", "MinsBtnID")
        Minsbtn.addEventListener("click", function () {
            SubFun(count,index)
        })

        let count = 1


        let quantity = document.createElement("h3");
        quantity.innerText = `${count}`
        quantity.setAttribute("id", "quantity");


        let Plusbtn = document.createElement("button");
        Plusbtn.innerText = `+`
        Plusbtn.setAttribute("id", "Plusbtn")
        Plusbtn.addEventListener("click", function () {
            AddFun(count,index)
        })


        div.append(Trash, imageData, Name, Minsbtn, quantity, Plusbtn);
        document.querySelector("#cartLogo").append(div, Line);
    })
}


display(cartData)




function ADDCART() {
    window.location.href = "./index.html"
}

// remove function

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

// plus function


let sum =0

function AddFun(count,index){
    sum =sum+count
    console.log(index,sum);
    document.querySelector("#quantity").innerText=sum;
}







// sub 

    function SubFun(count,index) {

        document.querySelector("#quantity").innerHTML = null
        sum = sum - count;
        console.log(sum);
        document.querySelector("#quantity").append(sum);

    }












































































































































































































    // let AddData = JSON.parse(localStorage.getItem("cart"));

    // // console.log(AddData);

    // if (AddData == [] || AddData == null) {
    //     document.querySelector("#cartLogo").innerHTML = null;
    //     let Title = document.createElement("h1");
    //     Title.innerText = `Shopping cart is empty`
    //     // let Line= document.createElement("hr");

    //     let des = document.createElement("p");
    //     des.innerText = `You have no items in your shopping cart.`

    //     let btn = document.createElement("button");
    //     btn.innerText = `Continue Shopping`
    //     btn.setAttribute("id", "shoppingBtn")
    //     btn.addEventListener("click", function () {
    //         ADDCART()
    //     })

    //     document.querySelector("#cartLogo").append(Title, des, btn);
    // }

    // function displayData(AddData) {
    //     document.querySelector("#cartLogo").innerHTML = null;
    //     AddData.forEach(function (el, index) {
    //         // console.log(el)

    //         let div = document.createElement("div");
    //         div.setAttribute("class", "AddShopCart");
    //         //   Title.innerHTML=null
    //         // let Title = document.createElement("h1");
    //         // Title.innerText = `Shopping Cart`
    //         // Title.style = "margin-top:-80px"

    //         let Line = document.createElement("hr");



    //         let Trash = document.createElement("img")
    //         Trash.src = "https://cdn0.iconfinder.com/data/icons/phosphor-light-vol-4/256/trash-simple-light-256.png"
    //         Trash.setAttribute("id", "TrashImg");

    //         Trash.addEventListener("click", function () {
    //             remove(el, index)
    //         })

    //         let Name = document.createElement("h2");
    //         Name.innerText = el.title
    //         Name.setAttribute("id", "NameTitle");

    //         let imageData = document.createElement("img");
    //         imageData.src = el.lazyload;
    //         imageData.setAttribute("id", "MedImage");

    //         let Prize = document.createElement("h2");
    //         Prize.innerText = el.price;

    //         let CARTBUUTON = document.createElement("div");
    //         CARTBUUTON.setAttribute("id", "CatButtonID");
    //         let count = 1

    //         let Kimmat = document.createElement("p");
    //         Kimmat.innerText = `${count}`;
    //         Kimmat.setAttribute("class", "shivam")

    //         let Minsbtn = document.createElement("button");
    //         Minsbtn.innerText = `-`
    //         Minsbtn.setAttribute("id", "MinsBtnID")
    //         Minsbtn.addEventListener("click", function () {
    //             SubFun(count)
    //         })


    //         let Plusbtn = document.createElement("button");
    //         Plusbtn.innerText = `+`
    //         Plusbtn.setAttribute("id", "Plusbtn")
    //         Plusbtn.addEventListener("click", function () {
    //             AddFun(count)
    //         })

    //         CARTBUUTON.append(Minsbtn, Kimmat, Plusbtn);










    //         div.append(Trash, imageData, Name, Prize, CARTBUUTON);
    //         return document.querySelector("#cartLogo").append(div, Line);

    //     })
    // }

    // displayData(AddData);


    // let sum = 0
    // function AddFun(count) {
    //     document.querySelector(".shivam").innerHTML = null
    //     count++
    //     sum = sum + count;
    //     console.log(sum);
    //     document.querySelector(".shivam").append(sum);
    // }



    // function SubFun(count) {

    //     document.querySelector(".shivam").innerHTML = null
    //     count++
    //     sum = sum - count;
    //     console.log(sum);
    //     document.querySelector(".shivam").append(sum);

    // }



    // function remove(el, index) {
    //     let data = AddData.filter(function (el, i) {

    //         if (i == index) {
    //             remove(el);
    //             window.location.reload();
    //         }
    //         else {
    //             return i !== index
    //         }
    //     })
    //     localStorage.setItem("cart", JSON.stringify(data));
    // }










    // function ADDCART() {
    //     window.location.href = "./index.html"
    // }





    // let Title = document.createElement("h1");
    // Title.innerText = `Shopping Cart`
    // Title.style = "margin-top:-80px"

    // let Line = document.createElement("hr");

    // let div = document.createElement("div");
    // div.setAttribute("class", "AddShopCart");

    // let Trash = document.createElement("img")
    // Trash.src = "https://cdn0.iconfinder.com/data/icons/phosphor-light-vol-4/256/trash-simple-light-256.png"
    // Trash.setAttribute("Id", "TrashImg");

    // div.append(Trash)
    // document.querySelector("#cartLogo").append(Title, Line, div);
