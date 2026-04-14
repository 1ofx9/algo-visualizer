import GithubPage from "@/components/github-page";
import { ThemeToggle } from "@/components/providers/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="top-0 flex fixed items-center w-full p-6 md:ml-auto md:justify-end justify-between overflow-hidden">
        <ThemeToggle />
      </div>
      <div className="max-w-3xl space-y-4 flex items-center flex-col justify-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Algorithm Visualisation
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Visualize. Learn. Master Algorithms.
        </h3>
        <div className="flex justify-center items-center space-x-4">
          {/* <SelectorMenu /> "use this to add selector menu for multiple algorithms" */}
          <Link href="/sorting">
            <Button variant="secondary">Sorting Algorithms</Button>
          </Link>
          <GithubPage />
        </div>
      </div>
    </div>
  );
}
