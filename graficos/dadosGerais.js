const url = 'https://raw.githubusercontent.com/leitematheus/API-3B-notebooks/refs/heads/main/not_norte.json'


async function visualizarInformacoesGerais() {
    const res = await fetch(url)
    const dados = await res.json()


    const notebooks = Object.keys(dados)
    const votos = Object.values(dados)
    const notebookMaisVotados = notebooks[0]
    const quantidadeDeVoto = Object.values(dados)[0]

    const data = [
        {
            x: notebooks,
            y: votos,
            type: 'bar',

        }
    ]

    

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico_texto')
    paragrafo.innerHTML = `Entrevistamos <span>${quantidadeDeVoto} milhão</span> de brasileiros para descobrir quais são os notebooks mais favoritos por todos!`

    const container = document.getElementById('caixa-grafico')
    container.appendChild(paragrafo)

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

visualizarInformacoesGerais()