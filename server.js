const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const PORT = process.env.port || 5000;
const schema = require('./schema.js')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => console.log(`Server listing on port ${PORT}`));
