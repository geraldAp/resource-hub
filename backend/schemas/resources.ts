// schema.js
export default {
    name: 'resource',
    title: 'Resource',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Resource Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title', // Use the course_title field as the source for the slug
                maxLength: 200,
              },
        },
        {
            name: 'popular_books',
            type: 'array',
            title: 'Popular Books',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'book_title',
                            title: 'Book Title',
                            type: 'string',
                        },
                        {
                            name: 'book_author',
                            title: 'Book Author',
                            type: 'string',
                        },
                        {
                            name: 'book_image',
                            title: 'Book Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'book_url',
                            title: 'Book URL',
                            type: 'url',
                        },
                    ],
                },
            ],
        },
        {
            name: 'videos',
            type: 'array',
            title: 'Videos',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'video_title',
                            type: 'string',
                            title: 'Video Title',
                        },
                        {
                            name: 'video_url',
                            type: 'url',
                            title: 'Video URL',
                        },
                    ],
                },
            ],
        },

    ],
};
