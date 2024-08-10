"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SideBar } from "./sidebar";

 

export const MobileSidebar = ()=>{
    const pathname = usePathname();
    const [isMounted,setIsMounted] = useState(false);
    const onOpen = useMobileSidebar((state)=>state.onOpen);
    const onClose = useMobileSidebar((state)=>state.onClose);
    const isOpen = useMobileSidebar((state)=>state.isOpen);

    useEffect(()=>{
        setIsMounted(true);
    },[]);
    useEffect(()=>{
        onClose();
    },[pathname,onClose]);

    if(!isMounted){
        return null;
    }

    return (
        <>
            <Button
                onClick={onOpen}
                className="block md:hidden mr-2 rounded-md bg-orange/15"
                variant="secondary"
                size="sm"
            >
                <Menu className="h-4 w-4 text-darkOrange"></Menu>

            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent
                    side="left"
                    className="py-10 px-6"
                >
                    
                    <SideBar
                        storageKey="t-sidebar-mobile-state"
                    />
                </SheetContent>
            </Sheet>
        </>
    );
};