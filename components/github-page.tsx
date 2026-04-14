"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function GithubPage() {
	return (
		<div>
			<Link href={"https://github.com/1ofx9/algo-visualizer"}>
				<Button>
					<span className="mr-2 font-semibold">Github</span>
					<span className="sr-only">github</span>
					<Github />
				</Button>
			</Link>
		</div>
	);
}
