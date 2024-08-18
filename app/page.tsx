"use client";
import SortingHeader from "@/components/sortingpage/header";
import { SortControls } from "@/components/sortingpage/controls";
import Footer from "@/components/landingpage/footer";
import { useSortingAlgorithmContext } from "@/context/visualizer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SortingPage() {
  const { arrayToSort } = useSortingAlgorithmContext();

  return (
    <main>
      <SortingHeader />
      <SortControls />
      <div>
        <div
          id="content-container"
          className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4"
        >
          <div className="flex w-screen p-5 mx-auto justify-center items-end mb-20 h-[calc(100vh-320px)] md:h-[calc(100vh-240px)] lg:h-[calc(100vh-180px)]">
            {arrayToSort.map((value, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className="array-line w-3 lg:w-5 mx-0.5 shadow-lg rounded-md bg-system-bardefault"
                      style={{ height: `${value}px` }}
                    ></div>
                  </TooltipTrigger>
                  <TooltipContent>{value}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
