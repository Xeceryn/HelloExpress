module.exports = function (app) {
    var appController = require('../controller')
    app.route('/')
        .get(appController.index);

    app.route('/users')
        .get(appController.users);
}