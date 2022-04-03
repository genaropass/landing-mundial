// MENU HAMBURGUESA

// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');

  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);


//video al scrollear se pausa
var vids = document.getElementsByClassName('_marado'); 

for (var i = vids.length - 1; i >= 0; i--) {
	//pause all the videos by default
	vids[i].pause();
}

window.onscroll = autoplay;

function autoplay(){
    for (var i = vids.length - 1; i >= 0; i--) {
        var currentYpos = window.pageYOffset || document.documentElement.scrollTop;
		if ( currentYpos >= vids[i].offsetTop && currentYpos <= vids[i].offsetTop + vids[i].offsetHeight ) {
			vids[i].play();
		}else{
			vids[i].pause();
		}
	}
}
