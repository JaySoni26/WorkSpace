import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({src:"../public/fonts/CLSans.otf"});

export const Logo = ()=>{
    
    return (
        <Link href='/'>
            <div className="flex-row hover:opacity-75 transition items-start  gap-x-2 hidden md:flex">
            <Image
                src="/logo.svg"
                alt="Logo"
                height={24}
                width={24}
            />
            <p className={cn("text-lg text-neutral-700",headingFont.className)}>
                WorkSpace
            </p>
        </div>
        </Link>
    );
}