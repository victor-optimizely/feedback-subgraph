import { MongoClient, ObjectId, Db, Collection, InsertOneResult, UpdateResult, Sort } from "mongodb";
import { MongoDataSource } from "apollo-datasource-mongodb";

interface Feedback {
    id: ObjectId;
    createdAt: Date;
    email: String;
    message: String;
    requestedFollowUp: Boolean;
    type: String;
    // Add other properties of your feedback document
}

export class FeedbackDataSource extends MongoDataSource<any> {
    async addFeedback({ feedback }: { feedback: Feedback }): Promise<Feedback> {
        const result = await this.collection.insertOne(feedback);
        const entry = await this.collection.findOne({
            _id: new ObjectId(result.insertedId)
        });

        return {
            id: result.insertedId,
            ...entry
        };
    }

    async getFeedbackById({ feedbackId }: { feedbackId: string }): Promise<Feedback | null> {
        return this.collection.findOne({ _id: new ObjectId(feedbackId) });
    }

    async getAllFeedback(): Promise<Feedback[]> {
        return this.collection.find().toArray();
    }

    async updateFeedback({ feedbackId, updates }: { feedbackId: string; updates: Partial<Feedback> }): Promise<boolean> {
        const result: UpdateResult = await this.collection.updateOne(
            { _id: new ObjectId(feedbackId) },
            { $set: updates }
        );

        return result.modifiedCount > 0;
    }

    async getPaginatedFeedback({ pageSize = 20, page = 1, sortBy = "createdAt" }: {  pageSize: number, page: number, sortBy?: string }): Promise<Feedback[]> {
        const skip = (page - 1) * pageSize;
        const sortOptions: Sort = { [sortBy]: -1 }; // Sort in descending order based on the specified field

        return this.collection
            .find()
            .sort(sortOptions)
            .skip(skip)
            .limit(pageSize)
            .toArray();
    }
}

export default FeedbackDataSource;
