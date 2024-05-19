const tg=document.getElementById("tg");
const ul=document.querySelector(".list");
tg.addEventListener('click',()=>{

  ul.classList.toggle('active')
})




const blogs=document.querySelectorAll(".blog")
const read=document.querySelectorAll(".read");
const subject=document.querySelectorAll(".subject");
for (let i=0;i<read.length;i++){
  read[i].addEventListener('click',()=>{
    var a=read[i].textContent;
    if(a==="read more"){
      blogs[i].style.height="auto";
      subject[i].style.height="auto";
      read[i].textContent="less";
    }
    else{
      subject[i].style.height=35 + "px";
      read[i].textContent="read more";
      blogs[i].style.height=520 + "px";
    }

  })

}


/*blogs paragraph*/
/*
const blogs=document.querySelectorAll(".blog")
const read=document.querySelectorAll(".read");
const subject=document.querySelectorAll(".subject");
for (let i=0;i<read.length;i++){
  read[i].addEventListener('click',()=>{
    var a=read[i].textContent;
    if(a==="read more"){
      blogs[i].style.height="auto";
      subject[i].style.height="auto";
      read[i].textContent="less";
    }
    else{
      subject[i].style.height=35 + "px";
      read[i].textContent="read more";
      blogs[i].style.height=520 + "px";
    }

  })

}


/*blogs containers*/

/*
const controler=document.querySelector(".controler");
const containers=document.querySelectorAll(".blogs_container");
window.addEventListener("load", ()=>{
  for (let i=0;i<containers.length;i++){
    containers[i].style.display="none";
  }
  containers[0].style.display="block";
 containers[0].style.display="grid";
});

  for (let i=0;i<containers.length;i++){
    var newA = document.createElement("a");
    newA.classList.add("container_number");
    newA.textContent=i+1;
     controler.appendChild(newA);
  }

const containerNumber=document.querySelectorAll(".container_number");



for (let i=0;i<containerNumber.length;i++){

   containerNumber[i].addEventListener('click',()=>{

    for (let i=0;i<containers.length;i++){
      containers[i].style.display="none";
    }
    containers[i].style.display="block";
    containers[i].style.display="grid";


   })
}
*/
