const btnNovoDepoimento = document.getElementById('btnNovoDepoimento');
const btnFecharDepoimento = document.getElementById('btnFecharDepoimento');
const novo = document.getElementById('novo-depoimento');

btnNovoDepoimento.onclick = function() {
    novo.showModal();
}

btnFecharDepoimento.onclick = function() {
    novo.close();
}