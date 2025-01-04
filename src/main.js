const images = document.querySelectorAll("img");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // const src = img.getAttribute("data-src");
        // img.setAttribute("src", src);
        // observer.unobserve(img);
        img.classList.add("show");
      }
    });
  },
  {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.4,
  }
);
images.forEach((img) => observer.observe(img));
observer.observe(images);
