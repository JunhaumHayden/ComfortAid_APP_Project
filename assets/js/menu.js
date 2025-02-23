document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    // Alternar menu ao clicar
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Ocultar opção "Cadastro de Serviço" para clientes
    if (usuario?.tipo !== "profissional") {
        document.getElementById("menuProfissional").style.display = "none";
    }

    // Logout
    document.getElementById("logout").addEventListener("click", () => {
        sessionStorage.removeItem("usuario");
        window.location.href = "login.html";
    });
});
