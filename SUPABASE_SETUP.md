# Supabase Setup Guide

This guide will help you set up Supabase for the AetherCube platform.

## Prerequisites

- A Supabase account (free tier is sufficient)
- Your AetherCube project ready

## Step 1: Create a Supabase Project

1. Go to https://supabase.com
2. Sign in or create an account
3. Click "New Project"
4. Fill in the details:
   - **Name**: AetherCube (or your preferred name)
   - **Database Password**: Choose a strong password (save this securely)
   - **Region**: Choose the region closest to your users
   - **Pricing Plan**: Free (or your preferred plan)
5. Click "Create new project"
6. Wait for the project to be initialized (this takes 1-2 minutes)

## Step 2: Get Your API Keys

1. Once your project is ready, go to **Settings** > **API**
2. Copy the following values:
   - **Project URL**: This is your `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key**: This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key**: This is your `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

## Step 3: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

## Step 4: Set Up the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy the entire contents of `supabase/schema.sql` from this repository
4. Paste it into the SQL editor
5. Click "Run" to execute the schema

This will create:
- **profiles** table: Stores user profile information
- **projects** table: Stores user projects
- Row Level Security (RLS) policies for both tables
- Indexes for performance optimization
- Triggers for automatic timestamp updates
- Function to auto-create profiles on user signup

## Step 5: Configure Authentication

1. In your Supabase dashboard, go to **Authentication** > **Providers**
2. Enable **Email** authentication (it should be enabled by default)
3. Configure the email templates (optional):
   - Go to **Authentication** > **Email Templates**
   - Customize the confirmation email, reset password email, etc.

4. Configure the Site URL:
   - Go to **Authentication** > **URL Configuration**
   - Set **Site URL** to: `http://localhost:3000` (for development)
   - For production, set it to your actual domain

5. Add Redirect URLs:
   - In **Authentication** > **URL Configuration**
   - Add the following to **Redirect URLs**:
     - `http://localhost:3000/auth/callback` (for development)
     - `https://your-domain.com/auth/callback` (for production)

## Step 6: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

3. You should see the login/signup form

4. Create a test account:
   - Enter an email and password
   - Click "Sign Up"
   - Check your email for a confirmation link
   - Click the confirmation link
   - You should be redirected to the workspace

5. Verify the database:
   - Go to **Table Editor** in Supabase
   - Check that a profile was automatically created in the `profiles` table
   - Your email should match the one you signed up with

## Step 7: Optional - Enable Additional Auth Providers

You can enable additional authentication providers:

1. Go to **Authentication** > **Providers**
2. Click on a provider (e.g., Google, GitHub)
3. Follow the instructions to configure OAuth
4. Enable the provider

## Security Best Practices

1. **Never commit your `.env.local` file** - It's already in `.gitignore`
2. **Keep your service role key secret** - Only use it server-side
3. **Use environment variables in production** - Configure them in your hosting platform
4. **Enable 2FA on your Supabase account** - Go to your account settings
5. **Regularly review RLS policies** - Ensure they're working as expected

## Troubleshooting

### Email confirmation not working?

- Check your spam folder
- Go to **Authentication** > **Providers** > **Email** and enable "Enable email confirmations"
- For development, you can disable email confirmations temporarily

### "Missing Supabase environment variables" error?

- Make sure `.env.local` exists in your project root
- Verify the environment variable names match exactly
- Restart your development server after changing `.env.local`

### Users can't sign in?

- Check the RLS policies in the SQL Editor
- Verify the auth callback URL is correct
- Check the browser console for errors

### Database query errors?

- Verify the schema was created successfully
- Check the Table Editor to see if tables exist
- Run the schema.sql again if needed

## Next Steps

Once Supabase is set up and working:

1. Test the authentication flow thoroughly
2. Verify RLS policies are working (users should only see their own data)
3. Move on to Step 3: Enterprise AI Proxy & Rate Limiting

For more information, refer to the [Supabase Documentation](https://supabase.com/docs).
