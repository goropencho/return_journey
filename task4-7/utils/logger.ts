// Logs every request made to the server
export const logRequest = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const originalEnd = res.end;
    res.end = function (chunk, encoding) {
        console.log(`[${timestamp}] ${res.statusCode} ${req.method} ${req.url}`);
        originalEnd.call(res, chunk, encoding);
    };
    next();
};
