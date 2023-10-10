// Dapatkan elemen-elemen yang dibutuhkan
const navLinks = document.querySelectorAll('.nav-links a');
const btns = document.querySelectorAll('.btn');
const products = document.querySelectorAll('.product');

// Fungsi untuk menangani klik pada link navigasi
function handleNavLinkClick(event) {
    // Hentikan perilaku default dari tautan
    event.preventDefault();

    // Dapatkan tautan yang diklik
    const clickedLink = event.target;

    // Loop melalui semua tautan dan hapus kelas 'active'
    navLinks.forEach(link => link.classList.remove('active'));

    // Tambahkan kelas 'active' ke tautan yang diklik
    clickedLink.classList.add('active');
}

// Tambahkan event listener untuk setiap tautan navigasi
navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));

// Fungsi untuk menangani klik pada tombol "Buy Now" di produk
function handleBuyNowClick(event) {
    // Dapatkan tombol yang diklik
    const clickedBtn = event.target;

    // Dapatkan elemen produk terkait dengan tombol yang diklik
    const product = clickedBtn.closest('.product');

    // Dapatkan informasi produk
    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('p:last-child').textContent;

    // Tampilkan pesan pembelian sederhana (Anda dapat menggantinya dengan logika yang sesuai)
    alert(`You have purchased ${productName} for ${productPrice}`);
}

// Tambahkan event listener untuk setiap tombol "Buy Now" di produk
btns.forEach(btn => btn.addEventListener('click', handleBuyNowClick));
