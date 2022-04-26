
let dom = document.querySelector("body");
var navbar = document.getElementsByClassName("main-header");
let socialLogo = document.querySelectorAll(".logo-header");

window.onscroll = () => { myFunction();};

function myFunction(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var scrollPosition = window.innerHeight;

	if(scrollTop > 200) {
		navbar[0].classList.add("navbar-scrolled");
	} else {
		navbar[0].classList.remove("navbar-scrolled");
	}
}


const images = [
	"./images/b1.jpg",
	"./images/tm11.jpg",
	"./images/tm111.jpg",
	"./images/tm22.jpg",
	"./images/tm222.jpg",
	"./images/tm33.jpg",
	"./images/tm333.jpg",
	"./images/tm44.jpg",
	"./images/tm55.jpg",
];

const carousal = document.querySelector(".carousal-item");
const interval = setInterval(function(){ startCarousal();}, 4000);
var index = 1;

function startCarousal() {
	carousal.style.backgroundImage = `url(${images[index++]})`;
	carousal.classList.remove("fade");
	void carousal.offsetWidth;
	carousal.classList.add("fade");
	if(index > images.length - 1) index = 0;
}