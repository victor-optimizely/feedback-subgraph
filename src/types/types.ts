import { queries } from './queries.js'
import { FeedbackType } from "./Feedback.type.js";
import { FeedbackPageType } from "./FeedbackPage.type.js";
import { mutations } from "./mutations.js";
export const typeDefinitions = [
    `scalar Date`,
    `extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])`,
    FeedbackType,
    FeedbackPageType,
    queries,
    mutations
]
