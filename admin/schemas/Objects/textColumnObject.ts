import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textColumnObject',
  title: 'Text Column',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
