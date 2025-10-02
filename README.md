# North Point Technology

Built with Next.js 15, TypeScript, and Tailwind CSS, powered by Contentful CMS.

## Quick Start

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your Contentful API credentials (see `.env.example` for required variables).

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Contentful
- **Language**: TypeScript
- **Package Manager**: pnpm

## Environment Variables

Create a `.env.local` file with your Contentful credentials:

- `CONTENTFUL_SPACE_ID` - Your Contentful space ID
- `CONTENTFUL_ACCESS_TOKEN` - Content Delivery API access token
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN` - Content Preview API access token

## Deployment

Deploy to Vercel with one push to `main`
