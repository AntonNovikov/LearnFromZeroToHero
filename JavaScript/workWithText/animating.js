const elements = document.querySelectorAll(".text-highlight");

const options = {
  rootMargin: "0px",
  threshold: 0.75
};

const callback = (entries, observer) => {
  entries.forEach(({ target, intersectionRatio }) => {
    if (intersectionRatio >= options.threshold) {
      target.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

elements.forEach((element) => {
  observer.observe(element);
});