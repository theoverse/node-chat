function getLogin(req, res, next) {
    res.render('index', {
        title: 'Login - NChat'
    });
}

module.exports = {
    getLogin,
}