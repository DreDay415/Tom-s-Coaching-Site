# Tom's Coaching Website

A modern, fast coaching website built with Astro, featuring lead capture through Folk.app integration, calendar booking, and promo code functionality.

## Features

- ⚡ **Lightning Fast**: Built with Astro for optimal performance
- 🎨 **Modern Design**: Beautiful, responsive UI with Tailwind CSS
- 📊 **Lead Capture**: Integrated with Folk.app for CRM management
- 📅 **Calendar Booking**: Google Calendar integration for appointment scheduling
- 🎫 **Promo Codes**: Special discount and free consultation codes
- 📱 **Mobile Responsive**: Optimized for all devices
- 🚀 **Vercel Ready**: Configured for easy deployment on Vercel

## Tech Stack

- **Frontend**: Astro 4.0, React, Tailwind CSS
- **Backend**: Astro API Routes
- **CRM**: Folk.app integration
- **Calendar**: Google Calendar API
- **Deployment**: Vercel
- **Styling**: Tailwind CSS with custom design system

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Folk.app account
- Google Calendar API access
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tom-coaching-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Folk.app API Configuration
   FOLK_API_KEY=your_folk_api_key_here
   FOLK_WORKSPACE_ID=your_folk_workspace_id_here
   
   # Google Calendar API Configuration
   GOOGLE_CALENDAR_API_KEY=your_google_calendar_api_key_here
   GOOGLE_CALENDAR_ID=your_google_calendar_id_here
   
   # Cal.com Integration (Alternative to Google Calendar)
   CALCOM_API_KEY=your_calcom_api_key_here
   CALCOM_USERNAME=tom_coaching
   
   # Promo Code Configuration
   PROMO_CODES=WELCOME2024,FREECALL,COACHING50
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:4321`

## Configuration

### Folk.app Setup

1. Create a Folk.app account at [folk.app](https://folk.app)
2. Get your API key from the settings
3. Create a workspace and note the workspace ID
4. Set up custom fields for:
   - Coaching Interest
   - Goals
   - Promo Code
   - Source
   - Lead Status
   - Consultation Type

### Google Calendar Integration

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google Calendar API
4. Create credentials (API key or OAuth)
5. Add the calendar ID you want to use

### Promo Codes

The system comes with three default promo codes:
- `WELCOME2024` - Free consultation
- `FREECALL` - Free consultation  
- `COACHING50` - 50% discount

You can modify these in the API files or environment variables.

## Deployment

### Vercel Deployment

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Set environment variables**
   In your Vercel dashboard, add all the environment variables from your `.env` file.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider

## API Endpoints

### `/api/booking`
- **Method**: POST
- **Purpose**: Handle booking form submissions
- **Features**: 
  - Validates form data
  - Creates contact in Folk.app
  - Sends confirmation email
  - Creates calendar event

### `/api/validate-promo`
- **Method**: POST
- **Purpose**: Validate promo codes
- **Returns**: Validation status and benefits

## Customization

### Styling
- Modify `tailwind.config.mjs` for design system changes
- Update component styles in `/src/components/`
- Customize colors, fonts, and spacing

### Content
- Edit coaching offerings in `CoachingOfferings.astro`
- Update testimonials in `Testimonials.astro`
- Modify hero section in `Hero.astro`

### Functionality
- Add new promo codes in the API files
- Integrate additional email services
- Add more calendar providers

## Performance Features

- **Static Generation**: Most pages are statically generated
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size
- **API Routes**: Server-side functionality where needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions:
- Email: tom@tomcoaching.com
- Website: [tomcoaching.com](https://tomcoaching.com)

## Changelog

### v1.0.0
- Initial release
- Folk.app integration
- Google Calendar booking
- Promo code system
- Responsive design
- Vercel deployment ready
