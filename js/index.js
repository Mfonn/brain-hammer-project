  // for the signup modal 
  window.onload = function(){ 
    // Get the modal
    var modall = document.getElementById("myModal2");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    
    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modall.style.display = "block";
    }
    
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modall) {
        modall.style.display = "none";
      } else if (event.target == modal) {
          modal.style.display = "none"
      }
    }

    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    
    var btnn = document.getElementById("myBtnn");

    // When the user clicks on the button, open the modal
    
    btnn.onclick = function() {
      modal.style.display = "block";
    }


    }




    