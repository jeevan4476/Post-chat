import { Avatar } from "./Blogcard"

export const Appbar = () =>{
    return <div className="border-b flex justify-between px-10 py-4 w-fu">
        <div>
            <img className="h-8 w-8"src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*psYl0y9DUzZWtHzFJLIvTw.png"/>
        </div>
        <div>
            <Avatar size = {8} name= "Jeebn"/>
        </div>
    </div>
}