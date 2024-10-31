const url = 'https://raw.githubusercontent.com/leitematheus/API-3B-notebooks/refs/heads/main/not_norte.json'


async function visualizarInformacoesGerais() {
    const res = await fetch(url)
    const dados = await res.json()
    const notebooks = Object.keys(dados)
    const notebookMaisVotados = notebooks[0]
    const quantidadeDeVoto = Object.values(dados)[0]

}

visualizarInformacoesGerais()