import { defineField, defineType } from 'sanity'

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone (with country code)', type: 'string', description: 'e.g. +977 9851357595' }),
    defineField({ name: 'whatsappNumber', title: 'WhatsApp Number (digits only)', type: 'string', description: 'e.g. 9779851357595 — no spaces or +' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'tiktokUrl', title: 'TikTok URL', type: 'url' }),
  ],
  preview: {
    prepare() {
      return { title: 'Contact Info' }
    },
  },
})
