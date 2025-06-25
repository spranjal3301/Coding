# ComponentSphere

ComponentSphere is a collection of reusable components that you can copy and paste into your web apps. It's designed to streamline development and promote consistency across projects.

![Demo Model](https://github.com/spranjal3301/Component-Sphere/blob/main/preview.png?raw=true)

<video autoplay loop muted playsinline>
  <source src="https://cdn.magicui.design/bento-grid.mp4" type="video/mp4">
</video>

## About

ComponentSphere provides a curated set of UI components, modules, and utilities built with Next.js, React, and Tailwind CSS. Inspired by [shadcn/ui](https://ui.shadcn.com/), [MagicUI](https://magic-ui.design/), and [Aceternity UI](https://ui.aceternity.com/), it focuses on offering high-quality, reusable solutions that adhere to modern web development practices.

## Philosophy

**I believe reusability is a cornerstone of efficient and scalable software development.** Writing the same code to create identical components in multiple projects is a significant waste of time and effort. It violates the DRY principle and introduces redundancy, increasing the likelihood of inconsistencies and maintenance overhead.

**Reusable components demonstrate that the team values efficiency and quality.** It shows thoughtful and systematic approaches to challenges across the board.

**Ultimately, adhering to DRY principles doesn't just save time; it fosters trust in engineering discipline.**

## Technical Implementation

ComponentSphere leverages several interesting techniques and technologies:

- [Next.js App Router](https://nextjs.org/docs/app) for modern React server components architecture
- [Content Collections](https://content-collections.dev/) for MDX content management
- [Tailwind CSS](https://tailwindcss.com/) with custom animations and extended theme configuration
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [TypeScript](https://www.typescriptlang.org/) for type safety and improved developer experience
- [MDX](https://mdxjs.com/) with custom rehype/remark plugins for rich documentation
- Dynamic component registry system for showcasing UI components

## Project Structure

```
ComponentSphere/
├── __registry__/              # Auto-generated component registry
├── .content-collections/      # Generated content from MDX files
├── .vscode/                   # VS Code configuration
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── (docs)/            # Documentation routes
│   │   └── (marketing)/       # Marketing pages
│   ├── components/            # React components
│   │   ├── ui/                # UI component library
│   │   └── sections/          # Page section components
│   ├── config/                # Site configuration
│   ├── content/               # MDX content files
│   │   ├── docs/              # Documentation content
│   │   └── pages/             # Static page content
│   ├── hooks/                 # React hooks
│   ├── lib/                   # Utility functions
│   ├── registry/              # Component registry source
│   │   └── default/           # Default component styles
│   │       ├── ui/            # UI component definitions
│   │       └── example/       # Component examples
│   ├── scripts/               # Build scripts
│   └── styles/                # Global styles
└── tailwind.config.ts         # Tailwind configuration
```

- `__registry__/`: Auto-generated registry that maps component names to their implementations for dynamic loading
- `src/content/`: MDX files for documentation and static pages processed by Content Collections
- `src/registry/`: Source components that are exposed in the component library for users to copy
- `src/app/(docs)/`: Documentation application routes using Next.js App Router
- `src/app/(marketing)/`: Marketing pages for the ComponentSphere website

## Notable Technologies

- [Geist Font](https://vercel.com/font) - Vercel's modern sans-serif typeface
- [Content Collections](https://content-collections.dev/) - For MDX content management and transformation
- [rehype-pretty-code](https://rehype-pretty-code.netlify.app/) - Syntax highlighting for code blocks
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate) - Animation utilities for Tailwind
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI component primitives
- [Lucide React](https://lucide.dev/) - Beautiful, consistent icon set

## Requirements

- Node.js 18 or later
- pnpm (preferred package manager)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/componentsphere.git

# Navigate to the project directory
cd componentsphere

# Install dependencies with pnpm
pnpm install

# Start the development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Contributing

We welcome contributions! Please see our [contribution guidelines](https://component-sphere.vercel.app/docs/contribution) for details on how to get started.

## License

[MIT](LICENSE)

---

