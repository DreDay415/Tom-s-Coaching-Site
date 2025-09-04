import type { APIRoute } from 'astro';

// Folk.app API integration
const FOLK_API_KEY = import.meta.env.FOLK_API_KEY;
const FOLK_WORKSPACE_ID = import.meta.env.FOLK_WORKSPACE_ID;
const FOLK_API_URL = 'https://api.folk.app/v1';

// Valid promo codes
const VALID_PROMO_CODES = ['WELCOME2024', 'FREECALL', 'COACHING50'];

interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  coachingInterest: string;
  goals: string;
  promoCode?: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data: BookingData = await request.json();
    
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.coachingInterest || !data.goals) {
      return new Response(JSON.stringify({ 
        error: 'Missing required fields' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate promo code if provided
    if (data.promoCode && !VALID_PROMO_CODES.includes(data.promoCode.toUpperCase())) {
      return new Response(JSON.stringify({ 
        error: 'Invalid promo code' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Create contact in Folk.app
    const folkContact = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone || '',
      tags: ['website-lead', 'consultation-request'],
      customFields: {
        'Coaching Interest': data.coachingInterest,
        'Goals': data.goals,
        'Promo Code': data.promoCode || 'None',
        'Source': 'Website',
        'Lead Status': 'New',
        'Consultation Type': data.promoCode ? 'Free (Promo Code)' : 'Free Consultation'
      }
    };
    
    // Add to Folk.app
    const folkResponse = await fetch(`${FOLK_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${FOLK_API_KEY}`,
        'Content-Type': 'application/json',
        'X-Workspace-Id': FOLK_WORKSPACE_ID
      },
      body: JSON.stringify(folkContact)
    });
    
    if (!folkResponse.ok) {
      console.error('Folk.app API error:', await folkResponse.text());
      // Continue even if Folk.app fails - don't block the user
    }
    
    // Send confirmation email (you can integrate with your email service)
    await sendConfirmationEmail(data);
    
    // Create calendar event (integrate with Google Calendar API)
    if (data.promoCode && VALID_PROMO_CODES.includes(data.promoCode.toUpperCase())) {
      await createCalendarEvent(data, true); // Free consultation
    } else {
      await createCalendarEvent(data, false); // Regular consultation
    }
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Booking request received successfully'
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Booking error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

async function sendConfirmationEmail(data: BookingData) {
  // Integrate with your email service (SendGrid, Mailgun, etc.)
  // This is a placeholder - implement based on your email service
  console.log('Sending confirmation email to:', data.email);
  
  // Example with a generic email service:
  /*
  const emailData = {
    to: data.email,
    subject: 'Your Free Consultation is Confirmed!',
    html: `
      <h2>Thank you for booking your consultation, ${data.firstName}!</h2>
      <p>We've received your request and will contact you within 24 hours to confirm your appointment.</p>
      <p><strong>Your Details:</strong></p>
      <ul>
        <li>Name: ${data.firstName} ${data.lastName}</li>
        <li>Email: ${data.email}</li>
        <li>Coaching Interest: ${data.coachingInterest}</li>
        ${data.promoCode ? `<li>Promo Code: ${data.promoCode} (Free consultation!)</li>` : ''}
      </ul>
      <p>We look forward to helping you achieve your goals!</p>
    `
  };
  
  // Send email via your service
  */
}

async function createCalendarEvent(data: BookingData, isFree: boolean) {
  // Integrate with Google Calendar API
  // This is a placeholder - implement based on your calendar service
  console.log('Creating calendar event for:', data.email, isFree ? '(Free)' : '(Regular)');
  
  // Example with Google Calendar API:
  /*
  const event = {
    summary: `Consultation with ${data.firstName} ${data.lastName}`,
    description: `
      Coaching Interest: ${data.coachingInterest}
      Goals: ${data.goals}
      Email: ${data.email}
      Phone: ${data.phone || 'Not provided'}
      ${data.promoCode ? `Promo Code: ${data.promoCode}` : ''}
      Type: ${isFree ? 'Free Consultation' : 'Regular Consultation'}
    `,
    start: {
      dateTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
      timeZone: 'America/New_York'
    },
    end: {
      dateTime: new Date(Date.now() + 24 * 60 * 60 * 1000 + 30 * 60 * 1000).toISOString(), // 30 minutes later
      timeZone: 'America/New_York'
    },
    attendees: [
      { email: data.email }
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 10 }
      ]
    }
  };
  
  // Create event via Google Calendar API
  */
}
