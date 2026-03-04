// Animation on scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Trigger initial reveal
document.addEventListener("DOMContentLoaded", function() {
  reveal();
  
  // Update year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Navbar bg on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.querySelector('.navbar').classList.add('shadow-sm');
    } else {
      document.querySelector('.navbar').classList.remove('shadow-sm');
    }
  });
});
