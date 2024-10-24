const url = 'https://github.com/leitematheus/API-3B-notebooks.git'

console.log(url)

async function visualirInformacoesGerais() {
    const res = await fetch(url)
    const dados = await res.json()
    const totalEntrevistados = (dados.numer0_de_brasileiros)


    constparagrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Entrevistamos <span>${totalEntrevistados} milhão</span> de brasileiros para descobrir quais são os notebooks favoritos por todos`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
