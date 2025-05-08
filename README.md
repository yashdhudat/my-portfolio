# Modern Portfolio Website

A modern, animated personal portfolio website built with Next.js, TailwindCSS, and Framer Motion. This website showcases a developer's skills, experience, projects, and contact information.

![Portfolio Preview](preview.png)

## Features

- **Responsive Design**: Works perfectly on all device sizes
- **Modern UI**: Clean and professional design with animations
- **Dark/Light Mode**: Theme switching functionality 
- **Smooth Scrolling**: Navigation with smooth scrolling to sections
- **Animated Components**: Beautiful animations using Framer Motion
- **Contact Form**: Interactive contact form with validation
- **Project Showcase**: Interactive project cards with modal details
- **Performance Optimized**: Fast loading and rendering

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **React Scroll**: Smooth scrolling functionality
- **React Intersection Observer**: Trigger animations on scroll

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Navigate to the project directory:
```bash
cd portfolio-website
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio-site/
├── public/           # Static files
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   ├── data/         # Resume and content data
│   ├── styles/       # Global styles
│   ├── hooks/        # Custom React hooks
│   └── utils/        # Utility functions
├── tailwind.config.js # Tailwind configuration
└── package.json      # Project dependencies
```

## Customization

1. Update your personal information in `src/data/resume.ts`
2. Add your profile picture to `public/profile.png`
3. Add your resume PDF to `public/YourName_Resume.pdf`
4. Add project images to `public/projects/`
5. Customize colors and styling in `tailwind.config.js` and `src/app/globals.css`

## Deployment

The easiest way to deploy your Next.js app is using [Vercel](https://vercel.com/), the platform from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by [Safet Pojskic's portfolio](https://safetpojskic.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
