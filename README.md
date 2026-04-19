# Sharkiez Portfolio

A modern, edgy portfolio website for **Sharkiez** - a young digital builder crafting Minecraft servers and creative projects.

## Features

- ✨ Dark gradient design with cyan/blue neon accents
- 🚀 Animated hero section with scrolling effects
- 🎮 Focus on fair-play Minecraft servers & digital projects
- 💼 Skills showcase & community-first values
- 📱 Fully responsive design
- ⚡ Built with Next.js 15 static export for optimal performance

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI**: React 18 + TypeScript
- **Styling**: Inline CSS (for static export compatibility)
- **Hosting**: Vercel (static deployment)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
npm run build
```

The `out/` directory contains the static export ready for deployment.

## Deployment

The site is deployed on Vercel at: **https://sharkiez-portfolio.vercel.app**

To deploy your own changes:
1. Push to this repository
2. Vercel automatically builds and deploys

## Portfolio Content

**Tagline**: Young builder crafting the future—one server at a time.

**Focus Areas**:
- Minecraft servers with fair mechanics (no pay-to-win)
- Creative digital projects with substance
- Community-first mindset
- Growth & continuous learning

**Values**:
- Fair play over pay-to-win
- Real builds over quick cash
- Growth mindset always
- Community first

**Skills**: Server Setup, Game Concepts, Creative Direction, Community Building, System Design

**Contact**: [@itzsharkiez on Discord](https://discord.com)

## Project Structure

```
sharkiez-portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Portfolio page with all content & styles
├── out/                 # Static export output
├── public/              # Static assets (if needed)
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS config
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies
```

## Customization

All styles are inline in `app/page.tsx`. To customize:
1. Edit the style objects within the component
2. Modify content in the JSX
3. Run `npm run build` and test locally
4. Push to deploy

## License

Open source - feel free to fork and build your own portfolio!

## Author

**Sharkiez** - Digital Builder 🦈

---

Built with passion. No pay-to-win. Just growth.
