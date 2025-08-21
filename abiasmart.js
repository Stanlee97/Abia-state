
        function checkScreen() {
  if (window.innerWidth < 600) {
    document.body.style.background = "#f0f0f0";
  } else {
    document.body.style.background = "#fff";
  }
}

window.addEventListener("resize", checkScreen);
checkScreen();