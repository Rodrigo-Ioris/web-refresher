
// Select the theme button
const themeButton = document.querySelector("#theme-toggle");

// Change the theme when the button is clicked
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    if (isDark) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});
