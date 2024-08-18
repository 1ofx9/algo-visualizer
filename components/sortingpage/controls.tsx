"use client";

import { useSortingAlgorithmContext } from "@/context/visualizer";
import { Slider } from "./slider";
import { Select } from "./select";
import { algorithmOptions, generateAnimationArray } from "@/lib/config";
import { SortingAlgorithmType } from "@/lib/types";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Play, RotateCw } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function SortControls() {
  const {
    arrayToSort,
    setArrayToSort,
    isSorting,
    setAnimationSpeed,
    animationSpeed,
    selectedAlgorithm,
    setSelectedAlgorithm,
    requiresReset,
    resetArrayAndAnimation,
    runAnimation,
  } = useSortingAlgorithmContext();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(e.target.value as SortingAlgorithmType);
  };

  const handlePlay = () => {
    if (requiresReset) {
      resetArrayAndAnimation();
      return;
    }

    generateAnimationArray(
      selectedAlgorithm,
      isSorting,
      arrayToSort,
      runAnimation,
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputArray = event.target.value.split(",").map(Number);
    setArrayToSort(inputArray);
  };

  return (
    <main>
      <div className="flex flex-wrap gap-5 m-5 md:flex-row flex-col items-center justify-around">
        <div className=" md:w-[600px] min-w-[400px]">
          <Input
            type="text"
            placeholder="Enter numbers sperated by commas"
            onChange={handleInputChange}
          />
        </div>
        <div className="md:w-[250px]">
          <Slider
            isDisabled={isSorting}
            value={animationSpeed}
            handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Button onClick={resetArrayAndAnimation}>
            Generate Random Array
          </Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"secondary"}
                  size={"icon"}
                  onClick={handlePlay}
                >
                  {requiresReset ? <RotateCw /> : <Play />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {requiresReset ? "Reset" : "Start Sorting"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Select
            options={algorithmOptions}
            defaultValue={selectedAlgorithm}
            onChange={handleSelectChange}
            isDisabled={isSorting}
          />
        </div>
      </div>
    </main>
  );
}
