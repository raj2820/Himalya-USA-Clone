let roots1=document.getElementById("roots1")
let roots2=document.getElementById("roots2")
let king=document.getElementById("king")
let rani=document.getElementById("rani")
let our=document.getElementById("our")
let science=document.getElementById("science")
let about=document.getElementById("about")
let initi=document.getElementById("initi")
let initia=document.getElementById("initia")
let initiav=document.getElementById("initiav")
let initiave=document.getElementById("initiave")
let initiatives=document.getElementById("initiatives")
let initiativesa=document.getElementById("initiativesa")




function pagechange(){
    let page=document.getElementById("page")
    page.style.backgroundColor="#006666"
    page.style.color="white"
    root.style.backgroundColor="white"
    root.style.color="#006666"
    boy.style.backgroundColor="white"
    boy.style.color="#006666"
    next.style.backgroundColor="white"
    next.style.color="#006666"
    
   roots1.style="display:block; display: grid;grid-template-columns: repeat(2,1fr);height:500px;"
   roots2.style="display:block; display: grid;grid-template-columns: repeat(2,1fr);height:500px;"
king.style="display:none"
rani.style="display:none"
our.style="display:none"
about.style="display:none"
science.style="display:none"


}
function nextpage(){
    let next=document.getElementById("next")
    next.style.backgroundColor="#006666"
    next.style.color="white"
    root.style.backgroundColor="white"
    root.style.color="#006666"
    boy.style.backgroundColor="white"
    boy.style.color="#006666"
    page.style.backgroundColor="white"
    page.style.color="#006666"
    
    king.style="display:none"
rani.style="display:none"
roots1.style="display:none"
roots2.style="display:none"
about.style="display:none"
our.style="display:block; display: grid;grid-template-columns: repeat(2,1fr);height:700px;"
science.style="display:block; display: grid;grid-template-columns: repeat(2,1fr);height:500px;"


}
function slide(){
    let root=document.getElementById("root")
    root.style.backgroundColor="#006666"
    root.style.color="white"
    page.style.backgroundColor="white"
    page.style.color="#006666"
    next.style.backgroundColor="white"
    next.style.color="#006666"
    boy.style.backgroundColor="white"
    boy.style.color="#006666"
    
    king.style="display:none"
rani.style="display:none"
roots1.style="display:none"
roots2.style="display:none"
science.style="display:none"
our.style="display:none"
about.style="display:block; display: grid;grid-template-columns: repeat(2,1fr);height:800px;"


}
function previous(){
    let boy=document.getElementById("boy")
    boy.style.backgroundColor="#006666"
    boy.style.color="white"
    root.style.backgroundColor="white"
    root.style.color="#006666"
   
    page.style.backgroundColor="white"
    page.style.color="#006666"
    king.style="display:grid:grid-template-columns:repeat(2,1fr);height:800px;"
    rani.style="display:grid:grid-template-columns:repeat(2,1fr);height:500px;"
    
roots1.style="display:none"
roots2.style="display:none"
science.style="display:none"
our.style="display:none"
about.style="display:none"


}
function inity(){
    roots1.style="display:none"
roots2.style="display:none"
science.style="display:none"
our.style="display:none"
about.style="display:none"
king.style="display:none"
rani.style="display:none"
initi.style="display:grid:grid-template-columns:repeat(2,1fr);height:500px;"
initia.style="display:grid:grid-template-columns:repeat(2,1fr);height:500px;"
initiav.style="display:grid:grid-template-columns:repeat(2,1fr);height:500px;"
initiave.style="display:grid:grid-template-columns:repeat(2,1fr);height:500px;"
initiatives.style="display:grid:grid-template-columns:repeat(2,1fr);height:500px;"
initiativesa.style="display:grid:grid-template-columns:repeat(2,1fr);height:500px;"

}
