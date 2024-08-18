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
      <div className="relative h-[calc(100vh-66px)] w-full">
        <div
          id="content-container"
          className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4"
        >
          <div className="w-screen h-screen bottom-0 relative">
            <div className="flex w-full p-5 mx-auto bottom-[70px] justify-center items-end">
              {arrayToSort.map((value, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="array-line relative w-5 mx-0.5 bottom-[32px] shadow-lg rounded-md bg-system-bardefault"
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
      </div>
      <Footer />
    </main>
  );
}
