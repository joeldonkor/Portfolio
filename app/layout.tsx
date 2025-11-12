import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Joel Sam Donkor | Full-Stack Developer",
  description: "Full-stack developer specializing in modern web technologies and open-source development. Passionate about building scalable applications with Next.js.",
  keywords: ["Joel Sam Donkor", "Software Engineer", "Full-stack Developer", "Next.js", "React", "Node.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
