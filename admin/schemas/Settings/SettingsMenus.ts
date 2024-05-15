import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settingsMenus',
  title: 'Menu Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'reference',
      to: [{type: 'navigation'}],
      weak: true,
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'reference',
      to: [{type: 'navigation'}],
      weak: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
