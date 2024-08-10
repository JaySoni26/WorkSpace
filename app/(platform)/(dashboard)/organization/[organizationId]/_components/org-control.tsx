"use client"
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

export const OrgControl = ()=>{
    const Params = useParams();
    const {setActive} = useOrganizationList();
    useEffect(()=>{
        if(!setActive)return;
        setActive({
            organization:Params.organizationId as string,
        });
    },[setActive,Params.organizationId]);
    return null;
};
