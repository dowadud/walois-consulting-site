# Walo Innovated Solutions Design System (Updated - Tech Forward)

## Brand Identity

**Brand Name**: Walo Innovated Solutions (WaloIS)  
**Location**: Charlotte, North Carolina  
**Positioning**: Tech-forward consulting firm specializing in systems design, automation, and AI  
**Visual Style**: Modern, technology-focused, with dynamic animations and depth

## Color Palette

### Primary Colors
- **Emerald 600**: `#059669` - Primary brand color (innovation, trust)
- **Emerald 700**: `#047857` - Primary hover state
- **Emerald 50**: `#ecfdf5` - Light backgrounds
- **Emerald 100**: `#d1fae5` - Subtle highlights

### Accent Colors
- **Amber 500**: `#f59e0b` - Accent color (value, premium)
- **Amber 600**: `#d97706` - Accent hover state
- **Amber 50**: `#fffbeb` - Light accent backgrounds

### Neutral Colors
- **Slate 900**: `#0f172a` - Primary text
- **Slate 700**: `#334155` - Secondary text
- **Slate 500**: `#64748b` - Muted text
- **Slate 300**: `#cbd5e1` - Borders
- **Slate 100**: `#f1f5f9` - Light backgrounds
- **Slate 50**: `#f8fafc` - Lightest backgrounds
- **White**: `#ffffff` - Pure white

## Typography

### Font Family
- **Primary**: System sans-serif stack (Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)
- **Monospace**: For code snippets if needed

### Font Scale
- **xs**: 0.75rem (12px) - Small labels
- **sm**: 0.875rem (14px) - Body small
- **base**: 1rem (16px) - Body text
- **lg**: 1.125rem (18px) - Large body
- **xl**: 1.25rem (20px) - H4
- **2xl**: 1.5rem (24px) - H3
- **3xl**: 1.875rem (30px) - H2
- **4xl**: 2.25rem (36px) - H1
- **5xl**: 3rem (48px) - Hero headlines
- **6xl**: 3.75rem (60px) - Large hero headlines

### Font Weights
- **Normal**: 400 - Body text
- **Medium**: 500 - Emphasis
- **Semibold**: 600 - Headings, buttons
- **Bold**: 700 - Strong emphasis

## Spacing Scale

Using Tailwind's default spacing scale (1 unit = 0.25rem = 4px):

- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **20**: 5rem (80px)
- **24**: 6rem (96px)

## Layout Guidelines

### Container
- **Max Width**: 1280px (80rem)
- **Padding**: 1.5rem (24px) on mobile, 2rem (32px) on desktop

### Section Spacing
- **Between Sections**: 5rem (80px) on desktop, 3rem (48px) on mobile
- **Within Sections**: 2rem (32px) to 3rem (48px)

### Grid System
- Use Tailwind's grid system
- Standard: 1 column on mobile, 2-3 columns on tablet, 3-4 columns on desktop

## Component Guidelines

### Buttons

#### Primary Button
- **Background**: Emerald 600
- **Text**: White
- **Hover**: Emerald 700
- **Padding**: 0.75rem 2rem (12px 32px)
- **Border Radius**: 0.625rem (10px)
- **Font**: Semibold (600)
- **Transition**: All 200ms ease

#### Secondary Button
- **Background**: Transparent
- **Border**: 2px Emerald 600
- **Text**: Emerald 600
- **Hover**: Background Emerald 50

#### Accent Button (CTA)
- **Background**: Amber 500
- **Text**: White
- **Hover**: Amber 600

### Cards
- **Background**: White
- **Border**: 1px Slate 200
- **Border Radius**: 0.75rem (12px)
- **Padding**: 2rem (32px)
- **Shadow**: Subtle shadow on hover
- **Transition**: Shadow and transform 200ms ease

### Forms

#### Input Fields
- **Border**: 1px Slate 300
- **Border Radius**: 0.5rem (8px)
- **Padding**: 0.75rem 1rem
- **Focus**: Emerald 600 ring

#### Labels
- **Font Size**: 0.875rem (14px)
- **Font Weight**: Medium (500)
- **Color**: Slate 700
- **Margin**: 0.5rem bottom

### Navigation

#### Navbar
- **Height**: 4rem (64px)
- **Background**: White with subtle shadow
- **Logo**: Emerald 600 text
- **Links**: Slate 700, hover Emerald 600
- **Sticky**: Yes, at top

#### Footer
- **Background**: Slate 900
- **Text**: Slate 400
- **Links**: Slate 300, hover Emerald 400

## Animation & Transitions

### Hover States
- **Duration**: 200-300ms
- **Easing**: ease-out, [0.21, 0.47, 0.32, 0.98]
- **Properties**: background-color, color, transform, shadow, scale
- **Transform**: translateY(-8px) for cards, scale(1.02-1.1) for buttons

### Scroll Animations (Framer Motion)
- **Fade In**: opacity 0 → 1 with directional slide
- **Stagger**: Children animate sequentially with 0.1s delay
- **Viewport**: Once mode with -100px margin for early trigger
- **Scale**: Subtle scale on cards (1.02-1.05)
- **Rotate**: Icon rotation on hover (5deg)

### Modern Effects
- **Glass Morphism**: backdrop-blur-xl with semi-transparent backgrounds
- **Gradient Overlays**: Animated gradient blurs for depth
- **Grid Backgrounds**: Animated tech grids with emerald accents
- **Glow Effects**: Radial gradients with blur for ambient lighting

## Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Accessibility

- **Color Contrast**: Minimum WCAG AA (4.5:1 for body text)
- **Focus States**: Visible ring on all interactive elements
- **Alt Text**: Required for all images
- **Semantic HTML**: Use proper heading hierarchy
- **Keyboard Navigation**: All interactive elements must be keyboard accessible

## Usage Examples

### Hero Section (Tech Style)
- **Background**: Dark (slate-950) with animated grid pattern
- **Headline**: 5xl-7xl with gradient text (white → emerald-200)
- **Animations**: Sequential fade-in with stagger effect
- **Elements**: 
  - Floating badge with backdrop blur
  - Feature pills with icons
  - Stats bar with glassmorphism
  - Radial gradient glows (emerald/amber)
- **Gradient Fade**: Bottom fade to white for smooth transition

### Service Cards
- Icon or badge at top
- Headline (2xl)
- Description text (base)
- List of benefits
- Subtle hover effect

### Call-to-Action Blocks
- Centered layout
- Emerald or Amber background
- White text
- Strong contrast
- Clear single action

