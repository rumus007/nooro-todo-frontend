import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Todo App",
  description: "Full-Stack Todo App Take-Home",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-900 text-gray-100">
        <header className="w-full bg-black/70">
          <div className="mx-auto max-w-3xl px-6 py-10 flex flex-col items-center gap-3">
            <RocketIcon className="h-8 w-8 opacity-90" />
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Todo App
            </h1>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M14 4c2.5 1 4.5 3 5.5 5.5l-3 3-4-4 1.5-4.5z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8l4 4-6 6-3-3 5-7z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="15" cy="7" r="1" fill="currentColor"/>
    </svg>
  );
}
