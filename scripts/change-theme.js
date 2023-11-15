function changeTheme() { 
    if(document.getElementById("theme_css").getAttribute("href") === "style/colors.css") {
        document.getElementById("theme_css").href = "style/colors-dark.css";
        document.getElementById("theme_icon").className = "fa-regular fa-moon";
    } else {
        document.getElementById("theme_css").href = "style/colors.css";
        document.getElementById("theme_icon").className = "fa-regular fa-sun";
    }
};