# Chinmaya Educational, Cultural and Charitable Trust - Redesign

This project is a modern, responsive, and fully redesigned version of the Chinmaya Educational, Cultural and Charitable Trust website. It is built using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide React**. 

## Features
- Complete migration and redesign of legacy `.aspx` pages.
- Modern **Design System** utilizing Warm Ivory, Deep Navy, Saffron, Terracotta, and Slate with Inter & Manrope typography.
- Fully responsive across mobile, tablet, and desktop viewports.
- Integrated original media assets from the source website.

## Installation

1. Make sure you have Node.js installed.
2. Run the following command to install dependencies:
```bash
npm install
```

## Development

To start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build and Deployment

To create an optimized production build, run:
```bash
npm run build
```

To start the production server after building:
```bash
npm run start
```
This project can be deployed easily on Vercel, Netlify, or any Node.js hosting provider.

## Asset Update Instructions

Original assets (images and videos) are currently loaded dynamically from the legacy source domain (`chintvm.edu.in`) via `next.config.ts`'s `remotePatterns`. 

To fully migrate assets locally in the future:
1. Download the required images from the source URLs listed in `docs/asset-audit.md`.
2. Place them in the `public/images/` directory.
3. Update the `src` attribute in the respective components (e.g., `src/app/page.tsx`) to use the local path (e.g., `/images/hero-banner.jpg`) instead of the remote URL.

## Contact Form

The Contact Form currently relies on a dummy UI implementation. To enable actual submissions, integrate it with a backend service (like SendGrid, Resend, or a custom API) and supply the API keys in your `.env` file (see `.env.example`).


You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
