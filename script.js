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