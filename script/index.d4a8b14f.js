const wrapper = document.querySelector(".wrapper");
const themeToggler = document.querySelectorAll(".theme-toggler");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const body = document.body;
const heroImg = document.querySelector(".hero--img");
const menuLinks = document.querySelector(".menu-links");
const links = document.querySelectorAll("a");
const overlay = document.querySelector(".overlay");
/*Mobile menu components*/ const mobileMenuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile--menu");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const resizeObserver = new ResizeObserver((entry) => {
    if (entry[0].contentRect.width >= 960) heroImg.setAttribute("src", "./img/image-hero-desktop.d267715a.png");
    else heroImg.setAttribute("src", "./img/image-hero-mobile.40110e5d.png");
});
resizeObserver.observe(document.body);
document.querySelector("html").style.height = `${window.innerHeight}px`;
addEventListener("resize", () => {
    document.querySelector("html").style.height = `${window.innerHeight}px`;
});
links.forEach((el) => el.addEventListener("click", (e) => e.preventDefault()));
const themeToggle = function () {
    if (body.classList.contains("dark-theme")) {
        moon.classList.add("invisible");
        sun.classList.remove("invisible");
    } else {
        moon.classList.remove("invisible");
        sun.classList.add("invisible");
    }
};
const showMobileMenu = function () {
    mobileMenu.classList.add("visible");
    overlay.classList.remove("invisible");
};
const hideMobileMenu = function () {
    mobileMenu.classList.remove("visible");
    overlay.classList.add("invisible");
};
const expandMenu = function (el) {
    const arrowIcon = el.target.parentElement.querySelector("img");
    const nextSibling = el.target.closest("div").nextElementSibling;
    const condition = el.target.closest("div").classList.contains("expand-menu--link");
    if (condition) {
        arrowIcon.style.transform = "rotate(180deg)";
        nextSibling.classList.toggle("collapsed");
    }
    if (nextSibling.classList.contains("collapsed")) arrowIcon.style.transform = "rotate(0deg)";
};
themeToggler.forEach((el) => el.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    themeToggle();
}));
mobileMenuIcon.addEventListener("click", showMobileMenu);
closeMenuIcon.addEventListener("click", hideMobileMenu);
menuLinks.addEventListener("click", expandMenu.bind(this));
const desktopExpandMenu = document.querySelectorAll(".desktop-expand--menu");
desktopExpandMenu.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (e.target.classList.contains("interact")) {
            el.querySelector(".expanded--menu").classList.toggle("visible");
            el.querySelector(".arrow-down").style.transform = "rotate(180deg)";
        }
        if (!el.querySelector(".expanded--menu").classList.contains("visible")) {
            el.querySelector(".arrow-down").style.transform = "rotate(0deg)"
        }
    });
});

//# sourceMappingURL=index.d4a8b14f.js.map
