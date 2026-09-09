import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Herbs & Organic Content')
    .items([
      S.listItem()
        .title('Products')
        .child(S.documentTypeList('product').title('Products')),
      S.listItem()
        .title('Gallery Photos')
        .child(S.documentTypeList('galleryImage').title('Gallery Photos')),
      S.divider(),
      S.listItem()
        .title('About Section')
        .child(
          S.document().schemaType('about').documentId('aboutSection')
        ),
      S.listItem()
        .title('Contact Info')
        .child(
          S.document().schemaType('contactInfo').documentId('contactInfo')
        ),
    ])
