const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Handle specific error types
    if (err.code === 'ER_ACCESS_DENIED_ERROR') {
        return res.status(500).json({
            error: 'Database connection error',
            message: 'Unable to connect to the database'
        });
    }

    if (err.code === 'ER_NO_SUCH_TABLE') {
        return res.status(500).json({
            error: 'Database error',
            message: 'Required database tables do not exist'
        });
    }

    // Default error response
    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
};

module.exports = errorHandler; 