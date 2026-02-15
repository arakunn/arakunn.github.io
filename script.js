const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
const headerText = document.querySelector('.parallax h1');

const typeText = "welcome to arakunn's website";
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

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if(tab.classList.contains('active')) return;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const current = document.querySelector('.tab-panel.active');
        current.classList.remove('active');
        current.style.opacity = 0;

        const next = document.getElementById(tab.dataset.tab);
        next.classList.add('active');
        next.style.opacity = 0;
        setTimeout(() => {
            next.style.opacity = 1;
        }, 50);
    });
});

function revealOnScroll() {
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
