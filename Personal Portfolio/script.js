const homeGreeting = document.getElementById("home-cont");
const globalHeader = document.getElementById("global-header")
const aboutCards = document.getElementById("about-cards")
const cvBtn = document.getElementById("cv-btn")

window.onload = setTimeout(()=> {
    homeGreeting.style.opacity = "100%"
    homeGreeting.style.transform = "translateY(0)";
    aboutCards.style.opacity = "100%"
    aboutCards.style.transform = "translateY(0)";
    setTimeout(()=> {
        globalHeader.style.opacity = "100%"
        cvBtn.style.opacity = "100%"
        cvBtn.style.transform = "translateY(0)";
    }, 1000)

}, 500)

function nextPage(el) {
    window.location.href=`#${el}`
}