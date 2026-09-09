import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Use the CDN for fast, cached reads. Content updates may take a
  // short moment to appear; set to false if you need instant updates.
  useCdn: true,
})
