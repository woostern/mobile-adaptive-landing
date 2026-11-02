function sendMessage() {
    const input = document.getElementById('email-input');
    console.log(input.value);

    const messageText = document.getElementById('messageText');
    messageText.textContent = 'Ваше письмо отправлено на емаил ' + input.value;
    messageText.classList.remove('inVisible');
}

function changeImage(buttonNumber) {
    const activeImage = document.getElementById('gallery-slide-active');

    if (buttonNumber === 1) {
        activeImage.src = "assets/000.png";
    } else if (buttonNumber === 2) {
        activeImage.src = "assets/003.png";
    } else if (buttonNumber === 3) {
        activeImage.src = "assets/iPhoneX-Mockup%201%20(1).png";
    } else if (buttonNumber === 4) {
        activeImage.src = "assets/001.png";
    } else if (buttonNumber === 5) {
        activeImage.src = "assets/004.png";
    }
}