

import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

const MarketingLayout = (
    {children}:{children:React.ReactNode}
)=>{
    return (
        <div className="h-full bg-white">
            {/*Navbar*/}
            <Header/>
            <main className="pt-40 pb-20 bg-white ">
                {children}
            </main>
            {/*Footer*/}
            <Footer/>
        </div>
    );
};

export default MarketingLayout;