const CORS_ALLOWED_URLS = [
  'https://dtakush.mesto.students.nomoredomains.club',
  'https://api.dtakush.mesto.student.nomoredomains.club',
  'localhost:3000'
];

const CORS_ALLOWED_METHODS = 'OPTIONS, GET, POST, PUT, DELETE, PATCH';
const CORS_ALLOWED_HEADERS = 'Origin, Content-Type';

module.exports = { CORS_ALLOWED_URLS, CORS_ALLOWED_METHODS, CORS_ALLOWED_HEADERS };



/* module.exports.corsMiddleware = (req, res, next) => {
    // Массив доменов, с которых разрешены кросс-доменные запросы
    const allowedCors = [
    'https://dtakush.mesto.students.nomoredomains.club',
    'https://api.dtakush.mesto.student.nomoredomains.club',
    'localhost:3000'
  ];

    // Значение для заголовка Access-Control-Allow-Methods по умолчанию (разрешены все типы запросов)
  const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE"; 
  
  app.use(function(req, res, next) {
    const { origin } = req.headers; // Сохраняем источник запроса в переменную origin
    const { method } = req; // Сохраняем тип запроса (HTTP-метод) в соответствующую переменную
    
    // сохраняем список заголовков исходного запроса 
    const requestHeaders = req.headers['access-control-request-headers']; 
  
    // проверяем, что источник запроса есть среди разрешённых 
    if (allowedCors.includes(origin)) {
      // устанавливаем заголовок, который разрешает браузеру запросы с этого источника
      res.header('Access-Control-Allow-Origin', origin);
    }
    
    // Если это предварительный запрос, добавляем нужные заголовки
    if (method === 'OPTIONS') {
      // разрешаем кросс-доменные запросы любых типов (по умолчанию) 
      res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
  
      // разрешаем кросс-доменные запросы с этими заголовками
      res.header('Access-Control-Allow-Headers', requestHeaders);
  
      // завершаем обработку запроса и возвращаем результат клиенту
      return res.end();
    } 
  
    next();
  });
} */
  