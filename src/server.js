import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import { schema } from './schema';
import { makeExecutableSchema } from 'graphql-tools';

const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
    endpointURL: 'graphql',
    query: `
    query x ($state: String) {
        getSalaries(State:$state) {
          _id
          State
          City
          Salary
        }
    }
    `
    ,
    variables: {
        "state": "Utah"
    }
}));


app.listen(PORT, () => {
    console.log("GraphQL Server is now running on port " + PORT);
})

