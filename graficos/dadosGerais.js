const url = 'https://raw.githubusercontent.com/leitematheus/API-3B-notebooks/refs/heads/main/Marcas_notebooks.json'


async function visualizarInformacoesGerais() {
    const res = await fetch(url)
    const dados = await res.json()
    const totalEntrevistados = (dados.numero_de_brasileiros / 1e6)
    console.log(dados.notebooks_por_regiao.sul[0])


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico_texto')
    paragrafo.innerHTML = `Entrevistamos <span>${totalEntrevistados} milhão</span> de brasileiros para descobrir quais são os notebooks favoritos por todos`

    const container = document.getElementById('caixa-grafico')
    container.appendChild(paragrafo)
}
visualizarInformacoesGerais()