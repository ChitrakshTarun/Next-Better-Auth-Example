"use client";

import { ThemeToggleButton } from "./ThemeToggleButton";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex justify-between items-center p-4 border-b-2 border-black dark:border-white text-black dark:text-white">
      <div className="flex items-center">
        <span className="mr-4">Better Auth Example</span>
      </div>
      <div className="flex items-center">
        <ThemeToggleButton />
      </div>
    </nav>
  );
}
