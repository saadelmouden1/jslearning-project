const text=document.querySelector(".txt")
const boton=document.querySelector(".btn")
const container=document.querySelector(".container")




boton.onclick=function add(){
console.log(text.value);
const content=document.createElement("div");
const p=document.createElement("p");
const icon=document.createElement("div");
content.className = 'content active';
icon.className='icon';
var tt=document.createTextNode(text.value);
var f=document.createTextNode('X');
text.value=""

p.appendChild(tt);
icon.appendChild(f);
content.appendChild(p);
content.appendChild(icon);
container.appendChild(content);
var array=document.querySelectorAll(".content");
var ic=document.querySelectorAll(".icon")


  var i,k;
  var j;


  ic.forEach((d,x)=>{

    d.addEventListener('click',function(){
    array[x].classList.remove("active")


    })
  })









}
