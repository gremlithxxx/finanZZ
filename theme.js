(function () {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
})();

document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("themeSwitch");
    if (!themeSwitch) return;

    const currentTheme = document.documentElement.getAttribute("data-bs-theme") || "light";
    themeSwitch.checked = currentTheme === "dark";

    themeSwitch.addEventListener("change", function () {
        const newTheme = themeSwitch.checked ? "dark" : "light";
        document.documentElement.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
});