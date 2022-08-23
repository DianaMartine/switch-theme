function switchTheme() {
    let stylesheet = document.querySelector("#theme-style");
    let defaultStyle = "/style-default.css";
    let darkStyle = "/style-dark.css";
    let mode = document.querySelector(".mode");

    stylesheet.getAttribute('href') == defaultStyle ? mode.textContent = 'dark-mode': mode.textContent = 'light-mode'

    stylesheet.setAttribute("href", stylesheet.getAttribute("href") == defaultStyle ? darkStyle : defaultStyle)
}