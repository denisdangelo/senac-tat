var express = require('express');
var app = express();

// Servir arquivos estáticos do diretório '/var/www/html/denis'
// Mantém o acesso aos arquivos estáticos sem interferir na rota principal
app.use('/static', express.static('/var/www/html/denis'));

// Rota principal que exibe uma mensagem, uma imagem, uma nova frase e a data/hora
app.get('/', function (req, res) {
    var dataHoraAtual = new Date();
    var dia = String(dataHoraAtual.getDate()).padStart(2, '0');
    var mes = String(dataHoraAtual.getMonth() + 1).padStart(2, '0');
    var ano = dataHoraAtual.getFullYear();
    var horas = String(dataHoraAtual.getHours()).padStart(2, '0');
    var minutos = String(dataHoraAtual.getMinutes()).padStart(2, '0');
    var segundos = String(dataHoraAtual.getSeconds()).padStart(2, '0');
    var dataFormatada = dia + '/' + mes + '/' + ano;
    var horaFormatada = horas + ':' + minutos + ':' + segundos;

    res.send(`
        <h1>Meu novo projeto em Node.js - Denis DAngelo</h1>
        <p><strong>Mensagem:</strong> Esta é uma nova frase que adicionei ao meu projeto Node.js.</p>
        <p><strong>Imagem:</strong></p>
        <img src="https://yt3.googleusercontent.com/ytc/AIdro_mt1p0nYG1U1m87htVWouj9JEBVVWng4EE3pa4y2GeDzjU=s160-c-k-c0x00ffffff-no-rj" alt="Olá Mundo">
        <p><strong>Data e Hora:</strong> Data: ${dataFormatada} Hora: ${horaFormatada}</p>
        <p><a href="/static/index.html" title="Clique aqui para acessar o arquivo HTML">Acessar Arquivo HTML</a></p>
        <p><a href="/static/denis.php" title="Clique aqui para acessar o arquivo PHP">Acessar Arquivo PHP</a></p>
    `);
});

// Porta padrão utilizada pela aplicação do Node.JS
app.listen(3030, function() {
    console.log('Aplicativo de exemplo ouvindo na porta 3030');
});
