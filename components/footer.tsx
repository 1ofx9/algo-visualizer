"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-screen bottom-0 md:fixed p-5 text-center cursor-default text-xs sm:text-sm font-medium">
      &copy; {currentYear} Team Cario.
    </div>
  );
}
