import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
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
            name: "keywords",
            title: "SEO - Keywords",
            type: "array",
            of: [
                defineArrayMember({
                    name: 'keyword',
                    title: 'keyword',
                    type: 'reference',
                    to: { type: 'keyword' },
                })
            ]
        })
    ],
})
