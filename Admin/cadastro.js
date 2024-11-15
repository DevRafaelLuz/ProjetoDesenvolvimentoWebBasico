let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

let nome = document.getElementById('nome');
let idade = document.getElementById('idade');
let email = document.getElementById('email');
let telefone = document.getElementById('telefone');
let nascimento = document.getElementById('nascimento');

const chave = new URLSearchParams(window.location.search).get('chave');

if (chave) {
    nome.value = alunos[chave].nome;
    idade.value = alunos[chave].idade;
    email.value = alunos[chave].email;
    telefone.value = alunos[chave].telefone;
    nascimento.value = alunos[chave].nascimento;
    document.querySelector('#formRegistro button[type="submit"]').innerText = "Alterar";
}

document.getElementById('formRegistro').addEventListener('submit', e => {
    e.preventDefault();

    const aluno = {
        nome: nome.value,
        idade: idade.value,
        email: email.value,
        telefone: telefone.value,
        nascimento: nascimento.value
    };

    (!chave)? alunos.push(aluno): alunos[chave] = aluno;

    localStorage.setItem('alunos', JSON.stringify(alunos));

    window.location.href = "./index.html";
});


function atualizarTabelaAlunos() {
    const tbody = document.querySelector("#alunos tbody");
    alunos.forEach((aluno, chave) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${aluno.nome}</td>
        <td>${aluno.idade}</td>
        <td>${aluno.email}</td>
        <td>${aluno.telefone}</td>
        <td>${aluno.nascimento}</td>
        <td id="btnTabela">
            <a href="?chave=${chave}" class="alterar">Alterar</a>
            <a href="#" onclick="removerAluno(${chave})" class="excluir">Excluir</a>
        </td>`;
        tbody.appendChild(linha);
    });
}

function removerAluno(id) {
    alunos.splice(id, 1);
    localStorage.setItem('alunos', JSON.stringify(alunos));
    window.location.reload();
}

function validateInput(input) {
    if (input.value < 0) {
        input.value = '';
    }
}

window.onload = atualizarTabelaAlunos;