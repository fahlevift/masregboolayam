const sliderImages = document.querySelector('.slider-images');
        let currentIndex = 0;

        function showSlide(index) {
            // Menggeser slider ke indeks yang ditentukan
            const slideWidth = sliderImages.offsetWidth;
            sliderImages.style.transform = `translateX(-${slideWidth * index}px)`;
        }

        function prevSlide() {
            // Menampilkan slide sebelumnya
            currentIndex = (currentIndex - 1 + 3) % 3;
            showSlide(currentIndex);
        }

        function nextSlide() {
            // Menampilkan slide berikutnya
            currentIndex = (currentIndex + 1) % 3;
            showSlide(currentIndex);
        }

        // Tampilkan slide pertama saat halaman dimuat
        showSlide(currentIndex);