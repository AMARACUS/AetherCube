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
   - shadcn/ui components: Button, Card, Skeleton, Input, Label
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

### ✅ STEP 2 COMPLETED: ZERO-TRUST DATABASE & AUTH (SUPABASE)

1. **Supabase Client Utilities**
   - Browser client for Client Components
   - Server client for Server Components and Route Handlers
   - Middleware client for session management
   - Type-safe database types from schema

2. **Database Schema with RLS**
   - `profiles` table with user information
   - `projects` table with user projects
   - Strict Row Level Security (RLS) policies
   - Users can only access their own data
   - Automatic profile creation on user signup
   - Auto-updating timestamps
   - Optimized indexes for performance

3. **Authentication System**
   - Email/password authentication
   - Authentication UI components (login, signup)
   - AuthProvider for global auth state
   - Auth store integrated with Zustand
   - Protected route middleware
   - Auth callback route for OAuth flows

4. **Workspace Integration**
   - User info display in sidebar
   - Sign out functionality
   - Protected workspace routes
   - Automatic session refresh
   - Auth state persistence

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
   - **Supabase credentials** (required for Step 2)
   - Alchemy API key (for Step 4)
   - LLM API key - OpenAI or Anthropic (for Step 3)
   - Upstash Redis credentials (optional, for Step 3)

5. Set up Supabase database:
   - Create a Supabase project at https://supabase.com
   - Run the SQL schema in `supabase/schema.sql` in the SQL editor
   - Copy your project URL and anon key to `.env.local`

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
- **Row Level Security (RLS)**: Users can only access their own data
- **API Key Protection**: No client-side exposure of sensitive credentials
- **CSP Headers**: Strict content security policy prevents XSS attacks
- **Input Sanitization**: Ready for implementation in API routes
- **HTTPS Enforcement**: HSTS with preload enabled
- **Clickjacking Protection**: X-Frame-Options DENY
- **Secure Authentication**: Supabase Auth with automatic session management
- **Protected Routes**: Middleware-based route protection

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
│   ├── /auth
│   │   └── /callback      # Auth callback route
│   │       └── route.ts   # OAuth callback handler
│   ├── layout.tsx         # Root layout with AuthProvider
│   ├── page.tsx           # Homepage (Auth/Workspace)
│   └── globals.css        # Global styles with Tailwind
├── /components
│   ├── /auth             # Authentication components
│   │   ├── auth-form.tsx # Login/signup form
│   │   └── auth-provider.tsx # Auth state provider
│   ├── /ui               # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── skeleton.tsx
│   └── /workspace        # Workspace-specific components
│       ├── workspace-layout.tsx # Main IDE layout
│       └── workspace-skeleton.tsx # Loading states
├── /lib
│   ├── /supabase         # Supabase utilities
│   │   ├── client.ts     # Browser client
│   │   ├── server.ts     # Server client
│   │   ├── middleware.ts # Middleware client
│   │   └── types.ts      # Database types
│   └── utils.ts          # Utility functions
└── /store
    ├── auth.ts           # Auth state management
    └── workspace.ts      # Workspace state management
/supabase
└── schema.sql            # Database schema with RLS policies
middleware.ts             # Next.js middleware for auth
```

## 🎯 Next Steps

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

