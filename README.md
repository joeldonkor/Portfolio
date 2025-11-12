# Joel Sam Donkor - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme toggle, and a clean, professional design.

## Features

- **Single-page scrolling design** with smooth navigation
- **Dark/Light theme toggle** with localStorage persistence
- **Responsive design** optimized for all devices
- **Smooth animations** powered by Framer Motion
- **Modern UI** with gradient accents and hover effects
- **SEO optimized** with proper meta tags

## Sections

1. **Hero** - Introduction with name, title, and social links
2. **About** - Personal background and expertise
3. **Skills** - Technical skills organized by category
4. **Projects** - Featured projects with live demos
5. **Experience** - Professional work history with timeline
6. **Education** - Academic background
7. **Contact** - Contact information and social media links

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles and CSS variables
├── components/
│   ├── ThemeProvider.tsx    # Theme context and toggle logic
│   ├── Navigation.tsx       # Fixed navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects section
│   ├── Experience.tsx       # Experience timeline
│   ├── Education.tsx        # Education timeline
│   └── Contact.tsx          # Contact section
├── public/                  # Static assets
└── ...config files
```

## Customization

### Updating Content

- **Personal Information**: Edit the content in individual component files
- **Projects**: Update the `projects` array in `components/Projects.tsx`
- **Skills**: Modify the `skills` array in `components/Skills.tsx`
- **Experience**: Update the `experiences` array in `components/Experience.tsx`
- **Education**: Edit the `education` array in `components/Education.tsx`

### Styling

- **Colors**: Modify CSS variables in `app/globals.css`
- **Animations**: Adjust Framer Motion configs in component files
- **Layout**: Update Tailwind classes in component files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: donkorjoel203@gmail.com
- **Phone**: (053) 708 9909
- **Location**: Ashongman, Accra, Ghana
- **GitHub**: [@joeldonkor](https://github.com/joeldonkor)
- **LinkedIn**: [Joel Donkor](https://linkedin.com/in/joeldonkor)

---

Built with ❤️ using Next.js & Tailwind CSS
