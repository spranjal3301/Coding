import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";





const pages = defineCollection({
    name:'Pages',
    directory:'src/content/pages',
    include:'**/*.mdx',
    schema: (z) => ({
        title:z.string(),
        description:z.string()
    }),
    transform: async (document,context) =>{
        const body = await compileMDX(context, document, {
            remarkPlugins: [codeImport, remarkGfm]
        })
        //-codeImport : import code from .js file to .mdx by simple ```js file=./button.jsx
                    //- Do not have to write code in .mdx file
        //-remarkGfm : add all feature for git-hub md file have (clickble links,tables,...)

        return {
            ...document,
            slug: `/${document._meta.path}`,
            slugAsParams: document._meta.path,
            body: {
              raw: document.content,
              code: body,
            },
        };
    },
});

export default defineConfig({
    collections: [pages],
  });