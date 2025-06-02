import { funcoes as renderFuncoes } from './render.js';
import { funcoes as actionFuncoes } from './actions.js';
import { elementos } from './elements.js';

function inicializar() {
    renderFuncoes.renderizarMusicas();
    renderFuncoes.renderizarArtistas();
    renderFuncoes.renderizarPlaylists();
    renderFuncoes.renderizarListaPlaylists();

    elementos.btnNovaPlaylist.addEventListener('click', () => {
        actionFuncoes.abrirModalCriarPlaylist();
    });

    elementos.salvarPlaylist.addEventListener('click', () => {
        const nome = elementos.nomePlaylist.value.trim();
        if (nome) {
            actionFuncoes.criarPlaylist(nome);
            elementos.nomePlaylist.value = '';
        }
    });

    elementos.cancelarPlaylist.addEventListener('click', () => {
        actionFuncoes.fecharModalCriarPlaylist();
    });

    elementos.fecharModal.addEventListener('click', () => {
        actionFuncoes.fecharModalCriarPlaylist();
    });

    elementos.fecharModalAdicionar.addEventListener('click', () => {
        actionFuncoes.fecharModalAdicionar();
    });

    elementos.cancelarAdicionar.addEventListener('click', () => {
        actionFuncoes.fecharModalAdicionar();
    });

    elementos.btnPlay.addEventListener('click', () => {
        if (estado.isPlaying) {
            actionFuncoes.pausarMusica();
        } else if (estado.musicaAtual) {
            actionFuncoes.tocarMusica(estado.musicaAtual.id);
        }
    });

    // Evento campo de busca e outras funcionalidades podem ser adicionados aqui
}

inicializar();
