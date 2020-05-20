var a = 0;
var homeSlides = [];
var sShowTimer = 5000;

homeSlides[0] = 'images/wide/LouboutinPool.jpg';
homeSlides[1] = 'images/wide/LouboutinLean.jpg';
homeSlides[2] = 'images/wide/Dolce.CheetahCrop.jfif';
homeSlides[3] = 'images/wide/Full_WOE_End.jpg';
function slideImg() {
  document.homeSlide.src =  homeSlides[a];
  if(a < homeSlides.length - 1){
      a++;
  }   else {
      a = 0;
  }

setTimeout("slideImg()", sShowTimer);
}

window.onload = slideImg;

//SLIDER + BUTTON MANUAL

//FILTER CLASS START (STRING)
document.getElementById("filter-button__all").click();
$("#filter-button__all").trigger('click');

filterSelection("all")
function filterSelection(c) {
  var x, i;

  x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      filterOut(x[i], "show");
    if (x[i].className.indexOf(c) > -1) filterIn(x[i], "show");
  }
}

function filterIn(element, name) {
  var i, nam, pro;

  nam = element.className.split(" ");
  pro = name.split(" ");

    for (i = 0; i < pro.length; i++) {
    if (nam.indexOf(pro[i]) == -1) {element.className += " " + pro[i];}
  }
}

function filterOut(element, name) {
  var i, nam, pro;

  nam = element.className.split(" ");
  pro = name.split(" ");

  for (i = 0; i < pro.length; i++) {
  while (nam.indexOf(pro[i]) > -1) {
    nam.splice(nam.indexOf(pro[i]), 1);     
  }
  }
  element.className = nam.join(" ");
}


//FILTER PRICE START (VALUE)