import { React, useState } from "react";

const Form = () => {
    const[firstName, setfirstName] = useState("");
    const[lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subject, setSubject] = useState({
        eng: true,
        hin: false,
        other: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] =
        useState("");
    const [about, setAbout] = useState("");
    const handleSubjectChange = (sub) => {
        setSubject((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,lastName,email,contact,gender,subject,resume
        )
    }
    return(
        <div className="bg-white bg-cover bg-center min-h-screen flex justify-center items-center">
            <div className="flex flex-col items-start justify-center p-3 border border-green-300 w-1/3 rounded h-fit">
            <h1 className="text-3xl text-green-600 ml-40 mb-6 font-semibold">Form in React</h1>
            <form className="w-full">
                <div className="w-full mb-2">
                <h2 className="text-black text-opacity-90">First Name*</h2>
                <input 
                type="text" placeholder="Enter First Name" className="w-full border border-gray-400 rounded" onChange={(e) => setfirstName(e.target.value)}></input>
                </div>
                <div className="w-full mb-2">
                <h2 className="text-black text-opacity-90">Last Name*</h2>
                <input type="text" placeholder="Enter Last Name" className="w-full border border-gray-400 rounded" onChange={(e) => setlastName(e.target.value)}></input>
                </div>
                <div className="w-full mb-2">
                <h2 className="text-black text-opacity-90">Enter Email*</h2>
                <input type="email" placeholder="Enter Email" className="w-full border border-gray-400 rounded" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="w-full mb-2">
                <h2 className="text-black text-opacity-90">Contact*</h2>
                <input type="text" placeholder="Enter Mobile Number" className="w-full border border-gray-400 rounded" onChange={(e) => setContact(e.target.value)}></input>
                </div>
                <div className=" w-full mb-2">
                <h2 className="text-black text-opacity-90">Gender*</h2>
                <div className="flex flex-row w-2/3 ml-20">
                <input 
                    type="radio" name="gender" id="male" value="male" checked={gender === "male"} className="w-full border border-gray-400 rounded" onChange={(e) => setGender(e.target.value)}></input>Male
                <input 
                    type="radio" name="gender" id="female" value="female" checked={gender === "female"} className="w-full border border-gray-400 rounded" onChange={(e) => setGender(e.target.value)}></input>Female
                <input 
                    type="radio" name="gender" id="other" value="other" checked={gender === "other"} className="w-full border border-gray-400 rounded" onChange={(e) => setGender(e.target.value)}></input>Other
                </div>
                </div>
                <div className=" w-full mb-2">
                <h2 className="text-black text-opacity-90">Subject*</h2>
                <div className="flex flex-row w-2/3 ml-20">
                <input 
                    type="checkbox" name="subject" id="eng" value="eng" checked={subject.eng === true} className="w-full border border-gray-400 rounded" onChange={(e) => handleSubjectChange("eng")}></input>English
                <input 
                    type="checkbox" name="subject" id="hin" value="hin" checked={subject.hin === true} className="w-full border border-gray-400 rounded" onChange={(e) => handleSubjectChange("hin")}></input>Hindi
                <input 
                    type="checkbox" name="subject" id="other" value="other" checked={subject.other === true} className="w-full border border-gray-400 rounded" onChange={(e) => handleSubjectChange("other")}></input>Other
                </div>
                </div>
                <div className="w-full mb-2">
                <h2 className="text-black text-opacity-90">Upload Resume*</h2>
                <input type="file" name="file" placeholder="Upload Resume" className="w-full border border-gray-400 rounded p-3" onChange={(e) => setResume(e.target.files[0])}></input>
                </div>
            </form>
            <button type="submit" value = "submit" onClick={(e) => handleSubmit(e)} className="p-2 bg-blue-500 text-white mb-3 mt-3 ml-96 rounded">Submit</button>
            </div>
            
        </div>
    );
};

export default Form;