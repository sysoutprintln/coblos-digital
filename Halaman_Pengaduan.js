// pengaduan.js

document.getElementById('pengaduanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    console.log('Pengaduan submitted:');
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    showSuccessNotification();

    this.reset();
});

function showSuccessNotification() {
    document.getElementById('success-notification').style.display = 'block';
}

function hideSuccessNotification() {
    document.getElementById('success-notification').style.display = 'none';
    window.location.href = 'Halaman_Beranda.html';
}
