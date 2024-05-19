const panels=document.querySelectorAll('.panel');
console.log(panels);

panels.forEach((x) => {
  x.addEventListener('click',function (){

   removePanel();

    x.classList.add('active')
  })

});

function removePanel(){

  panels.forEach((dd) => {
      dd.classList.remove('active')
  });
}
