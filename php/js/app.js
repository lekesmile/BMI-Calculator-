

function myfunction() {
  var paino = document.querySelectorAll("input")[0].value;
  var pitus = document.querySelectorAll("input")[1].value;

//here we convert userinput to a number with the help of Number() function.
  var painonumber = Number(paino);
  var pitusnumber = Number(pitus);

// Here is the BMI calculation
  var result = Number(painonumber / (pitusnumber * pitusnumber/ 10000));
  var statement = "Sinun BMI on ";
  var finalresult = document.querySelectorAll('p')[0].innerHTML = statement + result.toFixed(2);
  console.log(finalresult);

  // if or else statement to tell the user something about his/her BMI

  if(result < 15){
    document.querySelectorAll('p')[1].innerHTML = "Oops, you are underweight !";
  }
  else if (result < 16) {
    document.querySelectorAll('p')[1].innerHTML = "Humm, you are just underweight !";
  }
  else if (result < 18.5) {
    document.querySelectorAll('p')[1].innerHTML = "You are underweight !";
  }
  else if (result < 25) {
    document.querySelectorAll('p')[1].innerHTML = "Boom, your BMI is normal !";
  }
  else if (result < 30) {
    document.querySelectorAll('p')[1].innerHTML = "You are overweight !";
  }
  else if (result < 35) {
    document.querySelectorAll('p')[1].innerHTML = "Ok, you are littlebit overweight !";
  }
  else if (result < 40) {
    document.querySelectorAll('p')[1].innerHTML = "Oops, you are just too overweight !";
  }

  else{
    document.querySelectorAll('p')[1].innerHTML = "Please, reserve a time with your doctor";
  }

  ifempty();

}


function ifempty(){
  var paino = document.querySelectorAll("input")[0].value;
  var pitus = document.querySelectorAll("input")[1].value;
  var loadpage = document.getElementById("check");

  if((paino === "") || (pitus === "")){
    alert("Kindly, insert your weight or height");
    document.querySelectorAll('p')[1].innerHTML = "";
      document.location.reload(true);
  }
   // if (isNaN(paino.value)){
   //  alert("Please insert a number");
   //    document.location.reload(true);
   //
   //  loadpage.addEventListener('click', function () {
   //    document.location.reload(true);
   //  });

// }


}
