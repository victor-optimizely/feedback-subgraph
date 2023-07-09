export const queries = `
  type Query {
    feedback(page: Int = 1, pageSize: Int = 20): FeedbackPage
  }
`
