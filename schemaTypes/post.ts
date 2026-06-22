// schemaTypes/post.ts

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },

    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
