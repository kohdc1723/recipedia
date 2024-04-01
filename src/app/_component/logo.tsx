import { Oleo_Script } from "next/font/google";
import { cn } from "@/lib/utils";

const oleoScript = Oleo_Script({
    weight: ["400", "700"],
    subsets: ["latin"]
});

interface LogoProps {
    fontSize: number,
    color: string
};

export default function Logo({
    fontSize,
    color
}: LogoProps) {
    return (
        <h1
            style={{
                fontSize: fontSize,
                color: color
            }}
            className={cn(
                "w-fit",
                oleoScript.className
            )}
        >
            Recipedia
        </h1>
    );
};