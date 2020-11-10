function showPrivate() {
    
    
    var pContent = document.getElementById("privateContent");
    var ageForm = document.getElementById("ageVerify");
  if (document.getElementById("over21").checked) {
    pContent.style.display = "block";
      ageForm.style.display ="none";
  } else {
    document.getElementById("demo").innerHTML= "Sorry, you must be 21 to enter!";
      return false;
  }
    return true;
}