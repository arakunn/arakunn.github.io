const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
const headerText = document.querySelector('.parallax h1');

/* Header typing effect */
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

/* Tab switching */
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if(tab.classList.contains('active')) return;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        panels.forEach(panel => panel.classList.remove('active'));
        const next = document.getElementById(tab.dataset.tab);
        next.classList.add('active');
    });
});

/* Scroll reveal for non-active panels */
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

/* Translation feature using CORS-friendly LibreTranslate */
async function translateText(text, targetLang) {
    try {
        const response = await fetch('https://translate.argosopentech.com/translate', {
            method: 'POST',
            body: JSON.stringify({
                q: text,
                source: 'en',
                target: targetLang,
                format: "text"
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        return data.translatedText;
    } catch (err) {
        console.error("Translation failed:", err);
        return text; // fallback to original
    }
}

const langSelect = document.getElementById('langSelect');
langSelect.addEventListener('change', async (e) => {
    const lang = e.target.value;
    const elements = document.querySelectorAll('[data-translate]');
    
    for(const el of elements){
        // Save original text if not saved yet
        const original = el.getAttribute('data-original') || el.innerText;
        el.setAttribute('data-original', original);
        
        // Only translate if not English
        if(lang === 'en'){
            el.innerText = original;
        } else {
            el.innerText = await translateText(original, lang);
        }
    }
});
