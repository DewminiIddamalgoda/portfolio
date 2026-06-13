# Nethma Iddamalgoda Portfolio Website

A complete React + Vite portfolio website for Nethma Iddamalgoda. It includes a modern hero section, about section, education timeline, technical skills, soft skills, project showcase with filters, career interests, services, CV download, contact form UI, footer, loading animation, and scroll-to-top button.

## Tech Stack

- React.js
- Vite
- Framer Motion
- React Icons
- Custom responsive CSS

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Build for Production

```bash
npm run build
```

The production files will be created in the `dist` folder.

## Deploy to Vercel

1. Upload this folder to GitHub.
2. Go to Vercel and import the repository.
3. Use these settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click Deploy.

## Update CV

The CV download button points to:

```txt
/public/Nethma-Iddamalgoda-CV.pdf
```

Replace this file with the latest CV using the same filename, or update the `cv` value in `src/App.jsx`.

## Update Links

Open `src/App.jsx` and update these fields:

```js
github: '#',
linkedin: '#'
```

You can also update project GitHub and live demo links inside the `projects` section.

## Contact Form Note

The current contact form shows a success message in the UI. To receive real emails, connect it later with Formspree, EmailJS, Netlify Forms, or your own backend API.
