import { ReactNode } from "react";

import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";

export default function WelcomeLayout({
    children
}: {
    children: ReactNode
}) {
    return (
        <>
            <Header />

            {children}

            <Footer />
        </>
    );
};