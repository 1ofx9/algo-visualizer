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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function SortingPage() {
  const {
    arrayToSort,
    isSorting,
    selectedAlgorithm,
    isAnimationComplete,
    animationSpeed,
    unsortedArray,
    requiresReset,
  } = useSortingAlgorithmContext();

  const handleAlertClose = () => {
    const alertBox = document.getElementById("alertbox");
    if (alertBox) {
      alertBox.style.display = "none";
    }
  };

  // const sortedArray = arrayToSort.toSorted((a, b) => a - b).join(",");

  function arrayStatus() {
    if (isSorting) {
      return " Sorting...";
    } else if (isAnimationComplete) {
      return " Sorting Completed!";
    } else {
      return " Array is not Sorted";
    }
  }

  function isarraysorted() {
    if (isSorting) {
      return " Please wait... :)";
    } else {
      return <span>{arrayString}</span>;
    }
  }

  const arrayString = ["[ " + arrayToSort.join(" ,") + " ]"];
  const unsortedArrayString = ["[ " + unsortedArray.join(" ,") + " ]"];

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
        <div id="array-display-container">
          <div className="w-screen-sm m-5 p-5">
            <Card>
              <CardHeader></CardHeader>
              <CardContent>
                <div className="flex flex-col">
                  <div className="flex gap-1">
                    <p className="font-semibold">Algorithm:</p>
                    {selectedAlgorithm.charAt(0).toUpperCase() +
                      selectedAlgorithm.slice(1)}
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Status:</p>
                    {arrayStatus()}
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Current Speed:</p>
                    {animationSpeed}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">Given Array:</h3>
                    <p>
                      {isAnimationComplete ? (
                        <span>{unsortedArrayString}</span>
                      ) : (
                        <span>{arrayString}</span>
                      )}
                    </p>
                    <h3 className="font-semibold">Sorted Array:</h3>
                    <p>
                      {requiresReset
                        ? isarraysorted()
                        : "Please start the algorithm to get the sorted array."}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
        <div
          id="content-container"
          className="flex max-w-screen-sm w-full flex-col lg:px-0 px-4 bottom-5"
        >
          <div className="flex w-screen p-5 mx-auto justify-center items-end mb-20 ">
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
