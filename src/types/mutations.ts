export const mutations = `
  type Mutation {
    submitFeedback(email: String!, message: String!, type: String = "GENERAL"): Feedback
  }
`
