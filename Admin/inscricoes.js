let inscricoes = JSON.parse(localStorage.getItem('inscricoes')) || [];

let nomeInscricao = document.getElementById('nomeInscricao');
let emailInscricao = document.getElementById('emailInscricao');
let curso = document.getElementById('curso-desejado');
let statusCurso = document.getElementById('statusCurso');

const chaveInscricao = new URLSearchParams(window.location.search).get('chaveInscricao');

if (chaveInscricao) {
    nomeInscricao.value = inscricoes[chaveInscricao].nomeInscricao;
    emailInscricao.value = inscricoes[chaveInscricao].emailInscricao;
    curso.value = inscricoes[chaveInscricao].curso;
    statusCurso.value = inscricoes[chaveInscricao].statusCurso;
    document.querySelector('#formInscricoes button[type="submit"]').innerText = "Alterar";
}

document.getElementById('formInscricoes').addEventListener('submit', e => {
    e.preventDefault();

    const inscricao = {
        nomeInscricao: nomeInscricao.value,
        emailInscricao: emailInscricao.value,
        curso: curso.value,
        statusCurso: statusCurso.value
    };

    (!chaveInscricao)? inscricoes.push(inscricao): inscricoes[chaveInscricao] = inscricao;

    localStorage.setItem('inscricoes', JSON.stringify(inscricoes));

    window.location.href = "./inscricoes.html";
});

function atualizarTabelaInscricoes() {
    const tbodyInscricoes = document.querySelector("#tblInscricao tbody");
    inscricoes.forEach((inscricao, chaveInscricao) => {
        const linhaInscricoes = document.createElement('tr');
        linhaInscricoes.innerHTML = `
        <td>${inscricao.nomeInscricao}</td>
        <td>${inscricao.emailInscricao}</td>
        <td>${inscricao.curso}</td>
        <td>${inscricao.statusCurso}</td>
        <td>
            <a href="?chaveInscricao=${chaveInscricao}" class="alterar">Alterar</a>
            <a href="#" onclick="removerInscricao(${chaveInscricao})" class="excluir">Excluir</a>
        </td>`;
        tbodyInscricoes.appendChild(linhaInscricoes);
    });
}

const validateSelectInscricoes = e => { 
    const selectElementCurso = document.getElementById('curso-desejado'); 
    const selectElementStatus = document.getElementById('statusCurso');

    if (selectElementCurso.value === "Selecione") { 
        selectElementCurso.style.borderColor = "red";
        selectElementStatus.style.borderColor = "red"; 
        e.preventDefault();
    } else {
        selectElementCurso.style.border = "none";
    }

    if (selectElementStatus.value === "Selecione") {
        selectElementCurso.style.borderColor = "red";
        selectElementStatus.style.borderColor = "red"; 
        e.preventDefault();
    } else {
        selectElementStatus.style.border = "none";
    }
};

document.getElementById('btnResgistrarInscricao').addEventListener('click', validateSelectInscricoes);

function removerInscricao(id) {
    inscricoes.splice(id, 1);
    localStorage.setItem('inscricoes', JSON.stringify(inscricoes));
    window.location.reload();
}

window.onload = atualizarTabelaInscricoes;