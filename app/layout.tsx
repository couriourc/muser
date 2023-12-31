import "./globals.css";
import {Analytics} from "@vercel/analytics/react";
import cx from "classnames";
import {inter, sfPro} from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import {Suspense} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Muser",
    description:
        "",
    icons: ["/logo.png"],
    twitter: {
        card: "summary_large_image",
        title: "Precedent - Building blocks for your Next.js project",
        description:
            "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
        creator: "@couriourc",
    },
    metadataBase: new URL("https://muser.vercel.app"),
    themeColor: "#FFF",
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100"/>
        <Suspense fallback="...">
            {/* @ts-expect-error Server Component */}
            <Nav/>
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
            {children}
        </main>
        <Footer/>
        <Analytics/>
        </body>
        </html>
    );
}
