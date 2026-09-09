import { groq } from 'next-sanity'

export const productsQuery = groq`
  *[_type == "product"] | order(order asc, name asc) {
    _id,
    name,
    scientificName,
    category,
    categoryLabel,
    description,
    traditionalUse,
    preparation,
    availability,
    image,
    badge
  }
`

export const galleryQuery = groq`
  *[_type == "galleryImage"] | order(order asc) {
    _id,
    image,
    alt,
    category
  }
`

export const aboutQuery = groq`
  *[_type == "about"][0] {
    heading,
    image,
    paragraphs,
    floatingCardText,
    statValue,
    statLabel
  }
`

export const contactInfoQuery = groq`
  *[_type == "contactInfo"][0] {
    email,
    phone,
    whatsappNumber,
    location,
    facebookUrl,
    tiktokUrl
  }
`
