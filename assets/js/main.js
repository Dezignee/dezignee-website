/**
 * Dezignee Website - Main JavaScript
 * Handles mobile menu toggle and dynamic year in footer
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only prevent default if it's not just "#"
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});


