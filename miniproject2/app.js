let menuicon = document.querySelector(".part1 i");
let sidebar = document.querySelector(".sidebar");
let containers = document.querySelector(".container");
let vediolists = document.querySelectorAll(".video-list");

menuicon.addEventListener("click",function(){
    sidebar.classList.toggle("small-sidebar");
   
    containers.classList.toggle("container1");
   
    vediolists.forEach((el) => {
        el.classList.toggle("videolist");
    });
});

