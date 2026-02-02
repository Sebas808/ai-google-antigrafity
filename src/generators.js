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

const viewNavBtn = document.querySelector('#view-nav-btn');
const viewHeaderBtn = document.querySelector('#view-header-btn');
const viewFooterBtn = document.querySelector('#view-footer-btn');

// Preview elements no longer needed individually
// const navPreview = document.querySelector('#nav-preview');
// const headerPreview = document.querySelector('#header-preview');
// const footerPreview = document.querySelector('#footer-preview');

const contextInput = document.querySelector('#context-input');

// Store current data
let currentNav = null;
let currentHeader = null;
let currentFooter = null;

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function getContext() {
    return contextInput.value.trim() || 'Your Brand';
}

// Theme Generator: Deterministic based on input string
function generateTheme(seed) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Generate colors
    const hue = Math.abs(hash % 360);
    const saturation = 60 + (hash % 20); // 60-80%
    const lightness = 45 + (hash % 15);  // 45-60%

    const primary = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const secondary = `hsl(${(hue + 180) % 360}, ${saturation}%, ${lightness}%)`;
    const accent = `hsl(${(hue + 30) % 360}, 90%, 60%)`;

    // Dark mode variation
    const bgDark = `hsl(${hue}, 30%, 5%)`;
    const textLight = `hsl(${hue}, 10%, 95%)`;

    // Fonts
    const fonts = [
        "'Outfit', sans-serif",
        "'Inter', sans-serif",
        "'Playfair Display', serif",
        "'Roboto Mono', monospace",
        "'Poppins', sans-serif"
    ];
    const font = fonts[Math.abs(hash) % fonts.length];

    return { primary, secondary, accent, bgDark, textLight, font };
}

function processTemplate(template, context) {
    const theme = generateTheme(context);

    // Replace standard placeholders
    let processed = template.replace(/{{Idea}}/g, context);

    // Replace Theme Variables (if they exist in template)
    processed = processed.replace(/{{Primary}}/g, theme.primary);
    processed = processed.replace(/{{Secondary}}/g, theme.secondary);
    processed = processed.replace(/{{Accent}}/g, theme.accent);
    processed = processed.replace(/{{BgDark}}/g, theme.bgDark);
    processed = processed.replace(/{{TextLight}}/g, theme.textLight);
    processed = processed.replace(/{{Font}}/g, theme.font);

    return processed;
}

const mainPreviewFrame = document.querySelector('#main-preview-frame');
const mainPreviewTitle = document.querySelector('#main-preview-title');

const previewArea = document.querySelector('.preview-main-area');

// Helper to update main frame
function updateMainPreview(code, title) {
    mainPreviewTitle.textContent = "Previewing: " + title;
    // ... (rest of srcdoc injection) ...
    mainPreviewFrame.srcdoc = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { 
                    margin: 0; 
                    font-family: 'Outfit', sans-serif;
                    background-color: #0f172a; 
                    background-image: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 20%);
                    color: white;
                    min-height: 100vh;
                }
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: #f1f1f1; }
                ::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
            </style>
        </head>
        <body>
            ${code}
        </body>
        </html>
    `;

    // Scroll to preview
    previewArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateComponent(displayElement, codeElement, componentData, viewBtn) {
    const context = getContext();

    // Animate Text
    displayElement.style.opacity = '0';
    displayElement.style.transform = 'translateY(-5px)';

    setTimeout(() => {
        const finalCode = processTemplate(componentData.code, context);

        // Update Title
        displayElement.textContent = componentData.label;
        displayElement.style.opacity = '1';
        displayElement.style.transform = 'translateY(0)';

        // Update Code
        if (codeElement) {
            codeElement.textContent = finalCode;
            codeElement.parentElement.classList.remove('hidden');
        }

        // Setup View Button
        if (viewBtn) {
            viewBtn.classList.remove('hidden');
            viewBtn.style.display = 'inline-flex';

            // Only update/scroll when user clicks the button
            viewBtn.onclick = () => updateMainPreview(finalCode, componentData.label);
        }

    }, 200);
}

genNavBtn.addEventListener('click', () => {
    currentNav = getRandom(navStyles);
    updateComponent(navDisplay, navCode, currentNav, viewNavBtn);
});

genHeaderBtn.addEventListener('click', () => {
    currentHeader = getRandom(headerContent);
    updateComponent(headerDisplay, headerCode, currentHeader, viewHeaderBtn);
});

genFooterBtn.addEventListener('click', () => {
    currentFooter = getRandom(footerLayouts);
    updateComponent(footerDisplay, footerCode, currentFooter, viewFooterBtn);
});
