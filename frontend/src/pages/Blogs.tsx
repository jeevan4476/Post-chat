import { Appbar } from "../components/Appbar"
import { Blogcard } from "../components/Blogcard"

const title="Lorem Ipsum"
const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export const Blogs =()=>{
    return <div>
            <Appbar />
            <div className=" flex justify-center relative">
                <div className="max-w-xl">
                    <Blogcard Author="Jeevan R" title={title} content={content} publishedDate="5-9-2024"/>
                    <Blogcard Author="Jeevan R" title={title} content={content} publishedDate="5-9-2024"/> 
                    <Blogcard Author="Jeevan R" title={title} content={content} publishedDate="5-9-2024"/> 
                    <Blogcard Author="Jeevan R" title={title} content={content} publishedDate="5-9-2024"/>    
                    <Blogcard Author="Jeevan R" title={title} content={content} publishedDate="5-9-2024"/>    
                    <Blogcard Author="Jeevan R" title={title} content={content} publishedDate="5-9-2024"/>    
                    <Blogcard Author="Jeevan R" title={title} content={content} publishedDate="5-9-2024"/>    
                </div>
            </div>
        </div>
}