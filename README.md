# Walo Innovated Solutions - Marketing Website

A modern, production-ready marketing website for Walo Innovated Solutions, a tech-forward consulting firm specializing in systems design, automation, and AI implementation.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📋 Features

- **Fully Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Modern UI Components**: Built with shadcn/ui for consistent, accessible components
- **SEO Optimized**: Complete metadata and Open Graph tags on all pages
- **Contact Form**: Client-side validated form with success states (ready for backend integration)
- **Design System**: Comprehensive brand guidelines documented in `design-system.md`
- **Performance**: Static generation for optimal loading times

## 📁 Project Structure

```
walois-consulting-site/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── services/page.tsx    # Services page
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   ├── layout.tsx           # Root layout with Navbar/Footer
│   └── globals.css          # Global styles and CSS variables
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── navbar.tsx           # Navigation component
│   ├── footer.tsx           # Footer component
│   ├── hero.tsx             # Hero section component
│   ├── section.tsx          # Reusable section wrapper
│   ├── service-card.tsx     # Service card component
│   ├── cta-block.tsx        # Call-to-action component
│   └── contact-form.tsx     # Contact form with validation
├── lib/                     # Utility functions
│   └── utils.ts             # shadcn/ui utilities
├── public/                  # Static assets
├── design-system.md         # Brand and design guidelines
└── package.json             # Dependencies
```

## 🎨 Design System

The site uses a carefully crafted design system with:

- **Primary Color**: Emerald/Teal (#059669) - Innovation and trust
- **Accent Color**: Amber (#f59e0b) - Value and premium
- **Neutral Colors**: Slate grays for text and backgrounds
- **Typography**: Inter font with a clear hierarchy
- **Components**: Consistent styling across buttons, cards, forms, and layouts

See `design-system.md` for complete brand guidelines.

## 🛠️ Local Development

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dowadud/walois-consulting-site.git
cd walois-consulting-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Preview Production Build

```bash
npm run build
npm start
```

## 📦 Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)

1. Visit [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import the `walois-consulting-site` repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

Your site will be live in minutes with automatic deployments on every push to main.

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd walois-consulting-site
vercel

# Deploy to production
vercel --prod
```

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with primary CTAs
- Service pillars (Operations, Automation, AI)
- Target audience segments
- How We Work process
- Sample outcomes/results
- About Walo section
- Primary CTA block

### Services Page (`/services`)
- Detailed service descriptions
- Operations & Systems Consulting
- Automation & Integrations
- AI Assistants & Chatbots
- Implementation & Support
- Multiple CTAs throughout

### About Page (`/about`)
- Company story and mission
- Values and approach
- Strategic framework
- Team focus and culture

### Contact Page (`/contact`)
- Discovery call form
- Client-side validation
- Contact information cards
- FAQ section
- Success/error states

## 🔧 Customization

### Adding New Pages

1. Create a new directory in `app/` (e.g., `app/blog/`)
2. Add a `page.tsx` file
3. Export metadata for SEO
4. Update navigation in `components/navbar.tsx` and `components/footer.tsx`

### Modifying Colors

Colors are defined in `app/globals.css` using CSS variables:
- Update the `:root` section to change the color scheme
- Tailwind utilities will automatically use the new colors

### Contact Form Integration

The contact form in `components/contact-form.tsx` currently logs to console. To integrate with a backend:

1. Create an API route in `app/api/contact/route.ts`
2. Update the `handleSubmit` function to POST to your API
3. Connect to your CRM, email service, or database

Example API route structure:
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Process form data
  // Send to CRM, email, etc.
  return Response.json({ success: true });
}
```

## 📊 Performance

- **Static Generation**: All pages are pre-rendered at build time
- **Optimized Assets**: Next.js automatic image and asset optimization
- **Fast Navigation**: Client-side routing with prefetching
- **Minimal JavaScript**: Server components where possible

## 🔐 Environment Variables

If you need to add environment variables (e.g., for API keys):

1. Create `.env.local` in the project root
2. Add your variables:
```
NEXT_PUBLIC_API_URL=your_api_url
```
3. Access in code: `process.env.NEXT_PUBLIC_API_URL`

**Note**: Never commit `.env.local` to version control!

## 📝 Git Workflow

The project follows a clean commit structure:

1. Initial Next.js setup with TypeScript, Tailwind CSS, and shadcn/ui
2. Walo brand design system and shadcn/ui components
3. Layout components (Navbar, Footer) and reusable UI components
4. All pages: Home, Services, About, Contact with complete content and SEO metadata
5. Default Next.js public assets

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Port Already in Use

If port 3000 is already in use:
```bash
# Run on a different port
PORT=3001 npm run dev
```

## 📞 Support

For questions or issues with this codebase, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 📜 License

This project is proprietary to Walo Innovated Solutions.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
