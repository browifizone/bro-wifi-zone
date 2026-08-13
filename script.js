const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const revealEls = document.querySelectorAll(".reveal");
const faqItems = document.querySelectorAll(".faq-item");

// Header
const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 18);
};

updateHeader();
window.addEventListener("scroll", updateHeader);

// Mobile menu
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Reveal on scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -35px 0px"
  }
);

revealEls.forEach(el => observer.observe(el));

// FAQ
faqItems.forEach(item => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  button.addEventListener("click", () => {
    const alreadyOpen = item.classList.contains("open");

    faqItems.forEach(other => {
      other.classList.remove("open");
      other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      other.querySelector(".faq-answer").style.maxHeight = null;
    });

    if (!alreadyOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();


// V3.1 — Zoom de l'affiche Starlink Mini
const promoZoomTrigger = document.querySelector(".promo-zoom-trigger");
const imageModal = document.getElementById("imageModal");
const imageModalClose = document.querySelector(".image-modal-close");
const imageModalBackdrop = document.querySelector(".image-modal-backdrop");

function openImageModal() {
  if (!imageModal) return;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeImageModal() {
  if (!imageModal) return;
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

promoZoomTrigger?.addEventListener("click", openImageModal);
imageModalClose?.addEventListener("click", closeImageModal);
imageModalBackdrop?.addEventListener("click", closeImageModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageModal?.classList.contains("open")) {
    closeImageModal();
  }
});
