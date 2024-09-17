
// Função para alternar entre as páginas
function showPage(pageId) {
    document.getElementById('pagina-login').style.display = 'none';
    document.getElementById('pagina-registro').style.display = 'none';
    document.getElementById('pagina-evento').style.display = 'none';
    document.getElementById(pageId).style.display = 'block';
}

// Event listeners para navegação
document.getElementById('criar-conta').addEventListener('click', function(e) {
    e.preventDefault();
    //window.location.href = 'pagina-registro.html';
    showPage('pagina-registro');
});

document.getElementById('retornar-login').addEventListener('click', function() {
    //window.location.href = 'index.html';
    showPage('pagina-login');
});

document.getElementById('formulario-login').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você adicionaria a lógica de autenticação
    //window.location.href = 'pagina-evento.html';
    showPage('pagina-evento');
});

document.getElementById('formulario-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você adicionaria a lógica de registro
    alert('Cadastro realizado com sucesso!');
    //window.location.href = 'index.html';
    //Retorna para a página de login após cadastro
    showPage('pagina-login');
});

// Funções para carregar conteúdo dinâmico
function loadArtistHistory() {
    document.getElementById('area-conteudo').innerHTML = `
        <h3>História do Artista</h3>
        <p>Matuê é um dos principais nomes do trap brasileiro...</p>
    `;
}

function loadEventLocation() {
    document.getElementById('area-conteudo').innerHTML = `
        <h3>Local do Evento</h3>
        <p>Estádio Albertão</p>
        <p>Horário: A partir das 22h</p>
    `;
}

function loadTicketInfo() {
    document.getElementById('area-conteudo').innerHTML = `
        <h3>Compre seus ingressos</h3>
        <ul>
            <li>Inteira: R$ 100,00</li>
            <li>Meia: R$ 50,00</li>
        </ul>
        <p>Formas de pagamento: Cartão de crédito, débito, PIX</p>
    `;
}

function loadContactForm() {
    document.getElementById('area-conteudo').innerHTML = `
        <h3>Entre em contato</h3>
        <form class="formulario-contato">
            <input type="text" placeholder="Nome" required>
            <input type="email" placeholder="E-mail" required>
            <textarea placeholder="Mensagem" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    `;
}

// Evento listeners para o menu de navegação
document.getElementById('historia-artista').addEventListener('click', loadArtistHistory);
document.getElementById('local-evento').addEventListener('click', loadEventLocation);
document.getElementById('comprar-ingressos').addEventListener('click', loadTicketInfo);
document.getElementById('informacoes-contato').addEventListener('click', loadContactForm);