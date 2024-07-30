import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {  Medal } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";

const headingFont = localFont({src:"../../public/fonts/CLSans.otf"});
const pFont = localFont({src:"../../public/fonts/Outfit-Light.ttf"});
const CTAFont = localFont({src:"../../public/fonts/Outfit-Regular.ttf"});

const MarketingPage = ()=>{
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn("flex items-center justify-center flex-col",headingFont.className)}>
                <div className="mb-8 flex items-center border shadow-sm p-4 rounded-full bg-amber-100 text-amber-700 uppercase">
                    <Medal className="h-6 w-6 mr-2"/>
                    No. 1 Task Management Tool
                </div>
                <h1 className="text-3xl md:text-6xl  text-center text-neutral-800 mb-6">
                    Workspace helps teams move
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 p-2 px-4 rounded-md text-white w-fit">
                    Work forward.
                </div>
            </div>
            <div className={cn("text-sm md:text-xl text-neutral-500 mt-12 max-w-xs md:max-w-2xl mx-auto text-center -tracking--0.05",pFont.className)}>
                Collaborate , manage projects & reach new productivity peaks.From High rises to Home office ,the way your team work is unique accomplish it all with workspace
            </div>
            <Button className={cn("mt-12",CTAFont.className)} size="lg" asChild>
                <Link href="/sign-up">Get Workspace for free</Link>
            </Button>
        </div>
    );
}

export default MarketingPage; 