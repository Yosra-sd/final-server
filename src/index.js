const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path')
const cloudinary = require('cloudinary')


/** settings */
const app = express();
require ('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

/** models */
require('./public/models/user')
require('./public/models/administrateur')
require('./public/models/document-rh')
require('./public/models/client')
require('./public/models/document-fact')

/** routes */
app.use(require('./public/routes/user-route'))
app.use(require('./public/routes/admin-route'))
app.use(require('./public/routes/auth-route'))
app.use(require('./public/routes/document-rh-route'))
app.use(require('./public/routes/facturation/client-route'))
app.use(require('./public/routes/facturation/document-fact-route'))

/** database connection */
mongoose.connect(process.env.dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false} )
mongoose.connection.on('connected', () => {
    console.log("connected to mongo")
})
mongoose.connection.on('error', (err) => {
    console.log("error connecting to the database",err)
})

/** port configuration */
PORT = process.env.PORT || 5500 ;

app.listen (PORT, () => {
    console.log("server is running on", PORT)
})

/** test */
app.get('/', (req, res) => {
    console.log("hello friend")
    res.send("hello friend")
})