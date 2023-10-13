var theme = "1"

// 0 is dark, 1 is light



function change_theme() {
  if (theme == 0) {
    // dark theme
    document.getElementById("theme-css").setAttribute("href", "darkmode.css");
  } else {
    // light theme
    document.getElementById("theme-css").setAttribute("href", "lightmode.css");
  }
}


var theme_localstorage = localStorage.getItem("fruitbrawl-theme");

if (theme_localstorage == 0) {
  theme = 0;
} else {
  theme = 1;
}

localStorage.setItem("fruitbrawl-theme", theme);

change_theme();


function toggle_theme() {
  if (theme == 1) {
    theme = 0;
  } else {
    theme = 1;
  }
  localStorage.setItem("fruitbrawl-theme", theme)
  change_theme();
}

setTimeout( () => {
  document.getElementById("js-styling").innerHTML +=  `
.theme-button circle, .theme-button rect {
  transition-duration: 500ms;
}`;
}, 1000);