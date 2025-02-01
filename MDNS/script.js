document.addEventListener("DOMContentLoaded", () => {
    // Select all sections based on their IDs (the <h2> tags)
    const sections = document.querySelectorAll("h2"); // We are observing the <h2> tags in your content
    const navLinks = document.querySelectorAll(".right .divisions a"); // Navigation links are inside .right .divisions
  
    // Intersection Observer Options
    const options = {
      root: null, // This means the viewport will be used as the root for the intersection
      threshold: 0.6, // 60% of the section must be visible for the event to trigger
    };
  
    // Intersection Observer Callback
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove active class from all links
          navLinks.forEach((link) => link.classList.remove("active"));
  
          // Add active class to the link corresponding to the visible section
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`.right .divisions a[href="#${id}"]`);
          if (link) {
            link.classList.add("active");
          }
        }
      });
    }, options);
  
    // Observe each section (h2 tags in this case)
    sections.forEach((section) => observer.observe(section));
  });
  