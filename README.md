# AetherCube - Web3 AI Builder Platform

AetherCube is a production-ready Web3 vibe coding AI platform that allows users to build Web3 applications through natural language. Similar to Lovable but exclusively focused on Web3.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components, Framer Motion
- **State Management**: Zustand
- **UI Components**: lucide-react icons, Radix UI primitives
- **Auth & Database**: Supabase (Free Tier) - *to be configured in Step 2*
- **Web3**: viem and wagmi - *to be integrated in Step 4*
- **AI Proxy**: Next.js API routes - *to be built in Step 3*

## 📦 What's Included (Step 1 - Complete)

### ✅ Project Structure
```
/home/runner/work/AetherCube/AetherCube/
├── app/
│   ├── layout.tsx           # Root layout with dark mode
│   ├── page.tsx              # Main workspace page
│   └── globals.css           # Global styles with Web3 theme
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── scroll-area.tsx
│   │   └── tooltip.tsx
│   └── workspace/            # Main workspace components
│       ├── LeftSidebar.tsx   # Project navigation sidebar
│       ├── VibeChatInterface.tsx  # Vibe coding chat UI
│       └── RightSidebar.tsx  # Live preview & code view
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
└── .env.local.example        # Environment variables template
```

### ✅ Features Implemented

1. **Three-Panel Workspace Layout**
   - Left Sidebar: Project navigation and management
   - Center: Vibe coding chat interface
   - Right Sidebar: Live preview and deployment status

2. **Dark Mode Web3 Aesthetic**
   - Professional dark theme optimized for Web3
   - HSL-based color system for easy customization
   - Smooth animations with Framer Motion

3. **Vibe Coding Chat Interface**
   - Real-time message display
   - Suggested action buttons (context-aware)
   - Clean input area with keyboard shortcuts
   - Smooth animations for messages

4. **UI Components**
   - Fully typed shadcn/ui components
   - Consistent design system
   - Accessible with Radix UI primitives

## 🔧 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```

   Then edit `.env.local` and add your API keys:
   - `LLM_API_KEY`: Your LLM provider API key (OpenAI, Anthropic, etc.)
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `ALCHEMY_API_KEY`: Your Alchemy API key for RPC

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Roadmap

### ✅ Step 1: Project Initialization & UI Foundation (COMPLETED)
- ✅ Next.js 14 setup with TypeScript
- ✅ Tailwind CSS and shadcn/ui integration
- ✅ Three-panel workspace layout
- ✅ Vibe coding chat interface
- ✅ Dark mode Web3 aesthetic

### 🔄 Step 2: Database & Auth Setup (PENDING)
- Create Supabase client utilities
- Write database schema (users, projects, deployments)
- Build authentication UI (Email + Wallet Connect)
- Protect workspace routes

### 🔄 Step 3: AI Proxy (PENDING)
- Create `/api/vibe-code` endpoint
- Implement LLM proxy logic
- Write Web3-focused system prompt
- Add streaming support

### 🔄 Step 4: Web3 SDK Wrapper (PENDING)
- Create Web3 template generator
- Integrate viem/wagmi
- Add Alchemy RPC proxy
- Implement gas estimation

### 🔄 Step 5: Suggested Buttons & Business Logic (PENDING)
- Context-aware action suggestions
- Credit system implementation
- Usage tracking and limits

### 🔄 Step 6: Legal & Export (PENDING)
- Auto-generated legal documents
- Project export functionality
- Smart contract disclaimers

## 🔐 Security & White-Labeling

This platform follows strict white-labeling principles:
- All external API calls are proxied through Next.js API routes
- Users never see "Supabase", "Alchemy", or LLM provider names
- API keys are stored server-side only
- No client-side exposure of infrastructure details

## 📝 License

MIT License - See LICENSE file for details

## 🤝 Contributing

This is a production build project. Contributions are welcome once the core architecture is complete.

---

**Current Status**: Step 1 Complete ✅ | Ready for Step 2 Configuration

