import { Link } from "react-router-dom";
import { Bot } from "../data";
export const Bottom = ()=>{
    return (
        <header className="border-t border-black absolute bg-[#f7f4ed] bottom-0 inset-x-0 ">
            <div className=" h-[90px] flex items-center justify-center ">
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-5 text-sm">
                    {Bot.map((link,i)=><Link key={i} to={link.path}>{link.title}</Link>)}
                    </div>
                </div>
            </div>
        </header>
    )
}