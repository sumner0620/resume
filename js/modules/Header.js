export const Header = (title, location, phone, email) => {
  console.log("working");
  const markup = `
    <header class='main-header flex row container afc jfsb'>
      <div id='title'>
        <h1>${title}</h1>
      </div>
      <div class='flex col' id='contact'>
        <div>
          ${location} | ${phone}
        </div>
        <div>${email}</div>
      </div>
    </header>
    `;
  document.body.innerHTML += markup;
};
