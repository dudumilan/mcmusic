// Substitua pelo token gerado manualmente (válido por 1h)
// {"access_token":"BQAfJcgj-s7JTF3b3_Wsnx8zCDhi7wns5g5yChPQ0nYNzwf5oa40ORPyrndtsnM3lFQeEPXBrMwL_F-umDunBzHxkCoRWsxdeBJ5FsOAPN9m1R7xAO-_AXOXFtkxRsPx7MONPpe7dh8","token_type":"Bearer","expires_in":3600};
//{"access_token":"BQDzRS6be3TeuwfAo_HYIbASor7sO5uEFDBf6VlDGQlZsgUhR2jdTwITBmXG0c_BzLyKqaFxvRoazZIhTuRvYZ72r3Ju1SLOUsxVlTQlLkXPN6azsjb1WuY9nRmjVSwzfuHG7amfOcU","token_type":"Bearer","expires_in":3600}
const accessToken = "BQDzRS6be3TeuwfAo_HYIbASor7sO5uEFDBf6VlDGQlZsgUhR2jdTwITBmXG0c_BzLyKqaFxvRoazZIhTuRvYZ72r3Ju1SLOUsxVlTQlLkXPN6azsjb1WuY9nRmjVSwzfuHG7amfOcU";


async function buscarMusica() {
  const termo = document.getElementById("pesquisa").value;
  if (!termo) {
    alert("Digite o nome de uma música!");
    return;
  }

  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(termo)}&type=track&limit=5`;

  const resposta = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  });

  const dados = await resposta.json();
  exibirResultados(dados.tracks.items);
}

function exibirResultados(musicas) {
  const div = document.getElementById("resultado");
  div.innerHTML = "";

  if (musicas.length === 0) {
    div.innerHTML = "<p>Nenhuma música encontrada.</p>";
    return;
  }
/*
  musicas.forEach(musica => {
    const artistas = musica.artists.map(a => a.name).join(", ");
    console.log(musica.external_urls.spotify)
    const html = `
      <div class="musica">
        <strong>${musica.name}</strong> — ${artistas}<br>
        <audio controls src="${musica.preview_url}"></audio>
      </div>
    `;
    div.innerHTML += html;
  });
  */

  musicas.forEach(musica => {
  const artistas = musica.artists.map(a => a.name).join(", ");
  const linkSpotify = musica.external_urls.spotify;
  const preview = musica.preview_url;
  const imagemAlbum = musica.album.images[1]?.url || ""; // Pega a imagem média (300px), se existir

  const html = `
    <div class="musica" style="margin-bottom: 20px;">
      <img src="${imagemAlbum}" alt="Capa do álbum" style="width: 150px; border-radius: 8px;"><br>
      <strong>${musica.name}</strong> — ${artistas}<br>
      ${preview 
        ? `<audio controls src="${preview}"></audio>` 
        : `<a href="${linkSpotify}" target="_blank">Ouvir no Spotify</a>`
      }
      <hr>
    </div>
  `;

  div.innerHTML += html;
});

}
