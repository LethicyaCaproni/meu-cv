```javascript
// =========================================
// MENU MOBILE
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Fecha o menu depois de clicar em um link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =========================================
// TEMA CLARO / ESCURO
// =========================================

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// Mantém o tema escolhido

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}


// =========================================
// ANO AUTOMÁTICO NO RODAPÉ
// =========================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
```
