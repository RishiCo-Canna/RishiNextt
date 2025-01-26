import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "Test Toast",
      description: "This is a test notification",
      variant: "default",
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold">Welcome to React</h1>
        <p className="mt-4">This is your new application</p>
        <Button onClick={showToast} className="mt-4">
          Show Toast Notification
        </Button>
      </div>
    </main>
  );
}
