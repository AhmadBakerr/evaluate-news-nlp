const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/analyze', (req, res) => {
    res.send({ message: "تم الاتصال بالخادم بنجاح!" });
});

app.listen(8081, () => {
    console.log('الخادم يعمل على المنفذ 8081');
});
