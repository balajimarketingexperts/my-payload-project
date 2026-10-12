import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedAt', 'author'],
    description: 'Yahan se apne blog articles manage karo',
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    // ─── Main Content ───────────────────────────────────────────
    {
      name: 'title',
      type: 'text',
      label: 'Article Title',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Slug (e.g. my-first-article)',
      required: true,
      unique: true,
      admin: {
        description: 'URL mein yahi dikhega: /articles/[slug]',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Short Description / Excerpt',
      admin: {
        description: 'Article ki chhoti summary (SEO aur cards mein use hogi)',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      label: 'Featured Image',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Article Content',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      label: 'Author',
      relationTo: 'users',
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },

    // ─── Publishing ──────────────────────────────────────────────
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'draft',
      options: [
        { label: 'Draft (Private)', value: 'draft' },
        { label: 'Published (Live)', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published Date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },

    // ─── SEO Fields ──────────────────────────────────────────────
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      admin: {
        description: 'Google search result mein yahi dikhega',
      },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title (60 characters recommended)',
          admin: {
            description: 'Browser tab aur Google mein dikhne wala title',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description (160 characters recommended)',
          admin: {
            description: 'Google search result mein description',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          label: 'Social Share Image (OG Image)',
          relationTo: 'media',
          admin: {
            description: 'WhatsApp/Twitter/Facebook pe share karne par yeh image dikhegi',
          },
        },
        {
          name: 'noIndex',
          type: 'checkbox',
          label: 'Google se hide karo (noindex)',
          defaultValue: false,
        },
      ],
    },
  ],
}
