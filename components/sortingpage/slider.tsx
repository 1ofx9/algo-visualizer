import { MAX_ANIMATION_SPEED, MIN_ANIMATION_SPEED } from "@/lib/config";
import { Input } from "../ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useSortingAlgorithmContext } from "@/context/visualizer";

export const Slider = ({
  min = MIN_ANIMATION_SPEED,
  max = MAX_ANIMATION_SPEED,
  step = 1,
  value,
  handleChange,
  isDisabled = false,
}: {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
}) => {
  const { animationSpeed } = useSortingAlgorithmContext();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex gap-2 items-center justify-center">
            <span className="sr-only">speed controls</span>
            <span>Speed:</span>
            <Input
              disabled={isDisabled}
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={(e) => handleChange(e)}
              className="w-full h-2 rounded-md appearance-none cursor-pointer bg-gray-700"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Current Speed: {animationSpeed}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
