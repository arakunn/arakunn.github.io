document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');
    const headerText = document.querySelector('.parallax h1');
    const langSelect = document.getElementById('langSelect');

    // header typing

    const typeText = "arakunn";
    let index = 0;
    headerText.textContent = "";

    function typeHeader() {
        if (index < typeText.length) {
            headerText.textContent += typeText.charAt(index);
            index++;
            setTimeout(typeHeader, 100);
        }
    }

    typeHeader();

    // tab switching

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.classList.contains('active')) return;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            panels.forEach(panel => panel.classList.remove('active'));

            const next = document.getElementById(tab.dataset.tab);
            next.classList.add('active');
        });
    });

    // scroll reveal

    function revealOnScroll() {
        panels.forEach(panel => {
            if (panel.classList.contains('active')) return;

            const top = panel.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight - 50) {
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

    // translation using MyMemory API

    async function translateText(text, targetLang) {
        try {
            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
            );
            const data = await response.json();
            return data.responseData.translatedText;
        } catch (err) {
            console.error("Translation failed:", err);
            return text;
        }
    }

    langSelect.addEventListener('change', async (e) => {
        const lang = e.target.value;
        const elements = document.querySelectorAll('[data-translate]');

        for (const el of elements) {
            const original = el.getAttribute('data-original') || el.innerText;
            el.setAttribute('data-original', original);

            if (lang === 'en') {
                el.innerText = original;
            } else {
                el.innerText = await translateText(original, lang);
            }
        }
    });

});
