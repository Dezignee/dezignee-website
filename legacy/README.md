# Dezignee Website

The official website for Dezignee - Professional Email Design Editor.

## Overview

This is a simple, responsive landing page built with vanilla HTML, CSS, and JavaScript. The site is optimized for GitHub Pages deployment.

## Project Structure

```
dezignee-website/
├── index.html          # Main homepage (required for GitHub Pages)
├── README.md           # Project documentation
├── assets/
│   ├── css/
│   │   └── style.css  # Main stylesheet
│   ├── js/
│   │   └── main.js    # JavaScript for interactivity
│   └── images/        # Image assets (placeholder)
```

## Features

- ✅ Fully responsive design (mobile-first approach)
- ✅ Clean, modern UI with gradient hero section
- ✅ Smooth scrolling navigation
- ✅ Mobile-friendly hamburger menu
- ✅ SEO-friendly HTML structure
- ✅ Optimized for GitHub Pages

## Setup & Deployment

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/dezignee-website.git
   cd dezignee-website
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dezignee-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

3. **Access your site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/dezignee-website/`
   - It may take a few minutes for the site to be live

## Customization

### Colors
Edit the CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    /* ... more variables */
}
```

### Content
- Edit `index.html` to modify page content
- Update sections, text, and links as needed

### Images
- Add images to `assets/images/` folder
- Reference them in HTML: `<img src="assets/images/your-image.jpg" alt="Description">`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for use.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
