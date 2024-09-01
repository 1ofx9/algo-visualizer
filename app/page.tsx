import GithubPage from "@/components/github-page";
import { ThemeToggle } from "@/components/providers/theme/theme-toggle";
import { SelectorMenu } from "@/components/selectormenu";

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
          Visualize. Learn. Master Search Algorithms.
        </h3>
        <div className="flex justify-center items-center space-x-4">
          <SelectorMenu />
          <GithubPage />
        </div>
        <div className="flex justify-center items-center gap-2 font-medium">
          <div>
            <p>Developed by: Team Cario</p>
          </div>
        </div>
      </div>
    </div>
  );
}
