import { playlists } from './data.js';

export const estado = {
    musicaAtual: null,
    playlists: playlists,
    playlistsSidebar: playlists,
    playlistsModal: [],
    musicaParaAdicionar: null,
    isPlaying: false,
    progresso: 0,
    intervaloProgresso: null
};
