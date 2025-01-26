import type { Metadata } from 'next';
import client from "../tina/__generated__/client";
import Layout from "@/components/layout/layout";

export const metadata: Metadata = {
  title: 'Tina CMS + Next.js',
  description: 'A minimal starter for Tina CMS with Next.js',
};

export default async function Home() {
  // Query content directly from Tina Cloud
  const tinaData = await client.queries.page({
    relativePath: 'home.mdx',
  });

  return (
    <Layout rawPageData={tinaData}>
      <main className="container mx-auto px-4">
        <div className="content text-center py-20">
          <h1 className="title text-4xl font-bold mb-4">Welcome to Next.js + Tina CMS</h1>
          <p className="description text-xl text-gray-600">Your content is being managed by Tina Cloud</p>
        </div>
      </main>
    </Layout>
  );
}