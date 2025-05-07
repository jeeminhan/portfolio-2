import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    posts: collection({
      label: 'Blogs',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content', 
        }),
        description: fields.text({ label: 'Description' }),
        pubDate: fields.text({ label: 'Published Date' }),
        updatedDate: fields.text({ label: 'Updated Date' }),
        previewImage: fields.image({ 
            label: 'Preview Image' }),
        heroImage: fields.image({ label: 'Hero Image' }),
      },
    }),
  },
});