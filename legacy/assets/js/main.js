/**
 * Dezignee Website - Main JavaScript
 * Handles mobile menu toggle, smooth scrolling, and dynamic interactions
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navActions = document.querySelector('.nav-actions');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Show/hide nav actions on mobile
            if (window.innerWidth <= 768) {
                if (navActions) {
                    navActions.classList.toggle('mobile-active');
                    if (!navMenu.classList.contains('active')) {
                        navActions.classList.remove('mobile-active');
                    }
                }
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                if (navActions) {
                    navActions.classList.remove('mobile-active');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || 
                                    navToggle.contains(event.target) ||
                                    (navActions && navActions.contains(event.target));
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                if (navActions) {
                    navActions.classList.remove('mobile-active');
                }
            }
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
            // Only prevent default if it's not just "#" or empty
            if (href && href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add scroll effect to header
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 6px -1px rgba(26, 52, 83, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgba(26, 52, 83, 0.05)';
        }
        
        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('.workflow-section, .mcp-section, .editor-section, .audience-section, .features-grid-section, .pricing-section, .cta-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu) {
            navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
            if (navActions) navActions.classList.remove('mobile-active');
        }
    });
});
