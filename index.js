const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
    res.send("hllo")
})
app.listen(3000, () => {
    console.log(`listening at http://localhost:${3000}`);
});