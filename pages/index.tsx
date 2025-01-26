import { type NextPage } from 'next';
import Head from 'next/head';
import { Card, CardContent } from '@/components/ui/card';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Head>
        <title>Next.js Application</title>
        <meta name="description" content="Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-md mx-4">
        <Card>
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Welcome to Next.js
            </h1>
            <p className="text-sm text-muted-foreground">
              This is your new Next.js application
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Home;