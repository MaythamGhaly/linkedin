import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');



    const getUserInformations = async () =>{

        const data = await axios.get("http://127.0.0.1:8000/get-user-information", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const user=data.data
        console.log(user.email)
        setName(user.name)
        setEmail(user.email)
        setEducation(user.informations[0].education)
        setExperience(user.informations[0].experience)
        setSkills(user.informations[0].skills)

    }
    useEffect(() => {
        getUserInformations()
    }, [])

    return (
        <>
            <div className="flex">
                <form className="flex w-1/4 flex-col items-center mt-8 gap-4 flex-wrap max-w-xs ml-6">
                    <img className="rounded-full w-24 h-24 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Q82WISxpWPp5dHBTWHypFOZbRTvc0ST0xQ&usqp=CAU"></img>
                    <h2>Welcome {name} !</h2>
                    <h2>{email}</h2>
                    <label className="font-semibold" >Education<p className="text-xs">{education}</p></label>
                    <label className="font-semibold" >Experience<p className="text-xs">{experience}</p></label>
                    <label className="font-semibold" >Skills<p className="text-xs">{skills}</p></label>
                    <input type={"submit"} value="Edit Profile" className="cursor-pointer bg-blue-600 p-2 rounded-lg text-white" />
                </form>
                <div className="w-2" >
                    <div class="left-1/2 -ml-0.5 w-0.5 h-screen bg-gray-600"></div>
                </div>
                <form className="w-1/2  border-2 mt-5">
                    <div className=" flex flex-col items-center mt-6 ">
                        <h2>company name: </h2>
                        <h2>company email: </h2>
                        <label className="font-semibold" > <p className="text-xs"> </p></label>
                    </div>
                </form>
            </div>
        </>
    )
}


export default User