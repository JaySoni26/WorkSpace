'use client';
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import {  Medal, MoveRight } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import TextReveal from "./_components/TextReveal";
import ExpandFromCenter from "./_components/expandText";
import Marquee from "@/components/ui/marquee";
import CustomButton from "./_components/customBtn";

const headingFont = localFont({src:"../../public/fonts/CLSans.otf"});
const pFont = localFont({src:"../../public/fonts/Outfit-Light.ttf"});
const CTAFont = localFont({src:"../../public/fonts/Outfit-Regular.ttf"});

const HeroWords = `WorkSpace helps teams move`

const MarketingPage = ()=>{
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn("flex items-center justify-center flex-col",headingFont.className)}>
                <div className="mb-8 flex items-center border shadow-sm p-4 rounded-full bg-amber-100 text-amber-700 uppercase">
                    <Medal className="h-6 w-6 mr-2"/>
                    No. 1 Task Management Tool
                </div>
                <TextReveal
                    classname="text-3xl md:text-6xl text-center text-navy mb-6"
                    text="Tasks, Teams, Triumphs"
                />
                <Marquee 
                    text="Work forward." 
                    textSizeClass="text-3xl md:text-6xl " // Pass the text size class here
                />
                
            </div>
            <div className={cn("text-sm md:text-xl text-navy/65 mt-12 max-w-xs md:max-w-2xl mx-auto text-center ",pFont.className)}>
                Boost productivity and streamline projects. From high rises to home offices, we adapt to your unique workflow.
            </div>
            <CustomButton 
                    text="Create WorkSpace" 
                    href="/sign-up"
                    icon={<MoveRight />}
                    className="text-orange border-orange py-3 px-6 mt-12"
                    textClassName="font-medium text-base"
                    circleClassName="bg-orange"
            />
            
        </div>
    );
}

export default MarketingPage; 