const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#nav-links");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");

        if (navigation.classList.contains("open")) {
            menuButton.innerHTML = "✖";
            menuButton.setAttribute("aria-expanded", "true");
        } else {
            menuButton.innerHTML = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
}

// Wayfinding (highlights current page)
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("#nav-links a").forEach(link => {
    const href = link.getAttribute("href");

    if (
        href === currentPage ||
        (currentPage === "" && href === "index.html")
    ) {
        link.classList.add("active");
    }
});