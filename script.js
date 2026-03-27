import { userProfiles } from './js/userProfiles.js';

// Toggle Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se há tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateToggleIcon();
}

// Event listener para o botão
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    const currentTheme = body.classList.contains('light') ? 'light' : '';
    localStorage.setItem('theme', currentTheme);
    updateToggleIcon();
});

// Função para atualizar o ícone do botão
function updateToggleIcon() {
    if (body.classList.contains('light')) {
        themeToggle.textContent = '☀️'; // Sol para light mode
    } else {
        themeToggle.textContent = '🌙'; // Lua para dark mode
    }
}

function createProfileCards() {
    const profilesList = document.getElementById('profiles-list');
    if (!profilesList) return;

    profilesList.innerHTML = '';

    userProfiles.forEach(profile => {
        const li = document.createElement('li');
        const article = document.createElement('article');
        article.className = 'profile';
        article.setAttribute('role', 'button');
        article.tabIndex = 0;

        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.src = profile.image;
        img.alt = `${profile.name} avatar`;

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = profile.name;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        article.appendChild(figure);
        li.appendChild(article);
        profilesList.appendChild(li);

        const goToCatalog = () => {
            localStorage.setItem('perfilAtivoNome', profile.name);
            localStorage.setItem('perfilAtivoImagem', profile.image);
            window.location.href = 'catalogo/catalogo.html';
        };

        article.addEventListener('click', goToCatalog);
        article.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                goToCatalog();
            }
        });
    });
}

createProfileCards();