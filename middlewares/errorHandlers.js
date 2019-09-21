
exports.catchErrors = fn => function (req, res, next) {
    return fn(req, res, next).catch(next);
};
  
exports.notFound = (req, res) => {
    const err = new Error('Not Found');
    err.status = 404;
    res.json({ message: 'not found' });
};