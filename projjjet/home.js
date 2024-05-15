document.addEventListener('DOMContentLoaded', function () {
    const lipstickItems = document.querySelectorAll('.lipstick-item');
  
    function showLipsticks() {
      lipstickItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 300); // Change the delay time as needed
      });
    }
  
    showLipsticks();
  });
  const mobileNav = document.getElementById("mobile-navbar");
const menuIcon = document.getElementById("menu-icon");
const app = document.getElementById("app");
const modeBtn = document.getElementById("mode-btn");
const searchBar = document.getElementsByClassName("search-bar");
let chooseIcon = false;
let lightMode = true;


function handleNavMenu() {
    chooseIcon = !chooseIcon;
    if (chooseIcon) {
        mobileNav.style.display = "block";
        menuIcon.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        mobileNav.style.animation = "scrollDown .3s ease-in";
    }
    else {
        mobileNav.style.display = "none";
        menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
}
window.addEventListener("resize", () => {
    responsive(window.innerWidth);
});

function changeMode() {
    const searchBar = document.getElementById("search-bar");
    const rootStyles = document.documentElement.style;
    lightMode = !lightMode;
    if (lightMode) {
        app.style.backgroundColor = "#fff";
        modeBtn.style.backgroundColor = "#2D2D30";
        rootStyles.setProperty("--primary-color", "#e3026f");
        rootStyles.setProperty("--text-color", "#333"); 
        searchBar.style.border = "solid 3px var(--secondary-color)";
        modalBox.style.backgroundColor = "#fff";
    }
    else {
        app.style.backgroundColor = "#2D2D30";
        modeBtn.style.backgroundColor = "#fff";
        rootStyles.setProperty("--primary-color", "#e3026f");
        rootStyles.setProperty("--text-color", "#fff");
        searchBar.style.border = "solid 3px var(--white-color)";
        modalBox.style.backgroundColor = "var(--dark-color)";
        overlay.style.opacity = "0.4";
    }
}
document.querySelector('a[href="#footer"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
});

  