import { type NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Head>
        <title>Next.js + Tina CMS</title>
        <meta name="description" content="A Next.js site with Tina CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-md mx-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Welcome to Next.js + Tina CMS
          </h1>
          <p className="text-sm text-muted-foreground">
            Edit this page in Tina CMS by going to /admin
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;