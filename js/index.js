const container = document.querySelector("#container");
const navLinks = document.querySelectorAll(".nav-link");
let url = "/partials/home.html";

const loadContent = (urlFeed) => {
    fetch(urlFeed)
        .then((response) => response.text())
        .then((data) => {
            container.innerHTML = data;
        })
        .catch((error) => {
            console.error("Error fetching content: ", error);
        });
};

const selectContent = (event) => {
    event.preventDefault();
    url = event.target.href;
    loadContent(url);
    closeMobileMenu(); // Close the mobile menu after selecting a link
};

const closeMobileMenu = () => {
    const menuToggle = document.querySelector("#menu-toggle");
    if (menuToggle.checked) {
        menuToggle.checked = false;
    }
};

loadContent(url);

navLinks.forEach((link) => {
    link.addEventListener("click", selectContent);
});
