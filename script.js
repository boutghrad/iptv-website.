// Mobile navigation toggle
document.getElementById("mobileToggle").addEventListener("click", function() {
  document.getElementById("navLinks").classList.toggle("active");
});

// FAQ accordion functionality
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    
    // Hide all page content sections
    document.querySelectorAll(".page-content").forEach(section => {
      section.style.display = "none";
    });
    
    // Show the target section if it exists
    const targetSection = document.querySelector(targetId);
    if (targetSection && targetSection.classList.contains("page-content")) {
      targetSection.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } 
    // Regular anchor scrolling
    else if (targetId !== "#") {
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Highlight active navigation link
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Initialize home page as visible
document.getElementById("home").style.display = "block";

