document.getElementById("form-agendamento").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var data = document.getElementById("data").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome && email && data && mensagem) {
        var texto = `Olá, meu nome é ${nome}. Gostaria de agendar um serviço para o dia ${data}. Meus detalhes: ${mensagem}. Pode entrar em contato pelo email: ${email}.`;
        var textoCodificado = encodeURIComponent(texto);
        var numeroWhatsApp = "5571992642554";
        var url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;
        window.open(url, "_blank");
    } else {
        // Adiciona classe de erro aos campos vazios
        document.querySelectorAll("input, textarea").forEach(function(input) {
            if (!input.value) {
                input.classList.add("input-erro");
            } else {
                input.classList.remove("input-erro");
            }
        });
        alert("Por favor, preencha todos os campos antes de enviar o agendamento.");
    }
});
