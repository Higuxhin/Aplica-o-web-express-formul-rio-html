import express from 'express';

const porta = 3000;
const host = "0.0.0.0";

const app = express();

app.use(express.static('./publico'));

app.use('/cadastrarUsuarios', (req, resp)=>{

    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;
    const usuario = req.query.usuario;
    const email = req.query.email;
    const senha = req.query.senha;
    const cidade = req.query.cidade;
    const estado = req.query.estado;
    const cep = req.query.cep;
});

app.use('/logarUsuarios', (req, resp)=>{
    const emaillogin = req.query.emaillogin;
    const senhalogin = req.query.senhalogin;
});

resp.write('<h1>Cadastro efetuado com sucesso!</h1>');
resp.write('<a href="/">Voltar</a>');

app.listen(porta, host, () => {
    console.log(`Servidor executando na porta http://${host}:${porta}`);
})
