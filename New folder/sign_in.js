


let SignUpData = JSON.parse(localStorage.getItem("user"));

console.log(SignUpData);

document.querySelector("#button").addEventListener("click", MyData);


function MyData(event) {
    event.preventDefault()
    let e = document.querySelector("#userEmail").value;
    let p = document.querySelector("#userPassword").value;
    document.querySelector("#errorMsg").innerHTML=null;
    SignUpData.forEach(function (el) {
        // console.log(el)
        if (el.email == e && el.password == p) {
            // console.log(el);
            localStorage.setItem("LoginData",JSON.stringify(el));
            window.location.href="./account.html"
        } else if(e=="" && p==""){
            document.querySelector("#errorMsg").innerHTML=null;
            let Err = document.createElement("p");
            Err.innerText = `• Please Enter Your Email and Password`
          return  document.querySelector("#errorMsg").append(Err);
        }else{
            document.querySelector("#errorMsg").innerHTML=null;
            // document.querySelector("#errorMsg").innerHTML=null;
            let arr = document.createElement("p");
            arr.innerText = `• Incorrect email or password.`
           return  document.querySelector("#errorMsg").append(arr);
        }
    })
}
