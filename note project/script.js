const addBtn=document.getElementById('add');
const notes=JSON.parse(localStorage.getItem('notes'))
if(notes){
  notes.forEach(note=>addNewNote(note))
}

addBtn.addEventListener('click',()=>addNewNote())

function addNewNote(text=''){

  const note=document.createElement('div')
  note.classList.add('note')
  note.innerHTML=`
  <div class="tools">
    <button class="edit"> <i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${text ?"":"hidden"}"></div>
  <textarea class="${text?"hidden":""}" ></textarea>

  `
const editBtn=note.querySelector('.edit');
const deleteBtn=note.querySelector('.delete');
const main=note.querySelector('.main');
const textArea=note.querySelector('textarea');

textArea.value=text;
main.innerHTML=marked(text)
deleteBtn.addEventListener('click',()=>{
  note.remove();
})
editBtn.addEventListener('click',()=>{
  main.classList.toggle('hidden')
  textArea.classList.toggle('hidden')
})

textArea.addEventListener('input',(e)=>{
  const v=e.target.value
  main.innerHTML=marked(v)
  updateLS();
})
  document.body.appendChild(note)
}
function updateLS(){
  const notesText=document.querySelectorAll('textArea');
  const notes=[];
  notesText.forEach((note) => notes.push(note.value));
console.log(notes);
localStorage.setItem('notes',JSON.stringify(notes))

}
