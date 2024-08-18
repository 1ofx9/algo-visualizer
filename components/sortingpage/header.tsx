import { ThemeToggle } from "../providers/theme/theme-toggle";

export default function SortingHeader() {
  return (
    <div className="flex items-center justify-between m-5">
      <p className="font-semibold text-lg md:text-2xl">Sorting Algorithms</p>
      <ThemeToggle />
    </div>
  );
}
