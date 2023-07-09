import { queries } from './queries.js'
import { FeedbackType } from "./Feedback.type.js";
import { FeedbackPageType } from "./FeedbackPage.type.js";
import { mutations } from "./mutations.js";
export const typeDefinitions = [
    `scalar Date`,
    FeedbackType,
    FeedbackPageType,
    queries,
    mutations
]
