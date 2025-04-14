// Mobil menü için burger menü fonksiyonları
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Menüyü aç/kapat
    nav.classList.toggle('active');
    
    // Burger animasyonu
    burger.classList.toggle('toggle');
    
    // Link animasyonları
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form gönderimi
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Form verilerini al
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Burada form verilerini işleyebilir veya bir API'ye gönderebilirsiniz
    console.log('Form data:', data);
    
    // Formu temizle
    contactForm.reset();
    
    // Başarı mesajı göster
    alert('Thank you for your message! I will get back to you soon.');
}); 