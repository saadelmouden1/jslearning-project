const loveMe=document.querySelector('.loveMe');
const times=document.getElementById('times')

let clickTim=0;
let fois=0;
loveMe.addEventListener('click',(e)=>{

    if(clickTim===0){
      clickTim=new Date().getTime()
    }else{
      if((new Date().getTime()-clickTim)<800){
        createHeart(e)
         clickTim=0;

      }
      else {
        clickTim=new Date().getTime();
      }
    }


})
function createHeart(e){
  const heart=document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart')
  const x=e.clientX;
  const y=e.clientY;

  const letOffset=e.target.offsetLeft
  const topOffset=e.target.offsetTop

  const xInside=x-letOffset
  const yInside=y-topOffset
  console.log(xInside,yInside);

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  loveMe.appendChild(heart)

  setTimeout(()=>heart.remove(),500)
  times.innerHTML=++fois;

}
