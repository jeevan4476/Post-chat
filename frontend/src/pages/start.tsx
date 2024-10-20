import { Startup } from "../components/startup";
import { Bottom } from "../components/bottom";
import { Link } from "react-router-dom";

export const Start = () => {
return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ed]">
    <Startup />
    <main className="flex-grow flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8 md:py-16">
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
            <h1 className="font-sans font-semibold text-4xl md:text-6xl lg:text-[100px] leading-tight">
            <span className="block">Human</span>
            <span className="block">stories & ideas</span>
            </h1>
            <p className="text-lg md:text-xl max-w-md">
            A place to read, write, and deepen your understanding
            </p>
            <Link to="/signup">
            <button className="bg-black text-white rounded-full px-6 py-3 text-lg font-medium hover:bg-gray-800 transition-colors">
                Get started
            </button>
        </Link>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img
            className="h-auto w-full max-w-[460px] object-contain"
            src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
            alt="Decorative illustration"
            />
        </div>
        </main>
        <Bottom />
    </div>
);
};