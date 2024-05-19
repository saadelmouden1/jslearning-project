var myValue=document.getElementById("input"),
    mySelection=document.getElementById("selection"),
    myDiv=document.getElementById("div");

mySelection.onchange=function(){
  "use strict"
 myDiv.innerHTML=myValue.value * mySelection.value;


}
