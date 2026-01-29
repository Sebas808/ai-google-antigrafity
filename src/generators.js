import { navStyles, headerContent, footerLayouts } from './data.js'

const navDisplay = document.querySelector('#nav-display');
const headerDisplay = document.querySelector('#header-display');
const footerDisplay = document.querySelector('#footer-display');

const navCode = document.querySelector('#nav-code');
const headerCode = document.querySelector('#header-code');
const footerCode = document.querySelector('#footer-code');

const genNavBtn = document.querySelector('#gen-nav-btn');
const genHeaderBtn = document.querySelector('#gen-header-btn');
const genFooterBtn = document.querySelector('#gen-footer-btn');

const contextInput = document.querySelector('#context-input');

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function getContext() {
    return contextInput.value.trim() || 'Your Brand';
}

function processTemplate(template, context) {
    return template.replaceAll('{{Idea}}', context);
}

function updateComponent(displayElement, codeElement, componentData) {
    const context = getContext();

    // 1. Animate text out
    displayElement.style.opacity = '0';
    displayElement.style.transform = 'translateY(-5px)';

    // 2. Wrap update in timeout for smooth transition
    setTimeout(() => {
        // Update Title
        displayElement.textContent = componentData.label;
        displayElement.style.opacity = '1';
        displayElement.style.transform = 'translateY(0)';

        // Update Code with context injection
        if (codeElement) {
            const finalCode = processTemplate(componentData.code, context);
            codeElement.textContent = finalCode;
            codeElement.parentElement.classList.remove('hidden');
        }
    }, 200);
}

genNavBtn.addEventListener('click', () => {
    updateComponent(navDisplay, navCode, getRandom(navStyles));
});

genHeaderBtn.addEventListener('click', () => {
    updateComponent(headerDisplay, headerCode, getRandom(headerContent));
});

genFooterBtn.addEventListener('click', () => {
    updateComponent(footerDisplay, footerCode, getRandom(footerLayouts));
});
