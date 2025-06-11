"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-screen bottom-0 p-5 text-center cursor-default text-xs sm:text-sm font-medium">
      &copy; {currentYear} 1ofx9.
    </div>
  );
}
