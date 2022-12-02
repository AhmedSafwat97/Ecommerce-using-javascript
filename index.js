const bmenu = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const closee = document.getElementById("close");

bmenu.addEventListener("click", (eo) => {
  menu.style.width = "40%";
});

closee.addEventListener("click", (eo) => {
  menu.style.width = "0";
});

const searchbar = document.getElementById("searcbar");
const searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click", (eo) => {
  searchbar.classList.toggle("searchactive");
});

// for open nested list nav bar
const catbutton = document.getElementById("catg");
catbutton.addEventListener("click", (eo) => {
  catlist.classList.toggle("catlistactive");
});
// to remove the list from the window
window.onclick = function (show) {
  if (!show.target.matches(".cat-list")) {
    const catcontent = document.getElementsByClassName("categoeylist");
    for (let i = 0; i < catcontent.length; i++) {
      const opencatlist = catcontent[i];
      if (opencatlist.classList.contains("catlistactive")) {
        opencatlist.classList.remove("catlistactive");
      }
    }
  }
};
// for open nested list nav bar mobile
const catbuttoon = document.getElementById("catgmobile");
const catlistmob = document.getElementById("catlistm");

catbuttoon.addEventListener("click", (eo) => {
  catlistmob.classList.toggle("mobactivecatlist");
});

// ________________________________________________________________________

//  For slider banner
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider-img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}
