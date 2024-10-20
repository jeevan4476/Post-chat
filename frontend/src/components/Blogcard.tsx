
interface BlogCardProps{
    Author : string,
    title : string,
    content:string,
    publishedDate:string;
}

export function Avatar({name,size=4}:{name:string,size?:number}){
    return <div className={`relative inline-flex items-center justify-center w-${size}  h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className="font-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
    
}

export const Blogcard  = ({
    Author,
    title,
    content,
    publishedDate
}:BlogCardProps)=>{

    return <div>
                <div className="border-b-2 border-slate-500 border-opacity-5 pb-4">
                    <div className="flex">
                        <div className="flex justify-center flex-col">
                            <Avatar name={Author}/>
                        </div>
                        <div className="font-extralight pr-2">
                            {Author}
                        </div>  
                        <span>&#183;</span> 
                        <div className=" pl-2 font-thin text-slate-500">
                            {publishedDate}
                        </div>
                    </div>
                <div className="text-xl font-semibold pt-2">
                {title}
            </div>
    <div className="text-md font-thin">
        {content.slice(0,100)+"..."}
    </div>
    <div className="text-slate-400 text-sm font-thin pt-4">
        {` ${Math.ceil(content.length/100)} minute(s) read `}
    </div>
    </div>
    </div>
    
    
}

