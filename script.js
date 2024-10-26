var typed = new Typed(".auto-type", {
  strings: [
    "Data Scientist",
    "Web Developer",
    "Python Developer",
    "Java Developer",
    "Anime Lover",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
var typed = new Typed(".auto-type-1", {
  strings: [
    "Data Scientist",
    "Web Developer",
    "Python Developer",
    "Java Developer",
    "Anime Lover",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
 //refresh


//responsive humburger
const burger = document.querySelector(".burger");
const sideber = document.querySelector(".sideber");
const hide = document.querySelector(".hide");
burger.addEventListener("click", () => {
  sideber.style.display = "flex";
  burger.style.display = "none";
  hide.style.display = "block";
});

hide.addEventListener("click", () => {
  sideber.style.display = "none";
  burger.style.display = "block";
  hide.style.display = "none";
  setTimeout(() => {
    const sideber = document.querySelector(".sideber");
    sideber.style.display = "none";
    const hide = document.querySelector(".hide");
    hide.style.display="none";
    const burger = document.querySelector(".burger");
    burger.style.display="block";
  }, 5000);
});
//circle skill
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    let percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent);
});
