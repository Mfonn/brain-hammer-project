function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "headersection") {
      x.className += " responsive";
    } else {
      x.className = "headersection";
    }
  }


  // for the checkboxes in the dropdown menu 
  function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }