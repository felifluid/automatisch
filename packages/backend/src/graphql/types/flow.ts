import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import StepType from './step';

const flowType = new GraphQLObjectType({
  name: 'Flow',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    steps: {
      type: GraphQLList(StepType),
    }
  }
})

export default flowType;