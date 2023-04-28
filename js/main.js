const caixa1 = document.querySelector('#caixa1');
const caixa2 = document.querySelector('#caixa2');
const bnt = document.querySelector('#btn-copiar');
const bntVoltar = document.querySelector('#btn-voltar');
const todosCursos = [...document.querySelectorAll('.curso')];

todosCursos.map((el) => {
    el.addEventListener('click', (event) => {
        const curso = event.target;
        curso.classList.toggle('destaque');
    });
});

bnt.addEventListener('click', () => {
    const selecionados = [...document.querySelectorAll('.destaque')];
    const naoSelecionados = [...document.querySelectorAll('.curso:not(.destaque)')];
    selecionados.map((el) => {
        caixa2.appendChild(el);
    });
    naoSelecionados.map((el) => {
        caixa1.appendChild(el);
    })
});