 // Simple SPA Navigation
const buttons = document.querySelectorAll('.button');
const tabs = document.querySelectorAll('.tab');
const content = document.getElementById('content');

function loadPage(page) {
    content.innerHTML = `<h2>${page}</h2><p>Placeholder content for ${page} page.</p>`;
}

// Button click
buttons.forEach(btn => {
    btn.addEventListener('click', () => loadPage(btn.dataset.page));
});

// Tab click
tabs.forEach(tab => {
    tab.addEventListener('click', () => loadPage(tab.dataset.page));
});
