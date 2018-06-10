const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const port = process.env.PORT || 1999;
const app = express();

//设置根路径
app.set('views', './views/pages');
//设置模板引擎
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../node_modules')));
app.listen(port);

console.log('start succeed ' + port);

app.get('/', (req, res) => {
  res.render('index', {
    title: '首页'
  })
  //发送html文件
  // res.sendFile(__dirname + '/views/index.html');
})

app.get('/movis/:id', (req, res) => {
  res.render('detail', {
    title: '详情页'
  })

})

app.get('/admin/movie', (req, res) => {
  res.render('admin', {
    title: '管理页'
  })

})

app.get('/admin/list', (req, res) => {
  res.render('list', {
    title: '列表页'
  })

})