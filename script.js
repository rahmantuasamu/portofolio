// Interaksi & Fungsionalitas Tombol Menu Navigasi (Hamburger Menu)
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        // Toggle menu saat ikon tiga garis diklik
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Ubah ikon dari garis tiga (bars) ke tanda silang (times) dan sebaliknya
            const icon = mobileMenu.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Tutup menu otomatis saat salah satu link diklik di HP
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    console.log("Portofolio Rahman Mofnis siap dan berjalan optimal.");
});