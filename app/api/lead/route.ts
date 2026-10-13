import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, course, message, source } = body

    let savedLeadId: string | number | null = null
    try {
      const payload = await getPayload({ config: configPromise })
      const lead = await payload.create({
        collection: 'leads' as any,
        data: {
          name: name || 'Website Visitor',
          phone: phone || '',
          email: email || '',
          course: course || 'General Inquiry',
          source: source || 'Website Registration Form',
          message: message || '',
          status: 'new',
        } as any,
      })
      savedLeadId = lead.id
    } catch (dbErr) {
      console.error('Failed to save lead in Payload CMS:', dbErr)
    }

    // Google Sheets webhook forwarding
    const SCRIPT_URL = process.env.GOOGLE_SCRIPT_WEBHOOK_URL || ''
    let sheetsSuccess = false
    let sheetsError: string | null = null

    if (SCRIPT_URL) {
      try {
        const sheetsRes = await fetch(SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name || '',
            phone: phone || '',
            email: email || '',
            course: course || '',
            message: message || '',
            source: source || 'Website Registration Form',
            timestamp: new Date().toISOString(),
          }),
        })
        sheetsSuccess = sheetsRes.ok
      } catch (err: any) {
        sheetsError = err?.message || 'Google Sheets webhook request failed'
        console.error('Google Sheets webhook error:', err)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
      savedToPayload: Boolean(savedLeadId),
      leadId: savedLeadId,
      forwardedToGoogleSheets: sheetsSuccess,
      webhookConfigured: Boolean(SCRIPT_URL),
      sheetsError,
    })
  } catch (error: any) {
    console.error('Lead route error:', error)
    return NextResponse.json(
      { success: false, message: error?.message || 'Submission failed' },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url)
  const isTest = url.searchParams.get('test') === 'true'
  const SCRIPT_URL = process.env.GOOGLE_SCRIPT_WEBHOOK_URL || ''

  try {
    const payload = await getPayload({ config: configPromise })

    if (isTest) {
      const testLead = await payload.create({
        collection: 'leads' as any,
        data: {
          name: 'Test Student (Automated Check)',
          phone: '+919999999999',
          email: 'test@balajimarketinginstitute.in',
          course: 'Diploma in Digital Marketing (Test)',
          source: 'API Test Verification',
          message: 'Testing lead saving to Payload CMS and Google Sheets.',
          status: 'new',
        } as any,
      })

      let sheetsTestStatus = 'not_configured'
      if (SCRIPT_URL) {
        try {
          const res = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: 'Test Student (Automated Check)',
              phone: '+919999999999',
              email: 'test@balajimarketinginstitute.in',
              course: 'Diploma in Digital Marketing (Test)',
              message: 'API Test Verification',
              timestamp: new Date().toISOString(),
            }),
          })
          sheetsTestStatus = res.ok ? 'success' : `failed_status_${res.status}`
        } catch (e: any) {
          sheetsTestStatus = `error: ${e?.message || 'unknown'}`
        }
      }

      return NextResponse.json({
        status: 'ok',
        testLeadCreated: true,
        testLeadId: testLead.id,
        googleSheetsWebhookConfigured: Boolean(SCRIPT_URL),
        googleSheetsTestStatus: sheetsTestStatus,
      })
    }

    const { totalDocs } = await payload.find({
      collection: 'leads' as any,
      limit: 1,
    })

    return NextResponse.json({
      status: 'ok',
      totalLeadsInDb: totalDocs,
      googleSheetsWebhookConfigured: Boolean(SCRIPT_URL),
      instructions:
        'Submit a POST request to /api/lead to register a lead, or visit /api/lead?test=true to create a test lead.',
    })
  } catch (err: any) {
    return NextResponse.json({ status: 'error', error: err?.message }, { status: 500 })
  }
}
