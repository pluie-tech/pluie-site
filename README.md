# Pluie - Institutional Website

A modern, fully static institutional website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases a complete business website with responsive design and optimized performance.

## Features

- **Static Site Generation (SSG)** - Optimized for performance and SEO
- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **TypeScript** - Type-safe development with excellent developer experience
- **Modern Components** - Reusable, accessible React components
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## Components

- **Header** - Navigation with responsive mobile menu
- **Hero** - Engaging landing section with call-to-action
- **About** - Company overview with mission and values
- **Services** - Service offerings with detailed features
- **Contact** - Contact form and business information
- **Footer** - Site footer with social links and newsletter signup

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the static site for production:

```bash
npm run build
```

The built files will be exported to the `dist` directory, ready for deployment to any static hosting service.

To serve the built site locally:

```bash
npm run serve
```

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with Header and Footer
│   └── page.tsx        # Home page with all sections
├── components/
│   ├── About.tsx       # About section component
│   ├── Contact.tsx     # Contact form and info component
│   ├── Footer.tsx      # Site footer component
│   ├── Header.tsx      # Navigation header component
│   ├── Hero.tsx        # Hero section component
│   ├── Services.tsx    # Services showcase component
│   └── index.ts        # Component exports
```

## Customization

### Updating Content

Each component accepts props to customize content:

- **Header**: Logo, company name, and navigation links
- **Hero**: Title, subtitle, description, and CTA
- **About**: Company information and feature highlights
- **Services**: Service offerings and pricing
- **Contact**: Contact information and form handling
- **Footer**: Company details and social links

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Typography and spacing
- Component-specific styles

### Static Export Configuration

The site is configured for static export in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true
  }
};
```

## Deployment

This static site can be deployed to:

- **Vercel** - Zero-config deployment
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Upload the `dist` folder contents
- **AWS S3** - Static website hosting
- **Any CDN or static hosting service**

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
