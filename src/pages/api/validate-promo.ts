import type { APIRoute } from 'astro';

const VALID_PROMO_CODES = ['WELCOME2024', 'FREECALL', 'COACHING50'];

export const POST: APIRoute = async ({ request }) => {
  try {
    const { promoCode } = await request.json();
    
    if (!promoCode) {
      return new Response(JSON.stringify({ 
        valid: false,
        message: 'Please enter a promo code'
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const isValid = VALID_PROMO_CODES.includes(promoCode.toUpperCase());
    
    if (isValid) {
      return new Response(JSON.stringify({ 
        valid: true,
        message: 'Promo code applied! You qualify for a free consultation.',
        benefits: [
          'Free 30-minute consultation',
          'Personalized coaching plan',
          'No obligation to continue'
        ]
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ 
        valid: false,
        message: 'Invalid promo code. Please check and try again.'
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
  } catch (error) {
    console.error('Promo validation error:', error);
    return new Response(JSON.stringify({ 
      valid: false,
      message: 'Error validating promo code'
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
