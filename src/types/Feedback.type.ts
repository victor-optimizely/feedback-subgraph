export const FeedbackType = `
  type Feedback {
    id: String!
    created: Date
    email: String!
    message: String
    requestedFollowUp: Boolean
    type: String
  }
`