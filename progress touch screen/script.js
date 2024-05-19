const slider=document.querySelector('.slider-container');
const slides=Array.from(document.querySelectorAll('.slide'))
console.log(slides);

let currentTranslat=0,
startPos=0,
isDragging=false,
prevTranslate=0,
currentIndex=0;






slides.forEach((slide,index)=>{
const imagedd=slide.querySelector('img');
imagedd.addEventListener('dragstart',(e)=>e.preventDefault());

//touch events

slide.addEventListener('touchstart',touchStart(index))
slide.addEventListener('touchend',touchEnd)
slide.addEventListener('touchmove',touchMove)



//mouse events
slide.addEventListener('mousedown',touchStart(index))
slide.addEventListener('mouseup',touchEnd)
slide.addEventListener('mouseleave',touchEnd)
slide.addEventListener('mousemove',touchMove)

})


function touchStart(index){
  return function(event){

currentIndex=index;
startPos=getStartX(event)
animate();
isDragging=true


  }
}

function touchEnd(){
  isDragging=false;
  const movedBy=currentTranslat-prevTranslate;
if(movedBy <-100 && currentIndex <slides.length-1){
  currentIndex+=1;
}

if(movedBy > 100 && currentIndex >0){
  currentIndex-=1;
}
  setPositionByIndex();
}

function touchMove(index){
if(isDragging){
  const curentPosition=getStartX(event);
  currentTranslat=prevTranslate+curentPosition-startPos
}
}

function getStartX(event){
  return event.type.includes('mouse')?event.pageX:event.touches[0].clientX;
}

function animate(){
  slider.style.transform=`translateX(${currentTranslat}px)`

}
function setPositionByIndex(){
  currentTranslat=currentIndex * -window.innerWidth;
prevTranslate=currentTranslat

animate();


}
