/**
 * מסעדת בשרים נטו
 * קובץ JavaScript ראשי
 */

// טעינה מקדימה
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('loaded');
    }, 1000);
});

// עדכון שנה נוכחית
document.querySelector('.current-year').textContent = new Date().getFullYear();

// ניווט ותפריט נייד
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// שינוי סגנון כותרת בגלילה
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollTop = document.querySelector('.scroll-top');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        scrollTop.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        scrollTop.classList.remove('active');
    }
    
    // אנימציות בגלילה
    fadeElements();
});

// קטגוריות תפריט
const menuTabs = document.querySelectorAll('.menu-tab');
const menuCategories = document.querySelectorAll('.menu-category');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // הסרת קלאס פעיל מכל הכרטיסיות
        menuTabs.forEach(t => {
            t.classList.remove('active');
        });
        
        // הוספת קלאס פעיל לכרטיסייה שנלחצה
        tab.classList.add('active');
        
        // הצגת הקטגוריה המתאימה
        const targetCategory = tab.getAttribute('data-category');
        
        menuCategories.forEach(category => {
            if (category.getAttribute('data-category') === targetCategory) {
                category.classList.add('active');
            } else {
                category.classList.remove('active');
            }
        });
    });
});

// גלריה מודאל
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryModal = document.querySelector('.gallery-modal');
const modalImg = document.querySelector('.modal-img');
const modalClose = document.querySelector('.modal-close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('.gallery-img').getAttribute('src');
        const imgAlt = item.querySelector('.gallery-img').getAttribute('alt');
        
        modalImg.setAttribute('src', imgSrc);
        modalImg.setAttribute('alt', imgAlt);
        
        galleryModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', closeModal);

galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        closeModal();
    }
});

function closeModal() {
    galleryModal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

// טופס הזמנת שולחן
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // במקרה אמיתי, כאן היית שולח את הטופס לשרת
        alert('תודה שהזמנת שולחן! נחזור אליך בהקדם לאישור ההזמנה.');
        bookingForm.reset();
    });
}

// ניוזלטר
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // במקרה אמיתי, כאן היית שולח את האימייל לשרת
        alert('תודה שנרשמת לניוזלטר שלנו!');
        newsletterForm.reset();
    });
}

// אנימציות גלילה
const fadeElements = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        if (elementPosition < screenHeight - 100) {
            element.classList.add('active');
        }
    });
};

// חזרה למעלה
const scrollTopBtn = document.querySelector('.scroll-top');

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// הוספת קלאס fade-in לאלמנטים שצריכים אנימציה
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // הפעלת אנימציות בטעינה ראשונית
    fadeElements();
});