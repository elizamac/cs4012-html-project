function changeTheme() { 
    if(document.getElementById("theme_css").getAttribute("href") === "style/colors.css") {
        document.getElementById("theme_css").href = "style/colors-dark.css";
        document.getElementById("theme_icon").className = "fa-regular fa-moon";
        sessionStorage.setItem("theme", "dark");
    } else {
        document.getElementById("theme_css").href = "style/colors.css";
        document.getElementById("theme_icon").className = "fa-regular fa-sun";
        sessionStorage.setItem("theme", "light");
    }
};

function persistTheme() {
    if(document.getElementById("theme_css").getAttribute("href") === "style/colors.css" && sessionStorage.getItem("theme") === "dark") {
        document.getElementById("theme_css").href = "style/colors-dark.css";
        document.getElementById("theme_icon").className = "fa-regular fa-moon";
    }
}