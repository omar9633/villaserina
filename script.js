// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav').classList.remove('active');
    });
});

// Menu Filtering
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        const menuItems = document.querySelectorAll('.menu-item');
        
        menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});