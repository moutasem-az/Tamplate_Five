let x = document.querySelector(".header .toggel-minu");
let y = document.querySelector(".header .navbar");
// Start header 
x.onclick = function () {
    x.classList.toggle("show");
    y.classList.toggle("show");
}
// End header 