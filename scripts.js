document.querySelectorAll(".buyButton").forEach(button => {
    button.addEventListener("click", function() {
        const discordLink = button.getAttribute("data-discord-link");
        if (discordLink) {
            window.location.href = discordLink; // Kullanıcıyı Discord davet linkine yönlendirir
        } else {
            alert("Discord linki bulunamadı!");
        }
    });
});