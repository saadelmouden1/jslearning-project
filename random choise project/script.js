const tag=document.getElementById("tags");
const textarea=document.getElementById("textarea")



textarea.addEventListener('keyup',(e)=>{

  createTags(e.target.value)
  if(e.key==='Enter'){
    setTimeout(()=>{
    e.target.value='';

    },10)
    randum();
  }
})

function createTags(m){
  const tags=m.split(",").filter(tag=>tag!=='').map(tag=>tag.trim())

tag.innerHTML=''
tags.forEach(ta=>{
  const tagel=document.createElement('span')
  tagel.classList.add('tag')
  tagel.innerText=ta
  tag.appendChild(tagel)



})
}

function randum(){
  const time=30;
  const tt=setInterval(()=>{
    const r=rd();
  hi(r);
  setTimeout(()=>{
    uhi(r)
  },100)


},100)
  setTimeout(()=>{
clearInterval(tt)

setTimeout(()=>{
const l=rd();
hi(l);

},100)

},time*100)

}

function rd(){
  const tg=document.querySelectorAll(".tag");
  return tg[Math.floor(Math.random() * tg.length)]
}

function hi(x){
  x.classList.add("highlight")
}
function uhi(x){
  x.classList.remove("highlight")
}
