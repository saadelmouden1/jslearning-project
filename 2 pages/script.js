const jokeEl =document.getElementById("joke");
const jokeBtn=document.getElementById("jokebtn");

generateJoke()

function generateJoke(){
 const c={
   headers:{
     'accept':'application/json'

   }

 }

  fetch('https://icanhazdadjoke.com',c).then((res) => res.json())
  .then((data) => consol.log(data))


}
