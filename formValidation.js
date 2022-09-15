function validateHTMlform()
{
  let form = document.StudenSignupForm;
   if( form.fname.value == "" )
   {
     alert( "Enter Your First Name!" );
     form.fname.focus() ;
     return;
   }
   if( form.lname.value == "" )
   {
     alert( "Enter Your Last Name!" );
     form.lname.focus() ;
     return;
   }
  
   if( form.org.value == "" )
   {
     alert( "Enter Your Father Name!" );
     form.org.focus() ;
     return;
   }
  
   if( form.title.value == "" )
   {
     alert( "Enter Your TITLE!" );
     form.title.focus() ;
     return;
   }
   if( form.rtos.value == "" )
   {
     alert( "Enter Your Relationship!" );
     form.rtos.focus() ;
     return;
   }
//    if( form.tno.value == "" )
//    {
//      alert( "Enter Your TELEPHONE NO!" );
//      form.telno.focus() ;
//      return;
//    }
   
var email = form.email.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ))
{
     alert("Enter your correct email ID")
     form.email.focus() ;
     return;
}
alert("SUCCESSFUL ")
   return( true );
}

function displayInfo(){
    var name = document.getElementById( "fname").value;
    var email = document.getElementById( "email").value;
    var rtos = document.getElementById( "rtos").value;
    document.getElementById( "info" ).innerHTML ="Displaying information";
    document.getElementById("ninfo").innerHTML = "Name:"+name + " ";
    document.getElementById("einfo").innerHTML = "Email:"+email + " ";
    document.getElementById("rinfo").innerHTML = "Rtos:"+rtos + " ";
}

