const express = require('express');

const app = express();

require('dotenv').config();

const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');

const { PORT = 3000 } = process.env;

const userRouter = require('./routes/user');
const cardRouter = require('./routes/card');
const { login, createUser } = require('./controllers/user');
const NotFound = require('./errors/NotFound');

const auth = require('./middlewares/auth');
const midlewareErrors = require('./middlewares/error');
const { userValidation, loginValidation } = require('./middlewares/validation');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { CORS_ALLOWED_URLS, CORS_ALLOWED_METHODS, CORS_ALLOWED_HEADERS } = require('./constants/corsSettings');

app.use(helmet());

app.use(cors());
app.use((req, res, next) => {
  const { origin } = req.headers;

  if (CORS_ALLOWED_URLS.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', CORS_ALLOWED_METHODS);
      res.header('Access-Control-Allow-Headers', CORS_ALLOWED_HEADERS);
      res.status(204).send();
    } else next();
  } else next();
});

app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// подключаем логгер запросов
app.use(requestLogger);

// роуты
app.post('/signin', loginValidation, login);
app.post('/signup', userValidation, createUser);

app.use(auth);

app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.use((req, res, next) => {
  next(new NotFound('Такого адреса не существует'));
});

app.use(errorLogger); // подключаем логгер ошибок
app.use(errors()); // ошибки celebrate
app.use(midlewareErrors); // централизованная обработка ошибок

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
