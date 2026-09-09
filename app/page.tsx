import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Benefits } from "@/components/benefits"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { client } from "@/sanity/lib/client"
import {
  aboutQuery,
  contactInfoQuery,
  galleryQuery,
  productsQuery,
} from "@/sanity/lib/queries"

// Revalidate this page every 60 seconds so edits made in the
// Sanity Studio show up on the live site without a full rebuild.
export const revalidate = 60

async function getSanityData() {
  try {
    const [products, galleryImages, about, contactInfo] = await Promise.all([
      client.fetch(productsQuery),
      client.fetch(galleryQuery),
      client.fetch(aboutQuery),
      client.fetch(contactInfoQuery),
    ])
    return { products, galleryImages, about, contactInfo }
  } catch (error) {
    // If Sanity isn't configured yet (e.g. env vars missing during
    // initial setup), fall back to the site's built-in content
    // instead of crashing the page.
    console.error("Sanity fetch failed, using fallback content:", error)
    return {
      products: null,
      galleryImages: null,
      about: null,
      contactInfo: null,
    }
  }
}

export default async function Home() {
  const { products, galleryImages, about, contactInfo } =
    await getSanityData()

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About data={about} />
      <Products products={products} />
      <Benefits />
      <Gallery images={galleryImages} />
      <Contact info={contactInfo} />
      <Footer />
    </main>
  )
}
