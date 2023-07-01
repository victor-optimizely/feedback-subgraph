export const UserType = `
  type User {
    id: String!
    created: Date
    email: String,
    externalUserId: String,
    firstName: String,
    homeOrganizationId: String,
    lastLoggedIn: Date
    lastName: String
    modified: Date
    properties: [GenericPropertyType]
    userGroupIds: [String]
  }
`