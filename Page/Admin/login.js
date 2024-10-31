let login = sessionStorage.getItem('usuarioLogado');

if (!login) {
    window.location.href = "../Home/index.html";
}

let usuario = sessionStorage.getItem('nomeUsuario');

document.getElementById('logout').addEventListener('click', () => {
    sessionStorage.removeItem('usuarioLogado');
    sessionStorage.removeItem('nomeUsuario');
    window.location.href = "../Home/index.html";
});