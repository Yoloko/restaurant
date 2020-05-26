const path = require('path');

module.exports = function(app){

    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/tables.html'));

});
}

module.exports = function(app){

    app.get(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));

});
}

module.exports = function(app){

    app.get('/reservation', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/reservation.html'));

});
}