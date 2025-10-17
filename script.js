// ===================================
// Mobile Navigation Toggle
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// ===================================
// Smooth Scrolling for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for actual hash links, not just "#"
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Form Validation (Login Page)
// ===================================

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const role = document.getElementById('role').value;
        
        // Basic validation
        if (!email || !password || !role) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate login and redirect
        showNotification('Logging in...', 'success');
        
        // Redirect based on role
        setTimeout(() => {
            const roleRoutes = {
                'executive': 'executive-dashboard.html',
                'franchise': 'franchise-portal.html',
                'store': 'store-portal.html',
                'warehouse': 'warehouse-portal.html',
                'author': 'author-portal.html',
                'publishing': 'publishing-portal.html'
            };
            
            if (roleRoutes[role]) {
                window.location.href = roleRoutes[role];
            }
        }, 1000);
    });
}

// ===================================
// Email Validation Helper
// ===================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===================================
// Notification System
// ===================================

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Interactive Dashboard Elements
// ===================================

// Add click handlers to dashboard buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Only handle if it's not a link
        if (this.tagName !== 'A' && !this.closest('form')) {
            e.preventDefault();
            const buttonText = this.textContent.trim();
            showNotification(`"${buttonText}" feature - Demo mode`, 'info');
        }
    });
});

// ===================================
// Table Row Highlighting
// ===================================

document.querySelectorAll('table tbody tr').forEach(row => {
    row.addEventListener('click', function() {
        // Remove highlight from other rows in the same table
        const table = this.closest('table');
        table.querySelectorAll('tbody tr').forEach(r => {
            r.style.background = '';
        });
        
        // Highlight clicked row
        this.style.background = 'rgba(99, 102, 241, 0.1)';
        this.style.transition = 'background 0.3s ease';
    });
});

// ===================================
// Portal Card Interactions
// ===================================

document.querySelectorAll('.portal-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===================================
// Feature Card Animations
// ===================================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card, .content-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===================================
// Search Functionality (Demo)
// ===================================

function initializeSearch() {
    const searchInputs = document.querySelectorAll('input[type="search"], input[placeholder*="search" i]');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Searching for:', searchTerm);
            // In a real implementation, this would filter results
        });
    });
}

initializeSearch();

// ===================================
// Date/Time Display
// ===================================

function updateDateTime() {
    const dateElements = document.querySelectorAll('.current-date, .current-time');
    
    if (dateElements.length > 0) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        
        dateElements.forEach(element => {
            element.textContent = now.toLocaleDateString('en-US', options);
        });
    }
}

updateDateTime();
setInterval(updateDateTime, 60000); // Update every minute

// ===================================
// Print Functionality
// ===================================

function printPage() {
    window.print();
}

// Add print button handlers
document.querySelectorAll('[data-action="print"]').forEach(button => {
    button.addEventListener('click', printPage);
});

// ===================================
// Keyboard Shortcuts
// ===================================

document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// ===================================
// Loading State Simulation
// ===================================

function simulateLoading(button, duration = 2000) {
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Loading...';
    button.style.opacity = '0.6';
    
    setTimeout(() => {
        button.disabled = false;
        button.textContent = originalText;
        button.style.opacity = '1';
        showNotification('Action completed successfully', 'success');
    }, duration);
}

// ===================================
// Data Refresh Simulation
// ===================================

function refreshData() {
    showNotification('Refreshing data...', 'info');
    
    // Simulate data refresh
    setTimeout(() => {
        showNotification('Data updated successfully', 'success');
        
        // Add a subtle animation to stat cards
        document.querySelectorAll('.stat-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'pulse 0.5s ease';
            }, index * 100);
        });
    }, 1500);
}

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.02);
        }
    }
`;
document.head.appendChild(pulseStyle);

// ===================================
// Console Welcome Message
// ===================================

console.log('%c🌈 Brainbow Book Management System', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cWelcome to the Brainbow prototype!', 'font-size: 14px; color: #6b7280;');
console.log('%cThis is a demo system. All data is simulated.', 'font-size: 12px; color: #9ca3af;');

// ===================================
// Export Functions for External Use
// ===================================

window.brainbow = {
    showNotification,
    simulateLoading,
    refreshData,
    printPage
};


