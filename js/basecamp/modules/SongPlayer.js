export const SongPlayer = src => {
  let audio = ``;
  let userAgentString = navigator.userAgent;
  let chromeAgent = userAgentString.indexOf("Chrome") > -1;
  if (chromeAgent) {
    audio += `<iframe id="bg-song" src="${src}" allow="autoplay" style="display:none" id="iframeAudio">
    </iframe> 
    `;
  } else {
    audio += `<audio autoplay>
    <source id="bg-song" src="${src}" type="audio/mpeg">
    </audio> `;
  }
  document.body.innerHTML += audio;
};
