import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectTags',
  title: 'Text Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'categoryObject',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
