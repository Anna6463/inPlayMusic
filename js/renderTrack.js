import { createElement } from "./createElement.js";

// Render individual track
export function renderTrack(inputTrackForRendering, playList) {
  const trackElement = createElement("div", "playlist__track");

  const coverElement = createElement("img", "track__img", {
    src: inputTrackForRendering.coverImageUrl,
  });
  trackElement.appendChild(coverElement);

  const trackElementName = createElement("div", "playList__trakName");
  trackElementName.textContent = `${inputTrackForRendering.artistName} - ${inputTrackForRendering.title}`;

  const playerElement = createElement("audio", "track__audio", {
    src: inputTrackForRendering.fileUrl,
    controls: true,
  });
  trackElementName.appendChild(playerElement);

  trackElement.appendChild(trackElementName);
  playList.appendChild(trackElement);
}
