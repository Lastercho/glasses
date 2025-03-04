const express = require('express');
const posts = require('./posts.json')
const cors = require('cors');
const fs = require('fs');
const pg = require('pg');

const app = express();

app.use(cors());
app.use(express.json());

export async function SetupApp() {

    const pgClient = new pg.Client({
        database: 'glasses',
        password: '123456',
        host: 'localhost',
        port: 5432,
    })
    await pgClient.connect()
// get
    app.get('/posts', function (req, res) {
        res.set('Content-Type', 'application/json')
        pgClient.query('SELECT * FROM posts').then((result) => {
            res.send(result.rows)
        })
    })

    //post
    app.post('/posts', function (req, res) {
        const newPost = {
            title: req.body.title,
        };


    posts.push(newPost)
    fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2),
        'utf8')
    res.send(newPost)
})







}

