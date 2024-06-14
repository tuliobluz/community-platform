/**
 * Simple re-export of all the data within the oa-shared mocks
 * Can be imported locally as individual namespaces or combined
 * @example
 * ```
 * import { howtos } from '../data'
 * ```
 * or
 * ```
 * import { MOCK_DATA } from '../data
 * ```
 *
 **/


import { categories, 
discussions,
howtos, 
mappins,
questionCategories, 
questions,
research,
tags,
users,
messages } from  'oa-shared/mocks/data'
export const MOCK_DATA = {
  categories, 
discussions,
howtos, 
mappins,
questionCategories, 
questions,
research,
tags,
users,
messages
}
