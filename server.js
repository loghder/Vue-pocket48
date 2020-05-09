const express = require('express')
const bodyParser = require('body-parser')
const router = require('./bin/router/router');
const path = require('path')
const childProcess = require('child_process')
const PORT = process.env.PORT || 80;
const server = express()

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
server.use(bodyParser.json())

server.use(router)

server.use('/', express.static(path.join(__dirname, 'dist'), {
  index: 'index.html'
}))

server.listen(PORT, () => {
  console.log('服务器启动成功 http://localhost:80')
  childProcess.exec(`start http://localhost:80`)
})
