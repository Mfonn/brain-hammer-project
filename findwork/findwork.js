function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "headersection") {
      x.className += " responsive";
    } else {
      x.className = "headersection";
    }
  }