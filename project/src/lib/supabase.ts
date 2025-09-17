import { createClient } from '@supabase/supabase-js'

// Get environment variables with fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Create Supabase client with error handling
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Log connection status for debugging
if (typeof window !== 'undefined') {
  if (supabase) {
    console.log('✅ Supabase connected successfully')
  } else {
    console.warn('⚠️ Supabase not connected - missing environment variables')
  }
}

export type ContactSubmission = {
  id?: string
  name: string
  email: string
  phone: string
  company?: string | null
  service: string
  location: string
  message: string
  urgency: 'emergency' | 'urgent' | 'standard'
  submitted_at?: string
  created_at?: string
}

// Helper function to submit contact form via SendGrid Edge Function
export const submitContactForm = async (formData: Omit<ContactSubmission, 'id' | 'submitted_at' | 'created_at'>) => {
  try {
    console.log('📧 Submitting contact form...', {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      urgency: formData.urgency
    })

    // First, try to save to Supabase database
    let databaseResult = null
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('contact_submissions')
          .insert([{
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.service,
            location: formData.location,
            message: formData.message,
            urgency: formData.urgency
          }])
          .select()

        if (error) {
          console.error('Database save error:', error)
        } else {
          console.log('✅ Saved to database:', data)
          databaseResult = data
        }
      } catch (dbError) {
        console.error('Database connection error:', dbError)
      }
    }

    // Send email via Supabase Edge Function
    const emailEndpoint = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`
    
    console.log('📧 Calling edge function:', emailEndpoint)
    
    // Validate that we have a proper Supabase URL
    if (!import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL === 'undefined') {
      console.error('❌ VITE_SUPABASE_URL is not defined in environment variables')
      throw new Error('Supabase URL not configured. Please check environment variables.')
    }
    
    const emailResponse = await fetch(emailEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(formData)
    })

    console.log('📧 Edge function response status:', emailResponse.status)

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('❌ Edge function failed:', errorText)
      
      // Fallback: Create mailto link
      const emailBody = `
New Contact Form Submission - Allsector

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.company ? `Company: ${formData.company}` : ''}
Service Required: ${formData.service}
Location: ${formData.location}
Urgency: ${formData.urgency}

Project Details:
${formData.message}

---
Submitted at: ${new Date().toLocaleString()}
      `.trim()

      // Create mailto link as fallback
      const mailtoLink = `mailto:info@allsector.com.au?subject=New Contact Form - ${formData.name} (${formData.service})&body=${encodeURIComponent(emailBody)}`
      
      return {
        success: true,
        data: databaseResult,
        message: 'Form submitted to database. Email service unavailable - please use the email link below.',
        mailtoLink,
        fallback: true
      }
    }

    const emailResult = await emailResponse.json()
    console.log('📧 Email sent:', emailResult)

    return {
      success: true,
      data: databaseResult,
      message: 'Your inquiry has been submitted successfully! Email sent and data saved.',
      fallback: false
    }

  } catch (error) {
    console.error('❌ Error submitting form:', error)
    
    // Create fallback mailto link
    const emailBody = `
New Contact Form Submission - Allsector

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.company ? `Company: ${formData.company}` : ''}
Service Required: ${formData.service}
Location: ${formData.location}
Urgency: ${formData.urgency}

Project Details:
${formData.message}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim()

    const mailtoLink = `mailto:info@allsector.com.au?subject=New Contact Form - ${formData.name} (${formData.service})&body=${encodeURIComponent(emailBody)}`

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      message: 'There was an issue submitting your form. Please use the email link below or call us directly.',
      mailtoLink,
      fallback: true
    }
  }
}

// Helper function to get all contact submissions (for admin use)
export const getContactSubmissions = async () => {
  if (!supabase) {
    return { success: false, error: 'Supabase not connected' }
  }

  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return { success: false, error }
  }
}