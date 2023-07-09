import { GraphQLScalarType, Kind } from 'graphql'
import { FeedbackResolvers } from "./Feedback.resolvers.js";

export const resolvers = [
    {
        Date: new GraphQLScalarType({
            name: 'Date',
            description: 'Date custom scalar type',
            parseValue(value: any) {
                return new Date(value) // value from the client
            },
            serialize(value: any) {
                if (value && value.getTime) {
                    return value.getTime() // value sent to the client
                }
                return value
            },
            // @ts-ignore-next-line
            parseLiteral(ast) {
                if (ast.kind === Kind.INT) {
                    return parseInt(ast.value, 10) // ast value is always in string format
                }
                return null
            },
        }),
    },
    FeedbackResolvers,
]
