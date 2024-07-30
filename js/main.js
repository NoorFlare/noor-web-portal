document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
              link.classList.add('active');
          }
      });
  });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menuFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  // slider
 
  let slideIndex = 0;

  function changeSlide(n) {
      const slides = document.querySelector('.slides');
      const totalSlides = slides.children.length;
      slideIndex += n;
  
      if (slideIndex >= totalSlides) {
          slideIndex = 0;
      } else if (slideIndex < 0) {
          slideIndex = totalSlides - 1;
      }
  
      slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
  
  // Initialize the first slide
  changeSlide(0);
  