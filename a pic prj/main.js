const imgs=document.querySelector(".picturs").children;
const cnt=document.querySelector(".content").children;
console.log(imgs);
console.log(cnt);

var i;

var p=imgs.length;
function rmv(){
  for(i=0;i<p;i++){
      imgs[i].classList.remove("active")
  }
}

for(i=0;i<p;i++){
  imgs[i].onclick=function add(){
    console.log(this.src);
      cnt[0].src=this.src;
       rmv()
      this.classList.add("active")
    
  }
}

/*
imgs[1].addEventListener('click',function(){

  cnt[0].src=imgs[1].src;
})
imgs[0].addEventListener('click',function(){

  cnt[0].src=imgs[0].src;
})
imgs[2].addEventListener('click',function(){

  cnt[0].src=imgs[2].src;
})

/*
for(i=0;i<imgs.length;i++){
  imgs[i].addEventListener('click',function(){
    var x=imgs[i].src;
    console.log(x);
  })
}
*/
