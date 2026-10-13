import React from 'react'
import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react'

type Props = {
  content: any
  className?: string
}

export default function RichText({ content, className = '' }: Props) {
  if (!content) {
    return null
  }

  // If content is already a string (raw HTML or markdown)
  if (typeof content === 'string') {
    return (
      <div
        className={`prose max-w-none text-slate-700 leading-relaxed ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  }

  // If content is Lexical root object
  if (content && typeof content === 'object' && content.root) {
    try {
      return (
        <div className={`rich-text-content prose max-w-none text-slate-700 leading-relaxed ${className}`}>
          <LexicalRichText data={content} />
        </div>
      )
    } catch (e) {
      console.error('Error rendering Lexical RichText:', e)
      // Fallback renderer
      return <FallbackLexicalRenderer node={content.root} className={className} />
    }
  }

  return null
}

function FallbackLexicalRenderer({ node, className }: { node: any; className?: string }) {
  if (!node || !node.children) return null

  return (
    <div className={`space-y-4 text-slate-700 text-base leading-relaxed ${className}`}>
      {node.children.map((child: any, idx: number) => renderLexicalNode(child, idx))}
    </div>
  )
}

function renderLexicalNode(child: any, key: number | string): React.ReactNode {
  if (!child) return null

  switch (child.type) {
    case 'heading': {
      const Tag = (child.tag || 'h2') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
      const sizes: Record<string, string> = {
        h1: 'text-3xl font-extrabold text-slate-900 mt-8 mb-4',
        h2: 'text-2xl font-bold text-slate-900 mt-6 mb-3',
        h3: 'text-xl font-bold text-slate-800 mt-5 mb-2',
        h4: 'text-lg font-semibold text-slate-800 mt-4 mb-2',
      }
      return (
        <Tag key={key} className={sizes[child.tag] || 'text-xl font-bold text-slate-900 my-4'}>
          {renderChildren(child.children)}
        </Tag>
      )
    }

    case 'paragraph': {
      return (
        <p key={key} className="text-slate-700 leading-relaxed text-base my-3">
          {renderChildren(child.children)}
        </p>
      )
    }

    case 'list': {
      const isOrdered = child.listType === 'number'
      const ListTag = isOrdered ? 'ol' : 'ul'
      const listClass = isOrdered
        ? 'list-decimal pl-6 space-y-2 text-slate-700 my-4'
        : 'list-disc pl-6 space-y-2 text-slate-700 my-4'
      return (
        <ListTag key={key} className={listClass}>
          {child.children?.map((item: any, i: number) => (
            <li key={i}>{renderChildren(item.children)}</li>
          ))}
        </ListTag>
      )
    }

    case 'quote': {
      return (
        <blockquote
          key={key}
          className="border-l-4 border-[#F86104] pl-4 italic text-slate-600 my-4 bg-orange-50/50 py-2 rounded-r-lg"
        >
          {renderChildren(child.children)}
        </blockquote>
      )
    }

    case 'upload': {
      const media = child.value
      if (!media?.url) return null
      return (
        <div key={key} className="my-6 rounded-xl overflow-hidden border border-slate-200">
          <img src={media.url} alt={media.alt || 'Article visual'} className="w-full h-auto object-cover" />
          {media.caption && (
            <p className="text-center text-xs text-slate-500 py-2 bg-slate-50">{media.caption}</p>
          )}
        </div>
      )
    }

    default:
      if (child.text !== undefined) {
        return renderTextNode(child, key)
      }
      if (child.children) {
        return <div key={key}>{renderChildren(child.children)}</div>
      }
      return null
  }
}

function renderChildren(children: any[]) {
  if (!Array.isArray(children)) return null
  return children.map((c, i) => {
    if (c.type === 'text' || c.text !== undefined) {
      return renderTextNode(c, i)
    }
    if (c.type === 'link') {
      const href = c.fields?.url || '#'
      const newTab = c.fields?.newTab
      return (
        <a
          key={i}
          href={href}
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noopener noreferrer' : undefined}
          className="text-[#F86104] underline hover:text-[#DA3A0A] font-medium"
        >
          {renderChildren(c.children)}
        </a>
      )
    }
    return renderLexicalNode(c, i)
  })
}

function renderTextNode(node: any, key: number | string) {
  let text: React.ReactNode = node.text || ''
  const format = node.format || 0

  // Lexical format bitmask: 1 = bold, 2 = italic, 4 = strikethrough, 8 = underline, 16 = code
  if (format & 16) {
    text = (
      <code className="bg-slate-100 text-rose-600 px-1.5 py-0.5 rounded text-sm font-mono">
        {text}
      </code>
    )
  }
  if (format & 1) {
    text = <strong>{text}</strong>
  }
  if (format & 2) {
    text = <em>{text}</em>
  }
  if (format & 8) {
    text = <u>{text}</u>
  }
  if (format & 4) {
    text = <s>{text}</s>
  }

  return <React.Fragment key={key}>{text}</React.Fragment>
}
