setTimeout(hideDiv, 4000);
   function hideDiv() { "use strict";
   var vid = document.getElementById("video");  
   vid.style.display="none";
}

//------------- Hamburger Menu

var hamBurger = document.getElementById("Hamburger");
var hambP = document.getElementsByClassName("hamb");
var all = document.getElementById("alles");
var nav = document.getElementsByClassName("navigatie");
var schuin = document.getElementsByClassName("schuin");
var schuin2 = document.querySelector(".navigatie li:first-child a");

function hamburger1(){'use strict';
	hambP[0].style.transform = "rotate(45deg) translate(-5px,0px)";
	hambP[0].style.margin = "10px 8px 10px 10px";
	hambP[1].style.opacity = "0";
	hambP[1].style.margin = "10px 8px 10px 10px";
	hambP[2].style.transform = "rotate(-45deg) translate(-5px,0px)";
	hambP[2].style.margin = "10px 8px 10px 10px";
	all.style.transform = "rotateY(20deg) translate(-270px, 0%)";
	all.style.transition = "transform .8s ease";
	nav[0].style.transform = "translate(-360px, 0px)";
	schuin2.style.animation = "schuin .8s ease-out";
	
	hamBurger.removeEventListener("click", hamburger1);
	hamBurger.addEventListener("click", hamburger2);
}
function hamburger2(){'use strict';
	hambP[0].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[0].style.margin = "10px 20px 10px 10px";
	hambP[1].style.opacity = "1";
	hambP[1].style.margin = "10px 20px 10px 10px";
	hambP[2].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[2].style.margin = "10px 20px 10px 10px";
	all.style.transform = "rotateY(0deg) translate(-0px, 0%)";
	all.style.transition = "transform .8s ease";
	nav[0].style.transform = "translate(-0px, 0px)";
	
	hamBurger.removeEventListener("click", hamburger2);
	hamBurger.addEventListener("click", hamburger1);
}

hamBurger.addEventListener("click", hamburger1);

//------------- Scroll To

schuin[0].addEventListener("click", gaNaar1);
function gaNaar1(){
	window.scrollTo({
		top: 230,
		left: 0,
		behavior: "smooth"
	})
	hambP[0].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[0].style.margin = "10px 20px 10px 10px";
	hambP[1].style.opacity = "1";
	hambP[1].style.margin = "10px 20px 10px 10px";
	hambP[2].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[2].style.margin = "10px 20px 10px 10px";
	all.style.transform = "rotateY(0deg) translate(-0px, 0%)";
	all.style.transition = "transform .4s ease";
	nav[0].style.transform = "translate(-0px, 0px)";
	
	hamBurger.removeEventListener("click", hamburger2);
	hamBurger.addEventListener("click", hamburger1);
}

schuin[1].addEventListener("click", gaNaar2);
function gaNaar2(){
	window.scrollTo({
		top: 600,
		left: 0,
		behavior: "smooth"
	})
	hambP[0].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[0].style.margin = "10px 20px 10px 10px";
	hambP[1].style.opacity = "1";
	hambP[1].style.margin = "10px 20px 10px 10px";
	hambP[2].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[2].style.margin = "10px 20px 10px 10px";
	all.style.transform = "rotateY(0deg) translate(-0px, 0%)";
	all.style.transition = "transform .4s ease";
	nav[0].style.transform = "translate(-0px, 0px)";
	
	hamBurger.removeEventListener("click", hamburger2);
	hamBurger.addEventListener("click", hamburger1);
}

schuin[2].addEventListener("click", gaNaar3);
function gaNaar3(){
	window.scrollTo({
		top: 980,
		left: 0,
		behavior: "smooth"
	})
	hambP[0].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[0].style.margin = "10px 20px 10px 10px";
	hambP[1].style.opacity = "1";
	hambP[1].style.margin = "10px 20px 10px 10px";
	hambP[2].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[2].style.margin = "10px 20px 10px 10px";
	all.style.transform = "rotateY(0deg) translate(-0px, 0%)";
	all.style.transition = "transform .4s ease";
	nav[0].style.transform = "translate(-0px, 0px)";
	
	hamBurger.removeEventListener("click", hamburger2);
	hamBurger.addEventListener("click", hamburger1);
}

schuin[3].addEventListener("click", gaNaar4);
function gaNaar4(){
	window.scrollTo({
		top: 1430,
		left: 0,
		behavior: "smooth"
	})
	hambP[0].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[0].style.margin = "10px 20px 10px 10px";
	hambP[1].style.opacity = "1";
	hambP[1].style.margin = "10px 20px 10px 10px";
	hambP[2].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[2].style.margin = "10px 20px 10px 10px";
	all.style.transform = "rotateY(0deg) translate(-0px, 0%)";
	all.style.transition = "transform .4s ease";
	nav[0].style.transform = "translate(-0px, 0px)";
	
	hamBurger.removeEventListener("click", hamburger2);
	hamBurger.addEventListener("click", hamburger1);
}

schuin[4].addEventListener("click", gaNaar5);
function gaNaar5(){
	window.scrollTo({
		top: 1810,
		left: 0,
		behavior: "smooth"
	})
	hambP[0].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[0].style.margin = "10px 20px 10px 10px";
	hambP[1].style.opacity = "1";
	hambP[1].style.margin = "10px 20px 10px 10px";
	hambP[2].style.transform = "rotate(0deg) translate(0px,0px)";
	hambP[2].style.margin = "10px 20px 10px 10px";
	all.style.transform = "rotateY(0deg) translate(-0px, 0%)";
	all.style.transition = "transform .4s ease";
	nav[0].style.transform = "translate(-0px, 0px)";
	
	hamBurger.removeEventListener("click", hamburger2);
	hamBurger.addEventListener("click", hamburger1);
}

//------------- Menu Locaties

var navLoc, balk4, balk5, title;

navLoc = document.getElementsByClassName("box1");
title = document.getElementsByClassName("titel1");
title2 = document.querySelector(".titel1 h1");
balk4 = document.querySelector(".box1 ul li:nth-child(4)");
balk5 = document.querySelector(".box1 ul li:nth-child(5)");

function dropLoc(){
	navLoc[0].style.height="1970px";
	title[0].style.margin="-1965px 0px 0px 0px";
	balk4.style.order="25";
	balk4.style.transform="rotate(178.5deg)";
	balk5.style.margin="10px 0px 0px -80px";
	balk4.removeEventListener("click", dropLoc);
	balk4.addEventListener("click", dropLoc2);
	title2.addEventListener("click", dropLoc2);
}
function dropLoc2(){
	navLoc[0].style.height="400px";
	title[0].style.margin="-395px 0px 0px 0px";
	balk4.style.order="4";
	balk4.style.transform="rotate(-1.5deg)";
	balk5.style.margin="40px 0px 0px -80px";
	window.scrollTo({
		top: 90,
		left: 0,
		behavior: "smooth"
	});
	balk4.removeEventListener("click", dropLoc2);
	balk4.addEventListener("click", dropLoc);
}

balk4.addEventListener("click", dropLoc);

//------------- Menu Levels

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//------------- Menu Kaart

function menu() {
  	var x = document.getElementById("hetmenu");
	x.style.display = "block";
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	})
	x.addEventListener("click", function(){
		x.style.display = "none";
		window.scrollTo({
			top: 1450,
			left: 0,
			behavior: "smooth"
		})
	})
}

//------------- Vragen Camera

function camera() {
  alert("Mag happy italy app jouw camera gebruiken om qr codes to scannen?");
}

//------------- Verder Inlogscherm

function gaVerder() {
	var x = document.getElementById("begin-sc").style.animation="gaweg 1.5s ease";
	setTimeout(function(){document.getElementById("begin-sc").style.display="none";},1500)
}