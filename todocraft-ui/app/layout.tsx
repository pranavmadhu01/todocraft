import type { Metadata } from "next";
import { theme } from "@/theme";
import { poppins } from "@/utils/font";
import { Notifications } from "@mantine/notifications";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import ReactQueryProvider from "@/providers/ReactQueryProvider";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

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
      <body className={poppins.className}>
        <ReactQueryProvider>
          <MantineProvider theme={theme}>
            <Notifications />
            {children}
          </MantineProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
