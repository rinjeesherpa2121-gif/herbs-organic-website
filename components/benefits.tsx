"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Leaf, Hand, Sun, Sprout, Boxes, MapPin } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Wild Collected Herbs",
    description:
      "Medicinal herbs gathered from Nepal’s mountain regions, forests, and highland landscapes.",
  },
  {
    icon: Hand,
    title: "Careful Cleaning & Sorting",
    description:
      "Raw herbs are cleaned, sorted, and prepared to maintain their natural quality before sale.",
  },
  {
    icon: Sun,
    title: "Sun Dried & Dehydrated",
    description:
      "Depending on the herb type, materials are sun dried or dehydrated using modern processing methods.",
  },
  {
    icon: Sprout,
    title: "Raw Herbal Materials",
    description:
      "We mainly supply raw roots, herbs, flowers, rhizomes, and botanicals for further use and trade.",
  },
  {
    icon: Boxes,
    title: "Local & Bulk Supply",
    description:
      "Serving Nepal’s local retail market, wholesale buyers, and bulk herbal material inquiries.",
  },
  {
    icon: MapPin,
    title: "Export Focused Trade",
    description:
      "Supplying selected medicinal herbs to international markets, including India and China.",
  },
]

export function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="benefits" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-foreground leading-tight mt-4 text-balance">
            The Herbs & Organic Difference
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            We believe in the power of nature and tradition. Here&apos;s what sets
            our products apart from the rest.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/5 -z-10 group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 p-8 lg:p-12 bg-primary rounded-3xl text-primary-foreground"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-3xl lg:text-4xl font-medium leading-tight text-balance">
                Committed to Quality From Source to Supply
              </h3>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Every herb is handled with care through collection, cleaning, drying, sorting, and preparation. Our focus is to maintain the natural quality of Nepal’s medicinal botanicals before they reach the market.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                { value: "Collected", label: "From Natural Regions" },
                { value: "Prepared", label: "Cleaned • Dried • Sorted" },
                { value: "Supplied", label: "For Trade Use" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-4xl lg:text-5xl font-semibold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/70 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
