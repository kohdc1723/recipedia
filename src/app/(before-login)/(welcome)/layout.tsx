import { ReactNode } from "react";

import Footer from "@/app/_component/footer";
import Header from "@/app/_component/header";

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