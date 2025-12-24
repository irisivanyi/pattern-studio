# Pattern Website

A modern, responsive website implementation based on Figma designs, built with Next.js and Tailwind CSS.

## Features

- **Dynamic Logo**: Large centered logo on landing that shrinks and locks to the top on scroll
- **Three-Tab Navigation**: 
  - Home icon: Main feed with image placeholders
  - Info icon: Information page with contact details
  - Message icon: Opens email client
- **Smooth Transitions**: Animated logo transitions and page switching
- **Responsive Design**: Mobile-first design optimized for iPhone screens

## Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and Tailwind imports
├── components/
│   ├── Logo.tsx        # Logo component with scroll behavior
│   ├── BottomNav.tsx   # Bottom navigation component
│   ├── HomePage.tsx    # Home page with image placeholders
│   ├── InfoPage.tsx    # Info page with contact details
│   └── BackgroundBlur.tsx # Background blur component
└── ...
```

## Notes

- The background blur image is loaded from a localhost server (Figma assets)
- Grey boxes on the home page are placeholders for images
- Email functionality opens the default email client with `mailto:contact@pattern.studio`

# pattern-studio
