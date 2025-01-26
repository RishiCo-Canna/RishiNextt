import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../tina/__generated__/client";
import Link from "next/link"

export default async function Home() {
  const globalData = await client.queries.global({
    relativePath: "index.json",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl font-bold mb-8">{globalData.data.header.name}</h1>
          <div className="mt-4">
            <a 
              href="/admin" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
            >
              Open Admin Panel
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}