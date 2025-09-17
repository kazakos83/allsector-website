# Deployment Guide for Allsector Website

## 🚀 Quick Deployment to Netlify

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit - Allsector website"
git branch -M main
git remote add origin https://github.com/yourusername/allsector-website.git
git push -u origin main
```

### Step 2: Deploy to Netlify
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Use these build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

### Step 3: Configure Environment Variables
In Netlify dashboard → Site settings → Environment variables, add:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 4: Configure Custom Domain
1. In Netlify: Site settings → Domain management
2. Add custom domain: `allsector.com.au`
3. Configure DNS records as instructed by Netlify

## 🔧 Supabase Configuration

### Environment Variables for Edge Functions
In Supabase dashboard → Settings → Edge Functions → Environment Variables:

```
SENDGRID_API_KEY=SG.your-sendgrid-api-key-here
```

### CORS Settings
In Supabase dashboard → Settings → API → CORS origins, add:
- `https://allsector.com.au`
- `https://www.allsector.com.au`
- `http://localhost:3000` (for development)

## 📧 SendGrid Setup

1. Create SendGrid account
2. Verify sender domain: `allsector.com.au`
3. Create API key with "Mail Send" permissions
4. Add API key to Supabase environment variables

## ✅ Post-Deployment Checklist

- [ ] Website loads at custom domain
- [ ] Contact form submits successfully
- [ ] Emails are received
- [ ] All pages navigate correctly
- [ ] Mobile responsiveness works
- [ ] SSL certificate is active

## 🐛 Troubleshooting

### Contact Form Issues
1. Check browser console for errors
2. Verify Supabase environment variables
3. Check Supabase Edge Function logs
4. Verify SendGrid API key and domain verification

### Domain Issues
1. Check DNS propagation
2. Verify SSL certificate
3. Check Netlify domain settings
4. Update CORS settings in Supabase

## 📞 Support
For technical issues, contact the development team or refer to:
- [Netlify Documentation](https://docs.netlify.com)
- [Supabase Documentation](https://supabase.com/docs)
- [SendGrid Documentation](https://docs.sendgrid.com)