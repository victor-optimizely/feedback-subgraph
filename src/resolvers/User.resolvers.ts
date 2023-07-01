import { ServerContext } from "../types/ServerContext";

export const UserResolvers = {
    Query: {
        users: async (_: any, __: any, { dataSources }: ServerContext) => {
            const res = await dataSources.users.getUsers();
            console.log({ res });
            return res;
        }
    }
}