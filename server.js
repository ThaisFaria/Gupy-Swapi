var app = require('./app');

var port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port ', port);
});