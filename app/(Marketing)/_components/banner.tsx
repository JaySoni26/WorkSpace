import { BadgePercent } from "lucide-react";


export const Banner = ()=>{
    return <div className="w-screen gap-x-2 flex items-center  justify-center p-3  text-black mx-auto bg-[linear-gradient(to_right,#FCD6FF70,#29D8FF70,#FFFD8070,#F89ABF70,#FCD6FF70)]">
        <BadgePercent className=" size-4 md:size-6 "strokeWidth={1.5}/>
        <a href="/" className="text-sm md:text-base underline underline-offset-4 font-medium">Early bird sale : 50% of on individual Plan</a>
</div>
};