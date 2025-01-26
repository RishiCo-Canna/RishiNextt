import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Welcome to React Vite App
          </h1>
          <p className="text-sm text-muted-foreground">
            This is your new React application running with Vite and Express
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
