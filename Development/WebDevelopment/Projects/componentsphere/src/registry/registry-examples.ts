import { Registry } from "@/registry/schema";

export const examples: Registry = [
  {
    name: "magic-card-demo",
    type: "registry:example",
    registryDependencies: ["magic-card"],
    files: ["example/magic-card-demo.tsx"],
  },
  {
    name: "flickering-grid-demo",
    type: "registry:example",
    files: ["example/flickering-grid-demo.tsx"],
  },
  {
    name: "rainbow-button-demo",
    type: "registry:example",
    files: ["example/rainbow-button-demo.tsx"],
  },
  
];


//-Exmaple 
// {
//   name: "bento-demo",
//   type: "registry:example",
//   registryDependencies: [
//     "bento-grid",
//     "marquee",
//     "animated-list-demo",
//     "animated-beam-multiple-outputs",
//     "shadcn:command",
//     "shadcn:calendar",
//   ],
//   dependencies: ["@radix-ui/react-icons"],
//   files: ["example/bento-demo.tsx"],
// },


//- Bento-demo.tsx
// import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
// import { BellIcon, Share2Icon } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Calendar } from "@/components/ui/calendar";
// import AnimatedBeamMultipleOutputDemo from "@/registry/default/example/animated-beam-multiple-outputs";
// import AnimatedListDemo from "@/registry/default/example/animated-list-demo";
// import { BentoCard, BentoGrid } from "@/registry/default/magicui/bento-grid";
// import Marquee from "@/registry/default/magicui/marquee";


// ..........................