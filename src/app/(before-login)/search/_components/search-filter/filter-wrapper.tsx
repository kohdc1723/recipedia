"use client";

import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { useMediaQuery } from "usehooks-ts";

interface FilterWrapperProps {
    children: ReactNode;
    onMobile: ReactNode;
};

export default function FilterWrapper({ children, onMobile }: FilterWrapperProps) {
    const isAboveMedium = useMediaQuery("(min-width: 768px)", { initializeWithValue: false });

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const DesktopFilter = children;
    const MobileFilter = onMobile;

    if (!isMounted) {
        return (
            <div className="h-16 px-6 md:px-12 py-2 w-full gap-2 border-t shadow-lg bg-white" />
        );
    }

    return (
        <>
            {isAboveMedium ? DesktopFilter : MobileFilter}
        </>
    );
};