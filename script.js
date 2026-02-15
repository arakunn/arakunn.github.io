const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
const headerText = document.querySelector('.parallax h1');

// typing header
const typeText = "arakunn";
let index = 0;
headerText.textContent = "";
function typeHeader() {
    if(index < typeText.length){
        headerText.textContent += typeText.charAt(index);
        index++;
        setTimeout(typeHeader, 100);
    }
}
typeHeader();

// tab switching
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if(tab.classList.contains('active')) return;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        panels.forEach(panel => panel.classList.remove('active'));
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// simple translation mapping
const translations = {
    en: {
        "arakunn": "arakunn",
        "home": "home",
        "current and past projects": "current and past projects",
        "social": "social",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.": "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.",
        "projects": "projects",
        "obviously, i have this website as a project, but i am working on some other things": "obviously, i have this website as a project, but i am working on some other things",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.": "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.": "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.",
        "you can find me on:": "you can find me on:"
    },
    es: {
        "arakunn": "arakunn",
        "home": "inicio",
        "current and past projects": "proyectos actuales y pasados",
        "social": "social",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.": "¡hola! bienvenido a mi sitio web. esto es un proyecto de pasión y una prueba de lo que puedo hacer con html, css y javascript. el sitio está bastante básico por ahora, pero eso cambiará con el tiempo.",
        "projects": "proyectos",
        "obviously, i have this website as a project, but i am working on some other things": "obviamente, tengo este sitio web como proyecto, pero estoy trabajando en otras cosas",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.": "en mayo/junio de 2025, construí una computadora y la llamé Project ARISE. es mi PC actual hasta hoy.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.": "tiene un 9070 xt, 9600x y 32gb de RAM ddr5. está alojado en la caja Montech King 95 Pro.",
        "you can find me on:": "puedes encontrarme en:"
    }
    // Add more languages here
};

// apply translation
const selectLang = document.getElementById('langSelect');
selectLang.addEventListener('change', () => {
    const lang = selectLang.value;
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.textContent.trim();
        if(translations[lang] && translations[lang][key]){
            el.textContent = translations[lang][key];
        }
    });
});
