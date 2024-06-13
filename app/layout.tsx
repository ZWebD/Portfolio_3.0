import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoltan | Portfolio",
  description:
    "Zoltan is a self-learned Front-end engineer with coding experience.",
  icons: {
    shortcut: { url: "/favicon.ico", type: "image/x-icon" },
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          id="blur1"
          className="bg-[#fbe2e3] absolute top-[-6rem] blur-3xl -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full  sm:w-[68.75rem] dark:bg-[#946263] overflow-visible"
        ></div>

        <div
          id="blur2"
          className="bg-[#dbd7fb] absolute top-[-1rem] blur-2xl -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full  sm:w-[68.75rem] md:left-[-33rem lg:left-[-28rem]xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] overflow-visible"
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="bottom-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
