import { SideBar } from "../_components/sidebar";

const organiztionLayout =(
    {children}:{children:React.ReactNode}
)=>{
    return(
        <main className="pt-28 px-10 ">
            <div className="flex gap-x-8 ">
                <div className="shrink-0 w-64 hidden md:block pr-6 ">
                    <SideBar/>
                </div>
                {children}
            </div>
        </main>
    );
};

export default organiztionLayout;