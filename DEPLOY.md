# GitHub Pages Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name it: `dezignee-website`
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

## Step 2: Push to GitHub

Run these commands in the `dezignee-website` directory:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/dezignee-website.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/dezignee-website`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

## Step 4: Access Your Site

- Your site will be live at: `https://YOUR_USERNAME.github.io/dezignee-website/`
- It may take 1-2 minutes for the site to be available after enabling Pages
- You can check the deployment status in the **Actions** tab

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

GitHub Pages will automatically rebuild and deploy your changes (usually within 1-2 minutes).


