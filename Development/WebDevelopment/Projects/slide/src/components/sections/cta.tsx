import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA = () => (
  <section id="cta">
    <div className="py-16">
      <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center space-y-4 pb-6 mx-auto">
          <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
            Ready to get started?
          </h2>
          <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
            Start your free trial today.
          </h3>
        </div>
        <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <a
            className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto text-background flex gap-2"
            href="/signup"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6"
            >
              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
              <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
            </svg>
            Get started for free
          </a>
        </div>
      </div>
    </div>
  </section>
);
