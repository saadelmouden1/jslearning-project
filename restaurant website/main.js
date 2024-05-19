const icon=document.querySelector(".add");
const icon1=document.querySelector(".add2");
const list=document.querySelector(".list1");
const list2=document.querySelector(".list2");
const clr=document.querySelector(".ll").querySelectorAll("a");
const arr=document.querySelector(".b");
const a=arr.querySelectorAll("a");
const ar=document.querySelector(".cc");
const c=ar.querySelectorAll("a");
const bn=document.querySelector(".btn1")
const bn2=document.querySelector(".btn2")
const content1=document.querySelectorAll(".content2");
const ics=document.querySelectorAll(".bn1");
var index=0;
var tt=content1.length;

var ix=0;
animate_string();
/*****************************************/
/***************************************/
ics.forEach((item,x) => {
  item.addEventListener('click',function(){
    var i;
    for(i=0;i<tt;i++){
      content1[i].classList.remove("show")
    }
    for(i=0;i<tt;i++){
      ics[i].classList.remove("active")
    }

content1[x].classList.add("show")

ics[x].classList.add("active");
  })

});

/********************************************************/
/*********************************menu side****************/
/**************************************************************/
console.log(bn);
console.log(content1);
console.log(bn2);
bn2.onclick=function(){

  next("next")
}
bn.onclick=function(){

  next("prev");
}
function next(id){
  if(id==="next"){
    index++;
    if(index==tt){
      index=0;
    }
  }
  else{
    if(index==0){
      index=tt-1;
    }
    else{
      index--;
    }
  }
  var i;
  for(i=0;i<tt;i++){
    content1[i].classList.remove("show")
  }
  content1[index].classList.add("show")
  for(i=0;i<tt;i++){
    ics[i].classList.remove("active")
  }
  ics[index].classList.add("active");
}
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

function animate_string()
{
    if(ix==tt){
      ix=0;
    }
  var i;
  for(i=0;i<tt;i++){
    content1[i].classList.remove("show")
  }
  content1[ix].classList.add("show")
  for(i=0;i<tt;i++){
    ics[i].classList.remove("active")
  }
  ics[ix].classList.add("active");
ix++;
  setTimeout(animate_string,6000)
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

/*
var iex=0;
const n1=document.querySelector(".lft");
const n2=document.querySelector(".rit");
const mgs=document.querySelector(".cb").children;
const f=mgs.length;
console.log(f);
n2.onclick=function(){
  nt("nt")
}
n1.onclick=function(){
  nt("pv");
}
function nt(id){
  if(id==="nt"){
    iex++;
    if(iex==f){
      iex=0;
    }
  }
  else{
    if(iex==0){
      iex=f-1;
    }
    else{
      iex--;
    }
  }
  var i;
for(i=0;i<3;i++){
  mgs[i].classList.remove("active")
}
  mgs[iex].classList.add("active")

}
*/
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
