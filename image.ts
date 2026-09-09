import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlFor = (source: Image) => {
  return imageBuilder?.image(source)
}

/**
 * Resolves an image that might be a Sanity image object (from the CMS)
 * or a plain string path (from the site's built-in fallback content)
 * into a usable <img src>.
 */
export const resolveImageSrc = (
  image: Image | string | null | undefined,
  fallback: string
): string => {
  if (!image) return fallback
  if (typeof image === 'string') return image
  try {
    return urlFor(image)?.width(1000).url() || fallback
  } catch {
    return fallback
  }
}
