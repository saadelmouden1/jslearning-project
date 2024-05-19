
function convert(){
    "use strict";


    var amount=document.getElementById("dollar").value;
    var massage=document.getElementById("result");

    if(amount==="")
    {

    massage.innerHTML="this field can't be empty";

    }

  else if (isNaN(amount)) {
      massage.innerHTML="this field accept only a numbers";
  }
else{
      massage.innerHTML=amount*3.75;
    }


}
