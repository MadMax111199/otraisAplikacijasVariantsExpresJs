import express from 'express';
import session from 'express-session';
import path from 'path';
import mysql from 'mysql';
import bodyParser from 'body-parser';

const __dirname = path.resolve();
const app = express();
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'templates'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let userBase;

// let arrFull = ['Daugavpils', 'Ogre', 'Liepaja', 'Ventspils', 'Sigulda', 'Balvi', 'Saldus'] //plus Riga


var connection = mysql.createConnection({
    host: 'maxonbtc.beget.tech',
    user: 'maxonbtc_test',
    password: 'cagnN%9n',
    database: 'maxonbtc_test'
});

app.use(session({
    secret: 'afsafewqfdwf',
    resave: true,
    saveUninitialized: true
}));

// Access the session as req.session
app.get('/', (req, res) => {
    // userRequest();
    req.session.acces = req.session.acces || false;
    try {
        if (req.session.acces == true) {
            res.redirect('/route')
        } else {
            res.redirect('/main')
        }
    } catch (error) {
        res.redirect('/main')
    }
});

app.get('/main', (req, res) => {
    res.render('index')
});

// app.get('/2', (req, res) => {
//     connection.connect();

//     connection.query('select * from users', (err, results, fields) => {
//         console.log(err);
//         console.log(results);
//     });

//     connection.end();
//     res.sendFile(path.resolve(__dirname, 'templates', 'index.html'))
// });

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', function (req, res) {
    const users = userRequest();
    console.log(users)
    connection.end();

    console.log(req.body.username)
    for (let user in users) {
        console.log(users[user])
    }
});

app.listen(3000);





async function userRequest() {
    return new Promise((resolve, reject) => {
        connection.connect();
        connection.query('select * from users', (err, result, fields) => {
            if (err) {
                reject(err);
            }
            resolve(result);
            console.log(result)
        });
    });
}




