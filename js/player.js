//var
import { playlist } from "./data.js";
import { renderPlaylistHeader } from "./renderPlaylistHeader.js";

export let getplaylists = document.querySelector(".playlists");

// render
renderPlaylist(playlist[0]);
renderPlaylist(playlist[1]);
renderPlaylist(playlist[2]);

function renderPlaylist(playlistForRendering) {
  renderPlaylistHeader(playlistForRendering);
}
