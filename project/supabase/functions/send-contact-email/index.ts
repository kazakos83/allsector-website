import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://allsector.com.au',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  service: string
  location: string
  message: string
  urgency: 'emergency' | 'urgent' | 'standard'
}

serve(async (req) => {
  console.log(`📧 Edge Function called: ${req.method} ${req.url}`)
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('✅ Handling CORS preflight request')
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      console.log(`❌ Method not allowed: ${req.method}`)
      return new Response(
        JSON.stringify({ success: false, error: 'Method not allowed' }), 
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Get the request data
    const formData: ContactFormData = await req.json()
    console.log('📧 Received form data:', {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      urgency: formData.urgency
    })

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'service', 'location', 'message']
    const missingFields = requiredFields.filter(field => !formData[field as keyof ContactFormData])
    
    if (missingFields.length > 0) {
      console.log(`❌ Missing required fields: ${missingFields.join(', ')}`)
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Missing required fields: ${missingFields.join(', ')}` 
        }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Get SendGrid API key from environment
    const sendGridApiKey = Deno.env.get('SENDGRID_API_KEY')
    console.log('🔑 SendGrid API Key status:', sendGridApiKey ? 'Found' : 'Missing')
    
    if (!sendGridApiKey) {
      console.error('❌ SendGrid API key not found in environment variables')
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Email service not configured - missing SendGrid API key' 
        }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Prepare email content
    const urgencyLabels = {
      emergency: 'EMERGENCY - Within 2 hours',
      urgent: 'URGENT - Same day',
      standard: 'Standard - Within 48 hours'
    }

    const urgencyColors = {
      emergency: '#dc2626',
      urgent: '#f59e0b',
      standard: '#10b981'
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0;">Allsector Website</p>
        </div>
        
        <div style="padding: 30px;">
          <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
            <h2 style="color: #1e3a8a; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151; width: 140px;">Name:</td>
                <td style="padding: 12px 0; color: #6b7280;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 12px 0; color: #6b7280;"><a href="mailto:${formData.email}" style="color: #2563eb;">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 12px 0; color: #6b7280;"><a href="tel:${formData.phone}" style="color: #2563eb;">${formData.phone}</a></td>
              </tr>
              ${formData.company ? `
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Company:</td>
                <td style="padding: 12px 0; color: #6b7280;">${formData.company}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Service:</td>
                <td style="padding: 12px 0; color: #6b7280;">${formData.service}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Location:</td>
                <td style="padding: 12px 0; color: #6b7280;">${formData.location}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Urgency:</td>
                <td style="padding: 12px 0;">
                  <span style="background: ${urgencyColors[formData.urgency]}; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px; font-weight: bold;">
                    ${urgencyLabels[formData.urgency]}
                  </span>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
            <h3 style="color: #1e3a8a; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Project Details</h3>
            <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="text-align: center; padding: 25px; background: #1e3a8a; border-radius: 12px; color: white;">
            <h4 style="margin: 0 0 10px 0;">⚡ Action Required</h4>
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">
              Please respond promptly based on the urgency level: <strong>${urgencyLabels[formData.urgency]}</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              This email was sent from the Allsector website contact form.<br>
              Submitted on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })} (AEST)
            </p>
          </div>
        </div>
      </div>
    `

    const emailText = `
New Contact Form Submission - Allsector

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.company ? `Company: ${formData.company}` : ''}
Service Required: ${formData.service}
Location: ${formData.location}
Urgency: ${urgencyLabels[formData.urgency]}

Project Details:
${formData.message}

---
This email was sent from the Allsector website contact form.
Submitted on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })} (AEST)
Please respond promptly based on the urgency level indicated above.
    `

    // Prepare email subject with urgency indicator
    const urgencyPrefix = formData.urgency === 'emergency' ? '🚨 EMERGENCY' : 
                         formData.urgency === 'urgent' ? '⚡ URGENT' : '📋'
    
    const subject = `${urgencyPrefix} New Contact Form - ${formData.name} (${formData.service})`

    // Send email using SendGrid API
    const emailData = {
      personalizations: [
        {
          to: [
            {
              email: 'info@allsector.com.au',
              name: 'Allsector Team'
            }
          ],
          subject: subject
        }
      ],
      from: {
        email: 'noreply@allsector.com.au',
        name: 'Allsector Website'
      },
      reply_to: {
        email: formData.email,
        name: formData.name
      },
      content: [
        {
          type: 'text/plain',
          value: emailText
        },
        {
          type: 'text/html',
          value: emailHtml
        }
      ]
    }

    console.log('📧 Sending email via SendGrid API...')
    console.log('📧 Email data prepared:', {
      to: 'info@allsector.com.au',
      from: 'noreply@allsector.com.au',
      subject: subject
    })

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sendGridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    console.log('📧 SendGrid API response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('❌ SendGrid API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      })
      
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to send email via SendGrid',
          details: `Status: ${response.status}, Error: ${errorText}`
        }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('✅ Email sent successfully via SendGrid')

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully via SendGrid' 
      }),
      {
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
      }
    )

  } catch (error) {
    console.error('❌ Error in send-contact-email function:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
      }
    )
  }
})