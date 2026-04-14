import type React from "react";
import type { SelectOptionsType } from "@/lib/types";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";

export const Select = ({
	options,
	defaultValue,
	onChange,
	isDisabled = false,
}: {
	options: SelectOptionsType[];
	defaultValue: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	isDisabled?: boolean;
}) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<div className="inline-block relative w-48">
						<select
							disabled={isDisabled}
							onChange={onChange}
							defaultValue={defaultValue}
							className="block appearance-none h-8 w-full bg-secondary text-secondary-foreground border-border border px-4 py-1 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:ring-2 focus:ring-ring font-sans"
						>
							{options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						{/* light */}
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
							<svg
								className="fill-primary h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<title>Dropdown Arrow</title>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<p>Select Algorithm</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
