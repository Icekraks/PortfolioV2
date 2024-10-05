import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectTextColumns',
  title: 'Text Columns Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {
          type: 'textColumnObject',
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
