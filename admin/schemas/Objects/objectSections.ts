import {defineType} from 'sanity'

export default defineType({
  name: 'objectSections',
  title: 'Object Sections',
  type: 'array',
  of: [
    {
      title: 'Hero',
      type: 'objectHero',
    },
    {
      title: 'Text',
      type: 'objectText',
    },
    {
      title: 'Tags',
      type: 'objectTags',
    },
    {
      title: 'Text Columns',
      type: 'objectTextColumns',
    },
  ],
})
