const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const token = '546eaaf4d20c578084bb1697619d4913';

app.post('/login', function (req, res) {
  const { username, password } = req.body;

  let result = {};

  if (username === 'qianshan' && password === '123456') {
    result = {
      code: 200,
      data: { token: token },
      message: '成功'
    }
  } else {
    result = {
      code: 500,
      message: '失败'
    }
  }

  res.send(result);
})

app.get('/getList', function (req, res) {
  const list = [{
    id: 1,
    newPrice: 20.00,
    maxPrice: 23.02,
    minPrice: 19.84,
  }, {
    id: 2,
    newPrice: 48.64,
    maxPrice: 63.97,
    minPrice: 34.86,
  }, {
    id: 3,
    newPrice: 6.87,
    maxPrice: 6.87,
    minPrice: 4.51,
  }, {
    id: 4,
    newPrice: 97.00,
    maxPrice: 98.31,
    minPrice: 76.88,
  }, {
    id: 5,
    newPrice: 31.26,
    maxPrice: 38.92,
    minPrice: 30.44,
  }]

  if (req.query.token === token) {
    res.send({
      code: 200,
      data: list,
      message: '成功'
    })
  } else {
    res.send({
      code: 401,
      message: '失败'
    })
  }
})

app.listen('3000', '0.0.0.0', function (res) {
  console.info('-----服务已启动，端口3000')
})