// schema.js
export default {
  name: 'resourceContent',
  title: 'Resource Years',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Year Name',
      type: 'string',
    },
    {
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'course_title',
              title: 'Course Title',
              type: 'string',
            },
            {
              title: 'Slug',
              name: 'slug',
              type: 'slug',
              options: {
                source: 'course_title', // Use the course_title field as the source for the slug
                maxLength: 200,
              },
            },
            {
              name: 'introduction',
              title: 'Introduction',
              type: 'text',
            },
            {
              name: 'resources',
              title: 'Resources',
              type: 'array',
              of: [{ type: 'reference', to: { type: 'resource' } }],
            },
          ],
        },
      ],
    },
  ],
};
