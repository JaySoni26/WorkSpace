"use client"
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { Settings, Layout ,Activity, CreditCard, UsersRound} from "lucide-react";
import { Button } from "@/components/ui/button";



export type Organization = {
    id:string;
    name:string;
    slug:string;
    imageUrl:string;
}

interface NavItemProps {
    isActive:boolean;
    isExpanded:boolean;
    onExpand:(id:string)=>void;
    organization:Organization;
}

export const NavItem = ({
    isActive,isExpanded,onExpand,organization
}:NavItemProps)=>{
    const router = useRouter();
    const pathname = usePathname();
    const routes = [
        {
            label:"Projects",
            icon:<Layout className="h-4 w-4 mr-2"/>,
            href:`/organization/${organization.id}`
        },
        {
            label:"Team",
            icon:<UsersRound className="h-4 w-4 mr-2"/>,
            href:`/organization/${organization.id}/team`
        },
        {
            label:"Activity",
            icon:<Activity className="h-4 w-4 mr-2"/>,
            href:`/organization/${organization.id}/activity`
        },
        {
            label:"Billings",
            icon:<CreditCard className="h-4 w-4 mr-2"/>,
            href:`/organization/${organization.id}/billings`
        },
        {
            label:"Settings",
            icon:<Settings className="h-4 w-4 mr-2"/>,
            href:`/organization/${organization.id}/settings`
        },
    ]
    const onClick = (href:string)=>{
        router.push(href);
    };
    return (
        <AccordionItem value = {organization.id} className="border-none">
            <AccordionTrigger 
                onClick={()=>onExpand(organization.id)} 
                className={cn("flex items-center gap-x-2 py-3 px-4  rounded-sm hover:bg-neutral-600/10 hover:text-neutral-900 transition text-start no-underline hover:no-underline",isActive && !isExpanded && "bg-neutral-600/10 text-neutral-900")}
            >
                <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 relative">
                        <Image
                            fill
                            src={organization.imageUrl}
                            alt="Organization"
                            className="rounded-xl object-cover"
                        />
                    </div>
                    <span className="font-medium text-sm">
                        {organization.name}
                    </span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pl-12 text-neutral-800">
                {routes.map((route)=>(
                    <Button
                        variant="ghost"
                        key={route.href}
                        onClick={()=>onClick(route.href)}
                        className={cn("w-full rounded-sm font-normal justify-start pl-6 py-5 mb-1", pathname === route.href && "bg-orange/10 text-darkOrange")}
                    >
                    {route.icon}
                    {route.label}
                </Button>
                ))}
            </AccordionContent>
        </AccordionItem>
    );
}