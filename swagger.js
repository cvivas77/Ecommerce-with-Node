const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const options = {
  apis: ['./src/routes/auth.routes.js',
         './src/models/users.models.js',
         './src/routes/cart.routes.js',
         './src/models/cart.models.js',
         './src/routes/order.routes.js',
         './src/models/order.models.js',
         './src/routes/products.routes.js',
         './src/models/products.models.js'],
  definition: {
    openapi: "3.0.0",
    info:{
      title: "Ecommerce with NodeJS",
      version: "0.0.9",
      description: "API para tienda web"
    }
  }
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader({"Content-Type" : "application/json"});
    res.send(swaggerSpec)
  });

  console.log(`Documentacion disponible en ${process.env.URL}:${port}/api/v1/docs`);
}

module.exports = swaggerDocs

