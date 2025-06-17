# MCMusic — index.html

## Descrição

O arquivo `index.html` é a página principal da aplicação **MCMusic**, um player de música web moderno com visual inspirado em plataformas populares de streaming. Ele oferece uma interface visualmente atraente, navegação responsiva e recursos de gerenciamento de playlists, busca de músicas e interação com artistas, tudo em um ambiente 100% front-end.

## Principais Recursos

- **Design Responsivo**: Utiliza Tailwind CSS e customizações para garantir boa experiência tanto em desktop quanto em mobile.
- **Sidebar de Navegação**: Permite alternar entre seções como início, busca, biblioteca e playlists.
- **Player de Música**: Com controles de play, pause, próxima, anterior, barra de progresso e controle de volume.
- **Playlists**: Criação, exclusão, gerenciamento e visualização de playlists personalizadas.
- **Busca de Músicas**: Campo de busca instantânea para filtrar músicas por nome ou artista.
- **Curtidas**: Sistema de favoritos ("Curtidas") persistente via `localStorage`.
- **Recomendados e Artistas Populares**: Seções destacando sugestões e artistas para interação rápida.
- **Modal de Gerenciamento**: Modais para criar e gerenciar playlists, adicionar/remover músicas.
- **Integração com GitHub**: Links e modal de créditos dos desenvolvedores.

## Estrutura do Arquivo

- **Cabeçalho (head):**
  - Importação do Tailwind CSS.
  - Fonte Montserrat.
  - Estilos customizados para aprimorar a identidade visual.

- **Corpo (body):**
  - Sidebar lateral e versão mobile.
  - Seções para playlists, músicas recomendadas e artistas.
  - Player fixo na base da tela.
  - Modais para criação e gerenciamento de playlists, além de créditos do GitHub.
  - Scripts JavaScript embutidos para lógica do player, busca, playlists, curtidas e controle de UI.

## Como Funciona

O arquivo é autossuficiente, carregando todos os elementos da interface e scripts necessários para o funcionamento do player. As músicas, artistas e playlists são manipulados via JavaScript, e as curtidas são armazenadas localmente no navegador.

## Principais Elementos e IDs

- `sidebar`, `sidebar-mobile` — navegação lateral.
- `container-musicas`, `container-artistas`, `container-playlists` — listas dinâmicas de conteúdos.
- `campo-busca` — campo de busca de músicas.
- `player` — barra de controles do player.
- Modais: `modal-playlist`, `modal-gerenciar-playlist`, `github-modal-bg`.

## Personalização e Expansão

- Para adicionar músicas/artistas/álbuns, modifique as variáveis JavaScript apropriadas.
- O visual pode ser alterado pelo CSS customizado ou estendendo o Tailwind.
- Pode ser facilmente integrado a backends ou APIs externas para ampliar funcionalidades.

## Créditos

- Desenvolvido por [@dudumilan](https://github.com/dudumilan) e [@micaelMR10](https://github.com/micaelMR10).
- Imagens e estilos com inspiração em grandes plataformas de streaming musical.

---

> Este README refere-se especificamente ao arquivo `index.html` da pasta `mcmusic`. Ele serve como ponto de entrada para a experiência web do MCMusic.
