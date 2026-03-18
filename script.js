const botao = document.getElementById("btnConfirmar");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:8080/presenca/registrar", {
            method: "POST"
        });

        if (response.ok) {
            mostrarMensagem("Presença confirmada!", "sucesso");
        } else {
            const erroTexto = await response.text();
            mostrarMensagem(erroTexto || "Erro ao confirmar presença!", "erro");
        }

    } catch (error) {
        mostrarMensagem("Falha na conexão com o servidor!", "erro");
    }
});

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;

    setTimeout(() => {
        mensagem.textContent = "";
        mensagem.className = "mensagem";
    }, 3000);
}