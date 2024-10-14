import { ChangeEvent, useState } from "react"
import { Link,  useNavigate } from "react-router-dom"
import { SignupType,SigninType } from "@zacks_69/common-app"
import axios from "axios"
import {BACKEND_URL} from "../config"

interface LabelinputType{
    label: string,
    placeholder : string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=> void,
    type?:string
}
export const Auth = ({type}:{type:"signup"| "signin"})=>{
    const Navigate = useNavigate();
    type variableType = SignupType | SigninType

    const [postName, setpostName] = useState<variableType>(type === "signup" ? {
    name : "",
    email : "",
    password : "",
    } : {
    email : "",
    password : ""
    })

    async function Sendrequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postName); 
            const jwt = response.data;
            localStorage.setItem("token",jwt);
            Navigate("/blogs");
        }catch(e){
            Response.json({
                message:"error while signing in"
            })
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div  className="px-10">
                    <div className="text-4xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-400">
                        {type==="signin"?"Don't have an Account" : "Already have an account?"} 
                        <Link className="pr-2 underline" to={type ==="signup"? "/Signin" : "/Signup"}>
                            {type==="signup"?"Sign in" : "Sign up"}
                        </Link>
                    </div>
                </div>
            <div>
                {type=== "signup" ? <Labelinput label="Name" placeholder="Jeevan R" onChange={(e)=>{
                    setpostName(c=>({
                        ...c,
                        name:e.target.value
                    }))
                }}/>:null}
                <Labelinput label="email" placeholder="Jeevan@gmail.com" onChange={(e)=>{
                    setpostName(c=>({
                        ...c,
                        email:e.target.value
                    }))
                }}/>
                <Labelinput  label="Password" placeholder="" type="password" onChange={(e)=>{
                    setpostName(c=>({
                        ...c,
                        password:e.target.value
                    })) 
                }}/>
                <button onClick={Sendrequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ?"Sign up":"Sign in"} </button>

        </div>
        </div>
        </div>
    </div>  
}

function Labelinput({label,placeholder,onChange,type}:LabelinputType){
    return<div>
    <label className="block mb-2 text-sm font-medium text-black pt-5">{label}</label>
    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type={type || "text"}  placeholder={placeholder} onChange={onChange} required/>
    </div> 
}