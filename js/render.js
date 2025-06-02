import { elementos } from './elements.js';
import { musicas, artistas } from './data.js';
import { estado } from './state.js';
import { funcoes as actions } from './actions.js';

export const funcoes = {
    renderizarMusicas: () => {
        elementos.containerMusicas.innerHTML = '';
        musicas.forEach(musica => {
            const musicaElement = document.createElement('div');
            musicaElement.className = 'card-musica bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors';
            musicaElement.innerHTML = `
                <div class="relative mb-4">
                    <img src="${musica.capa}" alt="${musica.nome}" class="w-full aspect-square object-cover rounded">
                    <button class="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity play-btn" data-id="${musica.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button class="absolute top-2 right-2 bg-black bg-opacity-60 rounded-full p-1.5 adicionar-playlist-btn" data-id="${musica.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <h3 class="texto-principal font-medium truncate">${musica.nome}</h3>
                <p class="texto-secundario text-sm truncate">${musica.artista}</p>
            `;
            elementos.containerMusicas.appendChild(musicaElement);
        });

        document.querySelectorAll('.play-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.getAttribute('data-id'));
                actions.tocarMusica(id);
            });
        });

        document.querySelectorAll('.adicionar-playlist-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.getAttribute('data-id'));
                actions.abrirModalAdicionarPlaylist(id);
            });
        });

        document.querySelectorAll('.card-musica').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.querySelector('.play-btn').getAttribute('data-id'));
                actions.tocarMusica(id);
            });
        });
    },

    renderizarArtistas: () => {
        elementos.containerArtistas.innerHTML = '';
        artistas.forEach(artista => {
            const artistaElement = document.createElement('div');
            artistaElement.className = 'bg-gray-800 p-4 rounded-full cursor-pointer hover:bg-gray-700 transition-colors text-center';
            artistaElement.innerHTML = `
                <div class="w-full aspect-square mb-3">
                    <img src="${artista.foto}" alt="${artista.nome}" class="w-full h-full rounded-full object-cover">
                </div>
                <h3 class="texto-principal font-medium">${artista.nome}</h3>
                <p class="texto-secundario text-sm">Artista</p>
            `;
            elementos.containerArtistas.appendChild(artistaElement);
        });
    },

    renderizarPlaylists: () => {
        elementos.containerPlaylists.innerHTML = '';
        estado.playlists.forEach(playlist => {
            const playlistElement = document.createElement('div');
            playlistElement.className = 'playlist-card p-4 rounded-lg cursor-pointer hover:opacity-90 transition-opacity';
            playlistElement.innerHTML = `
                <div class="mb-3">
                    <div class="w-full aspect-square bg-black bg-opacity-30 rounded-lg flex justify-center items-center text-3xl text-green-500 font-bold">${playlist.nome[0]}</div>
                </div>
                <h3 class="texto-principal font-medium">${playlist.nome}</h3>
                <p class="texto-secundario text-sm">${playlist.musicas.length} músicas</p>
            `;
            elementos.containerPlaylists.appendChild(playlistElement);
        });
    },

    renderizarListaPlaylists: () => {
        elementos.listaPlaylists.innerHTML = '';
        estado.playlistsSidebar.forEach(playlist => {
            const li = document.createElement('li');
            li.className = 'cursor-pointer hover:opacity-70';
            li.textContent = playlist.nome;
            elementos.listaPlaylists.appendChild(li);
        });
    },

    renderizarListaPlaylistsModal: () => {
        elementos.listaPlaylistsModal.innerHTML = '';
        estado.playlistsModal.forEach(playlist => {
            const li = document.createElement('li');
            li.className = 'cursor-pointer hover:opacity-70';
            li.textContent = playlist.nome;
            li.dataset.id = playlist.id;
            li.addEventListener('click', () => actions.adicionarMusicaNaPlaylist(playlist.id));
            elementos.listaPlaylistsModal.appendChild(li);
        });
    },

    atualizarInformacoesMusicaAtual: (musica) => {
        elementos.nomeMusicaAtual.textContent = musica.nome;
        elementos.artistaMusicaAtual.textContent = musica.artista;
        elementos.capaMusicaAtual.src = musica.capa;
    },

    atualizarProgresso: (progresso) => {
        elementos.barraProgresso.value = progresso;
    },

    atualizarTempoAtual: (tempo) => {
        elementos.tempoAtual.textContent = tempo;
    },

    atualizarTempoTotal: (tempo) => {
        elementos.tempoTotal.textContent = tempo;
    }
};
