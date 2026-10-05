// --- PAGE SWITCHING FUNCTIONALITY ---
function switchPage(pageId) {
    // 1. Hide all page sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });

    // 2. Remove 'active' class from all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Show the target page section
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }

    // 4. Highlight the corresponding navigation link
    const targetNav = document.getElementById('nav-' + pageId);
    if (targetNav) {
        targetNav.classList.add('active');
    }

    // 5. Smoothly scroll back to the very top of the window
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// --- SMOOTH SCROLL TO SCROLLABLE CHAPTERS (FROM HERO BUTTON) ---
function scrollToScrollContent() {
    const firstChapter = document.querySelector('.massive-scroll-wrapper');
    if (firstChapter) {
        firstChapter.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
}

// --- SECRET VAULT INTERACTIVE LETTERS ---
function openLetter(letterType) {
    if (letterType === 'When you miss me') {
        alert("💌 Secret Letter: \n\nMy love, whenever you miss me terribly, place your hand over your heart. I am right there inside it. Distance cannot diminish what is written in the stars for us.");
    } 
    else if (letterType === 'When you are stressed') {
        alert("🛡️ Secret Letter: \n\nTake a deep breath, my soulmate. Whatever is bothering you right now is temporary. You are the strongest person I know, and I am always rooting for you across the miles!");
    } 
    else if (letterType === 'Before you sleep') {
        alert("🌙 Secret Letter: \n\nClose your eyes and imagine I am holding you tight right now. You are my last thought before I fall asleep and my first thought when I wake up. Sweet dreams, my universe.");
    }
}

// --- LIVE COUNTDOWN TICKER EFFECT (OPTIONAL TOUCH) ---
document.addEventListener("DOMContentLoaded", () => {
    let secsElem = document.getElementById("cd-secs");
    if (secsElem) {
        setInterval(() => {
            let currentSecs = parseInt(secsElem.innerText);
            if (currentSecs > 0) {
                secsElem.innerText = currentSecs - 1;
            } else {
                secsElem.innerText = 59;
            }
        }, 1000);
    }
});