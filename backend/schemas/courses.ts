// schema.js
export default {
    name: 'course',
    title: 'Course',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Course Name',
        type: 'string',
      },
      {
        name: 'resources',
        title: 'Resources',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'resource' } }],
      },
    ],
  };
  