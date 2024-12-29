//- Open Graph Component : Image Shows If i Share a link on Social-media

import { ImageResponse } from "next/og";

import { capitalize } from "@/lib/utils";

export const runtime = "edge";


const image = fetch(
  new URL("../../assets/images/og-bg-2.jpg", import.meta.url),
).then((res) => res.arrayBuffer());

const logo = fetch(new URL("../../app/icon.png", import.meta.url)).then((res) =>
  res.arrayBuffer(),
);

export async function GET(req: Request) {
  const imageData = await image;
  const logoData = await logo;

  const url = new URL(req.url);
  const params = Object.fromEntries(url.searchParams);
  const title = capitalize(
    (params.title || "Component-Sphere")
      .replace(/-/g, " ")
      .split(" ")
      .slice(0, 3)
      .join(" ")
      .substring(0, 20),
  );

  try {
    return new ImageResponse(
      (
        <div tw="flex justify-center flex-col relative w-full h-full items-center bg-white">
          <img
            tw="absolute inset-0 w-full h-full"
            alt={title}
            // @ts-ignore
            src={imageData}
          />
          <h1 tw="absolute inset-0 flex justify-center items-center mb-57 flex-row">
            <img
              tw="h-10 w-10"
              alt={title}
              // @ts-ignore
              src={logoData}
            />
            <span
              tw="ml-3"
              style={{
                background:
                  // "linear-gradient(180deg,rgba(240,238,249,.8) 0%,#E2E8FF 100%)",
                  "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(156, 163, 175, 1) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontSize: 35,
                letterSpacing: "-1.5px",
                ...font("Inter 700"),
              }}
            >
              Component-Sphere
            </span>
          </h1>

          {title && (
            <p
              style={{
                position: "absolute",
                whiteSpace: "pre-wrap",
                // background:
                //   "linear-gradient(180deg,rgba(240,238,249,.8) 0%,#E2E8FF 100%)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(156, 163, 175, 0.6) 100%)",
                // background:
                //   "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(156, 163, 175, 1) 100%)",

               
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                textAlign: "center",
                fontSize: 100,
                letterSpacing: "-10px",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                ...font("Inter 600"),
              }}
            >
              {title}
            </p>
          )}

          <h1 tw="absolute inset-0 flex justify-center items-center mt-57 flex-col">
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(156, 163, 175, 1) 100%)",
                // "linear-gradient(180deg,rgba(240,238,249,.8) 0%,#E2E8FF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontSize: 25,
                letterSpacing: "-1.5px",
                ...font("Inter 700"),
              }}
            >
              Simplify Development, Amplify Performance.
            </span>
          </h1>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

function font(fontFamily: string) {
  return { fontFamily };
}
