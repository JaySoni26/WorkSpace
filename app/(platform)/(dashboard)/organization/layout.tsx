import { SideBar } from "../_components/sidebar";

const organiztionLayout =(
    {children}:{children:React.ReactNode}
)=>{
    return(
        <main className="h-screen">
            <div className="flex  ">
                <div className="shrink-0 w-72 hidden md:block pr-6 bg-white h-screen pt-28 pl-10 relative">
                    <div className="absolute inset-y-0 right-0 w-[0.4px] pointer-events-none border-transparent bg-gradient-to-b from-[#FFFFFF] via-[#00000050] via-[#00000050]to-[#FFFFFFFF] bg-[length:100%_100%] bg-no-repeat bg-[0%_30%]"></div>
                    <SideBar/>
                </div>

                <div className="pt-28 w-full pr-10 pl-8 ">
                    {children}
                </div>
                
            </div>
        </main>
    );
};

export default organiztionLayout;