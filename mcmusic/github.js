document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('btn-github-popup');
  if (!btn) return;
  btn.onclick = function() {
    const popupHtml = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <title>Perfis Github</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background: #000;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .github-cards-merged {
            display: flex;
            gap: 0;
            border-radius: 1rem;
            overflow: hidden;
            background: #232323;
            box-shadow: 0 8px 24px 0 rgba(128,0,255,0.15);
            align-items: center;
          }
          .github-merged-avatar {
            width: 320px;
            height: 320px;
            object-fit: cover;
            display: block;
            margin: 0;
            border: none;
            padding: 0;
            background: #232323;
          }
          @media (max-width: 800px) {
            .github-cards-merged {
              flex-direction: column;
            }
            .github-merged-avatar {
              width: 100vw;
              height: auto;
              max-width: 100vw;
              max-height: 40vh;
            }
          }
        </style>
      </head>
      <body>
        <div class="github-cards-merged">
          <img src="../imagens/github2.jpg" alt="Micael" class="github-merged-avatar" />
          <img src="../imagens/github1.jpg" alt="Dudumilan" class="github-merged-avatar" />
        </div>
      </body>
      </html>
    `;
    const win = window.open('', '_blank');
    win.document.open();
    win.document.write(popupHtml);
    win.document.close();
  };
});