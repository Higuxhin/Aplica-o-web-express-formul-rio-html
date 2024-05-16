import express from 'express';
import path from 'path';

const porta = 3000;
const host = "0.0.0.0";

const app = express();

app.use(express.static(path.join(process.cwd(), 'publico')));

app.get('/cadastrarUsuarios', (req, resp)=>{

    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;
    const usuario = req.query.usuario;
    const email = req.query.email;
    const senha = req.query.senha;
    const cidade = req.query.cidade;
    const estado = req.query.estado;
    const cep = req.query.cep;

    resp.write('<!DOCTYPE html>');
    resp.write('<html lang="pt-br">');
    resp.write('<head>');
    resp.write('<meta charset="UTF-8">');
    resp.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    resp.write('<title>Cadastro efetuado</title>');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">');
    resp.write('<style>');
    resp.write('body {');
    resp.write('font-family: "Arial Rounded MT Bold", sans-serif;'); 
    resp.write('background-color: #ffe6e6;'); 
    resp.write('display: flex;');
    resp.write('justify-content: center;');
    resp.write('align-items: center;');
    resp.write('height: 100vh;');
    resp.write('}');
    resp.write('.container {');
    resp.write('background-color: #fff;'); 
    resp.write('padding: 20px;');
    resp.write('border-radius: 10px;');
    resp.write('box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);'); 
    resp.write('max-width: 600px;');
    resp.write('}');
    resp.write('h1 {');
    resp.write('text-align: center;');
    resp.write('color: #ff1493;'); 
    resp.write('margin-bottom: 20px;');
    resp.write('}');
    resp.write('.btn-container {');
    resp.write('text-align: center;');
    resp.write('}');
    resp.write('a.btn {');
    resp.write('background-color: #ff6699;'); 
    resp.write('border-color: #ff6699;'); 
    resp.write('color: #fff;');
    resp.write('transition: background-color 0.3s;');
    resp.write('font-size: 20px;'); 
    resp.write('padding: 10px 20px;'); 
    resp.write('border-radius: 15px;'); 
    resp.write('}');
    resp.write('a.btn:hover {');
    resp.write('background-color: #db7093;'); 
    resp.write('border-color: #db7093;'); 
    resp.write('}');
    resp.write('</style>');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<div class="container">');
    resp.write('<h1>Cadastro realizado com sucesso</h1>');
    resp.write('<div class="btn-container">');
    resp.write('<a href="/index.html" class="btn btn-primary">Voltar</a>'); 
    resp.write('</div>');
    resp.write('</div>');
    resp.write('</body>');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>');
    resp.write('</html>');
});

app.listen(porta, host, () => {
    console.log(`Servidor executando na porta http://${host}:${porta}`);
});