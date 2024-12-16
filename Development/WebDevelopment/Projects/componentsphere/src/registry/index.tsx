import { blocks } from "./registry-blocks";  
import { hooks } from "./registry-hooks";
import { themes } from "./registry-themes";
import { Registry } from "./schema"; //- schema 
import { examples } from "./registry-examples"; //- Demo component desciption
import { lib } from "./registry-lib"; //- tailwind class-merge cn()
import { ui } from "./registry-ui"; //- main component config 

export const registry: Registry = [
  ...ui,
  ...examples,
  ...blocks,
  ...lib,
  ...hooks,
  ...themes,
];
