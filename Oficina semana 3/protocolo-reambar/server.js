const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Módulo essencial para lidar com caminhos de arquivos

const app = express();
const PORT = 3000;

// Configura o body-parser para ler dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));

// Rota 1: Raiz (porta 3000)
app.get('/', (req, res) => {
  // Envia o arquivo HTML que está na pasta 'views'
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota 2: Página de senha (/REambar) - GET
app.get('/REambar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'reambar.html'));
});

// Rota 3: Processamento da senha (/REambar) - POST
// A lógica aqui permanece a mesma, pois é uma ação do servidor
app.post('/REambar', (req, res) => {
  const senhaDigitada = req.body.senha;

  if (senhaDigitada === 'Scarlectus') {
    // Se a senha estiver correta, redireciona para a URL de ativação
    res.redirect('/REambar/ativar');
  } else {
    // Se estiver incorreta, redireciona de volta para a pág de senha com um parâmetro de erro
    res.redirect('/REambar?error=1');
  }
});

// Rota 4: Ativação (/REambar/ativar)
app.get('/REambar/ativar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'ativar.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`[+] Servidor rodando em http://localhost:${PORT}`);
});