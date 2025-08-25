import type { ReactNode } from "react";
import "./globals.css";
import { RocketIcon } from "@/components/icons";

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
