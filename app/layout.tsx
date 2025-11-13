import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LokIn",
  description: "The ultimate productivity app to help you lock in, stay focused, and crush your goals.",
  keywords: ["productivity", "focus", "time management", "distraction blocking", "pomodoro"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
