let dom = document.querySelector("body");
var navbar = document.getElementsByClassName("main-header");
window.onscroll = () => { myFunction();};

function myFunction(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var scrollPosition = window.innerHeight;

	if(scrollTop > 10) {
		navbar[0].classList.add("navbar-scrolled");
	} else {
		navbar[0].classList.remove("navbar-scrolled");
	}
}