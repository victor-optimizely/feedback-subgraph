import { ServerContext } from "../types/ServerContext";

export const FeedbackResolvers = {
    Query: {
        feedback: async (_: any, { page, pageSize }: any, { dataSources }: ServerContext) => {
            const res = await dataSources.feedback.getAllFeedback();
            console.log({ res });
            return res;
        }
    },
    Mutation: {
        submitFeedback: async(_:any, feedback, { dataSources }: ServerContext) => {
          const result = await dataSources.feedback.addFeedback({ feedback });
          console.log({ result });
          return result;
        }
    }
}