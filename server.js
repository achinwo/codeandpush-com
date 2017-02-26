"use strict";
let express = require('express')
let path = require('path')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')

let app = express()
app.set('view engine', 'ejs')

app.use(logger('":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    return res.send('index.html')
})

let port = process.env.PORT || '8082'
app.listen(port, function () {
    console.log('Example app listening on port %s!', port)
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;