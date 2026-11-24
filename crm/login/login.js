function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "test@mail.ru" && password === "12345") {
        console.log("Вы вошли");
        localStorage.setItem("userEmail", email);
        window.location.href = "../home/home.html";
    } else {
        console.log("Вы не вошли");
    }
}

function changeColorTheme() {
    const body = document.body;

    body.classList.toggle("dark-theme");
}