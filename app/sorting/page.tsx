"use client";
import SortingHeader from "@/components/sortingpage/header";
import { SortControls } from "@/components/sortingpage/controls";
import Footer from "@/components/footer";
import { useSortingAlgorithmContext } from "@/context/visualizer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { X } from "lucide-react";

export default function SortingPage() {
  const { arrayToSort } = useSortingAlgorithmContext();

  const handleAlertClose = () => {
    const alertBox = document.getElementById("alertbox");
    if (alertBox) {
      alertBox.style.display = "none";
    }
  };

  return (
    <main>
      <SortingHeader />
      <SortControls />
      <div>
        <Alert
          className="relative block md:hidden w-[90%] mx-5"
          variant="destructive"
          id="alertbox"
        >
          <AlertTitle className="flex items-center justify-between py-2">
            <span className="font-semibold">Important!!!</span>
            <X width={20} height={20} onClick={handleAlertClose} />
          </AlertTitle>
          <AlertDescription>
            <p className="">
              Devices with smaller screens still needs some optimization. Please
              use a desktop browser for the better experience.
            </p>
          </AlertDescription>
        </Alert>
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
