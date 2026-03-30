# AetherCube - Enterprise Web3 AI Platform

A production-ready Web3 vibe coding AI platform designed to scale into $1 trillion businesses. Built with enterprise-grade security, performance optimization, and AI-powered code generation capabilities.

## 🏗️ Architecture Overview

This platform is built with a strict **$0 cost startup** infrastructure while maintaining enterprise-grade standards:

- **Framework**: Next.js 14 with App Router and TypeScript
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **State Management**: Zustand for lightweight, performant state handling
- **Auth & Database**: Supabase (Free Tier) with Row Level Security
- **Web3**: viem and wagmi (Alchemy Free Tier)
- **AI**: Server-side proxy for LLM providers (OpenAI/Anthropic)
- **Performance**: Edge runtime, dynamic imports, aggressive caching
- **Security**: Strict CSP, security headers, zero-trust architecture

## 🚀 Current Implementation Status

### ✅ STEP 1 COMPLETED: SECURE FOUNDATION & UI ARCHITECTURE

1. **Next.js 14 Application Initialized**
   - TypeScript strict mode enabled
   - App Router configured
   - Production-optimized build settings

2. **Enterprise Security Headers Configured**
   - Strict Content Security Policy (CSP)
   - X-Frame-Options: DENY (clickjacking protection)
   - X-Content-Type-Options: nosniff
   - Strict-Transport-Security with HSTS preload
   - Referrer-Policy configured
   - Permissions-Policy restricted
   - X-Powered-By header removed

3. **UI Component Library Setup**
   - Tailwind CSS v4 fully configured
   - shadcn/ui components: Button, Card, Skeleton
   - Dark mode as default theme
   - Responsive design system

4. **Main Workspace UI Built**
   - Dark-mode Web3 IDE layout
   - Project explorer sidebar
   - Main editor area with welcome screen
   - Top navigation bar
   - Loading states with skeleton loaders
   - Instant loading states for all async operations

5. **State Management**
   - Zustand store configured for workspace state
   - Project management state
   - Code generation state
   - UI state handling

## 🔧 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd AetherCube
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.local.example .env.local
   ```

4. Configure your environment variables in `.env.local`:
   - Supabase credentials
   - Alchemy API key
   - LLM API key (OpenAI or Anthropic)
   - Upstash Redis credentials (optional, for rate limiting)

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
npm start
```

## 🔐 Security Features

- **Zero-Trust Architecture**: All external API calls happen server-side
- **API Key Protection**: No client-side exposure of sensitive credentials
- **CSP Headers**: Strict content security policy prevents XSS attacks
- **Input Sanitization**: Ready for implementation in API routes
- **HTTPS Enforcement**: HSTS with preload enabled
- **Clickjacking Protection**: X-Frame-Options DENY

## ⚡ Performance Standards

The platform is designed to achieve:
- **95+ Lighthouse Score**: Through dynamic imports and optimized rendering
- **Edge Runtime**: For ultra-low latency API responses
- **Lazy Loading**: All heavy components are dynamically imported
- **Aggressive Caching**: Client-side and CDN-level caching strategies

## 📁 Project Structure

```
/src
├── /app                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage (Workspace)
│   └── globals.css        # Global styles with Tailwind
├── /components
│   ├── /ui               # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── skeleton.tsx
│   └── /workspace        # Workspace-specific components
│       ├── workspace-layout.tsx
│       └── workspace-skeleton.tsx
├── /lib
│   └── utils.ts          # Utility functions (cn helper)
└── /store
    └── workspace.ts      # Zustand state management
```

## 🎯 Next Steps

### STEP 2: ZERO-TRUST DATABASE & AUTH (SUPABASE)
- [ ] Create Supabase client utilities
- [ ] Write SQL schema with strict RLS policies
- [ ] Build authentication UI (Email/Wallet)
- [ ] Implement workspace route protection

### STEP 3: ENTERPRISE AI PROXY & RATE LIMITING
- [ ] Integrate Upstash Redis for rate limiting
- [ ] Create `/api/vibe-code` endpoint
- [ ] Write ironclad system prompt for secure code generation
- [ ] Implement DDoS protection

### STEP 4: SECURE WEB3 SDK WRAPPER
- [ ] Create web3-generator SDK
- [ ] Integrate viem/wagmi
- [ ] Implement contract vulnerability scanning
- [ ] Add ABI validation logic

### STEP 5: SUGGESTED BUTTONS & STATE MANAGEMENT
- [ ] Implement suggested buttons context engine
- [ ] Create credit system with atomic transactions
- [ ] Build AI suggestion UI

### STEP 6: COMPLIANCE & LEGAL AUTO-GENERATION
- [ ] Auto-generate GDPR/DPDP compliant T&Cs
- [ ] Create smart contract disclaimers
- [ ] Implement liability-shifting documentation

## 📝 Environment Variables

See `.env.local.example` for all required environment variables:

- **NEXT_PUBLIC_SUPABASE_URL**: Your Supabase project URL
- **NEXT_PUBLIC_SUPABASE_ANON_KEY**: Supabase anonymous key
- **SUPABASE_SERVICE_ROLE_KEY**: Supabase service role key (server-side only)
- **NEXT_PUBLIC_ALCHEMY_ID**: Alchemy API key for Web3
- **OPENAI_API_KEY** or **ANTHROPIC_API_KEY**: LLM provider key
- **UPSTASH_REDIS_REST_URL**: Upstash Redis URL (optional)
- **UPSTASH_REDIS_REST_TOKEN**: Upstash Redis token (optional)

## 🤝 Contributing

This is an enterprise-grade platform designed for production use. All contributions must:
- Follow TypeScript strict mode
- Include proper error handling
- Maintain security best practices
- Pass all linting and type checks
- Include appropriate tests

## 📄 License

[License information to be added]

## 🛡️ Security Reporting

If you discover a security vulnerability, please email [security contact to be added].

---

**Built for enterprise. Designed for scale. Secured by default.**

