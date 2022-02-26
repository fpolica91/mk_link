import { resolve } from "path";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";

export const schema = async (): Promise<GraphQLSchema> =>
  await buildSchema({
    resolvers: [resolve("src/resolvers/**/*.{mutations,queries}.{ts,js}")],
    emitSchemaFile: resolve("schema.gql"),
    authMode: "null",
  });
