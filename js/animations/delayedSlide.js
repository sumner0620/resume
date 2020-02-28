export const delayedSlide = elements => {
  let delay = 3;

  elements.map(function(el) {
    let elem = document.querySelector(el);
    elem.style.transition = `all .${delay}s ease-in-out`;
    elem.style.top = `-9999px`;
    elem.remove();
    delay = delay + 3;
  });
};
