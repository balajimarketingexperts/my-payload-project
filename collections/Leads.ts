import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  labels: {
    singular: 'Lead / Registration',
    plural: 'Leads & Inquiries',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'course', 'status', 'createdAt'],
    description: 'Yahan website ke sabhi student registrations aur form submissions ka data store hota hai.',
  },
  access: {
    create: () => true, // Allows website forms / API to insert leads
    read: ({ req }) => Boolean(req.user), // Only authenticated admins can view
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      required: true,
      admin: {
        placeholder: 'Student ya Recruiter ka naam',
      },
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone / WhatsApp Number',
      required: true,
      admin: {
        placeholder: 'e.g. +91 9876543210',
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      admin: {
        placeholder: 'e.g. student@gmail.com',
      },
    },
    {
      name: 'course',
      type: 'text',
      label: 'Course / Inquiry Type',
      admin: {
        placeholder: 'e.g. Diploma in Digital Marketing / Executive / Hiring',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Lead Status',
      defaultValue: 'new',
      options: [
        { label: '🟡 New / Uncontacted', value: 'new' },
        { label: '🔵 Contacted (Call Done)', value: 'contacted' },
        { label: '🟢 Free Demo Scheduled', value: 'demo_scheduled' },
        { label: '🟣 Enrolled / Converted', value: 'enrolled' },
        { label: '⚪ Not Interested / Invalid', value: 'not_interested' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'source',
      type: 'text',
      label: 'Source Page / Form',
      defaultValue: 'Website Form',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'User Message / WhatsApp Opt-in',
    },
    {
      name: 'adminNotes',
      type: 'textarea',
      label: 'Admin / Counselor Follow-up Notes',
      admin: {
        position: 'sidebar',
        placeholder: 'Counselor follow-up remarks yahan likhein...',
      },
    },
  ],
  timestamps: true,
}
