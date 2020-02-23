export const Header = (title, location, phone, email) => {
  const markup = `
    <header class='main-header flex row container afc jfsb'>
      <aside id='title'>
        <h1>${title}</h1>
      </aside>
      <aside class='flex col' id='contact'>
        <div>
          ${location} | ${phone}
        </div>
        <div>${email}</div>
      </aside>
    </header>
    `
  document.body.innerHTML += markup
}
