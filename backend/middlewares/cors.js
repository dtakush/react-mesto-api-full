const allowedCors = [
  'https://dtakush.mesto.students.nomoredomains.club',
  'http://api.dtakush.mesto.student.nomoredomains.club',
  'localhost:3000'
];

const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const requestHeaders = req.headers['access-control-request-headers'];
  const { method } = req;

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
  }

  next();
};
