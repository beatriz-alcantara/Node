const http = require('http');
const fs = require('fs');

const css = fs.readFileSync('arquivos/style.css', 'utf8');
const html = fs.readFileSync('arquivos/index.html', 'utf8');
const raleway = fs.readFileSync('arquivos/Raleway/Raleway-Thin.ttf');
const facebook = fs.readFileSync('arquivos/img/facebook.ico');
const twitter = fs.readFileSync('arquivos/img/twitter.ico');
const instagram = fs.readFileSync('arquivos/img/instagram.ico');
const resort = fs.readFileSync('arquivos/img/resort.jpg');

var server = http.createServer((req, res)=>{
  if (req.url == '/style.css') {
    res.setHeader('Content-Type', 'text/css');
    res.write(css);
  }

  if(req.url == '/Raleway/Raleway-Thin.ttf') res.write(raleway);
  if(req.url == '/img/facebook.ico') res.write(facebook);
  if(req.url == '/img/twitter.ico') res.write(twitter);
  if(req.url == '/img/instagram.ico') res.write(instagram);
  if (req.url == '/img/resort.jpg') res.write(resort);

  res.write(html);
  res.end();
})

server.listen(3000, ()=>{
  console.log('servidor rodando');
})
