document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    } else {
        console.error("Element(s) with ID 'hamburger-menu' or 'nav-links' not found.");
    }
});

const hamburger = document.getElementById('hamburger-menu');
        const navLinks = document.getElementById('nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

function checkScreen() {
  if (window.innerWidth < 600) {
    document.body.style.background = "#f0f0f0";
  } else {
    document.body.style.background = "#fff";
  }
}

window.addEventListener("resize", checkScreen);
checkScreen();

// document.getElementById('link-1').addEventListener('click', function() {
//     navigateToLMS();
// }
// );

// function navigateToLMS() {
//     window.location.href = "https://stanlee97.github.io/Abia-state/";
// }

