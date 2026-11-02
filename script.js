document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.textContent = '☰';
        });
    });

    // 2. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 3. Newsletter Form Handling (Simulation)
    const form = document.getElementById('newsletter-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button');
        const originalText = submitBtn.textContent;
        
        // Loading state
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            formMessage.textContent = 'Welcome to the NYC Insider! Check your inbox for the free PDF guide. 🗽';
            formMessage.style.color = '#4ade80';
            formMessage.style.marginTop = '1rem';
            formMessage.style.fontWeight = '500';
            
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            setTimeout(() => { formMessage.textContent = ''; }, 6000);
        }, 1500);
    });
});