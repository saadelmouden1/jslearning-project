const container=document.getElementById("container");
const colors=['#ebd215','#eb4715','#32eb15','#158eeb','#1519eb','#a715eb','#eb15b2','#eb152a'];
const SQUARE=500;
for(let i=0;i<SQUARE;i++){
  const square =document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover',()=>setColor(square));
    square.addEventListener('mouseover',()=>removeColor(square))
  container.appendChild(square);
}
