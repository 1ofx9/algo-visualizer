"use client";

import { Github } from "lucide-react";
import { Button } from "./ui/button";

export default function GithubPage() {
  return (
    <div>
      <Button>
        <span className="mr-2 font-semibold">Github</span>
        <span className="sr-only">github</span>
        <Github />
      </Button>
    </div>
  );
}
