document.addEventListener("DOMContentLoaded", function () {

    const header = `
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm" style="background:#e9dcc4;">
            <div class="container">

                <!-- LOGO -->
                <a class="navbar-brand fw-bold d-flex align-items-center" href="index.html" style="color:#4a3b2a;">
                    <img src="src/assets/logo-site.jpg" alt="logo" width="35" height="35" class="me-2 rounded">
                    Seu site, sua cara
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuHeader">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="menuHeader">
                    <ul class="navbar-nav ms-auto">

                        <li class="nav-item">
                            <a class="nav-link fw-semibold" href="index.html" style="color:#4a3b2a;">Início</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link fw-semibold" href="index.html#pacotes" style="color:#4a3b2a;">Pacotes</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link fw-semibold" href="index.html#cardapio" style="color:#4a3b2a;">Cardápio Digital</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link fw-semibold" href="index.html#contato" style="color:#4a3b2a;">Contato</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link fw-semibold" href="portfolio.html" style="color:#4a3b2a;">Portfólio</a>
                        </li>

                        <li class="nav-item d-flex align-items-center ms-3">
                            <a href="https://www.instagram.com/seusitesuacara.digital?igsh=MWNpaWUzcmFoMXJwcQ%3D%3D&utm_source=qr" target="_blank" class="nav-link" style="font-size:24px; color:#2d2318;">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </li>

                    </ul>

                    <!-- Botão WhatsApp -->
                    <a href="https://wa.me/5511971128269" target="_blank" class="btn ms-3"
                       style="background:#4a3b2a; color:#fff; border-radius:10px;">
                       WhatsApp
                    </a>

                </div>
            </div>
        </nav>
    `;

    document.getElementById("header").innerHTML = header;
});
