/*=========================================
MEGNA GROUP
Luxury Portfolio
=========================================*/


// ===========================
// LOADER
// ===========================

const loader = document.querySelector("#loader");

function hideLoader() {
    if (!loader) return;

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.pointerEvents = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(hideLoader, 400);
});

// Safety: loader kabhi permanently stuck na ho
setTimeout(hideLoader, 3000);


// ===========================
// SCROLL PROGRESS BAR
// ===========================

const progress = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    if (!progress) return;

    const winScroll = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

    progress.style.width = scrolled + "%";
});


// ===========================
// TYPING EFFECT
// ===========================

const typing = document.getElementById("typing");

const words = [
    "Graphic Designer",
    "Meta Ads Expert",
    "Shopify Designer",
    "Creative Director"
];

let wordIndex = 0;
let letterIndex = 0;
let remove = false;

function type() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!remove) {

        typing.textContent = current.substring(0, letterIndex++);

        if (letterIndex > current.length) {

            remove = true;

            setTimeout(type, 1300);

            return;
        }

    } else {

        typing.textContent = current.substring(0, letterIndex--);

        if (letterIndex < 0) {

            remove = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(type, 100);
}

type();


// ===========================
// CUSTOM CURSOR
// ===========================

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });
}


// ===========================
// LENIS SMOOTH SCROLL
// ===========================

if (typeof Lenis !== "undefined") {

    const lenis = new Lenis({
        duration: 1.4,
        smoothWheel: true
    });

    function raf(time) {

        lenis.raf(time);

        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}


// ===========================
// GSAP ANIMATIONS
// ===========================

if (typeof gsap !== "undefined") {

    gsap.from(".hero-left", {
        y: 120,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out"
    });

    gsap.from(".portrait-card", {
        x: 150,
        opacity: 0,
        duration: 1.8,
        delay: 0.4,
        ease: "expo.out"
    });

    if (typeof ScrollTrigger !== "undefined") {

        gsap.utils.toArray("section").forEach(sec => {

            gsap.from(sec, {
                opacity: 0,
                y: 120,
                duration: 1,
                scrollTrigger: {
                    trigger: sec,
                    start: "top 80%"
                }
            });

        });
    }
}


// ===========================
// HERO STATS COUNTER
// ===========================

document.querySelectorAll(".hero-stats h3").forEach(counter => {

    let target = parseInt(counter.innerText);

    if (isNaN(target)) return;

    let count = 0;
    let speed = target / 100;

    function update() {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count) + "+";

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }
    }

    update();

});


// ===========================
// ACTIVE NAVIGATION
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(sec => {

        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;

        if (
            top >= offset &&
            top < offset + height
        ) {

            current = sec.getAttribute("id");

        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ==================================================
// PORTFOLIO CATEGORY FILTER
// ==================================================

const portfolioFilters =
    document.querySelectorAll(".portfolio-filter button");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");


portfolioFilters.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.getAttribute("data-filter");


        // Remove active from all buttons
        portfolioFilters.forEach(btn => {
            btn.classList.remove("active");
        });


        // Add active to clicked button
        button.classList.add("active");


        // Show / hide projects
        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "";

                // Small animation
                item.style.opacity = "0";

                setTimeout(() => {
                    item.style.opacity = "1";
                }, 50);

            } else {

                item.style.display = "none";

            }

        });

    });

});


// ==================================================
// PORTFOLIO SAMPLE IMAGE OPEN
// ==================================================

portfolioItems.forEach(item => {

    const link =
        item.querySelector(".portfolio-overlay a");

    const image =
        item.querySelector("img");


    if (link && image) {

        const imageSource =
            image.getAttribute("src");


        if (imageSource) {

            link.href = imageSource;

            link.target = "_blank";

            link.rel = "noopener noreferrer";

        }

    }

});


// ==================================================
// SMOOTH SCROLL FOR PORTFOLIO NAVIGATION
// ==================================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
