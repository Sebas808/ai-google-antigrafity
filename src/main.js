import { niches, audiences, features, revenueModels, prefixes } from './data.js'

const ideaDisplay = document.querySelector('#idea-display');
const tagsDisplay = document.querySelector('#tags-display');
const generateBtn = document.querySelector('#generate-btn');
const saveBtn = document.querySelector('#save-btn');
const detailsSection = document.querySelector('#details-section');
const audienceDisplay = document.querySelector('#audience-display');
const revenueDisplay = document.querySelector('#revenue-display');
const featureDisplay = document.querySelector('#feature-display');
const savedList = document.querySelector('#saved-list');

let currentIdea = null;
let savedIdeas = JSON.parse(localStorage.getItem('savedIdeas')) || [];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function generateIdea() {
    // 1. Pick random components
    const niche = getRandom(niches);
    const audience = getRandom(audiences);
    const feature = getRandom(features);
    const revenue = getRandom(revenueModels);
    const prefix = Math.random() > 0.7 ? getRandom(prefixes) + " " : "";

    // 2. Construct the main idea string
    let mainIdea = "";
    let templates = [
        `A ${niche} platform for ${audience}`,
        `The "Uber" of ${niche} for ${audience}`,
        `${niche} app with ${feature}`,
        `A ${feature} solution for ${niche}`,
        `${prefix}${niche} for ${audience}`
    ];

    mainIdea = getRandom(templates);

    // Store current idea object
    currentIdea = {
        id: Date.now(),
        text: mainIdea,
        niche,
        audience,
        feature,
        revenue,
        timestamp: new Date().toLocaleDateString()
    };

    // Enable save button
    saveBtn.disabled = false;

    // 3. Update DOM with animation
    animateText(ideaDisplay, mainIdea);

    audienceDisplay.textContent = audience;
    revenueDisplay.textContent = revenue;
    featureDisplay.textContent = feature;

    // 4. Update tags
    tagsDisplay.innerHTML = `
    <span class="tag">${niche}</span>
    <span class="tag">Exp: Low-Mid</span>
    <span class="tag">Pot: High</span>
  `;

    // 5. Show details
    if (!detailsSection.classList.contains('visible')) {
        detailsSection.classList.remove('hidden');
        setTimeout(() => {
            detailsSection.classList.add('visible');
        }, 10);
    }
}

function animateText(element, newText) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(-10px)';

    setTimeout(() => {
        element.textContent = newText;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 200);
}

function saveCurrentIdea() {
    if (!currentIdea) return;

    // Check if already saved (simple check by text, or just allow dupes? prevent dupes by text)
    if (savedIdeas.some(idea => idea.text === currentIdea.text)) {
        alert("Idea already saved!");
        return;
    }

    savedIdeas.unshift(currentIdea); // Add to top
    localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
    renderSavedIdeas();

    // Feedback animation
    const originalText = saveBtn.innerHTML;
    saveBtn.innerHTML = '<span class="icon">✅</span> Saved!';
    setTimeout(() => {
        saveBtn.innerHTML = originalText;
    }, 1500);
}

function deleteIdea(id) {
    savedIdeas = savedIdeas.filter(idea => idea.id !== id);
    localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
    renderSavedIdeas();
}

function renderSavedIdeas() {
    savedList.innerHTML = '';

    if (savedIdeas.length === 0) {
        savedList.innerHTML = '<p class="empty-state">No ideas saved yet.</p>';
        return;
    }

    savedIdeas.forEach(idea => {
        const div = document.createElement('div');
        div.className = 'saved-item glass';
        div.innerHTML = `
            <div class="saved-content">
                <div class="saved-header">
                    <span class="saved-date">${idea.timestamp}</span>
                    <button class="delete-btn" aria-label="Delete idea">×</button>
                </div>
                <h3>${idea.text}</h3>
                <div class="saved-tags">
                    <span>${idea.revenue}</span>
                    <span>${idea.audience}</span>
                </div>
            </div>
        `;

        div.querySelector('.delete-btn').addEventListener('click', () => deleteIdea(idea.id));
        savedList.appendChild(div);
    });
}

generateBtn.addEventListener('click', generateIdea);
saveBtn.addEventListener('click', saveCurrentIdea);

// Init
renderSavedIdeas();
