import type { Metadata } from 'next';
import client from "../tina/__generated__/client";

export const metadata: Metadata = {
  title: 'Tina CMS + Next.js',
  description: 'A minimal starter for Tina CMS with Next.js',
};

export default async function Home() {
  const tinaData = await client.queries.page({
    relativePath: 'home.mdx',
  });

  return (
    <main>
      <div className="content">
        <h1 className="title">Welcome to Next.js + Tina CMS</h1>
        <p className="description">Your content is being managed by Tina Cloud</p>
      </div>
    </main>
  );
}