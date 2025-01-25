import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-bold text-foreground mb-4">Welcome to RishiNext</h1>
          <p className="text-sm text-muted-foreground">
            Your new application is ready to be built.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
