const URL = "https://dog.ceo/api/breeds/image/random";
const imagemDog = document.getElementById("imagem-dog");
const gerarDog = document.getElementById("gerar-dog");

gerarDog.addEventListener("click", buscarNovoCao);

async function buscarNovoCao() {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        if (data.status != "success") {
            throw new Error();
        }

        imagemDog.src = data.message;
    } 
    catch {
        alert("Houve um erro no processamento.");
    }
}

buscarNovoCao();