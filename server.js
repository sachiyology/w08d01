const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

app.engine('sug',(filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if(err) return callback(err)
    const rendered = content.toString()
    .replace('#title#', `<title>${options.title}</title>`)
    .replace('#message#', '<h1>' + options.message + '</h1>')
    .replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})

app.set('views', './views')
app.set('view engine', 'sug')
// renderで指定したファイルを画面に表示させる
app.get('/', (req, res) => {
  res.render('template.sug', { title: 'PageTitle', message: '&#x1f9dd; w08d01HW', content: '&#x1f43c; first content'})
})

app.get('/rilakkuma', (req, res) => {
  res.render('template.sug', { title: 'Rilakkuma', message: '&#x1f43b; w08d01HW', content: `&#x1f43b; <a href="http://www.san-x.jp/characters/rilakkuma.html">Rilakkuma</a> has dozens of bear costumes in the closet`})
})

app.get('/kiiroitori', (req, res) => {
  res.render('template.sug', { title: 'Kiiroitori', message: '&#x1f425; w08d01HW', content: `&#x1f425; <a href="http://www.san-x.jp/characters/rilakkuma.html">Kiiroitori</a> likes broccoli and Rilakkuma throws it at his face!`})
})

app.get('/korilakkuma', (req, res) => {
  res.render('template.sug', { title: 'Korilakkuma', message: '&#x1f428; w08d01HW', content: `&#x1f428; <a href="http://www.san-x.jp/characters/rilakkuma.html">Korilakkuma</a> is a white bear cub`})
})

app.get('/', (req, res) => {
  res.send('<h1>&#x1f9dd;w08d01HW</h1>')
})

app.get('/tori', (req, res) => {
  res.send('<div><img src="https://1.bp.blogspot.com/-Vt3DXcBsSX4/X5OcHg8130I/AAAAAAABb5U/F8T7kLQwDA0p9GHE3ZVNAqTzTm5C4GGlwCNcBGAsYHQ/s788/bird_mameruriha_inko_green.png"></img></div>')
})

app.get('/kuma', (req, res) => {
  res.send('<h1>kuma</h1>')
})

app.get('/kuma/koguma', (req, res) => {
  res.send('<h1>koguma</h1>')
})

app.get('/hw', (req, res) => {
  res.send(`<h1>&#x1f9dd;<a href="https://sfs-flex-1.herokuapp.com/backend-fundamentals/week-8/day-1/labs/express-lab/">HW</a></h1>`)
})

//template2 これで良いのか？
app.set('view engine', 'sug2')
app.get('/sug2', (req, res) => {
  res.render('template.sug', { title: 'temp2', message: '&#x1f9dd; w08d01HW', content: '&#x1f405; second content'})
})




// アクセス可能なサーバーを起動する。listenで待ち受け状態にする、これによりリクエストを受け取ることができるようになるらしい
app.listen(3000, () => console.log('hello i am listening on port 3000'))




// https://sfs-flex-1.herokuapp.com/backend-fundamentals/week-8/day-1/lecture-materials/intro-to-express-remix/
