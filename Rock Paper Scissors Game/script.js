const content=document.querySelectorAll(".mg");
const cp=document.querySelectorAll(".hd");
const player=document.querySelector(".pl1");
const computer=document.querySelector(".pcl");
const btn=document.getElementById('button');
const p1=document.querySelector(".p1");
const c=document.querySelector(".pc");
console.log(btn);
var place;
var comp=[0,1,2];
var n;
var x=0;
var y=0;
var a=0;
var b=0;
a=localStorage.getItem("a");
  b=localStorage.getItem("b");
  p1.innerHTML=`${a}`
c.innerHTML=`${b}`
content.forEach((image,t)=>{
 image.addEventListener('click',()=>{
   addclass();
  image.classList.remove("not")
place=t;


setTimeout(()=>{
  cpchoose()
},300)




 })
})

function addclass(){
  for (var i = 0; i < content.length; i++) {
    content[i].classList.add("not")
  }
}



function cpchoose(){
  for (var i = 0; i < cp.length; i++) {
    cp[i].classList.add("not")
  }
  n=Math.floor(Math.random() * 3);

  cp[n].classList.remove("not")
  console.log(place);
  console.log(n);


  if(place===0 && n===2 || place===1 && n===0 || place===2 && n===1){
    a=localStorage.getItem("a");
    x++;
    a++;
    player.innerHTML=`${x}`
      p1.innerHTML=`${a}`
        localStorage.setItem("a",a);

  }
  if(place===2 && n===0 || place===0 && n===1 || place===1 && n===2){
    b=localStorage.getItem("b");
    y++;
    b++;
    computer.innerHTML=`${y}`
      c.innerHTML=`${b}`
          localStorage.setItem("b",b);
  }
  setTimeout(()=>{
    btn.classList.add('show');
    btn.addEventListener('click',()=>{
        btn.classList.remove('show');
        for (var i = 0; i < content.length; i++) {
          content[i].classList.remove("not");
             cp[i].classList.remove("not");
        }

    })
  },1000)



}
