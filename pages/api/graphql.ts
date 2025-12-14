import { createSchema, createYoga } from "graphql-yoga";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";

const schema = createSchema({ typeDefs, resolvers });

export const config = { api: { bodyParser: false } };

const yoga = createYoga({ schema });

export default yoga;
