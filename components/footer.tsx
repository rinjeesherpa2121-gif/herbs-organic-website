"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

const footerLinks = {
  products: [
    { label: "Medicinal Herbs", href: "#products" },
    { label: "Raw Herbal Materials", href: "#products" },
    { label: "Wild Herbal Teas", href: "#products" },
    { label: "Roots & Botanicals", href: "#products" },
    { label: "Bulk Inquiries", href: "#contact" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#benefits" },
    { label: "Gallery", href: "#gallery" },
    { label: "Export & Wholesale", href: "#contact" },
  ],
  inquiries: [
    { label: "Contact Us", href: "#contact" },
    { label: "Product Inquiry", href: "#contact" },
    { label: "Wholesale Inquiry", href: "#contact" },
    { label: "Export Inquiry", href: "#contact" },
  ],
}

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/herbs.and.organic.2024",
    label: "Facebook",
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Inquiry Section */}
        <div className="py-16 border-b border-card/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            <div>
              <h3 className="font-serif text-3xl font-medium">
                Connect With Herbs & Organic
              </h3>

              <p className="mt-2 text-card/70 max-w-xl">
                For product details, wholesale supply, export inquiries, or
                business partnerships, reach out to our team directly.
              </p>
            </div>

            <Link
  href="#contact"
  className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
>
  Contact Us
</Link>

          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">

            <Link href="#home" className="flex items-center gap-4">

              <div className="bg-white rounded-full p-1 shadow-md">
                <img
                  src="/logo.png"
                  alt="Herbs & Organic Logo"
                  className="h-20 w-auto"
                />
              </div>

              <span className="font-serif text-2xl font-semibold">
                Herbs & Organic
              </span>

            </Link>

            <p className="text-card/70 leading-relaxed max-w-sm">
              Supplying raw Himalayan medicinal herbs, roots, and botanicals
              from Nepal for local markets, wholesale buyers, and export
              inquiries.
            </p>

            <div className="flex gap-4 items-center">
  {socialLinks.map((social) => (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <social.icon size={18} />
    </a>
  ))}

  <a
    href="https://www.tiktok.com/@herbs.and.organic7"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-card/10 text-card/80 hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
  >
    TikTok
  </a>
</div>

          </div>

          {/* Products */}
          <div>

            <h4 className="font-medium text-sm uppercase tracking-wider mb-6">
              Products
            </h4>

            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-card transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Company */}
          <div>

            <h4 className="font-medium text-sm uppercase tracking-wider mb-6">
              Company
            </h4>

            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-card transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Inquiries */}
          <div>

            <h4 className="font-medium text-sm uppercase tracking-wider mb-6">
              Inquiries
            </h4>

            <ul className="space-y-4">
              {footerLinks.inquiries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-card transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-card/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-card/60">

          <p>
            &copy; {new Date().getFullYear()} Herbs & Organic. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#contact" className="hover:text-card transition-colors">
              Contact
            </Link>

            <Link href="#products" className="hover:text-card transition-colors">
              Products
            </Link>

            <a
              href="https://www.facebook.com/herbs.and.organic.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-card transition-colors"
            >
              Facebook
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}