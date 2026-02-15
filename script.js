// header typing
const headerText = document.querySelector('.parallax h1');
const typeText = "arakunn";
let index = 0;
headerText.textContent = "";
function typeHeader() {
    if(index < typeText.length){
        headerText.textContent += typeText.charAt(index);
        index++;
        setTimeout(typeHeader,100);
    }
}
typeHeader();

// tabs
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        if(tab.classList.contains('active')) return;
        tabs.forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');
        panels.forEach(p=>p.classList.remove('active'));
        const next = document.getElementById(tab.dataset.tab);
        next.classList.add('active');
    });
});

// scroll reveal
function revealOnScroll(){
    panels.forEach(panel=>{
        if(panel.classList.contains('active')) return;
        const top = panel.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight-50){
            panel.style.opacity=1;
            panel.style.transform="translateY(0)";
        } else {
            panel.style.opacity=0;
            panel.style.transform="translateY(20px)";
        }
    });
}
window.addEventListener('scroll',revealOnScroll);
window.addEventListener('load',revealOnScroll);

// translations
const translations = {
    es: { "arakunn":"arakunn","home":"inicio","current and past projects":"proyectos actuales y anteriores","social":"social","hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"¡hola! bienvenido a mi sitio web. esto es puramente un proyecto de pasión y una prueba de lo que puedo hacer con html, css y javascript. el sitio es bastante básico por ahora, pero eso cambiará con el tiempo.","projects":"proyectos","obviously, i have this website as a project, but i am working on some other things":"obviamente, tengo este sitio web como proyecto, pero estoy trabajando en otras cosas","in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"en mayo/junio de 2025, construí una computadora y la llamé Proyecto ARISE. es mi PC actual hasta el día de hoy.","it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"tiene un 9070 xt, 9600x y 32gb de ram ddr5. está alojado en la caja montech king 95 pro.","you can find me on:":"puedes encontrarme en:"},
    fr: { "arakunn":"arakunn","home":"accueil","current and past projects":"projets actuels et passés","social":"social","hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"salut! bienvenue sur mon site web. c'est purement un projet de passion et un test de ce que je peux faire avec html, css et javascript. le site est assez basique pour le moment, mais cela changera avec le temps.","projects":"projets","obviously, i have this website as a project, but i am working on some other things":"évidemment, j'ai ce site web comme projet, mais je travaille sur d'autres choses","in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"en mai/juin 2025, j'ai construit un ordinateur et l'ai appelé Project ARISE. c'est mon PC actuel à ce jour.","it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"il a un 9070 xt, 9600x et 32 Go de RAM ddr5. Il est logé dans le boîtier montech king 95 pro.","you can find me on:":"vous pouvez me trouver sur:"},
    de: { "arakunn":"arakunn","home":"startseite","current and past projects":"aktuelle und vergangene projekte","social":"social","hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"hallo! willkommen auf meiner website. dies ist ein reines leidenschaftsprojekt und ein test, was ich mit html, css und javascript machen kann. die seite ist derzeit recht einfach, aber das wird sich ändern.","projects":"projekte","obviously, i have this website as a project, but i am working on some other things":"offensichtlich habe ich diese website als projekt, aber ich arbeite an anderen dingen","in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"im mai/juni 2025 baute ich einen computer und nannte ihn Project ARISE. es ist mein aktueller PC bis heute.","it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"es hat einen 9070 xt, 9600x und 32gb ddr5 ram. es befindet sich im montech king 95 pro gehäuse.","you can find me on:":"du kannst mich finden unter:"},
    it: { "arakunn":"arakunn","home":"casa","current and past projects":"progetti passati e attuali","social":"social","hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"ciao! benvenuto sul mio sito. questo è puramente un progetto di passione e un test di ciò che posso fare con html, css e javascript. il sito è abbastanza basilare per ora, ma cambierà con il tempo.","projects":"progetti","obviously, i have this website as a project, but i am working on some other things":"ovviamente, ho questo sito come progetto, ma sto lavorando ad altre cose","in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"a maggio/giugno 2025, ho costruito un computer e l'ho chiamato Project ARISE. è il mio PC attuale fino ad oggi.","it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"ha un 9070 xt, 9600x e 32gb di ram ddr5. è ospitato nel case montech king 95 pro.","you can find me on:":"puoi trovarmi su:"},
    ja: { "arakunn":"アラクン","home":"ホーム","current and past projects":"過去と現在のプロジェクト","social":"ソーシャル","hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"こんにちは！私のウェブサイトへようこそ。これは純粋に趣味のプロジェクトで、HTML、CSS、JavaScriptでできることのテストです。現在はかなり簡素ですが、今後変わっていきます。","projects":"プロジェクト","obviously, i have this website as a project, but i am working on some other things":"もちろん、このウェブサイトをプロジェクトとして持っていますが、他のことにも取り組んでいます","in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"2025年5月/6月にコンピューターを作り、Project ARISEと名付けました。現在も使用中です。","it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"それには9070 xt、9600x、32GBのDDR5 RAMが搭載され、Montech King 95 Proケースに収められています。","you can find me on:":"見つけることができます:"},
    zh: { "arakunn":"阿拉昆","home":"首页","current and past projects":"当前和过去的项目","social":"社交","hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"你好！欢迎来到我的网站。这纯粹是一个兴趣项目，也是我用HTML、CSS和JavaScript测试的内容。现在网站相当简陋，但随着时间会改变。","projects":"项目","obviously, i have this website as a project, but i am working on some other things":"显然，我有这个网站作为一个项目，但我也在做其他事情","in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"在2025年5/6月，我组装了一台电脑，并命名为Project ARISE。它至今仍在使用。","it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"它有一块9070 xt、9600x和32GB DDR5内存，安装在Montech King 95 Pro机箱中。","you can find me on:":"你可以在:"}
};

// handle language change
const langSelect = document.getElementById('langSelect');
langSelect.addEventListener('change', ()=>{
    const lang = langSelect.value;
    document.querySelectorAll('[data-translate]').forEach(el=>{
        const key = el.textContent.trim();
        if(translations[lang] && translations[lang][key]){
            el.textContent = translations[lang][key];
        }
    });
});

// visitor counter using LocalStorage
function updateVisitorCounter(){
    let count = localStorage.getItem('visitor-count');
    if(!count){ count = 0; }
    count = parseInt(count)+1;
    localStorage.setItem('visitor-count',count);
    let counterEl = document.getElementById('visitor-counter');
    if(!counterEl){
        counterEl = document.createElement('div');
        counterEl.id = 'visitor-counter';
        document.body.appendChild(counterEl);
    }
    counterEl.textContent = `Visitors: ${count}`;
}
updateVisitorCounter();
