function menutoggle(){document.querySelector(".menu").classList.toggle("show")}var header=document.querySelector("header");window.onscroll=function(){50<window.pageYOffset?header.classList.add("sticky"):header.classList.remove("sticky")},window.onload=function(){document.querySelector(".hero-content").classList.add("animate")};var i,places=document.querySelectorAll(".places>li>a");for(i=0;i<places.length;i++)places[i].index=i,places[i].addEventListener("click",showList),places[i].addEventListener("mouseenter",showList);function showList(e){var t=document.querySelector(".places>li>.active"),i=document.querySelectorAll(".openings"),s=document.querySelector(".openings.active");t.classList.remove("active"),e.target.classList.add("active"),s.classList.remove("active"),i[e.target.index].classList.add("active")}function scrollAppear(){for(var e=document.querySelectorAll(".timeline>ul>li"),t=0;t<e.length;t++){e[t].getBoundingClientRect().top<window.innerHeight&&e[t].classList.add("animate")}}window.addEventListener("scroll",scrollAppear);