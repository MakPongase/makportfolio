# 🚀 Deployment Guide - MakPortfolio

## Option 1: Vercel (Recommended - Easiest!)

### Why Vercel?
- ✅ Made by Next.js creators
- ✅ Zero-config deployment
- ✅ Free tier (perfect for portfolios)
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Automatic deployments from Git

### Steps to Deploy:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/makportfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click **"Add New Project"**
   - Import your `makportfolio` repository
   - Vercel will auto-detect Next.js settings
   - Click **"Deploy"**

3. **Add Environment Variables:**
   - In Vercel dashboard → Your Project → **Settings** → **Environment Variables**
   - Add these three variables:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_r98dkhi
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=N8UMizHhtajsr28zZ
     ```
   - Click **"Save"**
   - Redeploy (Vercel will auto-redeploy)

4. **Done!** 🎉
   - Your site will be live at: `your-project-name.vercel.app`
   - You can add a custom domain later

---

## Option 2: Netlify (Alternative)

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [https://netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click **"Add new site"** → **"Import an existing project"**
   - Select your repository
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
   - Click **"Deploy site"**

3. **Add Environment Variables:**
   - Site settings → **Environment variables**
   - Add the same three EmailJS variables
   - Trigger a new deploy

---

## Option 3: GitHub Pages (Free but more setup)

Requires additional configuration. Not recommended for Next.js unless you need GitHub Pages specifically.

---

## ⚠️ Important Before Deploying:

### 1. Create `.gitignore` (if not exists):
Make sure `.env.local` is in `.gitignore` so you don't commit secrets!

### 2. Test Build Locally:
```bash
npm run build
npm start
```
Make sure it builds without errors!

### 3. Environment Variables:
Remember to add your EmailJS variables in the deployment platform's settings (NOT in the code).

### 4. Image Optimization:
All images in `/public` folder will be deployed automatically.

---

## 🎯 Recommended: Vercel

**Why?** It's literally made for Next.js. One-click deployment, automatic optimizations, and it's FREE!

**Time to deploy:** ~5 minutes

**Your live URL:** `makportfolio.vercel.app` (or custom domain)

---

## 📝 Post-Deployment Checklist:

- [ ] Test contact form works
- [ ] All images load correctly
- [ ] All links work
- [ ] Mobile responsive check
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)

---

## 🆘 Need Help?

If you run into issues:
1. Check build logs in Vercel/Netlify dashboard
2. Make sure all environment variables are set
3. Test locally first with `npm run build`

**Ready to deploy? Let's go!** 🚀

