export const Sidebar = (
  title,
  location,
  phone,
  email,
  skills,
  github,
  linkedin
) => {
  let markup = "";
  markup += `
      <header class='main-header flex col container afs jfs'>
        <aside id='title'>
          <h1>${title}</h1>
        </aside>
        <aside class='flex col' id='contact'>
          <div>${location}</div>
          <div>${phone}</div>
          <div>${email}</div>
        </aside>`;
  let skillset =
    "<aside class='flex row' id='skillset'>" +
    skills
      .map(function(skill) {
        return `<figure>${skill}</figure>`;
      })
      .join("") +
    "</aside>";
  markup += skillset;
  markup += `<nav class="flex row jfsa" id="social">
        <a href="${github}" target="_blank"><i class="fab fa-github"></i></a>
        <a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
        </nav>
      </header>
      `;
  document.body.innerHTML += markup;
};
