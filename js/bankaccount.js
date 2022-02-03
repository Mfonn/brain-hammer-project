/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("cardgroup-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeFormm() {
  document.getElementById("myForm").style.display = "none";
}    



// for the popup modify price box 

function myOption() {
  document.getElementById("myModify").style.display = "block";
}

function closeForm() {
  document.getElementById("myModify").style.display = "none";
}    



// for the popup payment box 

function myPayment() {
  document.getElementById("myPayment").style.display = "block";
} 

function myClose() {
  document.getElementById("myPayment").style.display = "none";
}    




