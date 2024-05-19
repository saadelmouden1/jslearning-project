const canvas=document.getElementById('canvas');
const context=canvas.getContext('2d');
 const width = canvas.width=600;
 const height = canvas.height=600;
let total=0;
let tail=[];
 const rows =height/30;
 const columns= width/30;
 const snakeWidth=30;
 const snakeHeight=30;
 let snakeMoveUpOrDawn=false;
 let snakeMoveLeftOrRight=false;
 let timeOfView=0;
 let eatFood=0;

const foodWidth=30;
const foodHeight=30;





 canvas.style.marginTop=window.innerHeight/2 - height/2 + "px";


const food={
x : width/2,
y : height/2,
w : foodWidth,
h : foodHeight,
color : "green",
}


const snake={
x :0,
y : 0,
w : snakeWidth,
h : snakeHeight,
movmentPosX:0,
movmentPosY:0,
color : "blue",
}

//draw function
function draw(){
 context.clearRect(0,0,width,height)



 timeOfView+=1;

if(timeOfView%20===0){


  tail[total-1]={
    x: snake.x,
    y : snake.y,
  }
  for(let i=0;i<tail.length - 1;i++){
    tail[i]=tail[i+1]
  }
  if(snakeMoveLeftOrRight === true ){

      snake.x+=snake.movmentPosX;

  logic()

  }
  if(  snakeMoveUpOrDawn === true){

        snake.y+=snake.movmentPosY;
        console.log(snake.y-food.y );

   logic()

  }


if(snake.x > width){
  snake.x=0;
}
if(snake.y > height){
  snake.y=0;
}
if(snake.x<0){
  snake.x=width;
}
if(snake.y<0){
  snake.y=height;
}
}







  context.fillStyle=food.color;
  context.fillRect(food.x,food.y,food.w,food.h)


  context.fillStyle=snake.color;
  for(let i=0;i<tail.length ;i++){

    context.fillRect(tail[i].x,tail[i].y,snake.w,snake.h)
  }
  context.fillRect(snake.x,snake.y,snake.w,snake.h)





  requestAnimationFrame(draw);
}
//contrile function

function controle(){
document.body.addEventListener("keydown", (e)=>{
  if (e.keyCode === 37) { // left
    snake.movmentPosX=-snakeWidth;
    snakeMoveLeftOrRight=true;
    snakeMoveUpOrDawn=false;
      }
 else if (e.keyCode === 39) { // right
     snake.movmentPosX= snakeWidth;
     snakeMoveLeftOrRight=true;
     snakeMoveUpOrDawn=false;
      }
 else if (e.keyCode === 38) { // up
    snake.movmentPosY= -snakeWidth;
    snakeMoveUpOrDawn=true;
    snakeMoveLeftOrRight=false;
      }
 else if (e.keyCode === 40) { // down
    snake.movmentPosY=snakeWidth;
    snakeMoveUpOrDawn=true;
      snakeMoveLeftOrRight=false;
      }
});

}

function logic(){
  if(snake.x === food.x && snake.y === food.y){

       let x= Math.floor(Math.random() * rows-1) + 1;
        let y= Math.floor(Math.random() * columns-1) + 1;

  food.x=1*30;
  food.y=y*30;
  total+=1;
  console.log(total);

  }

}



draw();
controle();
