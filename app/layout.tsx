import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Thread Summarizer – AI Summaries of Long Discord Threads",
  description: "Automatically generate concise summaries of lengthy Discord discussions with key decisions, action items, and participant highlights."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e02b617d-6f21-41bb-b304-885c424d3653"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
