const btnNovoDepoimento = document.getElementById('btnNovoDepoimento');
const btnFecharDepoimento = document.getElementById('btnFecharDepoimento');
const novo = document.getElementById('novo-depoimento');

btnNovoDepoimento.onclick = function() {
    novo.showModal();
}

btnFecharDepoimento.onclick = function() {
    novo.close();
}

const dados = JSON.parse(localStorage.getItem('dados')) || [];

let descricao = document.getElementById('descricao');
let select = document.getElementById('nome-curso-depoimento');
let nota = document.getElementById('nota');

document.getElementById('formDepoimento').addEventListener('submit', e => {
    e.preventDefault();

    const depoimento = {
        descricao: descricao.value,
        select: select.value,
        nota: nota.value
    };

    dados.push(depoimento);

    localStorage.setItem('dados', JSON.stringify(dados));

    window.location.href = "./index.html";
});

function adicionarDepoimento() {
    const div = document.getElementById('depoimentos');
    dados.forEach((depoimento) => {
        const avaliacao = document.createElement('div');
        avaliacao.innerHTML = `
            <p>${depoimento.descricao}</p>
            <hr>
            <h2>Curso: ${depoimento.select}</h2>
            <hr>
            <span>Avaliação: ${depoimento.nota}</span>
        `;        
        div.appendChild(avaliacao);
    });
}

function preencherTabela() {
    const tbody = document.querySelector('#tabela-depoimento tbody')
    dados.forEach((depoimento) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${depoimento.select}</td>
            <td>${depoimento.nota}</td>
        `;
        tbody.appendChild(linha);
    });
}

window.addEventListener('load', function() {
    adicionarDepoimento();
});

window.addEventListener('load', function() {
    preencherTabela();
});