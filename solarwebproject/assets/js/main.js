
function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    
    const now = new Date();
    
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);

    
    const time = now.toLocaleTimeString('en-US', { hour12: false });

    
    dateTimeElement.textContent = `${date} | ${time}`;
}


setInterval(updateDateTime, 1000);


updateDateTime();

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.hero-content h1', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.hero-content p', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        delay: 500
    });
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.banner-text h1', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });

    ScrollReveal().reveal('.banner-text p', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        delay: 500,
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.statistics .stat h3', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });

    ScrollReveal().reveal('.services h2', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });

    ScrollReveal().reveal('.service-card', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        delay: 500,
        interval: 200,
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.content h2', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });

    ScrollReveal().reveal('.content h3', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        delay: 500,
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });

    ScrollReveal().reveal('.content p', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        delay: 800,
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });
});

window.addEventListener("scroll", function () {
    const topArrow = document.querySelector(".top-arrow");
    if (window.scrollY > 100) {
      topArrow.classList.add("show-arrow");
    } else {
      topArrow.classList.remove("show-arrow");
    }
  });
  
  document.querySelector(".top-arrow").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.gallery-section h2', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });

    ScrollReveal().reveal('.gallery-item', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        interval: 200
    });
});

function showNotification() {
    var notification = document.querySelector('.notification');
    notification.classList.add('show');

    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000); 
}

document.addEventListener('DOMContentLoaded', function() {
    var welcomeMessage = document.querySelector('.welcome-message');
    welcomeMessage.classList.add('show');

    setTimeout(function() {
        welcomeMessage.classList.remove('show');
    }, 3000); 
});

document.addEventListener('DOMContentLoaded', function () {
    
    ScrollReveal().reveal('.testimonial-section h2', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });

    ScrollReveal().reveal('.testimonial', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        interval: 200,
        opacity: 0,
        beforeReveal: function (el) {
            el.style.opacity = 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    
    ScrollReveal().reveal('.faq-section h2', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });

    ScrollReveal().reveal('.faq-list li', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        interval: 200,
        opacity: 0,
        beforeReveal: function (el) {
            el.style.opacity = 1;
        }
    });

    
    ScrollReveal().reveal('.pricing-section h2', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        beforeReveal: function (el) {
            el.classList.add('reveal');
        }
    });

    ScrollReveal().reveal('.pricing-card', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        interval: 200,
        opacity: 0,
        beforeReveal: function (el) {
            el.style.opacity = 1;
        }
    });
});

