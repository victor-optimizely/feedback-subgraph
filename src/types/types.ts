import { queries } from './queries.js'
import { UserType } from "./User.type.js";
import { GenericPropertyType } from "./GenericProperty.type.js";
import { UserPageType } from "./UserPage.type.js";

export const typeDefinitions = [
    `scalar Date`,
    GenericPropertyType,
    UserType,
    UserPageType,
    queries
]
