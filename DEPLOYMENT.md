# Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

Your Tom's Coaching website is now ready for deployment on Vercel! Here's how to set it up:

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository: `DreDay415/Tom-s-Coaching-Site`
4. Vercel will automatically detect it's an Astro project

### 2. Configure Build Settings

Vercel should auto-detect these settings, but verify:
- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Set Environment Variables

In your Vercel project settings, add these environment variables:

```env
# Folk.app API Configuration
FOLK_API_KEY=your_folk_api_key_here
FOLK_WORKSPACE_ID=your_folk_workspace_id_here

# Google Calendar API Configuration
GOOGLE_CALENDAR_API_KEY=your_google_calendar_api_key_here
GOOGLE_CALENDAR_ID=your_google_calendar_id_here

# Cal.com Integration (Alternative)
CALCOM_API_KEY=your_calcom_api_key_here
CALCOM_USERNAME=tom_coaching

# Promo Code Configuration
PROMO_CODES=WELCOME2024,FREECALL,COACHING50
```

### 4. Deploy

1. Click "Deploy"
2. Vercel will build and deploy your site
3. You'll get a live URL (e.g., `tom-s-coaching-site.vercel.app`)

### 5. Custom Domain (Optional)

1. In Vercel dashboard, go to "Domains"
2. Add your custom domain (e.g., `tomcoaching.com`)
3. Update DNS settings as instructed

## 🔧 API Setup Required

### Folk.app Setup

1. **Create Folk.app Account**
   - Go to [folk.app](https://folk.app)
   - Sign up and create a workspace

2. **Get API Credentials**
   - Go to Settings → API
   - Copy your API key and workspace ID

3. **Set Up Custom Fields**
   Create these custom fields in Folk.app:
   - `Coaching Interest` (Text)
   - `Goals` (Long Text)
   - `Promo Code` (Text)
   - `Source` (Text)
   - `Lead Status` (Text)
   - `Consultation Type` (Text)

### Google Calendar Setup

1. **Google Cloud Console**
   - Go to [console.cloud.google.com](https://console.cloud.google.com)
   - Create a new project or select existing

2. **Enable Calendar API**
   - Go to "APIs & Services" → "Library"
   - Search for "Google Calendar API"
   - Click "Enable"

3. **Create Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the API key

4. **Get Calendar ID**
   - Go to [calendar.google.com](https://calendar.google.com)
   - Click settings for your calendar
   - Copy the "Calendar ID"

## 🎫 Promo Codes

The system comes with these default promo codes:
- `WELCOME2024` - Free consultation
- `FREECALL` - Free consultation
- `COACHING50` - 50% discount

## 📱 Features Included

✅ **Modern Astro Website**
- Lightning-fast performance
- Mobile responsive design
- SEO optimized

✅ **Lead Capture**
- Folk.app integration
- Automatic contact creation
- Custom field mapping

✅ **Booking System**
- Google Calendar integration
- Direct calendar booking
- Automatic event creation

✅ **Promo Code System**
- Real-time validation
- Free consultation benefits
- Customizable codes

✅ **Professional Design**
- Hero section with CTAs
- Coaching services showcase
- Customer testimonials
- Contact forms

## 🔄 Automatic Deployments

Once connected, Vercel will automatically deploy when you push to the `main` branch:

```bash
git add .
git commit -m "Update website"
git push origin main
```

## 📊 Analytics & Monitoring

Vercel provides built-in analytics:
- Page views
- Performance metrics
- Core Web Vitals
- Real user monitoring

## 🆘 Troubleshooting

### Build Errors
- Check environment variables are set
- Verify API keys are valid
- Check Vercel build logs

### API Issues
- Test Folk.app API key
- Verify Google Calendar permissions
- Check network requests in browser dev tools

### Performance
- Use Vercel's speed insights
- Optimize images
- Check Core Web Vitals

## 📞 Support

If you need help:
1. Check Vercel documentation
2. Review Astro documentation
3. Check Folk.app API docs
4. Contact: tom@tomcoaching.com

---

**Your website is now live and ready to capture leads! 🎉**
