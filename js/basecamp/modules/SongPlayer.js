export const SongPlayer = src => {
  let audio = ``;
  let userAgentString = navigator.userAgent;
  let chromeAgent = userAgentString.indexOf("Chrome") > -1;
  if (chromeAgent) {
    audio += `<iframe src="${src}" allow="autoplay" style="display:none" id="iframeAudio">
    </iframe> 
    `;
  } else {
    audio += `<audio autoplay>
    <source src="${src}" type="audio/mpeg">
    </audio> `;
  }
  document.body.innerHTML += audio;
};
