import { ReactNode } from "react";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import "./globals.css";
import ReactQueryProvider from "@/components/providers/react-query-provider";

const ubuntu = Ubuntu({
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Recipedia",
    description: "Generated by create next app",
    icons: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-32x32.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-16x16.png"
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/apple-touch-icon.png"
        }
    ]
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en">
            <body className={ubuntu.className}>
                <ReactQueryProvider>
                    {children}
                </ReactQueryProvider>
            </body>
        </html>
    );
};
