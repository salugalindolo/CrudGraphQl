// index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/schema');
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} = require('./data/data');

const resolvers = {
  Query: {
    tasks: () => getTasks(),
    task: (_, { id }) => getTask(id)
  },
  Mutation: {
    createTask: (_, { title }) => createTask(title),
    updateTask: (_, { id, title, completed }) =>
      updateTask(id, { title, completed }),
    deleteTask: (_, { id }) => deleteTask(id)
  }
};

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`Servidor en http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();
