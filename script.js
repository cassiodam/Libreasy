// Função para filtrar os livros
function filtrarLivros() {
    const nomeLivro = document.getElementById('nome-livro')?.value.toLowerCase() || '';
    const nomeAutor = document.getElementById('nome-autor')?.value.toLowerCase() || '';
    const cursosSelecionados = Array.from(document.querySelectorAll('input[name="curso"]:checked')).map(cb => cb.value);

    const livros = document.querySelectorAll('.livro');

    livros.forEach(livro => {
        const cursoLivro = livro.getAttribute('data-curso');
        const nomeLivroTexto = livro.getAttribute('data-nome').toLowerCase();
        const autorLivroTexto = livro.getAttribute('data-autor').toLowerCase();

        const correspondeNome = nomeLivroTexto.includes(nomeLivro);
        const correspondeAutor = autorLivroTexto.includes(nomeAutor);
        const correspondeCurso = cursosSelecionados.length === 0 || cursosSelecionados.includes(cursoLivro);

        if (correspondeNome && correspondeAutor && correspondeCurso) {
            livro.style.display = 'block';
        } else {
            livro.style.display = 'none';
        }
    });
}

// Adiciona eventos aos filtros
document.querySelectorAll('input[name="curso"]').forEach(checkbox => {
    checkbox.addEventListener('change', filtrarLivros);
});

document.getElementById('nome-livro')?.addEventListener('input', filtrarLivros);
document.getElementById('nome-autor')?.addEventListener('input', filtrarLivros);
document.getElementById('buscar')?.addEventListener('click', filtrarLivros);

// Submenu ao passar o mouse
const minhaContaBtn = document.querySelector('.minha-conta-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (minhaContaBtn && dropdownMenu) {
    minhaContaBtn.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block';
    });

    minhaContaBtn.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
    });

    dropdownMenu.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block';
    });

    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
    });
}

// Modo Claro/Escuro
window.onload = function () {
    const themeToggle = document.getElementById('theme-toggle');

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggle.textContent = '🌙';
        }
    }
}

// Pop-up de Login
const loginPopup = document.getElementById('login-popup');
const closePopup = document.querySelector('.close-popup');
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('fazer-login');

if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginPopup.style.display = 'flex';
    });
}

if (closePopup) {
    closePopup.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email')?.value;
        const senha = document.getElementById('senha')?.value;

        if (email && senha) {
            alert('Login realizado com sucesso!');
            loginPopup.style.display = 'none';
        } else {
            alert('Preencha todos os campos!');
        }
    });
}

window.addEventListener('click', (e) => {
    if (e.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
});

