"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="/image2.jpg"
                alt="Traditional herb preparation in Nepal"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-2xl border border-border max-w-xs hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-primary"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-foreground">
                    Locally Sourced • Globally Supplied
                  </p>
        
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-medium text-foreground leading-tight text-balance">
                Our Story
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Nestled in the foothills of the majestic Himalayas, Herbs and Organics
                has been involved in sourcing and trading natural wild herbs for generations. We work closely with local collectors and mountain communities to gather authentic medicinal herbs found across Nepal’s highlands and forests.
              </p>
              <p>
                Our herbs are carefully cleaned, sun dried, and prepared using both traditional methods and modern dehydration technology to preserve their natural quality and potency. We supply raw medicinal herbs to Nepal’s local retail and wholesale markets while also exporting internationally to countries including India and China. We offer a wide variety of Himalayan medicinal herbs, roots, flowers, and botanicals used in traditional wellness practices. Alongside raw herbs, we also specialize in wild herbal teas, including varieties such as wild dandelion and Anoectochilus. By combining traditional Himalayan harvesting practices with modern processing techniques, our mission is to bring the purity of Nepal’s natural herbs to local and international markets. 
              </p>
              
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { value: "Retail • Wholesale • Export", label: "India • Nepal • China" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl lg:text-3xl font-semibold text-foreground whitespace-nowrap">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
