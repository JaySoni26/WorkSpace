import { Banner } from "./banner";
import { Navbar } from "./navbar";

export const Header= ()=>{
    return (
        <div className="flex-col fixed top-0">
            {/*Banner*/}
            <Banner/>
            {/*Navbar*/}
            <Navbar/>
        </div>
    );
};