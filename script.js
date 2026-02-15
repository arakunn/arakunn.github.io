const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
const headerText = document.querySelector('.parallax h1');

// tab switching with fade and smooth scroll
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const panel = document.getElementById(tab.dataset.tab);
        panel.classList.add('active');

        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// typing effect for header
const typeText = "welcome to arakunn";
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

// scroll reveal for tab panels
function revealOnScroll() {
    panels.forEach(panel => {
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
