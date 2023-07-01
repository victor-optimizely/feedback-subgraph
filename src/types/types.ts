import { queries } from './queries.js'
import { mutations } from './mutations.js'
import { GenericPropertyType } from "./GenericProperty.type.js";
import { ProductType } from "./Product.type.js";

export const typeDefinitions = [
    `scalar Date`,
    GenericPropertyType,
    ProductType,
    mutations,
    queries
]
