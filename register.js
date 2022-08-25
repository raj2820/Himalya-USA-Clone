
let SignUpData = JSON.parse(localStorage.getItem("user")) || [];
document.querySelector("#button").addEventListener("click", RegisterFun);


function RegisterConstructorFun(name, last_name, email, password) {
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
}

function RegisterFun(event) {
    event.preventDefault()
    document.querySelector("#errMsg").innerHTML=null
    let name = document.querySelector("#userFirstName").value;
    let last_name = document.querySelector("#userLastName").value;
    let email = document.querySelector("#userEmail").value;
    let password = document.querySelector("#userPassword").value;
    if (email == "" && password == "" && last_name == "" && name == "") {

        // let Name= document.createElement("p");
        //     Name.innerText=`- First_Name can't be blank.`

        // let Last_name= document.createElement("p");
        //     Last_name.innerText=`- Last_Name can't be blank.`

        let Email = document.createElement("p");
        Email.innerText = `• Email can't be blank.`

        let Password = document.createElement("p");
        Password.innerText = `• Password can't be blank.`

        return document.querySelector("#errMsg").append(Password, Email)
    }







    let userConstructor = new RegisterConstructorFun(name, last_name, email, password)
    console.log(userConstructor)
    SignUpData.push(userConstructor);
    // console.log(SignUpData)

    
    localStorage.setItem("user", JSON.stringify(SignUpData));

    window.location.href="./sign_in.html"

}
