import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'categoryObject',
  title: 'Category',
  type: 'object',
  fields: [
    defineField({
      title: 'Text',
      name: 'text',
      type: 'string',
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
  ],
})
