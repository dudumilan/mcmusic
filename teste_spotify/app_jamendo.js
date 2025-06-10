const CLIENT_ID = "91318903";  // Substitua pela sua Client ID do Jamendo

async function buscarMusica() {
  const termo = document.getElementById("pesquisa").value;
  if (!termo) {
    alert("Digite o nome de uma música!");
    return;
  }

  const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=5&namesearch=${encodeURIComponent(termo)}&include=musicinfo+stats&audioformat=mp32`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    exibirResultados(dados.results);
  } catch (erro) {
    console.error("Erro ao buscar músicas:", erro);
    document.getElementById("resultado").innerHTML = "<p>Erro ao buscar músicas.</p>";
  }
}

function exibirResultados(musicas) {
  const div = document.getElementById("resultado");
  div.innerHTML = "";

  if (!musicas || musicas.length === 0) {
    div.innerHTML = "<p>Nenhuma música encontrada.</p>";
    return;
  }

  musicas.forEach(musica => {
    const html = `
      <div class="musica">
        <strong>${musica.name}</strong> — ${musica.artist_name}<br>
        <img src="${musica.album_image}" alt="Capa do álbum"><br>
        <audio controls src="${musica.audio}"></audio>
        <p><a href="${musica.shareurl}" target="_blank">Ouvir no Jamendo</a></p>
      </div>
    `;
    div.innerHTML += html;
  });
}
