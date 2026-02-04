const heroImage = document.querySelector(".hero__image");
const galleryImages = Array.from(document.querySelectorAll("[data-gallery]"));
const modal = document.querySelector("#gallery-modal");
const modalImage = modal ? modal.querySelector(".modal__image") : null;
const modalCaption = modal ? modal.querySelector(".modal__caption") : null;
const modalCloseTargets = modal ? modal.querySelectorAll("[data-close]") : [];

function showPlaceholder(img) {
  const card = img.closest(".gallery__card");
  if (!card) return;
  const caption = card.querySelector("figcaption");
  const placeholder = document.createElement("div");
  placeholder.className = "gallery__placeholder";
  placeholder.setAttribute("role", "img");
  placeholder.setAttribute("aria-label", img.alt || "Фото недоступно");
  placeholder.textContent = "Фото недоступно";
  img.remove();
  card.insertBefore(placeholder, caption || null);
}

function handleImageError(event) {
  showPlaceholder(event.currentTarget);
}

if (heroImage) {
  heroImage.addEventListener("error", () => {
    heroImage.style.display = "none";
  });
}

galleryImages.forEach((img) => {
  img.addEventListener("error", handleImageError);
  img.addEventListener("click", () => {
    if (!modal || !modalImage || !modalCaption) return;
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalCaption.textContent = img.alt;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

if (modal) {
  modalCloseTargets.forEach((target) => {
    target.addEventListener("click", () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  });
}
