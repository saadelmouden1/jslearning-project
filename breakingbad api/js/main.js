const inpSearch=document.getElementById('#inp-search');
const output=document.getElementById('output');

window.addEventListener('load',() => {

  fetchCharacters();
})

inpSearch.addEventListener('change',() => {

  let searchQuery=inpSearch.value;
  fetchCharacters(searchQuery);
})

async function fetchCharacters(query){

let res;

if(query){
  res= await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`);

}else{

  res=await fetch(`https://www.breakingbadapi.com/api/characters`)
}

  let results = await res.json();


  results.map(result => {
    const htmlString = `<img src="${result.img}" class="img">
        <div class="info-display">
            <h5>Name: ${result.portrayed}</h5>
            <hr>
            <h6>Actor Name: <span>${result.name}</span></h6>
            <h6>Nickname: <span>${result.nickname}</span></h6>
            <h6>Birthday: <span>${result.birthday}</span></h6>
            <h6>Status: <span>${result.status}</span></h6>
        </div>`;

   let outputString=document.createElement('div');
   outputString.classList.add('col-md-3','mb-3','img-info');
   outputString.innerHTML=htmlString;
   output.appendChild(outputString)

  })
}
