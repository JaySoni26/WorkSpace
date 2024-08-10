"use client";

import Link from "next/link";
import { Expand, Plus } from "lucide-react";
import { useOrganizationList , useOrganization} from "@clerk/nextjs";
import { useLocalStorage } from "usehooks-ts";

import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { NavItem , Organization} from "./NavItem";

import {
    Activity,Settings,CreditCard,Layout
} from 'lucide-react'

interface SidebarProps{
    storageKey?:string;
};

export const SideBar =(
    {storageKey="w-sidebar-state"}:SidebarProps
)=>{
    const [expanded,setExpanded]=useLocalStorage<Record<string,any>>(storageKey,{});
    const {
        organization:activeOrganization,
        isLoaded:isLoadedOrg
    }= useOrganization();

    const{
        userMemberships,
        isLoaded:isLoadedOrgList
    }=useOrganizationList({
        userMemberships:{
            infinite:true
        }
    });
    const defaultAccordionValue:string[]=Object.keys(expanded)
        .reduce((acc:string[],key:string)=>{
            if(expanded[key]){
                acc.push(key);
            }
            return acc;
        },[]);

    const onExpand = (id:string)=>{
        setExpanded((curr)=>({
            ...curr,
            [id]:!expanded[id],
        }))
    };
    if(!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading){
        return (
            <>
                <Skeleton/>
            </>
        );
    }
    return (
        <>
            <div className="font-normal text-xs flex items-center mb-4 text-neutral-500 ">
                <span className="">WORKSPACES</span>
                <Button
                    asChild
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="ml-auto"
                >
                    <Link href="/select-org">
                        <Plus className="h-4 w-4"></Plus>
                    </Link>
                </Button>
            </div>
            <Accordion
                type="multiple"
                defaultValue={defaultAccordionValue}
                className="space-y-2"
            >
                {userMemberships.data.map(({organization})=>(
                    <NavItem
                        key={organization.id}
                        isActive = {activeOrganization?.id===organization.id}
                        isExpanded = {expanded[organization.id]}
                        organization ={organization as unknown as Organization}
                        onExpand={onExpand}
                    />
                ))}
            </Accordion>
        </>
    );
};