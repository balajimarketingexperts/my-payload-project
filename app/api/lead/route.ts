import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const SCRIPT_URL = process.env.GOOGLE_SCRIPT_WEBHOOK_URL || ''

    if (SCRIPT_URL) {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    }

    return NextResponse.json({ success: true, message: 'Lead submitted successfully' })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Submission failed' }, { status: 500 })
  }
}
