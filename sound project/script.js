const sounds=['p1','p2'];

console.log(sounds);

sounds.forEach(sound=>{
  const btn=document.createElement('button')
  btn.classList.add("btn");
  btn.innerText=sound;
  btn.addEventListener('click',function(){
    stop();
    document.getElementById(sound).play();


  })
  document.getElementById("buttons").appendChild(btn)
})

function stop(){
  sounds.forEach(sound=>{

      document.getElementById(sound).pause();
        document.getElementById(sound).currentTime=0;
  })


}
