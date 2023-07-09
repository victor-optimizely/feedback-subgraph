import { FeedbackDataSource } from "../datasources/Feedback.datasource.js";

export interface ServerContext {
    token?: string,
    dataSources: {
        feedback: FeedbackDataSource;
    };
}
