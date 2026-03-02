# Portfolio Setup Guide

## 🔗 Update Your Links

Open `lib/config.ts` and update the following:

### 1. Social Media Links
```typescript
social: {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_PROFILE",
  twitter: "https://twitter.com/YOUR_USERNAME", // Optional
}
```

### 2. Project Links
For each project, add your GitHub repository and live demo URLs:
```typescript
projects: {
  ecommerce: {
    github: "https://github.com/YOUR_USERNAME/project-name",
    live: "https://your-demo.vercel.app",
  },
  // ... update all projects
}
```

### 3. SEO Configuration
Update these files with your actual domain:
- `app/layout.tsx` - Line with `url: 'https://yourwebsite.com'`
- `app/sitemap.ts` - Update `baseUrl`
- `app/robots.ts` - Update `baseUrl`

## 🎨 Dark/Light Mode
The theme toggle is already working! Click the sun/moon icon in the navbar.

## 📧 Email Configuration
Your contact form is configured to send emails to: `endriszeynu173@gmail.com`

## 📄 Add Your Resume
Place your resume PDF file in the `public` folder as `resume.pdf`

## 🚀 Deploy
Once you've updated all links, deploy to Vercel:
```bash
npm run build
```

## ✅ Checklist
- [ ] Update GitHub username in `lib/config.ts`
- [ ] Update LinkedIn profile in `lib/config.ts`
- [ ] Add all project GitHub repos in `lib/config.ts`
- [ ] Add all project live demo URLs in `lib/config.ts`
- [ ] Update domain in `app/layout.tsx`
- [ ] Update domain in `app/sitemap.ts`
- [ ] Update domain in `app/robots.ts`
- [ ] Add `resume.pdf` to `public` folder
- [ ] Test dark/light mode toggle
- [ ] Test contact form
