```javascript
// ===============================
// SMOOTH SCROLL ACTIVE MENU
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href").includes(current)
        ) {
            link.classList.add("active");
        }

    });

});

// ===============================
// TYPEWRITER EFFECT
// ===============================

const text =
".NET Full Stack Developer";

let index = 0;

const roleElement =
document.querySelector(".role");

function typeWriter() {

    if (!roleElement) return;

    if (index < text.length) {

        roleElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);

    }
}

if (roleElement) {

    roleElement.innerHTML = "";

    typeWriter();
}

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{
threshold: 0.15
}

);

const hiddenElements =
document.querySelectorAll(
".skill-card, .project-card, .timeline-item, .list-item, .contact-card"
);

hiddenElements.forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});

// ===============================
// DARK / LIGHT MODE
// ===============================

const themeButton =
document.createElement("button");

themeButton.innerHTML = "🌙";

themeButton.className = "theme-toggle";

document.body.appendChild(themeButton);

themeButton.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if (
document.body.classList.contains("light-mode")
) {

themeButton.innerHTML = "☀️";

} else {

themeButton.innerHTML = "🌙";

}

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "back-to-top";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

topBtn.classList.add("show-btn");

}
else {

topBtn.classList.remove("show-btn");

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,
behavior: "smooth"

});

});

// ===============================
// PARTICLE EFFECT
// ===============================

const hero =
document.querySelector(".hero");

if(hero){

for(let i = 0; i < 30; i++){

let particle =
document.createElement("span");

particle.classList.add("particle");

particle.style.left =
Math.random() * 100 + "%";

particle.style.animationDelay =
Math.random() * 5 + "s";

hero.appendChild(particle);

}

}

// ===============================
// CURRENT YEAR FOOTER
// ===============================

const footer =
document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Sushmita Borade | .NET Full Stack Developer`;

}
```
