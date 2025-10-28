// document.addEventListener("DOMContentLoaded", function() {
//   const sections = document.querySelectorAll(".section");
//   const navLinks = document.querySelectorAll(".nav-link");

//   navLinks.forEach(link => {
//       link.addEventListener("click", function(e) {
//           e.preventDefault();

//           // Hide all sections and remove active class
//           sections.forEach(section => section.classList.remove("active"));
//           navLinks.forEach(link => link.classList.remove("active"));

//           // Get the section ID from href
//           const targetId = this.getAttribute("href").substring(1);
//           const targetSection = document.getElementById(targetId);

//           // Show selected section
//           if (targetSection) {
//               targetSection.classList.add("active");
//           }

//           // Highlight active navbar item
//           this.classList.add("active");
//       });
//   });
// });
