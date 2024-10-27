"use client";

import React, { useRef, useState, useEffect, RefObject } from "react";
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
    pivotIndex,
  } = useSortingAlgorithmContext();

  const handleAlertClose = () => {
    const alertBox = document.getElementById("alertbox");
    if (alertBox) {
      alertBox.style.display = "none";
    }
  };

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

  const divRefs = useRef<(RefObject<HTMLDivElement> | null)[]>([]);
  const [divHeights, setDivHeights] = useState<number[]>([]);

  if (divRefs.current.length !== arrayToSort.length) {
    divRefs.current = arrayToSort.map(() => React.createRef<HTMLDivElement>());
  }

  useEffect(() => {
    const updateHeight = (index: number, height: number) => {
      setDivHeights((prevHeights) => {
        const newHeights = [...prevHeights];
        newHeights[index] = height;
        return newHeights;
      });
    };

    divRefs.current.forEach((ref, index) => {
      if (ref && ref.current) {
        updateHeight(index, ref.current.offsetHeight);

        const observer = new MutationObserver(() => {
          if (ref.current) {
            updateHeight(index, ref.current.offsetHeight);
          }
        });

        observer.observe(ref.current, {
          attributes: true,
          attributeFilter: ["style"],
          subtree: false,
        });

        return () => observer.disconnect();
      }
    });
  }, [arrayToSort]);

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
                      selectedAlgorithm.slice(1) +
                      " Sort"}
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Status:</p>
                    {arrayStatus()}
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Current Speed:</p>
                    {(() => {
                      const speed =
                        animationSpeed === 0
                          ? `Instant (${animationSpeed})`
                          : animationSpeed >= 1 && animationSpeed <= 15
                            ? `Slow (${animationSpeed})`
                            : animationSpeed >= 16 && animationSpeed <= 30
                              ? `Medium (${animationSpeed})`
                              : `Fast (${animationSpeed})`;
                      return speed;
                    })()}
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
          <div className="flex w-screen p-5 mx-auto justify-center items-end mb-20">
            {arrayToSort.map((value, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      ref={divRefs.current[index]}
                      className={`array-line w-fit lg:w-10 text-center mx-0.5 shadow-lg rounded-md ${
                        index === pivotIndex
                          ? "bar-pivot-color"
                          : "bg-system-bardefault"
                      }`}
                      style={{ height: `${value}px` }}
                    >
                      <span className="text-secondary py-1">
                        {divHeights[index] ? (
                          <p>{divHeights[index]}</p>
                        ) : (
                          "Loading..."
                        )}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    {divHeights[index] ? (
                      <p>{divHeights[index]}</p>
                    ) : (
                      "Loading..."
                    )}
                  </TooltipContent>
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
