const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const initModels = require('./models/initModels');
const routerApi = require('./routes');
const errorHandler = require('./middlewares/error.middleware');
const tokenExtractor = require('./middlewares/tokenExtractor.middleware');
const db = require('./utils/database');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(tokenExtractor);
app.use(errorHandler);



initModels();
db.authenticate()
  .then(() => console.log("db synched"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log('db synched'))
  .catch((error) => console.log(error));

app.get('/', (req, res) => {
  res.json({message: "Welcome to server"})
});

app.use('/api/v1/auth', authRoutes);

routerApi(app);

module.exports = app;
