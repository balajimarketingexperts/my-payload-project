import type { CollectionConfig } from 'payload'

export const Responses: CollectionConfig = {
  slug: 'responses',
  admin: { useAsTitle: 'audience' },
  access: {
    create: () => true,          // anyone can submit the form
    read: ({ req }) => !!req.user, // only logged-in admins can read
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    { name: 'audience', type: 'textarea' },
    { name: 'shown', type: 'textarea' },
    { name: 'message', type: 'textarea' },
    { name: 'opinion', type: 'textarea' },
  ],
}