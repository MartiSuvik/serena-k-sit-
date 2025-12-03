# Serena Käsitöö - AI Coding Instructions

## Project Overview
Estonian handmade chocolate shop landing page. Single-page React application with Vite, TypeScript, and Tailwind CSS v4.

## Architecture

### Component Structure
```
App.tsx (root layout)
├── Navbar.tsx      # Fixed nav with scroll detection, mobile menu
├── Hero.tsx        # Landing section with contact modal, floating images
├── WavySection.tsx # About section with dark earth-900 background
├── ProductList.tsx # Product grid from PRODUCTS constant
├── PriceList.tsx   # Pricing table from PRICES constant
└── Footer.tsx      # Brand info and social links
```

### Data Flow Pattern
- **All static data lives in `constants.ts`** - products, prices, nav items, hero images
- **Types defined in `types.ts`** - `Product`, `NavItem`, `PriceItem`
- Components import data directly from constants, no props drilling
- No API calls or state management library - pure React useState

## Design System

### Color Palette (defined in `src/index.css` @theme)
- `earth-50` to `earth-950`: Brown/chocolate gradient (primary palette)
- `serena-pink`: `#F8E7E7` (accent backgrounds, glows)
- Always use `earth-*` classes, never raw hex values in components

### Typography
- **Serif** (`font-serif`): Bodoni Moda - headings only
- **Sans** (`font-sans`): Tenor Sans - body text, buttons, labels
- Pattern: `tracking-widest text-sm uppercase` for labels/badges

### Animation Classes (defined in `src/index.css`)
- `animate-float` / `animate-float-delayed`: Vertical bobbing for images
- `animate-wiggle`: Heart emoji rotation on contact button

## Key Patterns

### Navigation Scrolling
```tsx
// Always use this pattern for internal links
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};
```

### Section IDs for Navigation
- `#shop` - Hero
- `#products` - Product grid
- `#pricelist` - Prices
- `#about` - WavySection

### Modal Pattern (see Hero.tsx)
- State: `const [isOpen, setIsOpen] = useState(false)`
- Backdrop: `bg-earth-950/40 backdrop-blur-sm`
- Close: backdrop click + X button

## Development

### Commands
```bash
npm install    # Install dependencies
npm run dev    # Start dev server at localhost:3000
npm run build  # Production build to dist/
npm run preview # Preview production build
```

### Tailwind CSS v4 Setup
- Config in `src/index.css` using `@theme` directive (not tailwind.config.js)
- Vite plugin: `@tailwindcss/vite` in `vite.config.ts`
- PostCSS plugin: `@tailwindcss/postcss` in `postcss.config.js`

## Content Guidelines
- **Language**: Estonian (et) - all UI text
- **Images**: Hosted on Cloudinary (`res.cloudinary.com/effichat/`)
- **Currency**: Euro with format `€X.XX` or `X €`

## Common Tasks

### Adding a New Product
1. Add entry to `PRODUCTS` array in `constants.ts`
2. Include: `id`, `name`, `description`, `price`, `image`, optional `isNew`

### Adding a New Price Item
1. Add entry to `PRICES` array in `constants.ts`
2. Format: `{ name: 'Item name', price: 'X €' }`

### Adding Nav Item
1. Add to `NAV_ITEMS` in `constants.ts`
2. Ensure corresponding section has matching `id` attribute

### Adding Custom Colors/Animations
1. Edit `src/index.css` inside the `@theme` block
2. Use CSS custom property format: `--color-name: #hex;` or `--animate-name: ...;`
