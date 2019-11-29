function menutoggle(){
    document.querySelector('.menu').classList.toggle('show');
}

var header = document.querySelector('header');

window.onscroll = function(){
	window.pageYOffset > 50 ? header.classList.add('sticky') : header.classList.remove('sticky');
}