let nav = document.querySelector(".navbar");
window.onscroll = function() {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("header.scrooled");
        } else {
            nav.classList.remove("header.scrooled");
        }
    } //navlet 
navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar - collapse.Collapse");
narBar.forEach(function(a) {
    a.addEventListerner("click", function() {
        navCollapse.classList.remove("show");
    })
});