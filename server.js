const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema.js')

const PORT = process.env.port || 5000;
const app = express();

//Allow cross-orgin
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => console.log(`Server listing on port ${PORT}`));
