# 🎨 How to See the Preview - AetherCube

This guide will help you view the AetherCube Web3 AI Builder Platform preview in your browser.

## Quick Start (Most Common)

### Option 1: View in Your Browser (Recommended)

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   - Navigate to: **http://localhost:3000**
   - The application will automatically load

3. **You should see:**
   - **Left Sidebar**: AetherCube logo, "New Project" button, and project list
   - **Center Panel**: Vibe Coding Studio with chat interface
   - **Right Sidebar**: Preview/Code toggle with deployment status

### Option 2: Access from Remote/Network

If you're running the dev server on a remote machine or want to access it from another device on your network:

1. **Start the dev server with network access:**
   ```bash
   npm run dev
   ```

2. **Find your network address:**
   - The dev server will show both:
     - Local: `http://localhost:3000`
     - Network: `http://YOUR_IP:3000` (e.g., `http://10.1.0.61:3000`)

3. **Open the Network URL in your browser**
   - Use the network URL shown in the terminal

## What You'll See

### Main Interface Features

#### 1. Left Sidebar (Project Navigation)
- **AetherCube Logo** - Top branding
- **New Project Button** - Create new Web3 projects
- **Your Projects** - List of your saved projects (currently empty)
- **Settings Button** - Configuration options

#### 2. Center Panel (Vibe Coding Studio)
- **Welcome Message** - AI assistant introduction
- **Chat Interface** - Type what you want to build
- **Suggested Actions** - Quick-start buttons:
  - Create an ERC20 token
  - Build an NFT collection
  - Add wallet connection
  - Deploy to testnet
- **Input Field** - Describe what you want to build
- **Send Button** - Submit your prompt

#### 3. Right Sidebar (Preview & Code)
- **Preview Tab** - Shows live preview of generated code
- **Code Tab** - Shows the generated source code
- **Deployment Status** - Shows deployment information

## Troubleshooting

### Port Already in Use

If you see an error that port 3000 is already in use:

```bash
# Kill the existing process
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

Then access via `http://localhost:3001`

### Dependencies Not Installed

If you see "command not found" or similar errors:

```bash
# Install dependencies first
npm install

# Then start the dev server
npm run dev
```

### Browser Shows "Cannot Connect"

1. **Check if the server is running:**
   - Look for "Ready in XXXms" in your terminal
   - You should see "Local: http://localhost:3000"

2. **Try clearing your browser cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

3. **Try a different browser:**
   - Chrome, Firefox, Safari, or Edge should all work

### Page Shows 404 or Blank

1. **Refresh the page** - Press `F5` or `Ctrl+R`
2. **Check the terminal** for any error messages
3. **Restart the dev server:**
   ```bash
   # Stop the server (Ctrl+C)
   # Start it again
   npm run dev
   ```

## Development Features

### Hot Reload

The application supports hot module replacement (HMR):
- Make changes to any `.tsx`, `.ts`, or `.css` file
- Save the file
- The browser will automatically update without a full reload

### Dark Mode

The application uses a dark theme by default, optimized for Web3 development:
- Professional dark blue/gray color scheme
- High contrast for readability
- Smooth animations and transitions

## Next Steps

Once you can see the preview:

1. **Try the chat interface** - Type a message and click Send
2. **Click suggested buttons** - Test the quick-start actions
3. **Toggle Preview/Code** - Switch views in the right sidebar

## Current Limitations

Since this is **Step 1** of the project (UI Foundation only):
- **AI responses are simulated** - The `/api/vibe-code` endpoint hasn't been built yet (Step 3)
- **No authentication** - Supabase auth will be added in Step 2
- **No Web3 functionality** - viem/wagmi integration is planned for Step 4
- **No actual deployments** - Deployment features coming in Step 5

The current preview shows the complete UI/UX flow, with full functionality to be added in subsequent steps.

## Production Build Preview

To see how the app will look in production:

```bash
# Build the production version
npm run build

# Start the production server
npm start

# Open http://localhost:3000
```

The production build is optimized and faster than the dev build.

## Need Help?

- Check the main [README.md](README.md) for installation instructions
- Review the [.env.local.example](.env.local.example) for required environment variables
- Open an issue on GitHub if you encounter problems

---

**Happy coding with AetherCube! 🚀**
