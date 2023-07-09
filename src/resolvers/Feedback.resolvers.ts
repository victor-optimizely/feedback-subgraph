import { ServerContext } from "../types/ServerContext";

export const FeedbackResolvers = {
    Query: {
        feedback: async (_: any, { page, pageSize }: any, { dataSources }: ServerContext) => {
            return await dataSources.feedback.getPaginatedFeedback({ page, pageSize });
        }
    },
    Mutation: {
        submitFeedback: async(_:any, feedback, { dataSources }: ServerContext) => {
          const result = await dataSources.feedback.addFeedback({ feedback });
          return result;
        }
    }
}