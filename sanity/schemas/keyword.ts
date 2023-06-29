import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'keyword',
  title: 'Keyword',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})