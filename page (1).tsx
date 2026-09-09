/**
 * This route renders the Sanity Studio at /studio.
 * Log in here with the account you (or your parents) created at sanity.io
 * to edit products, photos, the About text, and contact info.
 */
import { NextStudio } from 'next-sanity/studio'

import config from '../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}
