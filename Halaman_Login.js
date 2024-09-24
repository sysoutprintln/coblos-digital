function showNikErrorNotification(message) {
    var notification = document.getElementById("nik-error-notification");
    notification.querySelector("p").innerText = message;
    notification.style.display = "block";
}

function hideNikErrorNotification() {
    document.getElementById("nik-error-notification").style.display = "none";
}

function showPasswordErrorNotification(message) {
    var notification = document.getElementById("password-error-notification");
    notification.querySelector("p").innerText = message;
    notification.style.display = "block";
}

function hidePasswordErrorNotification() {
    document.getElementById("password-error-notification").style.display = "none";
}

function showSuccessNotification(message) {
    var notification = document.getElementById("success-notification");
    notification.querySelector("p").innerText = message;
    notification.style.display = "block";
}

function hideSuccessNotification() {
    document.getElementById("success-notification").style.display = "none";
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nik = document.getElementById("nik").value.trim();
    var password = document.getElementById("password").value.trim();

    if (nik.length !== 16 || isNaN(nik)) {
        showNikErrorNotification("NIK harus terdiri dari 16 digit angka.");
    } else if (password.length < 10) {
        showPasswordErrorNotification("Kata sandi harus terdiri dari 10 karakter atau lebih.");
    } else {
        showSuccessNotification("Login berhasil! Anda akan diarahkan ke halaman beranda.");

        setTimeout(function() {
            window.location.href = "Halaman_Beranda.html";
        }, 2000);
    }
});
