// Global variables
let isScrolled = false;
let activeTab = 'home';
let isMenuOpen = false;
let daysLeft = 14;
let showNotification = false;
let notificationMessage = '';
let scrollY = 0;

// DOM elements
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMobile = document.getElementById('navMobile');
const notification = document.getElementById('notification');
const notificationMessageEl = document.getElementById('notificationMessage');
const countdownEl = document.getElementById('countdown');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    setupHeader();
    setupMobileMenu();
    setupParallax();
    setupAnimations();
    setupContactForm();
    setupFAQ();
    setupImageLoading();
    setupScrollEffects();
    setupCountdownTimer();
    setupNotifications();
    setupProductCategories();
}

// Event Listeners
function setupEventListeners() {
    // Scroll event for header
    window.addEventListener('scroll', handleScroll);
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Button click handlers
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', handleButtonClick);
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Parallax effect for hero background
    window.addEventListener('scroll', handleParallax);
}

// Scroll handling
function handleScroll() {
    scrollY = window.scrollY;
    
    // Header scroll effect
    if (scrollY > 50 && !isScrolled) {
        isScrolled = true;
        header.classList.add('scrolled');
    } else if (scrollY <= 50 && isScrolled) {
        isScrolled = false;
        header.classList.remove('scrolled');
    }
    
    // Update active navigation
    updateActiveNavigation();
    
    // Trigger scroll animations
    triggerScrollAnimations();
}

// Parallax effect
function handleParallax() {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroBg.style.transform = `translateY(${rate}px)`;
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        navMobile.classList.add('show');
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        navMobile.classList.remove('show');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

// Navigation click handler
function handleNavClick(e) {
    const target = e.target.getAttribute('href');
    if (target) {
        activeTab = target.replace('#', '');
        updateActiveNavigation();
        
        // Close mobile menu if open
        if (isMenuOpen) {
            toggleMobileMenu();
        }
    }
}

// Update active navigation
function updateActiveNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find current section
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update active link
    const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Scroll animations
function setupScrollAnimations() {
    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
        element.classList.add('animate-on-scroll');
    });
}

function triggerScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        
        if (isVisible) {
            element.classList.add('animate-fade-in');
        }
    });
}

// Button click handler
function handleButtonClick(e) {
    const action = e.target.textContent || e.target.innerText;
    
    // Show notification
    showNotificationMessage(`Thank you for your interest! ${action} feature is coming soon.`);
    
    // Add click animation
    e.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        e.target.style.transform = '';
    }, 150);
}

// Newsletter form handler
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    if (email) {
        showNotificationMessage('Thank you for subscribing to our newsletter!');
        e.target.reset();
    }
}

// Countdown timer
function updateCountdown() {
    if (countdownEl) {
        countdownEl.textContent = `${daysLeft} Days Remaining`;
    }
}

function startCountdownTimer() {
    setInterval(() => {
        if (daysLeft > 0) {
            daysLeft--;
            updateCountdown();
        }
    }, 86400000); // 24 hours in milliseconds
}

// Notification system
function showNotificationMessage(message) {
    notificationMessage = message;
    notificationMessageEl.textContent = message;
    
    notification.classList.add('show');
    showNotification = true;
    
    setTimeout(() => {
        hideNotification();
    }, 3000);
}

function hideNotification() {
    notification.classList.remove('show');
    showNotification = false;
}

// Product bars animation
function animateProductBars() {
    const bars = document.querySelectorAll('.bar-inner');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.style.width || '0%';
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        }, index * 200);
    });
}

// Testimonial cards hover effect
function setupTestimonialHover() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Image lazy loading
function setupLazyLoading() {
    const images = document.querySelectorAll('img[src*="readdy.ai"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.onload = function() {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Smooth reveal animations
function setupRevealAnimations() {
    const revealElements = document.querySelectorAll('.product-content, .limited-content, .testimonials-cards');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(element);
    });
}

// Floating animation for hero elements
function setupFloatingAnimation() {
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description');
    
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        element.style.animationFillMode = 'both';
    });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    // Wait for images to load
    setTimeout(() => {
        setupTestimonialHover();
        setupLazyLoading();
        setupRevealAnimations();
        setupFloatingAnimation();
        animateProductBars();
    }, 1000);
});

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce scroll events for better performance
const debouncedScroll = debounce(handleScroll, 10);
window.addEventListener('scroll', debouncedScroll);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Add CSS for loading state
const loadingStyles = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded) .hero-content {
        opacity: 0;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);

// 画像fade-in
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
    if (img.complete) img.classList.add('loaded');
  });
});

// パララックス効果（background-attachment: fixed;は使わない）
window.addEventListener('scroll', function() {
  const y = window.scrollY;
  document.querySelectorAll('.hero-bg, .limited-bg').forEach(el => {
    el.style.transform = `translateY(${y * 0.3}px)`;
  });
});

// Header functionality
function setupHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Active navigation link highlighting
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Mobile menu functionality
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMobile = document.getElementById('navMobile');
  
  if (!mobileMenuBtn || !navMobile) return;

  mobileMenuBtn.addEventListener('click', function() {
    navMobile.classList.toggle('show');
    
    // Change icon
    const icon = mobileMenuBtn.querySelector('i');
    if (navMobile.classList.contains('show')) {
      icon.className = 'fas fa-times';
    } else {
      icon.className = 'fas fa-bars';
    }
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = navMobile.querySelectorAll('.nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMobile.classList.remove('show');
      const icon = mobileMenuBtn.querySelector('i');
      icon.className = 'fas fa-bars';
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!mobileMenuBtn.contains(event.target) && !navMobile.contains(event.target)) {
      navMobile.classList.remove('show');
      const icon = mobileMenuBtn.querySelector('i');
      icon.className = 'fas fa-bars';
    }
  });
}

// Parallax effect
function setupParallax() {
  const parallaxElements = document.querySelectorAll('.hero-bg, .limited-bg, .contact-bg, .error-bg');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const rate = scrolled * -0.5;
      element.style.transform = `translateY(${rate}px)`;
    });
  });
}

// Scroll animations
function setupAnimations() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animateElements.forEach(element => {
    observer.observe(element);
  });
}

// Contact form functionality
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      showNotification('すべての必須項目を入力してください。', 'error');
      return;
    }
    
    if (!data.privacy) {
      showNotification('プライバシーポリシーに同意してください。', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showNotification('有効なメールアドレスを入力してください。', 'error');
      return;
    }
    
    // Simulate form submission
    showNotification('お問い合わせを送信中...', 'info');
    
    setTimeout(() => {
      showNotification('お問い合わせを送信しました。ありがとうございます。', 'success');
      contactForm.reset();
    }, 2000);
  });
}

// FAQ accordion functionality
function setupFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Image loading with fade-in effect
function setupImageLoading() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Set initial opacity to 0
    img.style.opacity = '0';
    
    // When image loads, fade it in
    img.addEventListener('load', function() {
      img.style.opacity = '1';
    });
    
    // If image is already loaded (cached), show it immediately
    if (img.complete) {
      img.style.opacity = '1';
    }
    
    // Error handling
    img.addEventListener('error', function() {
      console.warn('Image failed to load:', img.src);
      // You could set a fallback image here
      img.style.opacity = '1';
    });
  });
}

// Scroll effects
function setupScrollEffects() {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll to top functionality
  const scrollIndicator = document.querySelector('.hero-scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      const nextSection = document.querySelector('.product-concept');
      if (nextSection) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = nextSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
}

// Countdown timer for limited edition
function setupCountdownTimer() {
  const countdownElement = document.querySelector('.countdown-timer');
  if (!countdownElement) return;

  // Set target date (30 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      countdownElement.innerHTML = '<span class="expired">Limited Edition Ended</span>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
      <div class="countdown-item">
        <span class="countdown-number">${days}</span>
        <span class="countdown-label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">${hours}</span>
        <span class="countdown-label">Hours</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">${minutes}</span>
        <span class="countdown-label">Minutes</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">${seconds}</span>
        <span class="countdown-label">Seconds</span>
      </div>
    `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Notification system
function setupNotifications() {
  // Create notification container if it doesn't exist
  if (!document.querySelector('.notification-container')) {
    const container = document.createElement('div');
    container.className = 'notification-container';
    document.body.appendChild(container);
  }
}

function showNotification(message, type = 'info') {
  const container = document.querySelector('.notification-container');
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;

  // Add icon based on type
  let icon = '';
  switch (type) {
    case 'success':
      icon = '<i class="fas fa-check-circle"></i>';
      break;
    case 'error':
      icon = '<i class="fas fa-exclamation-circle"></i>';
      break;
    case 'warning':
      icon = '<i class="fas fa-exclamation-triangle"></i>';
      break;
    default:
      icon = '<i class="fas fa-info-circle"></i>';
  }

  notification.innerHTML = `${icon} ${message}`;
  container.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);

  // Remove notification after 5 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Button click handlers
function handleButtonClick(action) {
  switch (action) {
    case 'Reservation':
      showNotification('予約システムにリダイレクトしています...', 'info');
      setTimeout(() => {
        window.open('contact.html', '_blank');
      }, 1000);
      break;
    case 'Learn More':
      const aboutSection = document.querySelector('.product-concept');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
      break;
    case 'Order Now':
      showNotification('注文ページにリダイレクトしています...', 'info');
      setTimeout(() => {
        window.open('products.html', '_blank');
      }, 1000);
      break;
    default:
      console.log('Button clicked:', action);
  }
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Enhanced scroll handling with throttling
const throttledScrollHandler = throttle(function() {
  // Update header
  const header = document.getElementById('header');
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Update parallax
  const parallaxElements = document.querySelectorAll('.hero-bg, .limited-bg, .contact-bg, .error-bg');
  const scrolled = window.pageYOffset;
  
  parallaxElements.forEach(element => {
    const rate = scrolled * -0.5;
    element.style.transform = `translateY(${rate}px)`;
  });
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Resize handler
const debouncedResizeHandler = debounce(function() {
  // Handle responsive adjustments
  const isMobile = window.innerWidth <= 768;
  
  // Update mobile menu state
  const navMobile = document.getElementById('navMobile');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  
  if (navMobile && mobileMenuBtn && !isMobile) {
    navMobile.classList.remove('show');
    const icon = mobileMenuBtn.querySelector('i');
    if (icon) {
      icon.className = 'fas fa-bars';
    }
  }
}, 250);

window.addEventListener('resize', debouncedResizeHandler);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  // Escape key closes mobile menu
  if (e.key === 'Escape') {
    const navMobile = document.getElementById('navMobile');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (navMobile && navMobile.classList.contains('show')) {
      navMobile.classList.remove('show');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.className = 'fas fa-bars';
      }
    }
  }
});

// Performance optimization: Use requestAnimationFrame for smooth animations
function smoothScrollTo(targetPosition) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  function animation(currentTime) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Export functions for global access
window.handleButtonClick = handleButtonClick;
window.showNotification = showNotification;

// Product Categories Filtering
function setupProductCategories() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const productCards = document.querySelectorAll('.product-card');
    
    console.log('Setting up product categories:', categoryTabs.length, 'tabs found');
    console.log('Product cards found:', productCards.length);
    
    if (categoryTabs.length === 0) {
        console.log('No category tabs found');
        return;
    }
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const selectedCategory = this.getAttribute('data-category');
            console.log('Category clicked:', selectedCategory);
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            filterProducts(selectedCategory, productCards);
        });
    });
}

function filterProducts(category, productCards) {
    console.log('Filtering products for category:', category);
    
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        console.log('Card category:', cardCategory, 'for card:', card.querySelector('h3')?.textContent);
        
        if (category === 'all' || cardCategory === category) {
            // Show product with animation
            card.style.display = 'block';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        } else {
            // Hide product with animation
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '0';
            card.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    // Add staggered animation for visible products
    const visibleCards = Array.from(productCards).filter(card => {
        const cardCategory = card.getAttribute('data-category');
        return category === 'all' || cardCategory === category;
    });
    
    console.log('Visible cards:', visibleCards.length);
    
    visibleCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Visit Form Handling
document.addEventListener('DOMContentLoaded', function() {
  const visitForm = document.querySelector('.visit-form');
  
  if (visitForm) {
    visitForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(visitForm);
      const data = Object.fromEntries(formData);
      
      // Validate form
      if (validateVisitForm(data)) {
        // Show success message
        showNotification('Votre demande de réservation a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais.', 'success');
        visitForm.reset();
      }
    });
  }
});

// Contact Form Enhanced Validation
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Validate form
      if (validateContactForm(data)) {
        // Show success message
        showNotification('Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.', 'success');
        contactForm.reset();
      }
    });
  }
});

// Enhanced Form Validation Functions
function validateVisitForm(data) {
  const errors = [];
  
  if (!data.visitName || data.visitName.trim().length < 2) {
    errors.push('Le nom complet est requis (minimum 2 caractères)');
  }
  
  if (!data.visitEmail || !isValidEmail(data.visitEmail)) {
    errors.push('Une adresse email valide est requise');
  }
  
  if (!data.visitDate) {
    errors.push('La date de visite est requise');
  } else {
    const selectedDate = new Date(data.visitDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      errors.push('La date de visite ne peut pas être dans le passé');
    }
  }
  
  if (!data.visitTime) {
    errors.push('L\'heure de visite est requise');
  }
  
  if (!data.visitGuests || data.visitGuests < 1 || data.visitGuests > 20) {
    errors.push('Le nombre de personnes doit être entre 1 et 20');
  }
  
  if (errors.length > 0) {
    showNotification(errors.join('\n'), 'error');
    return false;
  }
  
  return true;
}

function validateContactForm(data) {
  const errors = [];
  
  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.push('Le prénom est requis (minimum 2 caractères)');
  }
  
  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.push('Le nom est requis (minimum 2 caractères)');
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Une adresse email valide est requise');
  }
  
  if (!data.subject) {
    errors.push('Veuillez sélectionner un sujet');
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères');
  }
  
  if (!data.privacy) {
    errors.push('Vous devez accepter la politique de confidentialité');
  }
  
  if (errors.length > 0) {
    showNotification(errors.join('\n'), 'error');
    return false;
  }
  
  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Enhanced Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMobile = document.getElementById('navMobile');
  
  if (mobileMenuBtn && navMobile) {
    mobileMenuBtn.addEventListener('click', function() {
      navMobile.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
      
      // Toggle icon
      const icon = mobileMenuBtn.querySelector('i');
      if (navMobile.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });
    
    // Close menu when clicking on a link
    const mobileLinks = navMobile.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
      });
    });
  }
});

// Enhanced Scroll Effects
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header scroll effect
  const header = document.getElementById('header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
});

// Enhanced Product Filtering (if exists)
document.addEventListener('DOMContentLoaded', function() {
  const categoryTabs = document.querySelectorAll('.category-tab');
  const productCards = document.querySelectorAll('.product-card');
  
  if (categoryTabs.length > 0 && productCards.length > 0) {
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Update active tab
        categoryTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Filter products
        productCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
});

// Enhanced Countdown Timer (if exists)
document.addEventListener('DOMContentLoaded', function() {
  const countdownElement = document.querySelector('.countdown');
  
  if (countdownElement) {
    // Set target date (example: 30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      countdownElement.innerHTML = `
        <div class="countdown-item">
          <span class="countdown-number">${days}</span>
          <span class="countdown-label">Jours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${hours}</span>
          <span class="countdown-label">Heures</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${minutes}</span>
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${seconds}</span>
          <span class="countdown-label">Secondes</span>
        </div>
      `;
      
      if (distance < 0) {
        countdownElement.innerHTML = '<div class="countdown-expired">Offre expirée</div>';
      }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
});

// Enhanced Image Loading
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
});

// Enhanced Parallax Effect
document.addEventListener('DOMContentLoaded', function() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}); 