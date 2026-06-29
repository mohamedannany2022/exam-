const Backend=document.getElementById("Backend");
const Frontend=document.getElementById("Frontend");
const btnfron=document.getElementById("btnfron");
const btnback=document.getElementById("btnback");


const CloudDevOps=document.getElementById("Cloud-DevOps")
const btnmob=document.getElementById("btnmob");
const mobile=document.getElementById("mobile");
const btnclou=document.getElementById("btnclou")
const Datebases=document.getElementById("Datebases")
const navitem=document.querySelectorAll("nav-item")
const btndate=document.getElementById("btndate")


btnfron.addEventListener("click",(e) => {
    e.preventDefault();
    Frontend.classList.remove("noactive");
    Backend.classList.add("noactive");
  mobile.classList.add("noactive");
    CloudDevOps.classList.add("noactive");
    Datebases.classList.add("noactive");

})    


btnback.addEventListener("click",(e) => {
    e.preventDefault();
    Backend.classList.remove("noactive");
    Frontend.classList.add("noactive");
    mobile.classList.add("noactive");
    CloudDevOps.classList.add("noactive");
    Datebases.classList.add("noactive");


})    


btnmob.addEventListener("click",(e) => {
    e.preventDefault();
    mobile.classList.remove("noactive");
    mobile.previousElementSibling.classList.add("noactive");
    Frontend.classList.add("noactive");
    CloudDevOps.classList.add("noactive");
    Datebases.classList.add("noactive");
})    

btnclou.addEventListener("click",(e)=>{
    e.preventDefault();
    CloudDevOps.classList.remove("noactive");
    CloudDevOps.previousElementSibling.classList.add("noactive");
    Frontend.classList.add("noactive");
      mobile.classList.add("noactive");
    Datebases.classList.add("noactive");
})
btndate.addEventListener("click",(e)=>{
    e.preventDefault();
    Datebases.classList.remove("noactive");
    Datebases.previousElementSibling.classList.add("noactive");
    Frontend.classList.add("noactive");
      mobile.classList.add("noactive");
    CloudDevOps.classList.add("noactive");
})
