import { AnimatedHoverButton } from "@/registry/default/ui/animated-hover-button";
import { LogInIcon } from "lucide-react";

export default function AnimatedHoverButtonDemo() {
  return (
      <AnimatedHoverButton icon={ <LogInIcon size={20} className="text-black"/>}>
        Login
      </AnimatedHoverButton>
  );
}
