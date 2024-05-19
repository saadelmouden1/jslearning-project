window.addEventListener('load',function(){

  const im=document.createElement('img')
  im.classList.add("image")
  document.querySelector(".p").appendChild(im)
  im.style.width='300px'
  im.style.height='200px'
  document.querySelector('input[type="file"]').addEventListener('change',function(){

  im.src=URL.createObjectURL(this.files[0])
/*
  var img=document.querySelector('.image');
  img.src=URL.createObjectURL(this.files[0])

*/
  })
})
