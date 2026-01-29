document.addEventListener("DOMContentLoaded", function () {

    const footer = `
        <footer style="background:#4a3b2a; color:white; padding:50px 0 30px 0; margin-top:60px;">
            <div class="container">

                <div class="row">

                    <!-- SOBRE -->
                    <div class="col-md-4 mb-4">
                        <h5 class="fw-bold">Seu site, sua cara</h5>
                        <p style="font-size:15px; opacity:0.9;">
                            Criação de sites profissionais e cardápios digitais para pequenos negócios.
                            Design humanizado, assinatura mensal e manutenção inclusa.
                        </p>
                    </div>

                    <!-- LINKS RÁPIDOS -->
                    <div class="col-md-4 mb-4">
                        <h6 class="fw-bold">Links Rápidos</h6>
                        <ul class="list-unstyled mt-2">
                            <li><a href="index.html" class="text-white text-decoration-none d-block mb-1">Início</a></li>
                            <li><a href="#pacotes" class="text-white text-decoration-none d-block mb-1">Pacotes de Sites</a></li>
                            <li><a href="cardapio.html" class="text-white text-decoration-none d-block mb-1">Cardápio Digital</a></li>
                            <li><a href="#contato" class="text-white text-decoration-none d-block mb-1">Contato</a></li>
                            <li><a href="portfolio.html" class="text-white text-decoration-none d-block mb-1">Portfólio</a></li>
                        </ul>
                    </div>

                    <!-- CONTATO -->
                    <div class="col-md-4 mb-4">
                        <h6 class="fw-bold">Contato</h6>
                        <p class="mb-1"><strong>WhatsApp:</strong> (11) 97112-8269</p>
                        <p class="mb-1"><strong>E-mail:</strong> contato@seusitesuacara.com</p>
                        <p class="mb-1"><strong>Instagram:</strong>
                        <a href="https://www.instagram.com/seusitesuacara.digital?igsh=MWNpaWUzcmFoMXJwcQ%3D%3D&utm_source=qr" target="_blank" class="text-white text-decoration-none">@seusitesuacara.digital</a></p>

                        <p class="mb-1"><strong>Atendimento:</strong> Seg a Sex, 09h às 18h</p>
                    </div>

                </div>

                <hr style="border-color:rgba(255,255,255,0.3);">

                <div class="text-center mt-3">
                    <p style="font-size:14px; opacity:0.8;">
                        © 2025 Seu site, sua cara — Todos os direitos reservados.
                    </p>
                </div>

            </div>
        </footer>
    `;

    document.getElementById("footer").innerHTML = footer;

});
