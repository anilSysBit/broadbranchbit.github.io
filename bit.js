
  let topmenubar = document.getElementById("menubarhor");
document.getElementById('menu-top').addEventListener("click",barsOpenMenu);

function barsOpenMenu(){

  topmenubar.style.display = "block";
}

document.getElementById("cross-menubarhor").addEventListener("click",closeMenubarHor);

function closeMenubarHor(){
  topmenubar.style.display =  "none";
}

let sem1 = document.getElementById("sem1");

sem1.addEventListener("click",semister1);

function semister1(){
  window.open("onesem.html","_parent");
}

let sem2 = document.getElementById("sem2");
sem2.addEventListener("click",semister2);

function semister2(){
  open("secondsem.html","_parent");
}

function openFacebookSite(){
  window.open("https://www.facebook.com/groups/499511704582269","_blank")
}

let noSemInfo = document.querySelectorAll(".domat");

for(let i = 2; i <=noSemInfo.length; i++){
  noSemInfo[i].addEventListener("click",norAvailableInfo);
  function norAvailableInfo(){
    window.open("notAvailable.pdf","_parent");
  }
}

function Syllabus_one(){
  window.open("syallbus1.html","_parent")
}


function openSyllabus1(){
window.open("syllabusMathBit.pdf","_parent")
}