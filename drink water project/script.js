const smallCups=document.querySelectorAll(".cup-small");
const listers=document.getElementById("liters")
const percentage=document.getElementById("percentage")
const remained =document.getElementById("remained")

udte();
smallCups.forEach((cup,idx)=>{
  cup.addEventListener('click',()=>hlcups(idx))
})
function hlcups(i){

  if(smallCups[i].classList.contains("full") && !smallCups[i].nextElementSibling.classList.contains("full"))
  {
    i--;
  }
  smallCups.forEach( (cu, idx2) => {
    if(idx2 <= i){
      cu.classList.add("full")
    }
    else {
      cu.classList.remove("full")
    }

  });
  udte();

}

function udte(){
const fulcups=document.querySelectorAll(".cup-small.full").length

const total=smallCups.length
if(fulcups===0){
  percentage.style.visibility='hidden'
  percentage.style.height=0

}
else{
    percentage.style.visibility='visible'
    percentage.style.height=`${fulcups/total*330}px`

  percentage.innerText=`${fulcups/total*100}%`
}
if(fulcups===total){
    remained.style.visibility='hidden'
    remained.style.height=0;

}
else{
  remained.style.visibility='visible'
  listers.innerText=`${2-(250*fulcups/1000)}L`

}

}
