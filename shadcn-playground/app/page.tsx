import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
      <main className="w-full max-w-3xl bg-white dark:bg-black p-16">
        <div className="flex flex-col gap-6">
          
          <h1 className="text-3xl font-semibold">
            Shadcn playground
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400">
            Exploring layout, spacing, and composition using shadcn components.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400">
            Buttons done and moved to buttons/page.tsx
          </p>

          <Button>
            Add card
          </Button>

        </div>
      </main>
    </div>
  );
}
