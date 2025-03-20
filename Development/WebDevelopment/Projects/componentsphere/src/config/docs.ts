import { DashboardConfig } from "@/types";



export const docsConfig: DashboardConfig = {
  mainNav: [
    // {
    //   title: "Components",
    //   href: "/components",
    // },
    // {
    //   title: "Templates",
    //   href: "https://component-sphere.vercel.app/",
    //   event: "header_cta_clicked",
    //   label: "New",
    // },
    // {
    //   title: "Showcase",
    //   href: "/showcase",
    // },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [
            {
              title: "Next.js",
              href: `/docs/installation/next`,
              items: [],
            },
            {
              title: "Vite",
              href: `/docs/installation/vite`,
              items: [],
            },
            {
              title: "Remix",
              href: `/docs/installation/remix`,
              items: [],
            },
            {
              title: "Astro",
              href: `/docs/installation/astro`,
              items: [],
            },
            {
              title: "Laravel",
              href: `/docs/installation/laravel`,
              items: [],
            },
            {
              title: "Gatsby",
              href: `/docs/installation/gatsby`,
              items: [],
            },
            {
              title: "Manual",
              href: `/docs/installation/manual`,
              items: [],
            },
          ],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
        {
          title: "Contribution",
          href: "/docs/contribution",
          items: [],
        },
      ],
    },
    {
      title: "Templates",
      items: [
        // {
        //   title: "Portfolio",
        //   href: `/docs/templates/portfolio`,
        //   items: [],
        //   label: "",
        //   event: "template_portfolio_clicked",
        // },
        {
          title: "SaaS",
          href: `/docs/templates/saas`,
          items: [],
          label: "",
          event: "template_saas_clicked",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Magic Card",
          href: `/docs/components/magic-card`,
          items: [],
        },
        {
          title: "Marquee",
          href: `/docs/components/marquee`,
          items: [],
        },
        {
          title: "Hero Video Dialog",
          href: `/docs/components/hero-video-dialog`,
          items: [],
          label: "",
        },
        {
          title: "Bento Grid",
          href: `/docs/components/bento-grid`,
          items: [],
        },
      
      ],
    },
    {
      title: "Buttons",
      items: [
        {
          title: "Rainbow Button",
          href: `/docs/components/rainbow-button`,
          items: [],
          label: "",
        },
        {
          title: "Animated Hover Button",
          href: `/docs/components/animated-hover-button`,
          items: [],
          label: "",
        },
        {
          title: "Button Collection",
          href: `/docs/components/button-collection`,
          items: [],
          label: "",
        }
      ],
    },
    {
      title: "Backgrounds",
      items: [
        {
          title: "Flickering Grid",
          href: `/docs/components/flickering-grid`,
          items: [],
          label: "",
        },
      ],
    },
  ],
};
