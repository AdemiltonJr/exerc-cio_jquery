$(document).ready(function () {
    // Esconde a lista de tarefas inicialmente
    $(".lista-tarefas").hide();

    // Captura o evento de envio do formulário
    $("form").on("submit", function (e) {
        e.preventDefault(); // Impede o comportamento padrão de recarregar a página

        // Obtém o valor do input
        const novaAtividade = $("#novaAtividade").val().trim();

        // Verifica se o campo não está vazio
        if (novaAtividade) {
            // Adiciona a tarefa à lista
            $("ul").append(`<li>${novaAtividade}</li>`);

            // Exibe a lista de tarefas caso esteja escondida
            $(".lista-tarefas").fadeIn();

            // Limpa o campo de entrada
            $("#novaAtividade").val("");
        }
    });

    // Marca uma tarefa como concluída ao clicar
    $("ul").on("click", "li", function () {
        $(this).toggleClass("completed");
    });
});
