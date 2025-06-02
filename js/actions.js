import { estado } from './state.js';
import { elementos } from './elements.js';
import { musicas } from './data.js';
import { funcoes } from './render.js';

export const funcoes = {
    tocarMusica: (id) => {
        const musica = musicas.find(m => m.id === id);
        if (!musica) return;

        estado.musicaAtual = musica;
        estado.isPlaying = true;

        funcoes.atualizarInformacoesMusicaAtual(musica);

        // Atualiza botão play/pause e outros estados
        elementos.btnPlay.textContent = 'Pausar';

        // Inicia progresso simulado (exemplo)
        estado.progresso = 0;
        funcoes.atualizarProgresso(estado.progresso);
        if (estado.intervaloProgresso) clearInterval(estado.intervaloProgresso);
        estado.intervaloProgresso = setInterval(() => {
            if (estado.progresso < 100) {
                estado.progresso += 1;
                funcoes.atualizarProgresso(estado.progresso);
            } else {
                clearInterval(estado.intervaloProgresso);
                estado.isPlaying = false;
                elementos.btnPlay.textContent = 'Tocar';
            }
        }, 1000);
    },

    pausarMusica: () => {
        if (estado.intervaloProgresso) clearInterval(estado.intervaloProgresso);
        estado.isPlaying = false;
        elementos.btnPlay.textContent = 'Tocar';
    },

    abrirModalAdicionarPlaylist: (idMusica) => {
        estado.musicaParaAdicionar = idMusica;
        estado.playlistsModal = estado.playlists;
        elementos.modalAdicionarPlaylist.classList.remove('hidden');
        funcoes.renderizarListaPlaylistsModal();
    },

    adicionarMusicaNaPlaylist: (idPlaylist) => {
        const playlist = estado.playlists.find(p => p.id === idPlaylist);
        if (!playlist) return;

        if (!playlist.musicas.includes(estado.musicaParaAdicionar)) {
            playlist.musicas.push(estado.musicaParaAdicionar);
        }
        elementos.modalAdicionarPlaylist.classList.add('hidden');
        estado.musicaParaAdicionar = null;
    },

    criarPlaylist: (nome) => {
        if (!nome) return;
        const novaPlaylist = {
            id: estado.playlists.length + 1,
            nome: nome,
            musicas: []
        };
        estado.playlists.push(novaPlaylist);
        elementos.modalPlaylist.classList.add('hidden');
        funcoes.renderizarPlaylists();
        funcoes.renderizarListaPlaylists();
    },

    abrirModalCriarPlaylist: () => {
        elementos.modalPlaylist.classList.remove('hidden');
    },

    fecharModalCriarPlaylist: () => {
        elementos.modalPlaylist.classList.add('hidden');
    },

    fecharModalAdicionar: () => {
        elementos.modalAdicionarPlaylist.classList.add('hidden');
        estado.musicaParaAdicionar = null;
    }
};
