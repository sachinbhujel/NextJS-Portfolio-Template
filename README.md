# NextJS Portfolio Template

A minimal, clean portfolio template built with Next.js. Perfect for developers who want a simple yet professional online presence without the complexity.

## Features
- 🚀 Fast and lightweight
- 📱 Fully responsive
- 🔍 SEO friendly
- 🌙 Dark/Light mode
- 🎨 Clean, minimal design
- ⚡ Easy to customize
- 🚦 Next.js App Router ready
- 📊 Analytics-ready (add via `layout.js`)

## Tech Stack

- Next.js 15
- Tailwind CSS
- JavaScript
- DaisyUI

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSachinbhujel%2FNextJS-Portfolio-Template)

## Customization

Edit `src/data/data.js` to add your information:

```
export const about = {
  name: "Your Name",
  role: "Your Role",
  about: "Your bio and description...",
  email: "your.email@example.com"
};

export const forms = {
    formspreeUrl: "https://formspree.io/f/<url>",
}

export const skills = [
  { name: "Html", icon: "/html.svg" },
  { name: "React", icon: "/react.svg" }
];

export const socials = {
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername"
};

export const projects = {
  pinProjects: [
    {
      title: "Project Name",
      description: "Brief description of your project",
      tags: ["React", "CSS", "JavaScript"],
      link: "https://your-project.com"
    }
  ],
  otherProjects: [
    {
      title: "Project Name",
      description: "Brief description of your project",
      tags: ["React", "CSS", "JavaScript"],
      link: "https://your-project.com"
    }
  ]
}

export const experience = [
    {
        title: "Your Title",
        description: "Your Descriptions",
        date: "Date",
    }
];

export const blogs = [
    {
        title: "Your Blog Title",
        date: "Date",
        link: "#",
    }
];
```
