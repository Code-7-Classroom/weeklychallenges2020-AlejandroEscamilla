var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var z;
  var y = document.getElementsByClassName("mySlides");
  if (n > y.length) {slideIndex = 1}
  if (n < 1) {slideIndex = y.length}
  for (z = 0; z < y.length; z++) {
    y[z].style.display = "none";  
  }
  y[slideIndex-1].style.display = "block";  
}

