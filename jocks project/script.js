const jokeEl =document.getElementById("joke");
const jokeBtn=document.getElementById("jokebtn");
jokebtn.addEventListener('click',generateJoke)

generateJoke()

function generateJoke(){
 const c={
   headers:{
     'accept':'application/json'

   }

 }

  fetch('https://icanhazdadjoke.com',c).then((res) => res.json())
  .then((data) => {jokeEl.innerHTML=data.joke})


}
