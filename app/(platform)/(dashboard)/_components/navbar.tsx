import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = ()=>{
    return(
        <div className="fixed z-50 top-0 w-full bg-white flex items-center py-6 px-10  ">
            <MobileSidebar/>
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo/>
                </div>
                
                <Button size="sm" className="bg-orange hover:bg-darkOrange rounded-md block md:hidden"><Plus className="h-4 w-4"/></Button>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
            <Button
                size="sm"
                className="rounded-sm hidden md:block h-2.4rem px-4 font-normal bg-orange hover:bg-darkOrange hover:shadow-orange-hover transition-shadow duration-300 ease-in-out"
            >
                Create
</Button>

                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterSelectOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl="/select-org"
                    appearance={{
                        elements:{
                            rootBox:{
                                display:"flex",
                                height:"2.4rem",
                                justifyContent:"center",
                                alignContent:"center",
                                border: "1px solid rgba(0, 0, 0, 0.1)", // Add border property
                                borderRadius: "0.4rem",
                            }
                        }
                    }}
                />
                <UserButton
                    afterSignOutUrl="/sign-up"
                    appearance={{
                        elements:{
                            rootBox:{
                                border: "1px solid rgba(0, 0, 0, 0.1)", // Add border property
                                borderRadius: "100rem",
                                height:"2.4rem",
                                width:"2.4rem",
                                display:"flex",
                                justifyContent:"center",
                                alignContent:"center",
                            },
                            avatarBox:{
                                height:"2.3rem",
                                width:"2.3rem"
                            }
                        }
                    }}
                />
                
            </div>
        </div>
    );
};