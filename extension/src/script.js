document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('link');
  // onClick's logic below:
  link.addEventListener('click', function openTab(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block"; 
  });
});

