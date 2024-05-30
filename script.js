document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".buy-btn");
    
    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const packageType = this.getAttribute("data-package");
            window.location.href = `https://app.unlock-protocol.com/checkout?id=aa5b8063-a996-44fe-9dcd-8d9236ad2e10&package=${packageType}`;
        });
    });
});
