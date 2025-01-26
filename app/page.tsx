import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'A minimal starter with Next.js',
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Next.js</h1>
        <p className="text-muted-foreground">Start building your application here</p>
      </div>
    </main>
  );
}