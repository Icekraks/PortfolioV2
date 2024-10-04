import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Internal',
  name: 'internal',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    {
      name: 'document',
      title: 'Document',
      type: 'reference',
      to: [{type: 'page'}, {type: 'pageHomepage'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
