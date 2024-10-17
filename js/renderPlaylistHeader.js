import { createElement } from "./createElement.js";
import { renderTrack } from "./renderTrack.js";
import { getplaylists } from "./player.js";

//fun
export function renderPlaylistHeader(playlistForRendering) {
  const playList = createElement("div", "playlists__playlist playlist");
  getplaylists.appendChild(playList);

  const getPlayListHeader = createElement("div", "playlist__header");
  playList.appendChild(getPlayListHeader);

  const playListImgElement = createElement("img", "playList__img", {
    src: playlistForRendering.coverImageUrl,
  });
  getPlayListHeader.appendChild(playListImgElement);

  const playListHeader = createElement("div", "playlist__title");
  getPlayListHeader.appendChild(playListHeader);

  const playListTextElement = createElement(
    "p",
    "playlist__text",
    {},
    "PlayList"
  );
  playListHeader.appendChild(playListTextElement);

  const playListTitleElement = createElement(
    "h2",
    "",
    {},
    playlistForRendering.title
  );
  playListHeader.appendChild(playListTitleElement);

  const playListTrackCount = createElement(
    "div",
    `playList-${playlistForRendering.number}__TrackCount`,
    {},
    `${playlistForRendering.info.totaltrackcount} tracks`
  );
  playListHeader.appendChild(playListTrackCount);

  // Render tracks
  playlistForRendering.tracks.forEach((track) => renderTrack(track, playList));
}
