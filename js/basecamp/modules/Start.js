export const Start = () => {
  const hide = el => {
    let song = document.getElementById("bg-song");
    el.remove();
    song.play();
  };
  let cover = document.getElementById("start");
  document.body.innerHTML += `<div id="start"><button onClick="${hide(
    cover
  )}"></button></div>`;
};
