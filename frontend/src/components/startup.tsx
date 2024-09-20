import { Link } from "react-router-dom";
import { nav } from "../data";

export const Startup = ()=>{
    return (
        <header className="border-b border-black sticky top-0 z-50 ">
            <div className="size h-[70px] flex items-center justify-between ">
                <Link to={{
                    pathname:"/signin"
                }}>
                    <img className="size h-[70px] flex items-center justify-between" src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png" alt="logo"/>
                </Link>
                <div className="flex items-center gap-5">
                    <div className="hidden text-sm sm:flex items-center gap-5">
                    {nav.map((link,i)=><Link key={i} to={link.path}>{link.title}</Link>)}
                    </div>
                    <div className="relative ">
                        <Link to={"/signin"}>
                        <button className="hidden text-sm sm:flex items-center gap-5">Sign in</button>
                        </Link>
                    </div>
                    <div className="">
                    <Link
                        to={{
                            pathname:"/signin", 
                            // @ts-ignore
                            // state:{
                            //     value:true
                            // }
                        }}
                             >   
                        <button className="bg-black text-white rounded-full px-3 py-2 text-sm font-medium  ">Get started</button>
                        </Link>
                    </div> 
                </div>
            </div>
        </header>
    )
}