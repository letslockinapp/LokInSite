# LokIn Marketing Website

The official marketing website for LokIn - the productivity app that helps you lock in and crush your goals.

## Features

- Modern, responsive design built with Next.js 15 and TypeScript
- Smooth, bouncy animations using Framer Motion
- Platform-aware download buttons (auto-detects Windows, macOS, Linux)
- Fun placeholder screenshots for desktop and mobile apps
- Optimized for Vercel deployment
- Fully customizable via environment variables

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Package Manager**: Bun (or npm/pnpm)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A package manager (Bun recommended, npm or pnpm also work)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd LokInSite
```

2. Install dependencies:
```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install

# Or using pnpm
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` and add your download URLs:
```env
NEXT_PUBLIC_DOWNLOAD_WINDOWS=https://your-url/LokIn-Setup-Windows.exe
NEXT_PUBLIC_DOWNLOAD_MACOS=https://your-url/LokIn-Setup-macOS.dmg
NEXT_PUBLIC_DOWNLOAD_LINUX=https://your-url/LokIn-Setup-Linux.AppImage
NEXT_PUBLIC_DOWNLOAD_IOS=https://apps.apple.com/app/lokin/id123456789
```

### Development

Run the development server:

```bash
# Using Bun
bun dev

# Using npm
npm run dev

# Using pnpm
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
# Using Bun
bun run build

# Using npm
npm run build
```

The build output will be in the `out` directory (static export).

## Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your repository
5. Add your environment variables in the Vercel dashboard
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables:
```bash
vercel env add NEXT_PUBLIC_DOWNLOAD_WINDOWS
vercel env add NEXT_PUBLIC_DOWNLOAD_MACOS
vercel env add NEXT_PUBLIC_DOWNLOAD_LINUX
vercel env add NEXT_PUBLIC_DOWNLOAD_IOS
```

4. Redeploy with environment variables:
```bash
vercel --prod
```

## Customization

### Update Logo

Replace `public/logo.jpg` with your own logo (recommended: 1024x1024px).

### Modify Content

- **Hero Section**: Edit `components/Hero.tsx`
- **Features**: Edit `components/Features.tsx`
- **Screenshots**: Edit `components/Screenshots.tsx`
- **Download Section**: Edit `components/Download.tsx`
- **Footer**: Edit `components/Footer.tsx`

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  purple: {
    500: '#a78bfa',  // Change these values
    600: '#9333ea',
    700: '#7c3aed',
  },
}
```

### Update Social Links

Edit the social media links in `components/Footer.tsx`.

## Project Structure

```
LokInSite/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with logo and CTA
│   ├── Features.tsx        # Features showcase
│   ├── Screenshots.tsx     # App screenshots placeholders
│   ├── Download.tsx        # Download section with platform detection
│   └── Footer.tsx          # Footer with links and social
├── public/
│   └── logo.jpg            # LokIn logo
├── .env.example            # Environment variables template
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel deployment configuration
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_DOWNLOAD_WINDOWS` | Windows download URL | `https://github.com/.../LokIn-Setup.exe` |
| `NEXT_PUBLIC_DOWNLOAD_MACOS` | macOS download URL | `https://github.com/.../LokIn-Setup.dmg` |
| `NEXT_PUBLIC_DOWNLOAD_LINUX` | Linux download URL | `https://github.com/.../LokIn-Setup.AppImage` |
| `NEXT_PUBLIC_DOWNLOAD_IOS` | iOS App Store URL | `https://apps.apple.com/app/lokin/id...` |

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.

---

Built with Next.js and deployed on Vercel. Time to lock in!
