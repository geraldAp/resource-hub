// schema.js
export default {
    name: 'resourceContent',
    title: 'Resource Content',
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
        of: [{ 
            type: 'object',
            fields: [
              {
                name: 'course_title',
                title: 'Course Title',
                type: 'string',
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
            ]
         }],
      },
    ],
  };
  