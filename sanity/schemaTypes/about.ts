import { defineField, defineType } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Our Story',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'paragraphs',
      title: 'Story Paragraphs',
      description: 'Add one entry per paragraph.',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
    }),
    defineField({
      name: 'floatingCardText',
      title: 'Floating Highlight Text',
      description: 'The short highlight text shown over the photo, e.g. "Locally Sourced • Globally Supplied"',
      type: 'string',
    }),
    defineField({
      name: 'statValue',
      title: 'Stat Line (top)',
      description: 'e.g. "Retail • Wholesale • Export"',
      type: 'string',
    }),
    defineField({
      name: 'statLabel',
      title: 'Stat Line (bottom)',
      description: 'e.g. "India • Nepal • China"',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About Section' }
    },
  },
})
