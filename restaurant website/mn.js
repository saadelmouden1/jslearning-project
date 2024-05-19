const icon=document.querySelector(".add");
const icon1=document.querySelector(".add2");
const list=document.querySelector(".list1");
const list2=document.querySelector(".list2");
const clr=document.querySelector(".ll").querySelectorAll("a");















/*************************************************************/
/*********************header side***************************/
/**************************************************************/
icon.addEventListener('click',function(){
  list2.classList.remove("show")
  list.classList.toggle("show")
})
icon1.addEventListener('click',function(){
  list.classList.remove("show")
  list2.classList.toggle("show")
})

clr.forEach((item) => {
  item.addEventListener('click',function(){
removeActive();
item.classList.add("active");
remov();

  })

});


function removeActive(){
  var i;
  for(i=0;i<clr.length;i++){
    clr[i].classList.remove("active");
  }
}
function remov(){
  var i;
  for(i=0;i<a.length;i++){
    a[i].classList.remove("active");
  }
  for(i=0;i<c.length;i++){
    c[i].classList.remove("active");
  }
}

/*************************************************************/
/********************scroll ***************************/
/**************************************************************/



const link=document.querySelector(".link");
window.addEventListener('scroll',showIcon)
showIcon()
function showIcon(){


  const top=link.getBoundingClientRect().top
  if(window.pageYOffset>100){
    link.classList.add("act")
  }
else {
    link.classList.remove("act")
}
}
/***************************************************************/
/********************************Gallery***************************/
/////////////////////////***********************//////////////////////

const n1=document.querySelector(".lft");
const n2=document.querySelector(".rit");
const mgs=document.querySelector(".cb")
const numimg=document.querySelectorAll(".mgs").length
const ee=document.querySelectorAll(".ee")
console.log(numimg);
console.log(mgs);
console.log(ee);
let imgidx=1;
let tlet=900;
ee.forEach(botn=>{
  botn.addEventListener('click', (event) =>{
    if(event.target.id==='right'){


      if(imgidx!==numimg){
         imgidx++;
         tlet-=900;
      }

    }
    else{


      if(imgidx!==1){
         imgidx--;
         tlet+=900;
      }

    }



    mgs.style.transform =`translateX(${tlet}px)`;
  })


})
let xx=1;
let yy=900;


function animat(){
  mgs.style.transform =`translateX(${yy}px)`;
  if(xx==numimg){
    xx=1
    yy+=900
  }

  else if(xx!==numimg){
     xx++;
     yy-=900;
  }




setTimeout(animat,6000)
}

/***************************************************************/
/********************************list menu***************************/
/////////////////////////***********************//////////////////////
const listMenu=document.querySelectorAll(".listmn")
const items=document.querySelectorAll(".item")
console.log(listMenu);
console.log(items);
var l,j,k;
for(i=0;i<listMenu.length;i++){
listMenu[i].addEventListener('click',function(){
for(j=0;j<listMenu.length;j++){
  listMenu[j].classList.remove("active")
}
   this.classList.add("active")
    var f=this.getAttribute('data-filter')

    for(k=0;k<items.length;k++){
      items[k].classList.add("hide");
      if(items[k].getAttribute('data-item')==f||f=="all")
      {
         items[k].classList.remove("hide");
      }
    }
})

}

/*****************************************/
/***************************************/
