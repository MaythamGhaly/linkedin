import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');
    const [posts, setPosts] = useState([]);



    const getUserInformations = async () => {

        const data = await axios.get("http://127.0.0.1:8000/get-user-information", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const user = data.data
        setName(user.name)
        setEmail(user.email)
        setEducation(user.informations[0].education)
        setExperience(user.informations[0].experience)
        setSkills(user.informations[0].skills)

    }

    const getAllPosts = async () => {

        const data = await axios.get("http://127.0.0.1:8000/get-all-posts", { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        const posts = data.data
        setPosts(posts)
        console.log(data.data)


    }

    useEffect(() => {
        getUserInformations()
        getAllPosts()
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
                <form className="w-1/2 mt-5">
                    {posts.map((post) => (
                        <div className=" flex flex-col border-2 rounded-3xl items-center mt-6 ">
                            <h2>company name: {post.name} </h2>
                            <h2>company email: {post.email}</h2>
                            {
                                post.posts.map((p , index)=>(
                                    <div className="flex flex-col border rounded-3xl m-4 p-3 w-full gap-2">
                                    <label className="font-semibold " >Job_title </label> <p className="text-xs" key={index}>{p.job_title} </p>
                                    <label className="font-semibold " >Job_descreption </label> <p className="text-xs" key={index}>{p.job_descreption} </p>
                                    <label className="font-semibold" >requirements </label> <p className="text-xs" key={index}>{p.requirements} </p>
                                    <label className="font-semibold" >specifics_of_the_job_role </label> <p className="text-xs" key={index}>{p.specifics_of_the_job_role}</p>
                                    </div>
                                ))
                            }
                            <input type={"submit"} value="Easy apply" className="cursor-pointer bg-blue-600 p-2 rounded-lg text-white" />
                        </div>
                    ))}
                </form>
            </div>
        </>
    )
}


export default User