export const Slide = text => {
  let userAgentString = navigator.userAgent;
  let chromeAgent = userAgentString.indexOf("Chrome") > -1;
  let audio = ``;
  if (chromeAgent) {
    audio += `<iframe src="/assets/sounds/StrangerThings.mp3" allow="autoplay" style="display:none" id="iframeAudio">
    </iframe> 
    `;
  } else {
    audio += `<audio autoplay>
    <source src="/assets/sounds/StrangerThings.mp3" type="audio/mpeg">
    </audio> `;
  }
  let i = 0;
  let textArr = text.split(" ");
  const typewriter = () => {
    let textArea = document.getElementById("stranger-cv");
    const addButton = () => {
      let buttonArea = document.getElementById("button-area");
      let button = `<a id="resume-button" href="/stranger-resume.html">View Resumé</a>`;
      buttonArea.innerHTML += button;
    };
    if (i < textArr.length) {
      let spacedText = textArr[i] + " ";
      textArea.innerHTML += spacedText;
      i++;
      setTimeout(typewriter, 168);
    } else {
      addButton();
    }
  };
  document.body.innerHTML += audio;
  setTimeout(typewriter, 3200);
};
