# Deployment Guide - Walo Innovated Solutions Website

This guide walks you through deploying the Walo Innovated Solutions marketing website to Vercel.

## Prerequisites

- GitHub account with the repository: `https://github.com/dowadud/walois-consulting-site`
- Vercel account (free tier is sufficient for this project)

## Deployment Steps

### Method 1: Vercel Dashboard (Recommended for First Deployment)

#### Step 1: Sign Up / Sign In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub" for seamless integration

#### Step 2: Import the Repository

1. Once logged in, click the "Add New..." button in the top right
2. Select "Project"
3. If this is your first time, Vercel will ask to install the Vercel GitHub app
   - Click "Install" or "Configure"
   - Choose your GitHub account
   - Grant access to the `walois-consulting-site` repository
4. You should now see `walois-consulting-site` in the list of repositories
5. Click "Import" next to the repository name

#### Step 3: Configure the Project

Vercel will automatically detect that this is a Next.js project and configure the settings:

- **Project Name**: `walois-consulting-site` (you can change this)
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `next build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

**Environment Variables**: None required for this project (all content is static)

#### Step 4: Deploy

1. Click the "Deploy" button
2. Vercel will:
   - Clone your repository
   - Install dependencies
   - Build the project
   - Deploy to their global CDN
3. This typically takes 2-3 minutes

#### Step 5: Visit Your Live Site

Once deployment is complete:

1. You'll see a success screen with confetti 🎉
2. Click "Visit" to see your live site
3. Your site will be available at: `https://walois-consulting-site.vercel.app`
   - Or a similar URL if the name was taken

### Method 2: Vercel CLI (For Advanced Users)

If you prefer using the command line:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to your project
cd /Users/nadhirmacbookpro/walois-consulting-site

# Login to Vercel
vercel login

# Deploy to preview (test deployment)
vercel

# Deploy to production
vercel --prod
```

## Custom Domain Setup

To use a custom domain like `walois.com` or `walois.is`:

### Step 1: Add Domain in Vercel

1. Go to your project in the Vercel dashboard
2. Click on "Settings" tab
3. Click "Domains" in the left sidebar
4. Enter your domain name (e.g., `walois.com`)
5. Click "Add"

### Step 2: Configure DNS

Vercel will provide DNS records to add to your domain registrar:

**Option A: Using Vercel Nameservers (Recommended)**
- Update your nameservers at your domain registrar to Vercel's nameservers
- Vercel will handle all DNS automatically

**Option B: Using Your Own DNS**
Add these records to your DNS provider:

For root domain (`walois.com`):
```
Type: A
Name: @
Value: 76.76.21.21
```

For www subdomain:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Verify Domain

1. After adding DNS records, wait 10-60 minutes for propagation
2. Vercel will automatically verify and issue an SSL certificate
3. Your site will be live on your custom domain with HTTPS

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:

- **Deploy on every push to `main`**: Production deployments
- **Deploy on pull requests**: Preview deployments with unique URLs
- **Show build status**: Success/failure notifications

### Branch Deployments

- **Main branch**: Deploys to production (`walois.com`)
- **Other branches**: Creates preview URLs for testing
- **Pull requests**: Automatic preview deployments with shareable links

## Post-Deployment Checklist

After your first deployment, verify:

- [ ] All pages load correctly (Home, Services, About, Contact)
- [ ] Navigation works on mobile and desktop
- [ ] Contact form displays and validates (front-end only)
- [ ] Images and icons load properly
- [ ] Responsive design works on various screen sizes
- [ ] SEO metadata appears correctly (check page source)
- [ ] No console errors in browser developer tools

## Monitoring and Analytics

### Vercel Analytics (Optional)

To enable visitor analytics:

1. Go to your project dashboard on Vercel
2. Click "Analytics" tab
3. Click "Enable Analytics"
4. View real-time and historical traffic data

### Web Vitals

Vercel automatically tracks Core Web Vitals:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

View these in the "Analytics" section of your dashboard.

## Environment Variables (Future Use)

If you need to add environment variables later (e.g., for API keys, CRM integration):

1. Go to Project Settings → Environment Variables
2. Add your variables:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: Your API URL
   - **Environments**: Select Production, Preview, or Development
3. Redeploy for changes to take effect

**Security Note**: 
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Sensitive keys should NOT use this prefix and should only be accessed server-side

## Rollback / Revert Deployment

If you need to revert to a previous version:

1. Go to your project dashboard
2. Click "Deployments" tab
3. Find the previous working deployment
4. Click the three dots (•••) menu
5. Select "Promote to Production"

## Common Issues and Solutions

### Build Failing

**Problem**: Build fails with TypeScript errors
```bash
# Solution: Test locally first
npm run build

# Fix any TypeScript errors shown
# Then push fixes to GitHub
```

### 404 on Page Refresh

**Problem**: Direct URLs return 404 (shouldn't happen with Next.js App Router)
**Solution**: Check that you're not using client-side routing incorrectly

### Slow Initial Load

**Problem**: First page load is slow
**Solution**: 
- Enable Vercel Analytics to see metrics
- Consider adding loading states
- Check image sizes and optimization

### Form Not Submitting

**Problem**: Contact form doesn't actually send data
**Solution**: This is expected! The current form only does client validation.
To actually send data:
1. Create an API route in `app/api/contact/route.ts`
2. Integrate with email service (SendGrid, Mailgun) or CRM
3. Update form to POST to your API route

## Redeployment

To redeploy after making changes:

### Automatic (Recommended)
```bash
# Make changes locally
git add .
git commit -m "Your change description"
git push origin main

# Vercel automatically deploys
```

### Manual (via Dashboard)
1. Go to Deployments tab
2. Click "Redeploy" on any deployment
3. Confirm

## Performance Optimization

Your site is already optimized, but for future reference:

- **Images**: Use Next.js `<Image>` component for automatic optimization
- **Fonts**: Already using optimized Google Fonts
- **Code Splitting**: Automatic with Next.js App Router
- **Caching**: Vercel CDN handles this automatically

## Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Next.js Deployment Docs**: https://nextjs.org/docs/deployment

## Cost Estimate

**Vercel Free Tier includes:**
- Unlimited personal projects
- 100 GB bandwidth per month
- Automatic HTTPS
- Global CDN
- Unlimited deployments

This should be more than sufficient for a marketing website. If you exceed free tier limits, Vercel will notify you.

---

## Quick Reference Commands

```bash
# Local development
npm run dev

# Build locally
npm run build

# Deploy via CLI
vercel --prod

# Check deployment status
vercel ls
```

---

Your website is now deployed! 🚀

**Production URL**: Will be provided after deployment (e.g., `https://walois-consulting-site.vercel.app`)

For custom domain setup or questions, refer to the sections above.

