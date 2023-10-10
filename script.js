let currentSlide = 0; // Untuk melacak slide saat ini
let slideInterval; // Untuk menyimpan interval otomatis

function nextSlide() {
    showSlide(currentSlide + 1);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const slideCaptions = document.querySelectorAll('.slide-caption');

    // Sembunyikan semua slide dan caption
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slideCaptions[i].style.display = 'none';
    }

    // Pindahkan ke slide berikutnya atau kembali ke slide pertama jika sudah di slide terakhir
    currentSlide = (n + slides.length) % slides.length;

    // Tampilkan slide dan caption yang sesuai
    slides[currentSlide].style.display = 'block';
    slideCaptions[currentSlide].style.display = 'block';
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000); // Ganti slide setiap 3 detik (3000ms)
}

function stopAutoSlide() {
    clearInterval(slideInterval); // Hentikan interval otomatis
}

// Mulai otomatisasi slider saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    startAutoSlide();
});

// Tambahkan event listener untuk tombol prev dan next
document.querySelector('.prev').addEventListener('click', function () {
    stopAutoSlide(); // Hentikan otomatisasi saat tombol prev diklik
    nextSlide(-1);
});

document.querySelector('.next').addEventListener('click', function () {
    stopAutoSlide(); // Hentikan otomatisasi saat tombol next diklik
    nextSlide(1);
});

// JavaScript
const cards = document.querySelectorAll('.card','.card2');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(card => card.classList.remove('selected'));
        card.classList.add('selected');
    });
});

