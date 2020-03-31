const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const port = 433

app.use(cors())

app.get('/api/list', (req, res) => {
    fs.readdir('./assets/', (err, items) => {
        result = items.map(el => 'image/' + el)
        const pageSize = req.query.size || 3;
        const pagesAmount = Math.ceil(items.length / pageSize );
        const page = (req.query.page > pagesAmount) ? pagesAmount : req.query.page || 1;
        console.log(`Page=${page}, server acessed`)
        res.json({
            "page": page,
            "pagesAmount": pagesAmount,
            "list": result.slice(page * pageSize - pageSize, page * pageSize),
        })
    })
})
app.get('/image/:name.:subname', (req, res) => {
    res.sendFile(__dirname + '/assets/' + req.params.name + '.' + req.params.subname, (err) => {
        console.log(__dirname + '/assets/' + req.params.name + '.' + req.params.subname)
        if (err) {
            next(err)
        } else {
            console.log('Sent:', req.query.path)
        }
    })
})

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))