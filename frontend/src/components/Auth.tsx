import { ChangeEvent, useState } from "react";

interface SigninInput {
    email: string;
    rollNo: string;
    password: string;
    name: string;
    age: string;
    address: string;
    contact: string;
    bloodType: string;
    lastDonation: string;
    available: string;
    image: string;
}
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Auth =({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SigninInput>({
        email:"",  
        rollNo    :"",  
        password  :"", 
        name     :"",  
        age      :"",    
        address   :"", 
        contact    :"",  
        bloodType   :"",
        lastDonation :"",
        available   :"",
        image  :""

    });
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data as string;
            localStorage.setItem("token", jwt);
            navigate("/Donars");
        } catch(e) {
            alert("Error while signing up")
            // alert the user here that the request failed
        }
    }

    return <div className="h-screen flex justify-center flex-col">
    <div className="flex justify-center">
        <div>
            <div className="px-10">
                <div className="text-3xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-500">
                    {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                    <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                        {type === "signin" ? "Sign up" : "Sign in"}
                    </Link>
                </div>
            </div>
            <div className="pt-8">
                {type === "signup" ? <LabelledInput label="Name" placeholder="somasankar..." onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> : null}
                <LabelledInput label="email" placeholder="purple@gmail.com" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }} />
                <LabelledInput label="rollNo" placeholder="rollno" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        rollNo: e.target.value
                    })
                }} />
                <LabelledInput label="Password" type={"password"} placeholder="password" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
                <LabelledInput label="bloodType"  placeholder="bloodType" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        bloodType: e.target.value
                    })
                }} />
                 <LabelledInput label="address"  placeholder="address" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        address: e.target.value
                    })
                }} />
                 <LabelledInput label="age"  placeholder="age" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        age: e.target.value
                    })
                }} />
                 <LabelledInput label="lastDonation"  placeholder="lastDonation" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        lastDonation: e.target.value
                    })
                }} />
                 <LabelledInput label="contact"  placeholder="contact" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        contact: e.target.value
                    })
                }} />
                 <LabelledInput label="image"  placeholder="image" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        image: e.target.value
                    })
                }} />
                 <LabelledInput label="available"  placeholder="available" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        available: e.target.value
                    })
                }} />
                 


                <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
            </div>
        </div>
    </div>
</div>

}
interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}