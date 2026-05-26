"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { X, Facebook, ExternalLink } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/gallery-herbs-1.jpg",
    alt: "Hands holding raw Himalayan medicinal herbs",
    category: "Raw Herb Collection",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: 2,
    src: "/gallery-herbs-2.jpg",
    alt: "Dried medicinal roots prepared for sorting",
    category: "Dried Roots",
    span: "",
  },
  {
    id: 3,
    src: "/gallery-herbs-3.jpg",
    alt: "Medicinal herbs being dried and sorted outdoors",
    category: "Drying & Sorting",
    span: "",
  },
  {
    id: 4,
    src: "/gallery-herbs-4.jpg",
    alt: "Export facilitation workshop for herbal commodities",
    category: "Export Workshop",
    span: "lg:row-span-2",
  },
  {
    id: 5,
    src: "/gallery-herbs-5.jpg",
    alt: "Container truck prepared for export transportation",
    category: "Export Transport",
    span: "",
  },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] =
    useState<(typeof galleryImages)[0] | null>(null)

  useEffect(() => {
    if (!document.getElementById("tiktok-embed-script")) {
      const tiktokScript = document.createElement("script")
      tiktokScript.id = "tiktok-embed-script"
      tiktokScript.src = "https://www.tiktok.com/embed.js"
      tiktokScript.async = true
      document.body.appendChild(tiktokScript)
    }
  }, [])

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Gallery
          </span>

          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-foreground leading-tight mt-4 text-balance">
            From Mountain Collection to Market
          </h2>

          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            A look into our sourcing, cleaning, drying, sorting, export
            preparation, and raw medicinal herb materials from Nepal.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${image.span}`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500 flex items-end p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-card">
                  <p className="text-xs uppercase tracking-wider mb-1">
                    {image.category}
                  </p>
                  <p className="font-serif text-lg font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TikTok Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-20 text-center"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            From TikTok
          </span>

          <h3 className="font-serif text-3xl lg:text-4xl font-medium text-foreground mt-4">
            Watch Our Herbal Process
          </h3>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            See product videos, herb preparation clips, and behind-the-scenes
            updates from Herbs & Organic.
          </p>

          <div className="mt-8 flex justify-center">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@herbs.and.organic7"
              data-unique-id="herbs.and.organic7"
              data-embed-type="creator"
              style={{ maxWidth: "780px", minWidth: "288px" }}
            >
              <section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@herbs.and.organic7"
                >
                  @herbs.and.organic7
                </a>
              </section>
            </blockquote>
          </div>
        </motion.div>

        {/* Social Gallery Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 rounded-3xl bg-card border border-border p-8 lg:p-12 text-center shadow-sm"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            More From Our Socials
          </span>

          <h3 className="font-serif text-3xl lg:text-4xl font-medium text-foreground mt-4">
            Explore More Product Photos & Updates
          </h3>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            View more raw herb photos, product updates, videos, and
            behind-the-scenes moments from Herbs & Organic on our official
            social pages.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/herbs.and.organic.2024/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-base font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
            >
              <Facebook size={18} />
              View Facebook Gallery
            </a>

            <a
              href="https://www.tiktok.com/@herbs.and.organic7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground border border-border text-base font-medium rounded-full hover:bg-secondary transition-all duration-300"
            >
              Visit TikTok
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-card hover:text-card/80 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={32} />
          </button>

          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  )
}