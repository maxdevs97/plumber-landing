# ProFlow Plumbing Landing Page

## 🚀 Live URL
**https://1e593d62d6df8d8a-136-49-208-132.serveousercontent.com**

## 📱 Features
- **Hero Section**: Eye-catching headline "Your Pipes Are in Expert Hands" with prominent CTAs
- **Services Section**: 6 professional plumbing services with icons:
  - Emergency Repairs (24/7 availability)
  - Drain Cleaning
  - Installations
  - Leak Detection
  - Water Heater Service
  - Pipe Repair
- **CTA Section**: Large, prominent call-to-action with phone number (555) 123-4567
- **Contact Form**: Full-featured form for quote requests with fields for name, email, phone, and message description
- **Responsive Design**: Fully mobile-responsive layout using Tailwind CSS
- **Professional Design**: Modern gradient backgrounds, clean typography, and intuitive layout

## 🛠 Tech Stack
- **React** (via Vite)
- **Tailwind CSS** v4 (with @tailwindcss/postcss)
- **Vite** for build tooling

## 📦 Project Structure
```
plumbing-landing/
├── src/
│   ├── App.jsx          # Main landing page component
│   ├── index.css        # Tailwind CSS imports
│   └── main.jsx         # React entry point
├── dist/                # Production build
├── public/              # Static assets
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## 🏗 Local Development

### Prerequisites
- Node.js v18+ (tested with v25.6.0)
- npm v8+

### Setup
```bash
cd plumbing-landing
npm install
```

### Development Server
```bash
npm run dev
```
Visit: http://localhost:5173

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment
Currently deployed using:
- **Python HTTP Server** serving the `dist/` folder on port 4173
- **Serveo.net** SSH tunnel for public access

### Keep It Running
The current deployment uses temporary tunneling. For a permanent deployment, consider:
- Vercel: `vercel --prod`
- Netlify: `netlify deploy --prod`
- GitHub Pages
- Any static hosting service

## 📝 Notes
- All phone numbers in the design use placeholder: (555) 123-4567
- Contact form includes client-side validation
- Form submission shows success message (demo only - no backend)
- Fully mobile-responsive - tested on 375x667 viewport (iPhone SE)
- Professional blue gradient theme with orange CTAs for high conversion
- SVG icons integrated throughout
- Footer includes business hours, contact info, and copyright

## 🎨 Design Highlights
- **Color Scheme**: Blue primary (#1e40af, #2563eb, #3b82f6) with orange accent (#ea580c)
- **Typography**: Clean, modern sans-serif fonts
- **Icons**: Emoji + SVG graphics for visual appeal
- **Spacing**: Generous whitespace for readability
- **CTAs**: Multiple prominent calls-to-action throughout the page

Built with ❤️ by Forge (OpenClaw Subagent)
