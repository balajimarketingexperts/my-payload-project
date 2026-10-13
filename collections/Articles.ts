import type { CollectionConfig } from 'payload'

const formatSlug = (val: string): string => {
  return val
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: 'Article / Blog Post',
    plural: 'Articles & Blogs',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedAt', 'author'],
    description: 'Yahan se apne blog articles aur content manage karo.',
  },
  access: {
    read: () => true, // Public read access for website visitors
    create: ({ req }) => Boolean(req.user), // Logged in admin can create
    update: ({ req }) => Boolean(req.user), // Logged in admin can update
    delete: ({ req }) => Boolean(req.user), // Logged in admin can delete
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data

        // Auto-generate slug from title if missing, or sanitize existing slug
        if (!data.slug && data.title) {
          data.slug = formatSlug(data.title)
        } else if (data.slug) {
          data.slug = formatSlug(data.slug)
        }

        return data
      },
    ],
    beforeChange: [
      ({ data, req, operation }) => {
        if (!data) return data

        // Automatically set publishedAt date when status is changed to 'published'
        if (data.status === 'published' && !data.publishedAt) {
          data.publishedAt = new Date().toISOString()
        }

        // Automatically associate author with logged-in user if not already set
        if (!data.author && req.user?.id) {
          data.author = req.user.id
        }

        return data
      },
    ],
  },
  fields: [
    // ─── Main Content ───────────────────────────────────────────
    {
      name: 'title',
      type: 'text',
      label: 'Article Title',
      required: true,
      admin: {
        placeholder: 'e.g. Top 10 Digital Marketing Trends in 2026',
      },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Slug',
      unique: true,
      admin: {
        description:
          'Khaali chhod sakte hain — Title se automatically generate ho jayega (e.g. top-10-digital-marketing-trends-in-2026)',
        placeholder: 'top-10-digital-marketing-trends-in-2026',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Short Description / Summary',
      admin: {
        description: 'Article ki chhoti summary jo blog listing cards aur search results mein dikhegi.',
        placeholder: 'A brief summary of what readers will learn...',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      label: 'Featured Banner Image',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Article Content',
      admin: {
        description: 'Article ka main text, headings, bullet points aur images yahan likhein.',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      label: 'Author',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      defaultValue: 'Digital Marketing',
      options: [
        { label: 'Digital Marketing', value: 'Digital Marketing' },
        { label: 'SEO & Content', value: 'SEO & Content' },
        { label: 'Performance Ads & Meta', value: 'Performance Ads & Meta' },
        { label: 'AI Tools & Automation', value: 'AI Tools & Automation' },
        { label: 'Career & Industry Guides', value: 'Career & Industry Guides' },
      ],
      admin: {
        position: 'sidebar',
      },
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
      label: 'Publish Status',
      defaultValue: 'draft',
      options: [
        { label: 'Draft (Private)', value: 'draft' },
        { label: 'Published (Live on Website)', value: 'published' },
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
        description: 'Publish karne par automatically current date/time set ho jayegi agar khaali hai.',
      },
    },

    // ─── SEO Fields ──────────────────────────────────────────────
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      admin: {
        description: 'Google search results aur social media share ke liye metadata',
      },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title (up to 60 characters)',
          admin: {
            description: 'Google Search mein dikhne wala title. Khaali chhodne par article title use hoga.',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description (up to 160 characters)',
          admin: {
            description: 'Google search result ke neeche aane wala description snippet.',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          label: 'Social Share Image (OG Image)',
          relationTo: 'media',
        },
        {
          name: 'noIndex',
          type: 'checkbox',
          label: 'Hide from Search Engines (noindex)',
          defaultValue: false,
        },
      ],
    },
  ],
  timestamps: true,
}
