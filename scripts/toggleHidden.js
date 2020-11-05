function showPrivate() {
  var pContent = document.getElementById("privateContent");
    var sButton = document.getElementById("showButton");
  if (pContent.style.display === "none") {
    pContent.style.display = "block";
      sButton.style.display = "none";
  } else {
    pContent.style.display = "none";
  }
    return true;
}