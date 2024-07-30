import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Link from "next/link";

const CTAFont = localFont({src:"../../../public/fonts/Outfit-Regular.ttf"});

export const Footer = ()=>{
    return (
        <div className="bg-white fixed bottom-0 w-full py-4 px-8  flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <div className={cn("text-sm text-neutral-500",CTAFont.className)}>
                    WorkSpace©
                </div>
                <div className="flex space-x-4 items-center md:block md:w-auto justify-between w-full">
                    <Button className={cn(CTAFont.className)} variant="ghost" size="sm">
                        <Link href='/Sign-in'>Privacy Policy</Link>
                    </Button>
                    <Button className={cn(CTAFont.className)} size="sm" variant="ghost">
                        <Link href='/Sign-up'>Terms & Conditions</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};