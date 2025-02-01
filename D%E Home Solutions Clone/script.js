// Cache elements
const menu = document.getElementById("menu-icon");
const elem = document.getElementById("nav-opt");

// Toggle menu open/close
function toggleMenu() {
    const isOpen = elem.classList.contains("open");
    
    if (isOpen) {
        // Close menu
        document.body.style.overflowY = "visible";
        elem.classList.remove("open");
    } else {
        // Open menu
        document.body.style.overflowY = "hidden";
        elem.classList.add("open");
    }
}

// Attach event listener
