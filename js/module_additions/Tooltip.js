export const Tootip = (
  description = "",
  code = "",
  buttonLink = "",
  buttonLabel = ""
) => {
  let markup = `<div class=="tooltip">`;

  markup += description.length ? `<p>${description}</p>` : "";

  markup += code.length ? `<code>${code}</code>` : "";

  if (buttonLabel.length && buttonLink.length) {
    markup += `<a href="${buttonLink}" target="_blank">${buttonLabel}</a>`;
  }

  document.body.innerHTML += markup;
};
