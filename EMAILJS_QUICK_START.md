# EmailJS Quick Start Guide

## 🚀 Step-by-Step Setup (5 minutes)

### Step 1: Sign Up for EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (free account gives you 100 emails/month)
3. Verify your email address

---

### Step 2: Get Your SERVICE ID

1. **Go to Email Services:**
   - Dashboard → **Email Services** (or visit: https://dashboard.emailjs.com/admin/integration)
   
2. **Add a Service:**
   - Click **"Add New Service"**
   - Choose **Gmail** (recommended) or your email provider
   - Follow the connection steps
   - Authorize EmailJS to send emails from your account

3. **Copy the Service ID:**
   - After creating the service, you'll see it listed
   - The **Service ID** looks like: `service_abc123xyz`
   - **Copy this value** → You'll need it for `.env.local`

---

### Step 3: Get Your TEMPLATE ID

1. **Go to Email Templates:**
   - Dashboard → **Email Templates** (or visit: https://dashboard.emailjs.com/admin/template)
   
2. **Create a New Template:**
   - Click **"Create New Template"**
   - **Template Name:** "Portfolio Contact Form"
   
3. **Set Up the Template:**
   - **To Email:** Your email address (e.g., `macmacpongs02@gmail.com`)
   - **From Name:** `{{from_name}}`
   - **From Email:** `{{from_email}}`
   - **Subject:** `{{subject}}`
   - **Content:** Copy and paste this:
   
   ```
   You received a new message from your portfolio contact form:
   
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio contact form.
   ```

4. **Save the Template:**
   - Click **"Save"**
   - The **Template ID** looks like: `template_abc123xyz`
   - **Copy this value** → You'll need it for `.env.local`

---

### Step 4: Get Your PUBLIC KEY

1. **Go to Account Settings:**
   - Dashboard → **Account** → **General** (or visit: https://dashboard.emailjs.com/admin/account/general)
   
2. **Find API Keys:**
   - Scroll down to the **"API Keys"** section
   - You'll see your **Public Key** (it's a long string of characters)
   - **Copy this value** → You'll need it for `.env.local`

---

### Step 5: Create Your .env.local File

1. **In your project root** (`makportfolio/` folder), create a file named `.env.local`

2. **Copy this template and fill in your values:**

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_actual_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_your_actual_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

**Example (with fake IDs):**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gmail123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_portfolio456
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123xyz789def456ghi
```

3. **Save the file** as `.env.local` (make sure it starts with a dot!)

---

### Step 6: Restart Your Dev Server

1. **Stop your current server** (Ctrl+C in terminal)
2. **Start it again:**
   ```bash
   npm run dev
   ```

3. **Test the form:**
   - Fill out the contact form on your portfolio
   - Submit it
   - Check your email inbox! 📧

---

## ✅ Troubleshooting

### "EmailJS configuration is missing" error:
- ✅ Make sure `.env.local` exists in the **root** of your project (same folder as `package.json`)
- ✅ Check that all three variables start with `NEXT_PUBLIC_`
- ✅ Make sure there are **no spaces** around the `=` sign
- ✅ **Restart your dev server** after creating/editing `.env.local`

### Emails not sending:
- ✅ Check EmailJS dashboard → **Logs** to see error messages
- ✅ Verify your email service is connected (green checkmark)
- ✅ Make sure template variables match: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- ✅ Check your spam folder

### Can't find the IDs:
- **Service ID:** Dashboard → Email Services → Click on your service → ID is shown at the top
- **Template ID:** Dashboard → Email Templates → Click on your template → ID is shown at the top
- **Public Key:** Dashboard → Account → General → Scroll to "API Keys"

---

## 🎉 You're Done!

Once you've filled in your `.env.local` file and restarted the server, your contact form will be fully functional!

Need help? Let me know! 🚀

