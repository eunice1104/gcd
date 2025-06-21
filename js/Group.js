document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });


    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message! Nous vous contacterons bientôt.');
            this.reset();
        });
    }


    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (cardPosition < screenPosition) {
                card.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
    
    window.addEventListener('scroll', function() {
        const section= document.querySelectorAll('section [id]');
        const navLinks = document.querySelectorAll('navbar-nav .nav-link');
        section.forEach(section=> {
            const sectionTop= section.offsetTop;
            const sectionHeight = section.clientHeight; 
             if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight -100) {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active','text-white');
                    if (link.getAttribute('href') === '#${id}') {
                        link.classList.add('active','text-white');
                    }
                });
             }
        })
    });
});


