import { OrganizationProfile } from "@clerk/nextjs";
const SettingsPage = ()=>{
    return (
        <div className="w-full">
            <OrganizationProfile 
                appearance={{
                    elements:{
                        rootBox:{
                            boxShadow:"none",
                            width:"100%"
                        },
                        cardBox:{
                            width:"100%",
                            height:"auto",
                            borderRadius: "0.4rem",
                            boxShadow: "none",
                            border: "0.5px solid #e5e5e5"
                        },
                        navbar: {
                            backgroundColor: "#ffffff",
                        },
                        pageScrollBox:{
                            width:"100%",
                        },
                        scrollBox:{
                            width:"100%",
                            borderRadius: "0.125rem",
                            borderLeft: "none",
                        },
                    }
                }}
            />
        </div>
    );
}

export default SettingsPage;