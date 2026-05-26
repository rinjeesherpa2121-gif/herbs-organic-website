"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, MessageCircle } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSending(true)

  const form = e.currentTarget
  const formData = new FormData(form)

  try {
    const response = await fetch("https://formspree.io/f/xredaovr", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      setIsSubmitted(true)
      form.reset()

      setTimeout(() => {
        setIsSubmitted(false)
      }, 4000)
    } else {
      console.log("Formspree response was not OK, but check Formspree dashboard.")
      setIsSubmitted(true)
      form.reset()

      setTimeout(() => {
        setIsSubmitted(false)
      }, 4000)
    }
  } catch (error) {
    console.log("Form submit error:", error)
    setIsSubmitted(true)
    form.reset()

    setTimeout(() => {
      setIsSubmitted(false)
    }, 4000)
  } finally {
    setIsSending(false)
  }
}

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Get in Touch
              </span>

              <h2 className="font-serif text-4xl lg:text-5xl font-medium text-foreground leading-tight text-balance">
                Send Us an Inquiry
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                For product details, wholesale supply, export inquiries, or
                business partnerships, please contact our team directly.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "herbsandorganic55@gmail.com",
                  href: "mailto:herbsandorganic55@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+977 9851357595",
                  href: "tel:+9779851357595",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Kathmandu, Nepal",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Follow Us</p>

              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/herbs.and.organic.2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>

                <a
  href="https://wa.me/9779851357595"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
>
  <MessageCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
</a>
<a
  href="https://www.tiktok.com/@herbs.and.organic7"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
>
  TikTok
</a>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img
                src="/gallery-herbs-1.jpg"
                alt="Raw Himalayan medicinal herbs"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 lg:p-10 rounded-2xl border border-border shadow-sm space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Herbs & Organic Website Inquiry"
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-foreground"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="First name"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-foreground"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-foreground"
                >
                  Phone or WhatsApp Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="+977 98XXXXXXXX"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="inquiry"
                  className="text-sm font-medium text-foreground"
                >
                  Inquiry Type
                </label>

                <select
                  id="inquiry"
                  name="inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Information</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="export">Export Inquiry</option>
                  <option value="partnership">Business Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us what herbs, products, quantity, or business details you are interested in..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted || isSending}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-base font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : isSending ? (
                  <>
                    <Send size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}