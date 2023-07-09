export const FeedbackPageType = `

    type Pagination {
        hasMore: Boolean
        total: Int
        pages: Int
        pageSize: Int
    }

    type FeedbackPage {
        pagination: Pagination
        results: [Feedback]
    }
`