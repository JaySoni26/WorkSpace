import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogIn, SquareMousePointer } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";

const CTAFont = localFont({src:"../../../public/fonts/Outfit-Regular.ttf"});

export const Navbar = ()=>{
    return (
        <div className="bg-white  w-full py-8 px-10  flex items-center ">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo/>
                <div className="flex space-x-4 items-center md:block md:w-auto justify-between w-full">
                    <Button className={cn("rounded-full",CTAFont.className)} variant="outline" size="sm">
                        <Link href='/sign-in' className="flex items-center rounded-full"><LogIn className="mr-2 w-4" />Sign in</Link>
                    </Button>
                    <Button className={cn("bg-orange hover:bg-darkOrange rounded-full px-4 hover:shadow-orange-hover",CTAFont.className)} size="sm">
                        <Link href='/sign-up'className="flex items-center"><SquareMousePointer className="w-0 " />Log in</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};