import { makeExecutableSchema } from 'graphql-tools';
import { connectionFromArray } from 'graphql-relay';
import typeDefs from '../schema.graphql';

const postsArray = Array.from(Array(10)).map((_, idx) => ({ name: idx.toString(), id: idx.toString() }));

const resolvers = {
  Query: {
    posts: (_, args) => ({
      total: postsArray.length,
      ...connectionFromArray(postsArray, args),
    }),
  }
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});