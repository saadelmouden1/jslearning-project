const datePicker=document.querySelector(".date-picker")
const selectDate=document.querySelector(".date-picker .select-date")
const dateElement=document.querySelector(".date-picker .date")
const mthElement=document.querySelector(".date-picker .date .month .mth")
const next_mth_element=document.querySelector(".date-picker .date .month .next")
const prev_mth_element=document.querySelector(".date-picker .date .month .prev")
const daysElement=document.querySelector(".date-picker .date .days")


const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let date=new Date();
let day= date.getDate();
let month =date.getMonth();
console.log(month);
let year=date.getFullYear();

let selectedDate;
let selectedDay;
let selectedMonth;
let selectedYear;
mthElement.textContent=months[month]+' '+year;



popularDay();
//next month evenet
next_mth_element.addEventListener('click',nextMonth);
//prev month event
prev_mth_element.addEventListener('click',prevMonth);



//prev month function
function prevMonth(){
  month--;
  if(month<0){
    month=11;
    year--;
  }
  mthElement.textContent=months[month]+' '+year;
popularDay();
}

//next month function
function nextMonth(){
  month++;
  if(month>11){
    month=0;
    year++;
  }
mthElement.textContent=months[month]+' '+year;
popularDay();
}

//Event date
selectDate.addEventListener('click',toggleDatePicker);

//dateElement function
function toggleDatePicker(){
  dateElement.classList.toggle("active")
}

//day function

function popularDay(){
  daysElement.innerHTML='';
  let amm=31;


  if(month==1){
    amm=28;
  }

  for(let i=0;i<amm;i++){
    const day_Element=document.createElement('div');
    day_Element.classList.add('day');
    day_Element.textContent=i+1;

    day_Element.addEventListener('click',function(){
      for(let i=0;i<amm;i++){
          daysElement.children[i].classList.remove('selected');
      }
      day_Element.classList.add('selected');

      selectedDay=i+1;
      selectedMonth=months[month];
      selectedYear=year;
      selectedDate=selectedDay+' '+selectedMonth+','+selectedYear;
        selectDate.value=selectedDate;
    })

    daysElement.appendChild(day_Element);

  }


}













/***************************scroll*************/
////////////////////////////////////////////////
const times_element=document.querySelector(".time-list .times")
const box=document.querySelector(".time-list .time-box")
const time=document.querySelector(".time-list .times .time")


var hour=12;
var min=000;
var h=[];
  var j=0;

function hours(){
  for(let i=0;i<50;i++){
   if(min==0 ){
       h[j]=hour+":"+min+"0";
   }
   else if(min!=0){
       h[j]=hour+":"+min;
   }

    min+=35
    if(min==70)
    {
      min=00;
    }

    if(min==00)
    {
      if( hour>11)
      {
          hour=0
      }

      hour++;
    }
   j++;
  }

  for (var i = 0; i < h.length; i++){
    var element=document.createElement('div');
   element.classList.add('tm');
   element.textContent=h[i];




time.appendChild(element);

  }
  var g= document.querySelectorAll(".tm");
console.log(g);
g.forEach((d,t)=>{
    d.addEventListener('click',function(){
      for(let i=0;i<h.length;i++){
        g[i].classList.remove("a")
      }
      d.classList.add("a")

     box.value=d.textContent;

    })

  })

}
for (var i = 0; i < h.length; i++) {
  console.log(h[i]);
}


console.log("hhh");

function elements(){
  for (var i = 0; i <48; i++){
    var element=document.createElement('div');
   element.classList.add('tm');
   element.textContent=h[i];



   element.addEventListener('click',function(){

     element.classList.add('a');
     box.value=element.textContent

   })
time.appendChild(element);

  }

}
box.addEventListener('click',function(){
  dateElement.classList.remove("active")
  times_element.classList.toggle("active")

  hours();

})
