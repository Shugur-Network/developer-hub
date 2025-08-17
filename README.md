# Shugur Developer Hub - Nostr Protocol Development Guide

A comprehensive developer hub for building applications on the Nostr protocol with Shugur relay. This site provides guides, examples, and documentation organized by programming language to help developers get started with decentralized social networking.

## ✨ Features

- **Multi-Language Support**: Guides for JavaScript, TypeScript, Python, Rust, Go, and Swift
- **Comprehensive NIP Coverage**: Documentation for all NIPs supported by Shugur relay
- **Interactive Examples**: Ready-to-use code snippets and complete project templates
- **Production-Ready Relay**: Connect to `wss://shugur.com` for reliable Nostr infrastructure
- **Modern Design**: Clean, responsive interface built with SvelteKit and TailwindCSS

## Quick Start

1. **Clone and install dependencies:**

   ```bash
   git clone <repository-url>
   cd developer-hub
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

## Content Structure

### Main Sections

- **Home** (`/`) - Overview and quick access to all resources
- **Guides** (`/guides`) - Development tutorials organized by language
- **NIPs** (`/nips`) - Supported Nostr Improvement Proposals
- **Examples** (`/examples`) - Complete project examples and code snippets

### Language-Specific Guides

- **JavaScript** (`/guides/javascript`) - Browser and Node.js development
- **TypeScript** (`/guides/typescript`) - Type-safe Nostr applications
- **Python** (`/guides/python`) - Bots, analytics, and backend services
- **Rust** (`/guides/rust`) - High-performance applications (Coming Soon)
- **Go** (`/guides/go`) - Scalable services (Coming Soon)
- **Swift** (`/guides/swift`) - iOS/macOS apps (Coming Soon)

### Essential Guides

- **Getting Started** (`/guides/getting-started`) - 5-minute setup guide
- **Core Concepts** (`/guides/concepts`) - Understanding Nostr fundamentals
- **Relay Connection** (`/guides/relay-connection`) - Connect to Shugur relay

## Technical Details

### Built With

- **Framework**: SvelteKit 2.0
- **Styling**: TailwindCSS 3.4
- **Icons**: Lucide Svelte
- **Language**: TypeScript
- **Build Tool**: Vite

## Shugur Relay Information

- **WebSocket URL**: `wss://shugur.com`
- **Status**: Production Ready
- **Uptime**: 99.9% SLA
- **Supported NIPs**: 01, 02, 04, 09, 11, 15, 20, 25, 28, 33, 40, 42, 50
- **Rate Limiting**: 50 events/minute for free users
- **Features**: Real-time monitoring, comprehensive logging, developer-friendly policies

## Development

### Adding New Content

1. **New Language Guide**: Create a new route in `src/routes/guides/[language]/+page.svelte`
2. **New Example**: Add to the examples array in `src/routes/examples/+page.svelte`
3. **New NIP**: Update the supportedNips array in `src/routes/nips/+page.svelte`

### Code Examples Format

All code examples should:

- Include copy-to-clipboard functionality
- Provide clear explanations
- Show expected output
- Include error handling
- Link to full tutorials

## Responsive Design

The site is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your content following the existing patterns
4. Test locally with `npm run dev`
5. Submit a pull request

## Links

- **Company Website**: [https://shugur.com](https://shugur.com)
- **Status Page**: [https://shugur.net](https://shugur.net)
- **GitHub Organization**: [https://github.com/Shugur-Network](https://github.com/Shugur-Network)

## Support

- **Email**: [developers@shugur.com](mailto:developers@shugur.com)
- **GitHub Issues**: For bug reports and feature requests
- **Community**: Join the Nostr developer community

---

Built with ❤️ for the Nostr ecosystem by Shugur Network
