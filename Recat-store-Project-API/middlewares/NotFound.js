const NotFoundMiddleware = (req, res, next) => {
    res.status(404).send('Page Not Found');
};

module.exports = NotFoundMiddleware;