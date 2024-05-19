const ul=document.querySelector("ul")
const images=document.querySelectorAll("img")
numbers=images.length;
number=1;


function addNumbers(numbers,number){
let lists='';
let befNum=number-1;
let aftNum=number+1;
let active='';
if(number>1){
  lists+=` <li class="btn prev" onclick="addNumbers(${numbers},${number-1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
}
if(number>2){
  lists+=` <li class="num" onclick="addNumbers(${numbers},${1})"><span>1</span></li>`
  if(number>3){
      lists+=`<li class="dot"><span>...</span></li>`
  }

}

for (var i = befNum; i <=aftNum; i++) {

if(i==0){
  i=i+1;
}
if(i>numbers){
  continue;
}

if(i===number){
  active='active';
}
else {
  active='';
}
  lists+=`<li class="num ${active} " onclick="addNumbers(${numbers},${i})"><span>${i}</span></li>`
}
if(number<numbers-1){
  if(number<numbers-2){
      lists+=`<li class="dot"><span>...</span></li>`
  }
  lists+=` <li class="num" onclick="addNumbers(${numbers},${numbers})"><span>${numbers}</span></li>`


}

if(number<numbers){
  lists+=`<li class="btn next" onclick="addNumbers(${numbers},${number+1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`
}

images.forEach((img)=>{
  for (var i = 0; i < images.length; i++) {
    img.classList.add("active");
  }
  images[number-1].classList.remove("active");

})


ul.innerHTML=lists;
}
addNumbers(numbers,number);
