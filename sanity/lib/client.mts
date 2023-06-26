import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env.ts'

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
})
