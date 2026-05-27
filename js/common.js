// Nav Menu
const nav = document.querySelector("nav");
nav.innerHTML = `
<div class="nav-container">
        <!-- Add mobile menu toggle button -->
        <div
          class="mobile-menu-toggle"
          id="mobileMenuToggle"
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul id="navMenu">
          <li><a href="./index.html" class="active">Home</a></li>
          <li><a href="./resume.html">Resume</a></li>
          <li><a href="./contacts.html">Contacts</a></li>
          <li><a href="./projects.html">Projects</a></li>
        </ul>
        <div class="theme-toggle">
          <button
            id="themeBtn"
            onclick="changeTheme();"
            aria-label="Toggle theme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4em"
              height="1.4em"
              fill="currentColor"
              class="bi bi-braces"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"
              />
            </svg>
          </button>
        </div>
      </div>
`
// Banner
const banner = document.querySelector("header");
banner.innerHTML = `
  <img
    src="./img/engin-akyurt-vJ0zS3nfmwU-unsplash-removebg-preview.png"
    alt="subject"
    id="subject"
  />
  <a href="./index.html"><h1>Home</h1></a>
  <div id="banner"></div>
`
document.querySelector("h1").textContent = document.title;

// Mobile menu toggle functionality
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");

mobileMenuToggle.addEventListener("click", function () {
  mobileMenuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Function to change theme (placeholder for existing theme function)
const themeToggleBtn = document.querySelector('.theme-toggle button');
const root = document.documentElement;
const LIGHT = {
  '--text-color':           '#1a1a1a',
  '--gold-color':           '#a0720a',
  '--bg-color':             '#f5f0e8',
  '--bg-gradient-top':      '#f0ebe0',
  '--bg-gradient-bottom':   '#f5f0e8',
  '--card-text':            '#333333',
  '--card-bg':              'rgba(255,248,235,0.9)',
  '--card-hover':           'rgba(255,244,220,0.95)',
  '--accent-color':         '#a0720a',
};
const DARK = {
  '--text-color':           'whitesmoke',
  '--gold-color':           'darkgoldenrod',
  '--bg-color':             '#151515',
  '--bg-gradient-top':      '#181c14',
  '--bg-gradient-bottom':   '#151515',
  '--card-text':            '#e0e0e0',
  '--card-bg':              'rgba(24,24,24,0.8)',
  '--card-hover':           'rgba(30,30,30,0.9)',
  '--accent-color':         'darkgoldenrod',
};

let isDark = true;

themeToggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  const vars = isDark ? DARK : LIGHT;
  for (const [prop, val] of Object.entries(vars)) {
    root.style.setProperty(prop, val);
  }
  // Swap icon
  // const icon = themeToggleBtn.querySelector('svg');
  // (replace with your existing sun/moon icon swap logic)
  themeToggleBtn.setAttribute('aria-label',
    isDark ? 'Switch to light mode' : 'Switch to dark mode');
});

const footerContent = document.querySelector("footer");
footerContent.innerHTML = `
    <div class="footer-section">
      <h4>Connect</h4>
      <div class="social-links">
        <a
          href="https://github.com/jstn-swm"
          target="_blank"
          aria-label="GitHub"
          ><i class="fab fa-github"></i
        ></a>
        <a href="https://www.linkedin.com/in/justin-wang04/" target="_blank" aria-label="LinkedIn"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a href="https://x.com/Jstn_dev" target="_blank" aria-label="Twitter"
          ><i class="fab fa-twitter"></i
        ></a>
      </div>
      <p class="contact-email"><i><a href="mailto:justin.won1214+work@gmail.com">justin.won1214+work@gmail.com</a></i></p>
    </div>
  </div>
  <div class="footer-bottom">
    <hr />
    <p>&copy; <span>${new Date().getUTCFullYear()}</span> Justin Wang | All Rights Reserved</p>
  </div>
`