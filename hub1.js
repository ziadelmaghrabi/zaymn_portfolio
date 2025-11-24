// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// Typing Animation
const text =
"My name is Ziad Ayman Abdalla Elmaghraby, a passionate Front-End Developer skilled in HTML, CSS, JavaScript, and React. I also have strong experience in C++, Java, Python, and OOP.";

let i = 0;
const typingText = document.getElementById("typing-text");
const aboutSection = document.querySelector(".about-container");
let started = false;

function type() {
  if (i < text.length) {
    typingText.textContent += text[i];
    i++;
    setTimeout(type, 25);
  }
}

aboutSection.addEventListener("mouseenter", () => {
  if (!started) {
    started = true;
    type();
  }
});
