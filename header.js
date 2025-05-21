document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    function toggleMenu() {
        // Only toggle if screen is mobile size
        if (window.innerWidth <= 768) {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Animate links
            links.forEach((link, index) => {
                if (navLinks.classList.contains('active')) {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                } else {
                    link.style.animation = '';
                }
            });
        }
    }

    function closeMenu() {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            links.forEach(link => {
                link.style.animation = '';
            });
        }
    }

    // Initialize menu state based on screen size
    function handleResize() {
        if (window.innerWidth > 768) {
            // Desktop - ensure menu is visible
            navLinks.classList.add('active');
            hamburger.classList.remove('active');
        } else {
            // Mobile - ensure menu is hidden initially
            navLinks.classList.remove('active');
        }
    }

    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Handle window resize
    window.addEventListener('resize', handleResize);

    // Initialize on load
    handleResize();
});