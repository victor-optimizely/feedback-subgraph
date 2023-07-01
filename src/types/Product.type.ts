export const ProductType = `
  type Product {
    id: String!
    allowAdminInstanceCreation: Boolean
    allowAdminInstanceCredentialManagement: Boolean
    allowCustomerDefinedRoles: Boolean
    allowMultipleInstancesPerEnvironment: Boolean
    allowMultipleInstancesPerOrganization: Boolean
    authenticationType: String
    claims: [GenericPropertyType]
    created: Date,
    hasUsageDashboard: Boolean
    isInstanceCreationDisabled: Boolean
    isService: Boolean
    modified: Date
    name: String
    properties: [GenericPropertyType]
    supportedRegions: [String]
    type: String
  }
`