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

// translation mapping
const translations = {
    en: {
        "arakunn":"arakunn","home":"home","current and past projects":"current and past projects","social":"social",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.",
        "projects":"projects","obviously, i have this website as a project, but i am working on some other things":"obviously, i have this website as a project, but i am working on some other things",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.",
        "you can find me on:":"you can find me on:"
    },
    es: {
        "arakunn":"arakunn","home":"inicio","current and past projects":"proyectos actuales y pasados","social":"social",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"¡hola! bienvenido a mi sitio web. esto es un proyecto de pasión y una prueba de lo que puedo hacer con html, css y javascript. el sitio está bastante básico por ahora, pero eso cambiará con el tiempo.",
        "projects":"proyectos","obviously, i have this website as a project, but i am working on some other things":"obviamente, tengo este sitio web como proyecto, pero estoy trabajando en otras cosas",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"en mayo/junio de 2025, construí una computadora y la llamé Project ARISE. es mi PC actual hasta hoy.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"tiene un 9070 xt, 9600x y 32gb de RAM ddr5. está alojado en la caja Montech King 95 Pro.",
        "you can find me on:":"puedes encontrarme en:"
    },
    fr: {
        "arakunn":"arakunn","home":"accueil","current and past projects":"projets passés et actuels","social":"social",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"salut ! bienvenue sur mon site. c'est un projet passion et un test de ce que je peux faire avec html, css et javascript. le site est assez basique pour l'instant, mais cela changera avec le temps.",
        "projects":"projets","obviously, i have this website as a project, but i am working on some other things":"évidemment, j'ai ce site comme projet, mais je travaille sur d'autres choses",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"en mai/juin 2025, j'ai construit un ordinateur et l'ai appelé Project ARISE. c'est mon PC actuel à ce jour.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"il a un 9070 xt, 9600x et 32 Go de RAM ddr5. il est logé dans le boîtier Montech King 95 Pro.",
        "you can find me on:":"vous pouvez me trouver sur :"
    },
    de: {
        "arakunn":"arakunn","home":"startseite","current and past projects":"aktuelle und vergangene projekte","social":"sozial",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"hallo! willkommen auf meiner website. dies ist ein rein leidenschaftliches projekt und ein test dessen, was ich mit html, css und javascript machen kann. die seite ist derzeit recht einfach, wird sich aber mit der zeit ändern.",
        "projects":"projekte","obviously, i have this website as a project, but i am working on some other things":"offensichtlich habe ich diese website als projekt, arbeite aber an anderen dingen",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"im mai/juni 2025 habe ich einen computer gebaut und Project ARISE genannt. es ist bis heute mein aktueller pc.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"er hat eine 9070 xt, 9600x und 32gb ddr5 ram. er ist im montech king 95 pro gehäuse untergebracht.",
        "you can find me on:":"du kannst mich finden auf:"
    },
    zh: {
        "arakunn":"arakunn","home":"主页","current and past projects":"当前与过去的项目","social":"社交",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"你好！欢迎来到我的网站。这纯粹是一个个人兴趣项目，也是我用html, css和javascript进行实验的测试。网站目前比较简陋，但以后会改进。",
        "projects":"项目","obviously, i have this website as a project, but i am working on some other things":"显然，我有这个网站作为项目，但我也在做其他一些东西",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"在2025年5/6月，我组装了一台电脑，并命名为Project ARISE。这是我现在的主机。",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"它配备了9070 xt, 9600x和32GB DDR5内存，装在Montech King 95 Pro机箱中。",
        "you can find me on:":"你可以在以下找到我："
    },
    ja: {
        "arakunn":"arakunn","home":"ホーム","current and past projects":"過去と現在のプロジェクト","social":"ソーシャル",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"こんにちは！私のウェブサイトへようこそ。これは純粋な情熱プロジェクトであり、HTML、CSS、JavaScriptで何ができるかを試すテストです。現時点ではサイトは簡素ですが、時間とともに改善されます。",
        "projects":"プロジェクト","obviously, i have this website as a project, but i am working on some other things":"明らかに、このサイトをプロジェクトとして持っていますが、他のことにも取り組んでいます",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"2025年5/6月にコンピュータを組み立て、Project ARISEと名付けました。これは現在のPCです。",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"9070 xt、9600x、32GB DDR5メモリを搭載し、Montech King 95 Proケースに収められています。",
        "you can find me on:":"以下で私を見つけることができます："
    },
    ko: {
        "arakunn":"arakunn","home":"홈","current and past projects":"현재 및 과거 프로젝트","social":"소셜",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"안녕하세요! 제 웹사이트에 오신 것을 환영합니다. 이것은 순수한 개인 프로젝트이며, html, css, javascript로 무엇을 할 수 있는지 테스트하는 실험입니다. 현재 사이트는 단순하지만 곧 개선될 예정입니다.",
        "projects":"프로젝트","obviously, i have this website as a project, but i am working on some other things":"분명히 이 웹사이트를 프로젝트로 가지고 있지만, 다른 작업도 하고 있습니다",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"2025년 5~6월에 컴퓨터를 만들고 Project ARISE라고 이름 지었습니다. 현재 제 PC입니다.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"9070 xt, 9600x, 32GB DDR5 램을 장착했고 Montech King 95 Pro 케이스에 넣었습니다.",
        "you can find me on:":"다음에서 찾을 수 있습니다:"
    },
    pt: {
        "arakunn":"arakunn","home":"início","current and past projects":"projetos atuais e passados","social":"social",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"olá! bem-vindo ao meu site. este é puramente um projeto de paixão e um teste do que posso fazer com html, css e javascript. o site é bastante básico por enquanto, mas isso mudará com o tempo.",
        "projects":"projetos","obviously, i have this website as a project, but i am working on some other things":"obviamente, eu tenho este site como projeto, mas estou trabalhando em outras coisas",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"em maio/junho de 2025, construí um computador e o nomeei Project ARISE. é o meu PC atual até hoje.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"possui um 9070 xt, 9600x e 32GB de RAM DDR5. está alojado no gabinete Montech King 95 Pro.",
        "you can find me on:":"você pode me encontrar em:"
    },
    ru: {
        "arakunn":"arakunn","home":"главная","current and past projects":"текущие и прошлые проекты","social":"социальные сети",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"привет! добро пожаловать на мой сайт. это чисто проект по интересу и тест того, что я могу сделать с помощью html, css и javascript. сайт пока довольно простой, но со временем это изменится.",
        "projects":"проекты","obviously, i have this website as a project, but i am working on some other things":"очевидно, у меня есть этот сайт как проект, но я работаю и над другими вещами",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"в мае/июне 2025 года я собрал компьютер и назвал его Project ARISE. Это мой текущий ПК до сих пор.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"у него 9070 xt, 9600x и 32 ГБ DDR5 RAM. Он находится в корпусе Montech King 95 Pro.",
        "you can find me on:":"вы можете найти меня на:"
    },
    it: {
        "arakunn":"arakunn","home":"home","current and past projects":"progetti attuali e passati","social":"social",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"ciao! benvenuto nel mio sito. questo è puramente un progetto di passione e un test di cosa posso fare con html, css e javascript. il sito è piuttosto basico al momento, ma cambierà con il tempo.",
        "projects":"progetti","obviously, i have this website as a project, but i am working on some other things":"ovviamente, ho questo sito come progetto, ma sto lavorando su altre cose",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"a maggio/giugno 2025 ho costruito un computer e l'ho chiamato Project ARISE. è il mio PC attuale fino ad oggi.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"ha un 9070 xt, 9600x e 32GB di RAM ddr5. è ospitato nel case Montech King 95 Pro.",
        "you can find me on:":"puoi trovarmi su:"
    },
    ar: {
        "arakunn":"arakunn","home":"الرئيسية","current and past projects":"المشاريع الحالية والسابقة","social":"اجتماعي",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"مرحبًا! مرحبًا بك في موقعي. هذا مشروع شغف بحت واختبار لما يمكنني فعله بـ html و css و javascript. الموقع بسيط جدًا حاليًا، لكن سيتغير مع مرور الوقت.",
        "projects":"المشاريع","obviously, i have this website as a project, but i am working on some other things":"من الواضح أن لدي هذا الموقع كمشروع، لكنني أعمل على أشياء أخرى أيضًا",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"في مايو/يونيو 2025، قمت ببناء كمبيوتر وسميته Project ARISE. إنه جهاز الكمبيوتر الحالي الخاص بي حتى اليوم.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"يحتوي على 9070 xt و9600x و32 جيجابايت رام DDR5. وهو موجود في صندوق Montech King 95 Pro.",
        "you can find me on:":"يمكنك العثور علي في:"
    },
    hi: {
        "arakunn":"arakunn","home":"होम","current and past projects":"वर्तमान और पिछले प्रोजेक्ट","social":"सोशल",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"नमस्ते! मेरी वेबसाइट पर स्वागत है। यह पूरी तरह से एक व्यक्तिगत परियोजना है और यह परीक्षण है कि मैं html, css और javascript के साथ क्या कर सकता हूँ। साइट अभी काफी बुनियादी है, लेकिन समय के साथ बदल जाएगी।",
        "projects":"प्रोजेक्ट","obviously, i have this website as a project, but i am working on some other things":"स्पष्ट है, मेरे पास यह वेबसाइट प्रोजेक्ट के रूप में है, लेकिन मैं कुछ अन्य चीजों पर भी काम कर रहा हूँ।",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"मई/जून 2025 में, मैंने एक कंप्यूटर बनाया और इसका नाम Project ARISE रखा। यह आज तक मेरा मुख्य पीसी है।",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"इसमें 9070 xt, 9600x और 32GB DDR5 रैम है। यह Montech King 95 Pro केस में रखा गया है।",
        "you can find me on:":"आप मुझे यहाँ पा सकते हैं:"
    },
    sv: {
        "arakunn":"arakunn","home":"hem","current and past projects":"aktuella och tidigare projekt","social":"socialt",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"hej! välkommen till min webbplats. detta är ett rent passionprojekt och ett test av vad jag kan göra med html, css och javascript. webbplatsen är ganska grundläggande just nu, men det kommer att förändras med tiden.",
        "projects":"projekt","obviously, i have this website as a project, but i am working on some other things":"uppenbarligen har jag denna webbplats som ett projekt, men jag arbetar med andra saker också",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"i maj/juni 2025 byggde jag en dator och kallade den Project ARISE. det är min nuvarande dator än idag.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"den har en 9070 xt, 9600x och 32GB DDR5 RAM. Den är placerad i Montech King 95 Pro-chassit.",
        "you can find me on:":"du kan hitta mig på:"
    },
    nl: {
        "arakunn":"arakunn","home":"start","current and past projects":"huidige en eerdere projecten","social":"sociaal",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"hallo! welkom op mijn website. dit is puur een passieproject en een test van wat ik kan doen met html, css en javascript. de site is voorlopig vrij basic, maar dat zal in de loop van de tijd veranderen.",
        "projects":"projecten","obviously, i have this website as a project, but i am working on some other things":"uiteraard heb ik deze website als project, maar ik werk ook aan andere dingen",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"in mei/juni 2025 bouwde ik een computer en noemde deze Project ARISE. Het is tot op heden mijn huidige pc.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"het heeft een 9070 xt, 9600x en 32GB DDR5 RAM. Het zit in de Montech King 95 Pro-behuizing.",
        "you can find me on:":"je kunt me vinden op:"
    },
    pl: {
        "arakunn":"arakunn","home":"strona główna","current and past projects":"aktualne i wcześniejsze projekty","social":"social",
        "hi! welcome to my website. this is purely a passion project and is a test of what i can do with html, css and javascript. the site is quite barebones as of now, but that will change as time goes on.":"cześć! witaj na mojej stronie. to czysto pasjonacki projekt i test tego, co mogę zrobić z html, css i javascript. strona jest na razie dość podstawowa, ale z czasem się to zmieni.",
        "projects":"projekty","obviously, i have this website as a project, but i am working on some other things":"oczywiście mam tę stronę jako projekt, ale pracuję też nad innymi rzeczami",
        "in may/june of 2025, i built a computer and named it Project ARISE. it is my current pc to this day.":"w maju/czerwcu 2025 zbudowałem komputer i nazwałem go Project ARISE. To mój obecny komputer do dziś.",
        "it has a 9070 xt, 9600x and 32gb of ddr5 ram. it is housed in the montech king 95 pro case.":"ma 9070 xt, 9600x i 32GB RAM DDR5. Jest umieszczony w obudowie Montech King 95 Pro.",
        "you can find me on:":"możesz mnie znaleźć na:"
    }
};

// language selector
const langSelect = document.getElementById('langSelect');
langSelect.addEventListener('change', () => {
    const lang = langSelect.value;
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.textContent.trim();
        if(translations[lang][key]) el.textContent = translations[lang][key];
    });
});

// scroll reveal for non-active panels
function revealOnScroll() {
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(panel => {
        if(panel.classList.contains('active')) return;
        const top = panel.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 50){
            panel.style.opacity = 1;
            panel.style.transform = "translateY(0)";
        } else {
            panel.style.opacity = 0;
            panel.style.transform = "translateY(20px)";
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
