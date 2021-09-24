function talk() {
                var user = document.getElementById("userBox").value;
                document.getElementById("userBox").value = "";
                document.getElementById("chatLog").innerHTML += user+"<br>";
                if (user==1){
                  document.getElementById("chatLog").innerHTML += "سيتم تحويلك";
                 setTimeout(function(){  window.location="IT.html"; }, 2000);
}


                 else if(user==2){
                   document.getElementById("chatLog").innerHTML += "سيتم تحويلك";
                  setTimeout(function(){  window.location="ar.html"; }, 2000);
 }
 else if(user==3){
   document.getElementById("chatLog").innerHTML += "سيتم تحويلك";
  setTimeout(function(){  window.location="engineering.html"; }, 2000);
}
else if(user==4){
  document.getElementById("chatLog").innerHTML += "سيتم تحويلك";
 setTimeout(function(){  window.location="general.html"; }, 2000);
}
else if(user==5){
  document.getElementById("chatLog").innerHTML += "سيتم تحويلك";
 setTimeout(function(){  window.location="med.html"; }, 2000);
}
              };
/*moteb kasi*/
