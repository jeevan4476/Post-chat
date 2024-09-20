import { Startup } from "../components/startup";

import { Bottom } from "../components/bottom";
import { Link } from "react-router-dom";

 export const  Start =  ()=>{
return <div className="bg-[#f7f4ed]">
   <Startup/>
    <div className="h-screen w-full flex justify-between">
        <div className=" ml-[160px] grid-cols-4">
            <div className="font-sans font-semibold text-[100px] col-span-2   ">
                <h2>
                Human
                </h2>
                <h2>
                stories & ideas
                </h2>
            </div>
            <div className="">
            A place to read, write, and deepen your understanding
            </div>
            <div>
                <Link to={"/signup"}>
                <button className="bg-black text-white rounded-full px-3 py-2 text-sm font-medium  ">Get started</button>
                </Link>
            </div>  
        </div>
        <div className="pt-16">
        <img className=" h-[600px] w-[460px]" src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="photo" />               
        </div>
    </div>      
    <Bottom/>
</div >
}