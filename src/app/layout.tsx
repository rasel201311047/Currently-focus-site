import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Currently Focus — Split any subject into focused time blocks",
  description:
    "Currently Focus turns a big subject into small, timed blocks so studying feels doable. Sync Google Classroom, split topics with AI or by hand, and focus with a built-in stopwatch.",
  metadataBase: new URL("https://www.currentlyfocus.app"),
  openGraph: {
    title: "Currently Focus",
    description:
      "Split any subject into focused time blocks. Built for students.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="relative flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
