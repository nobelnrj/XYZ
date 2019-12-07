function scrollAppear(){
    var li = document.querySelectorAll('.timeline>ul>li');
    for( var i =0 ; i< li.length ; i++){
        var lipos = li[i].getBoundingClientRect().top;
        var screenpos = window.innerHeight;
    
        if( lipos < screenpos){
            li[i].classList.add('animate');
        }   
    }
}

window.addEventListener('scroll',scrollAppear);