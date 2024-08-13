import { SideBar } from "../_components/sidebar";

const organiztionLayout =(
    {children}:{children:React.ReactNode}
)=>{
    return(
        <main className="h-screen">
            <div className="flex  ">
                <div className="shrink-0 w-72 hidden md:block pr-6 bg-white h-screen pt-28 pl-10">
                    <SideBar/>
                </div>

                <div className="pt-28 w-full pr-10 pl-8 pb-10 bg-slate-50">
                    {children}
                </div>
                
            </div>
        </main>
    );
};

export default organiztionLayout;