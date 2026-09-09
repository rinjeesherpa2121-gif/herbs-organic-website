import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'scientificName',
      title: 'Scientific Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Roots & Rhizomes', value: 'roots' },
          { title: 'Herbs & Leaves', value: 'herbs' },
          { title: 'Mushrooms & Fungi', value: 'fungi' },
          { title: 'Spices & Seeds', value: 'spices' },
          { title: 'Fibers & Botanicals', value: 'fibers' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryLabel',
      title: 'Category Badge (shown on photo, top-left)',
      description: 'e.g. "Rhizome Material", "Bitter Herb"',
      type: 'string',
    }),
    defineField({
      name: 'badge',
      title: 'Status Badge (shown on photo, bottom-right)',
      description: 'e.g. "Raw Material", "Trade Ready", "Bulk Inquiry"',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Product Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'traditionalUse',
      title: 'Traditional Use',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'preparation',
      title: 'Preparation',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      description: 'Lower numbers show first. Leave blank to sort by name.',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'scientificName', media: 'image' },
  },
})
