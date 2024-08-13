import { Navbar } from "./_components/navbar";

const dashboardLayout = (
    {children}:{children:React.ReactNode}
)=>{
    return (
        <div className="h-screen ">
            <Navbar/>
            {children}
        </div>
    );
};

export default dashboardLayout;