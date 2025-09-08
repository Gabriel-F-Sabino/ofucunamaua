const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configura o body-parser para ler dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));

// Rota 1: Raiz (porta 3000)
app.get('/', (req, res) => {
  res.send(`
    <h1>AVISO DE EMERGÊNCIA</h1>
    <p style="color: red; font-weight: bold;">Múltiplas brechas na contenção dos dinossauros foram detectadas. Ative o protocolo REambar imediatamente.</p>
    <! Jeff, eu já disse para não usar o nome dos dinossauros como senha, não é seguro>
    `);
});

// Rota 2: Página de senha (/REambar) - GET
app.get('/REambar', (req, res) => {
  // Verifica se a URL contém um parâmetro de erro
  const errorMessage = req.query.error ? '<p style="color: red;">Senha incorreta.</p>' : '';

  res.send(`
    <h1>PROTOCOLO REambar</h1>
    <p>Insira o código de autorização para ativar o protocolo.</p>
    
    <form action="/REambar" method="POST">
      <label for="senha">Código:</label>
      <input type="password" id="senha" name="senha" required>
      <button type="submit">Autorizar</button>
    </form>
    <! De todos os dinossauros que já vi, a Scarlectus sempre foi a minha favorita.>
    ${errorMessage}
  `);
});

// Rota 3: Processamento da senha (/REambar) - POST
app.post('/REambar', (req, res) => {
  const senhaDigitada = req.body.senha;

  if (senhaDigitada === 'Scarlectus') {
    // Se a senha estiver correta, redireciona para a página de ativação
    res.redirect('/REambar/ativar');
  } else {
    // Se estiver incorreta, redireciona de volta para a página de senha com um aviso
    res.redirect('/REambar?error=1');
  }
});

// Rota 4: Ativação (/REambar/ativar)
app.get('/REambar/ativar', (req, res) => {
  res.send(`
    <h1 style="color: green;">PROTOCOLO REambar ATIVADO</h1>
    <p>O sistema de segurança foi reestabelecido.</p>
    <p>O código a seguir serve como confirmação de ativação para a Central de Comando:</p>
    <code>{Guardian-Fl4g0f1c1n4}</code>
  `);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`[+] Servidor rodando em http://localhost:${PORT}`);
});