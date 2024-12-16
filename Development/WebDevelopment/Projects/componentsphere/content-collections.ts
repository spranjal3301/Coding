import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { visit } from "unist-util-visit";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { createHighlighter } from "shiki";

import { rehypeNpmCommand } from "@/lib/rehype-npm-command";
import { rehypeComponent } from "@/lib/rehype-component";

const prettyCodeOptions: Options = {
    theme: "github-dark",
    getHighlighter: (options) =>
      createHighlighter({
        ...options,
      }),
    onVisitLine(node) {
      // Prevent lines from collapsing in `display: grid` mode, and allow empty
      // lines to be copy/pasted
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }];
      }
    },
    onVisitHighlightedLine(node) {
      if (!node.properties.className) {
        node.properties.className = [];
      }
      node.properties.className.push("line--highlighted");
    },
    onVisitHighlightedChars(node) {
      if (!node.properties.className) {
        node.properties.className = [];
      }
      node.properties.className = ["word--highlighted"];
    },
  };


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

const documents = defineCollection({
    name:"Doc",
    directory:"src/content",
    include: "**/*.mdx",
    schema: (z) => ({
        title: z.string(),
        description: z.string(),
        published: z.boolean().default(true),
        date: z.string().optional(),
        links: z
          .object({
            doc: z.string().optional(),
            api: z.string().optional(),
          })
          .optional(),
        featured: z.boolean().optional().default(false),
        component: z.boolean().optional().default(false),
        toc: z.boolean().optional().default(true),
        image: z.string().optional(),
      }),
      transform: async (document, context) => {
        const body = await compileMDX(context, document, 
          {
          remarkPlugins: [codeImport, remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            rehypeComponent,
            () => (tree) => {
              visit(tree, (node) => {
                if (node?.type === "element" && node?.tagName === "pre") {
                  const [codeEl] = node.children;
                  if (codeEl.tagName !== "code") {
                    return;
                  }
                  if (codeEl.data?.meta) {
                    // Extract event from meta and pass it down the tree.
                    const regex = /event="([^"]*)"/;
                    const match = codeEl.data?.meta.match(regex);
                    if (match) {
                      node.__event__ = match ? match[1] : null;
                      codeEl.data.meta = codeEl.data.meta.replace(regex, "");
                    }
                  }
                  node.__rawString__ = codeEl.children?.[0].value;
                  node.__src__ = node.properties?.__src__;
                  node.__style__ = node.properties?.__style__;
                }
              });
            },
            [rehypePrettyCode, prettyCodeOptions],
            () => (tree) => {
              visit(tree, (node) => {
                if (node?.type === "element" && node?.tagName === "figure") {
                  if (!("data-rehype-pretty-code-figure" in node.properties)) {
                    return;
                  }
    
                  const preElement = node.children.at(-1);
                  if (preElement.tagName !== "pre") {
                    return;
                  }
    
                  preElement.properties["__withMeta__"] =
                    node.children.at(0).tagName === "div";
                  preElement.properties["__rawString__"] = node.__rawString__;
    
                  if (node.__src__) {
                    preElement.properties["__src__"] = node.__src__;
                  }
    
                  if (node.__event__) {
                    preElement.properties["__event__"] = node.__event__;
                  }
    
                  if (node.__style__) {
                    preElement.properties["__style__"] = node.__style__;
                  }
                }
              });
            },
            rehypeNpmCommand,
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ["subheading-anchor"],
                  ariaLabel: "Link to section",
                },
              },
            ],
          ],
        });
        // console.log("-----------------")
        // console.log(document._meta.path.split("/").slice(1).join("/"));
        // console.log("-----------------")
        return {
          ...document,
          image: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURI(document.title)}`,
          slug: `/${document._meta.path}`,
          slugAsParams: document._meta.path.split("/").slice(1).join("/"),
          body: {
            raw: document.content,
            code: body,
          },
        };
      },
})



export default defineConfig({
    collections: [documents,pages],
  });