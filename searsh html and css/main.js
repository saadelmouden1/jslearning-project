const search=document.querySelector(".search-box");
const txt=document.querySelector(".search-txt");
console.log(search);
console.log(txt);

search.addEventListener('click',function(){
  txt.classList.add("sbx")



})
search.addEventListener('dblclick',function(){
  txt.classList.remove("sbx")



})
