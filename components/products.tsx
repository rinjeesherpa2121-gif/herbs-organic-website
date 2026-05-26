"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, X } from "lucide-react"

const categories = [
  { id: "all", name: "All Products" },
  { id: "roots", name: "Roots & Rhizomes" },
  { id: "herbs", name: "Herbs & Leaves" },
  { id: "fungi", name: "Mushrooms & Fungi" },
  { id: "spices", name: "Spices & Seeds" },
  { id: "fibers", name: "Fibers & Botanicals" },
]

type Product = {
  id: number
  name: string
  scientificName: string
  category: string
  categoryLabel: string
  description: string
  traditionalUse: string
  preparation: string
  availability: string
  image: string
  badge: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Khiraula",
    scientificName: "Polygonatum sp.",
    category: "roots",
    categoryLabel: "Rhizome Material",
    description:
      "Dried rhizome material from Polygonatum species, known for its root-like form and value in Himalayan raw herb trade.",
    traditionalUse:
      "Traditionally valued in regional botanical markets as a rhizome material used in Himalayan herbal trade.",
    preparation:
      "Collected, cleaned, sliced or dried as needed, then sorted and prepared as raw herbal material.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/khiraula.jpg",
    badge: "Raw Material",
  },
  {
    id: 2,
    name: "Chiraito",
    scientificName: "Swertia spp.",
    category: "herbs",
    categoryLabel: "Bitter Herb",
    description:
      "A distinctly bitter dried herb from Swertia species, commonly traded in Nepal as whole dried herbal material.",
    traditionalUse:
      "Traditionally recognized in Nepali and Himalayan herb markets for its strong bitter botanical profile.",
    preparation:
      "Cleaned, bundled or sorted, and sun dried to preserve its natural dried herb quality.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/chiraito.jpg",
    badge: "Trade Ready",
  },
  {
    id: 3,
    name: "Musli",
    scientificName: "Chlorophytum spp.",
    category: "roots",
    categoryLabel: "Tuberous Root",
    description:
      "Light-colored tuberous root material from Chlorophytum species, prepared and supplied as a raw herbal ingredient.",
    traditionalUse:
      "Known in regional herb markets as a tuberous root material used in traditional botanical trade.",
    preparation:
      "Washed, cleaned, dried, and sorted carefully before being supplied in raw form.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/musli.jpg",
    badge: "Bulk Inquiry",
  },
  {
    id: 4,
    name: "Mjitho",
    scientificName: "Rubia manjith",
    category: "roots",
    categoryLabel: "Red Root",
    description:
      "Red-toned dried root material from Rubia species, known for its natural color and traditional botanical value.",
    traditionalUse:
      "Recognized in traditional markets as a root material with a distinctive red color profile.",
    preparation:
      "Cleaned, dried, cut or sorted depending on trade needs, and prepared as raw botanical material.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/mjitho.jpg",
    badge: "Raw Root",
  },
  {
    id: 5,
    name: "Satuwa",
    scientificName: "Paris polyphylla",
    category: "roots",
    categoryLabel: "Rhizome",
    description:
      "High-value rhizome material from Paris polyphylla, collected from Nepal’s mountain regions and supplied as raw botanical material.",
    traditionalUse:
      "Traditionally valued in Himalayan herb markets as a rare rhizome material with strong trade demand.",
    preparation:
      "Cleaned, dried, sorted, and handled carefully to maintain quality before supply.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/satuwa.jpg",
    badge: "High Value",
  },
  {
    id: 6,
    name: "Banmula",
    scientificName: "Dipsacus inermis",
    category: "roots",
    categoryLabel: "Dried Root",
    description:
      "Dried root material from Dipsacus inermis, prepared for raw herbal and botanical trade use.",
    traditionalUse:
      "Known in traditional herb markets as a dried root material used in regional botanical supply.",
    preparation:
      "Washed, cleaned, dried, and sorted into trade-ready root material.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/banmula.jpg",
    badge: "Dried Root",
  },
  {
    id: 7,
    name: "Chutro",
    scientificName: "Berberis spp.",
    category: "roots",
    categoryLabel: "Berberis Material",
    description:
      "Berberis plant material from Nepal, commonly traded as root, bark, or fruit depending on the collected part.",
    traditionalUse:
      "Recognized in regional botanical markets for its yellow-toned root or bark material and sometimes fruit material.",
    preparation:
      "Prepared according to the supplied plant part, usually cleaned, dried, sorted, and packed for trade.",
    availability:
      "Available for retail, wholesale, and export inquiry. Confirm exact plant part before order.",
    image: "/chutro.jpg",
    badge: "Confirm Part",
  },
  {
    id: 8,
    name: "Allo",
    scientificName: "Girardinia diversifolia",
    category: "fibers",
    categoryLabel: "Natural Fiber",
    description:
      "Himalayan nettle plant material known in Nepal for natural fiber and traditional local use.",
    traditionalUse:
      "Traditionally known in Nepal for fiber-related use and local botanical material trade.",
    preparation:
      "Collected and prepared depending on whether the supply is for fiber, stem, or botanical material use.",
    availability: "Available for local supply, wholesale, and trade inquiry.",
    image: "/allo.jpg",
    badge: "Natural Fiber",
  },
  {
    id: 9,
    name: "Kutki",
    scientificName: "Picrorhiza kurroa",
    category: "roots",
    categoryLabel: "Bitter Root",
    description:
      "Bitter dried rhizome material from Picrorhiza kurroa, collected from high-altitude Himalayan regions.",
    traditionalUse:
      "Recognized in Himalayan and Ayurvedic raw herb trade for its strong bitter root profile.",
    preparation:
      "Cleaned, dried, sorted, and prepared as raw bitter rhizome material for trade.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/kutki.jpg",
    badge: "Raw Root",
  },
  {
    id: 10,
    name: "Sunpati",
    scientificName: "Rhododendron anthopogon",
    category: "herbs",
    categoryLabel: "Aromatic Herb",
    description:
      "Aromatic Himalayan plant material from Rhododendron anthopogon, known for its natural fragrance.",
    traditionalUse:
      "Traditionally valued in Himalayan botanical practices for its aromatic leaves and plant material.",
    preparation:
      "Collected, dried, and sorted as leaves, stems, or aerial herb material depending on supply needs.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/sunpati.jpg",
    badge: "Aromatic",
  },
  {
    id: 11,
    name: "Lautha Salla",
    scientificName: "Taxus wallichiana",
    category: "herbs",
    categoryLabel: "Yew Material",
    description:
      "Himalayan yew botanical material from Taxus wallichiana, handled carefully due to its regulated trade nature.",
    traditionalUse:
      "Recognized as a high-value botanical material requiring careful sourcing and verified inquiry.",
    preparation:
      "Prepared only through appropriate sourcing, sorting, and handling requirements.",
    availability: "Available by verified inquiry only.",
    image: "/lautha-salla.jpg",
    badge: "Verified Inquiry",
  },
  {
    id: 12,
    name: "Sarako Jara",
    scientificName: "Roscoea sp.",
    category: "roots",
    categoryLabel: "Root Material",
    description:
      "Root or rhizome material from Roscoea species, often ginger-like in appearance when dried.",
    traditionalUse:
      "Traditionally recognized as a Himalayan root-based botanical material in local herb markets.",
    preparation:
      "Cleaned, dried, sorted, and prepared as raw root or rhizome material.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/sarako-jara.jpg",
    badge: "Dried Root",
  },
  {
    id: 13,
    name: "Padamchal",
    scientificName: "Rheum australe",
    category: "roots",
    categoryLabel: "Rhubarb Rhizome",
    description:
      "Dried rhubarb rhizome from Rheum australe, known for its earthy color and raw botanical value.",
    traditionalUse:
      "Recognized in Himalayan herb markets as a traditional rhizome material with regional trade value.",
    preparation:
      "Cleaned, cut, dried, and sorted depending on supply and trade requirements.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/padamchal.jpg",
    badge: "Rhizome",
  },
  {
    id: 14,
    name: "Pashnved",
    scientificName: "Bergenia ciliata",
    category: "roots",
    categoryLabel: "Dried Rhizome",
    description:
      "Dried rhizome material from Bergenia ciliata, supplied as a raw Himalayan botanical.",
    traditionalUse:
      "Traditionally known in local herb markets as a valued rhizome-based plant material.",
    preparation:
      "Cleaned, dried, and sorted to maintain raw material quality before supply.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/pashnved.jpg",
    badge: "Raw Material",
  },
  {
    id: 15,
    name: "Rato Chyau",
    scientificName: "Ganoderma lucidum",
    category: "fungi",
    categoryLabel: "Medicinal Fungus",
    description:
      "Red-brown Ganoderma mushroom material, supplied dried for herbal and botanical trade.",
    traditionalUse:
      "Recognized in Asian and Himalayan markets as a valued dried mushroom material.",
    preparation:
      "Cleaned, dried, sorted, and prepared as raw fungal material.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/rato-chyau.jpg",
    badge: "Dried Fungus",
  },
  {
    id: 16,
    name: "Yarsagumba",
    scientificName: "Ophiocordyceps spp.",
    category: "fungi",
    categoryLabel: "Rare Medicinal Fungi",
    description:
      "Rare high-altitude caterpillar fungus collected from Himalayan regions and supplied as premium raw fungal material.",
    traditionalUse:
      "Highly valued in Himalayan and international herb trade due to its rarity and traditional reputation.",
    preparation:
      "Carefully cleaned, dried, sorted, and handled with attention to quality and traceability.",
    availability: "Available by verified retail, wholesale, or export inquiry.",
    image: "/yarsagumba.jpg",
    badge: "Premium Export",
  },
  {
    id: 17,
    name: "Guchhi Chyau",
    scientificName: "Morchella conica",
    category: "fungi",
    categoryLabel: "Wild Morel",
    description:
      "Wild morel mushroom with a honeycomb texture, collected seasonally and supplied as dried mushroom material.",
    traditionalUse:
      "Known in local and international markets as a seasonal wild mushroom product.",
    preparation:
      "Cleaned, dried, graded, and sorted before being supplied for food, trade, or export inquiry.",
    availability: "Available seasonally for retail, wholesale, and export inquiry.",
    image: "/guchhi-chyau.jpg",
    badge: "Seasonal",
  },
  {
    id: 18,
    name: "Niuro",
    scientificName: "Diplazium esculentum",
    category: "herbs",
    categoryLabel: "Fern Shoot",
    description:
      "Edible fern shoot material from Diplazium esculentum, known locally as a seasonal plant product.",
    traditionalUse:
      "Traditionally recognized in Nepal as a local edible fern shoot and seasonal plant material.",
    preparation:
      "Cleaned, sorted, and prepared depending on local market or supply needs.",
    availability: "Available for local and bulk inquiry.",
    image: "/niuro.jpg",
    badge: "Local Supply",
  },
  {
    id: 19,
    name: "Alainchi",
    scientificName: "Amomum subulatum",
    category: "spices",
    categoryLabel: "Large Cardamom",
    description:
      "Aromatic large cardamom pods from Nepal, valued in spice trade and regional markets.",
    traditionalUse:
      "Widely used as a spice and aromatic botanical in South Asian food and trade markets.",
    preparation:
      "Dried, graded, sorted, and prepared for local wholesale and export supply.",
    availability: "Available for retail, wholesale, and export inquiry.",
    image: "/alainchi.jpg",
    badge: "Spice Trade",
  },
]

export function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="products" className="py-24 lg:py-32 bg-secondary">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Our Products
          </span>

          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-foreground leading-tight mt-4 text-balance">
            Raw Himalayan Medicinal Herbs from Nepal
          </h2>

          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            A curated selection of Himalayan medicinal herbs, roots, fungi,
            spices, and botanicals prepared for Nepal’s local markets,
            wholesale buyers, and international export inquiries.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground border border-border"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProduct(product)}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground rounded-full">
                    {product.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 bg-primary/90 backdrop-blur-sm text-xs font-medium text-primary-foreground rounded-full">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                  {product.name}
                </h3>

                <p className="text-xs text-primary font-medium">
                  {product.scientificName}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProduct(product)
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2 transition-all"
                >
                  View Details
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.facebook.com/herbs.and.organic.2024"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-base font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            View More on Facebook
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[100] bg-foreground/70 backdrop-blur-sm flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border"
            >
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Close product details"
              >
                <X size={20} />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[320px]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover lg:rounded-l-3xl"
                  />
                </div>

                <div className="p-8 lg:p-10 space-y-6">
                  <div>
                    <span className="inline-flex px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {selectedProduct.categoryLabel}
                    </span>

                    <h3 className="font-serif text-3xl lg:text-4xl font-medium text-foreground mt-4 leading-tight">
                      {selectedProduct.name}
                    </h3>

                    <p className="text-primary font-medium mt-2">
                      {selectedProduct.scientificName}
                    </p>
                  </div>

                  <div className="space-y-5 text-sm lg:text-base">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Short Description
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Traditional Use
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProduct.traditionalUse}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Preparation
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProduct.preparation}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Availability
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProduct.availability}
                      </p>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setSelectedProduct(null)}
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-primary text-primary-foreground text-base font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
                  >
                    Send Inquiry
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}