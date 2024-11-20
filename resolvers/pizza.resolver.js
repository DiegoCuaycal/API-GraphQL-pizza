const db = require('../config/connection')

const resolvers = {
    Query: {
      hello: () => "Hola Mundo", // Respuesta para la consulta `hello`
      pizzas: () => [
        { id: "1", name: "Margherita", price: 10.99 },
        { id: "2", name: "Pepperoni", price: 12.99 },
      ],
    },
  };
  
  module.exports = resolvers;
  
  
  

