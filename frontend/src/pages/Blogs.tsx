import { Appbar } from "../components/Appbar"
import { Blogcard } from "../components/Blogcard"

export const Blogs =()=>{
    return <div>
        <Appbar />
        <div className=" flex justify-center">
        <div className="max-w-xl">
         <Blogcard Author="Jeevan R" title="hello world" content="nothing else to say" publishedDate="5-9-2024"/>   
    </div>
        </div>
        </div>
}