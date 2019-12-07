var places = document.querySelectorAll('.places>li>a');
var i;
for(i =0 ; i< places.length ; i++){
    places[i].index = i;
    places[i].addEventListener('click',showList);
    places[i].addEventListener('mouseenter',showList);
}

function showList(e){
    var active = document.querySelector('.places>li>.active');
    var openings = document.querySelectorAll('.openings');
    var activeopen = document.querySelector('.openings.active');
    active.classList.remove('active');
    e.target.classList.add('active');
    activeopen.classList.remove('active');
    openings[e.target.index].classList.add('active');
}