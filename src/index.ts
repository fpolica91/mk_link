import "reflect-metadata";
import express, { Express } from "express";
import { createConnection } from "typeorm";
import { schema } from "./utils/buildSchema";
import { ApolloServer, ExpressContext } from "apollo-server-express";

const startServer = async (): Promise<void> => {
  await createConnection();
  const server = new ApolloServer({
    schema: await schema(),
    context: ({ req, res }: ExpressContext) => ({ req, res }),
  });

  await server.start();
  const app: Express = express();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(8080, () => {
    console.log("Server started on port localhost:8080");
  });
};

startServer();
