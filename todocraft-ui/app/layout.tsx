import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./globals.css";
import "@mantine/core/styles.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo Craft",
  description:
    "A simple todo management app which has the ability to create projects and associate todos with them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={inter.className}>
        <ReactQueryProvider>
          <MantineProvider>{children}</MantineProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
