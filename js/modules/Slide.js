export const Slide = (title, content, tiles, nextSlide = false) => {
  let arrow;
  let tileMarkup;
  if (tiles.length) {
    tileMarkup =
      "<aside class='flex row work'>" +
      tiles
        .map(function(tile) {
          return `
                <aside class="flex col item_1_2 work-tile">
                    <h3>${tile.title}</h3>
                    <p>${tile.description}</p>
                    <figure><img src="${tile.image}" /></figure>
                </aside>`;
        })
        .join("") +
      "</aside>";
  } else {
    tileMarkup = "";
  }
  let markup =
    `
        <section class='slide flex col container afs jfs'>
          <header class='title'>
            <h2>${title}</h2>
          </header>
          <article class='flex col'>${content}</article>
          ` +
    tileMarkup +
    `
        </section>`;
  document.querySelector("main").innerHTML += markup;
};
