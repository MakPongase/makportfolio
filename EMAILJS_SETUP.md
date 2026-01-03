# EmailJS Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a **free account** (100 emails/month free)

### Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Public Key
1. Go to **Account** > **General**
2. Find **API Keys** section
3. **Copy your Public Key**

### Step 5: Configure Environment Variables
1. Create a file named `.env.local` in the root of your project
2. Add these variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs and keys
4. **Restart your Next.js dev server** (`npm run dev`)

### Step 6: Test It!
1. Fill out the contact form on your portfolio
2. Submit and check your email inbox
3. You should receive the message! 🎉

## Troubleshooting

**"EmailJS configuration is missing" error:**
- Make sure `.env.local` file exists in the root directory
- Check that all three environment variables are set
- Restart your dev server after adding/changing `.env.local`

**Emails not sending:**
- Check your EmailJS dashboard for error logs
- Verify your email service is connected properly
- Make sure your template variables match: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

**Free tier limits:**
- EmailJS free tier: 100 emails/month
- Upgrade to paid plan if you need more

## Alternative: Use Resend (More Professional)

If you want a more professional solution with better deliverability:

1. Sign up at [https://resend.com](https://resend.com)
2. Get your API key
3. I can help you set up a Next.js API route instead

Let me know if you need help with the setup!

