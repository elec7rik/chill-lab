import { Button } from "@/components/ui/button";

export default function ButtonsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
      <main className="w-full max-w-3xl bg-white dark:bg-black p-16">

        {/* vertical stack for 4 siblingss */}
        <div className="flex flex-col gap-8">

          {/* horizontal row for 3 buttons */}
          <div className="flex items-center gap-3">
            <Button variant={"default"}> horizontal </Button>
            <Button variant={"outline"}> row </Button>
            <Button variant={"destructive"}> className="flex items-center gap-3" </Button>
          </div>

          {/* vertical stack for 3 buttons */}
          <div className="flex flex-col gap-4">
            <Button variant={"outline"}> vertical </Button>
            <Button> stack of three </Button>
            <Button variant={"destructive"}> className="flex flex-col gap-4" </Button>
          </div>

          {/* centered row */}
          {/* same as horizontal row but with justify-center */}
          <div className="flex items-center justify-center gap-4">
            <Button> horizontal but with </Button>
            <Button variant={"outline"}> justify-center</Button>
            <Button variant={"destructive"}> className="flex items-center justify-center gap-4" </Button>
          </div>

          {/* spread things across space */}
          <div className="flex items-center justify-between gap-4">
            <Button> spread things across space</Button>
            <Button variant="outline">  with justify-between</Button>
          </div>

        </div>
      
      </main>
    </div>
  );
}
