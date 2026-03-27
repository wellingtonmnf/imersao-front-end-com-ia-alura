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

// Redireciona o usuário para o catálogo ao clicar no perfil
const profiles = document.querySelectorAll('.profile');
profiles.forEach(profile => {
    profile.addEventListener('click', () => {
        window.location.href = 'catalogo/catalogo.html';
    });

    profile.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            window.location.href = 'catalogo/catalogo.html';
        }
    });
});