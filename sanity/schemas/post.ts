import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                },
            ],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
            options: {
                fields: [
                    defineField({
                        type: 'code',
                        name: 'code',
                        title: 'code',
                        options: {
                            language: 'javascript',
                            languageAlternatives: [
                                { title: 'Javascript', value: 'javascript' },
                                { title: 'HTML', value: 'html' },
                                { title: 'CSS', value: 'css' },
                            ],
                            withFilename: true,
                        },
                    }),
                ],
            }
        }),
        defineField({
            name: 'description',
            title: 'SEO - Description',
            type: 'string',
        }),
        defineField({
            name: 'keywords',
            title: 'SEO - Keywords',
            type: 'reference',
            to: { type: 'keyword' },
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
