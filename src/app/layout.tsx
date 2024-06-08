import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "./_analytics/provider";

export const metadata = {
  title: "Gallery",
  description: "Generated by create t3-app by Theo on YouTube",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <NextSSRPlugin
        /**
         * The `extractRouterConfig` will extract **only** the route configs
         * from the router to prevent additional information from being
         * leaked to the client. The data passed to the client is the same
         * as if you were to fetch `/api/uploadthing` directly.
         */
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <ClerkProvider>
        <CSPostHogProvider>
          <body className="dark">
            <div className="grid-rows-[auto, 1fr] grid">
              <TopNav />
              <main className="overflow-y-scroll pt-10">{children} </main>
              {modal}
            </div>
            <Toaster />
            <div id="modal-root" />
          </body>
        </CSPostHogProvider>
      </ClerkProvider>
    </html>
  );
}
