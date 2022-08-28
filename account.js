

let Account_data = JSON.parse(localStorage.getItem("LoginData"));
console.log(Account_data);


let Name = document.createElement("h3");
Name.innerText = `${Account_data.name + Account_data.last_name}`
document.querySelector("#personName").append(Name);



let Email = document.createElement("h3");
Email.innerText = `${Account_data.email}`
document.querySelector("#personEmail").append(Email);



let CountryName = document.createElement("h3");
CountryName.innerText = `India`
document.querySelector("#personCountry").append(CountryName);



let address = document.createElement("h3");
address.innerText = `Cyber City,Magarpatta-Pune `
document.querySelector("#personAddress").append(address);


let No = document.createElement("h3");
No.innerText = `- `
document.querySelector("#personPhone").append(No);



