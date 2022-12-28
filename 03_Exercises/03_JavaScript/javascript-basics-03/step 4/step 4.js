
 function test(){
    var pass=document.querySelector("#password").value;
    var x=document.getElementById("password");
    var conf=document.querySelector("#confirmation").value;
    var y=document.getElementById("confirmation");
    if(pass!=conf){
        x.style.border="3px solid red";
        y.style.border="3px solid red";
    }

    }