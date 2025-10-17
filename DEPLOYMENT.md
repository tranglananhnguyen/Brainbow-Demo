# 🚀 Quick Deployment Guide

## Deploy to GitHub Pages in 5 Minutes

### Step 1: Initialize Git Repository
```bash
cd /Users/matcha/Documents/GitHub/Brainbow-Demo
git init
git add .
git commit -m "Initial commit: Brainbow Book Management System"
```

### Step 2: Create GitHub Repository
1. Go to [github.com](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `Brainbow-Demo`
4. **Important:** Do NOT initialize with README (we already have one)
5. Click "Create repository"

### Step 3: Push to GitHub
Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Brainbow-Demo.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository: `https://github.com/YOUR_USERNAME/Brainbow-Demo`
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click "Save"

### Step 5: Wait and Access
- GitHub will deploy your site (usually 1-2 minutes)
- Your site will be live at: `https://YOUR_USERNAME.github.io/Brainbow-Demo/`
- Copy this URL and share it with your tutor!

---

## 🎉 Your Live URL

Once deployed, your website will be accessible at:

```
https://YOUR_USERNAME.github.io/Brainbow-Demo/
```

### Example Pages:
- Homepage: `https://YOUR_USERNAME.github.io/Brainbow-Demo/`
- Login: `https://YOUR_USERNAME.github.io/Brainbow-Demo/login.html`
- Executive Dashboard: `https://YOUR_USERNAME.github.io/Brainbow-Demo/executive-dashboard.html`

---

## 🔧 Making Updates

After deployment, to update your website:

```bash
# Make your changes to the files
git add .
git commit -m "Description of your changes"
git push

# GitHub Pages will automatically redeploy (1-2 minutes)
```

---

## ✅ Verification Checklist

Before sharing with your tutor, verify:

- [ ] Homepage loads correctly
- [ ] Navigation works on all pages
- [ ] Login page redirects to portals
- [ ] All portal pages are accessible
- [ ] Responsive design works on mobile
- [ ] No broken links or images
- [ ] Colors and fonts display correctly

---

## 🆘 Troubleshooting

### Site not loading?
1. Check Settings → Pages to ensure it says "Your site is live at..."
2. Wait 2-3 minutes and refresh
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### 404 Error?
1. Ensure you selected `main` branch and `/ (root)` folder
2. Check that `index.html` exists in the root directory
3. Repository name must match URL path

### Styles not loading?
1. Check that `styles.css` is in the root directory
2. Verify all HTML files link to `styles.css` correctly
3. Clear browser cache

---

## 📱 Test on Multiple Devices

Share your URL and test on:
- Desktop browser (Chrome, Firefox, Safari, Edge)
- Mobile phone browser
- Tablet browser

---

## 📋 For Your Tutor

**Website URL:** `https://YOUR_USERNAME.github.io/Brainbow-Demo/`

**Test Credentials:** 
- Any email and password (this is a prototype)
- Select role from dropdown to access different portals

**Available Portals:**
1. Executive Dashboard - Strategic overview
2. Franchise Manager - Store operations
3. Store Staff - Daily operations
4. Warehouse Portal - Inventory management
5. Author Portal - Event and sales tracking
6. Publishing Portal - Manuscript workflow

**Note:** This is a prototype. All data is simulated for demonstration purposes.

---

**Good luck with your presentation! 🌈**


