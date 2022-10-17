import { useState } from "react";
import axios from "axios";

const Register = (onRegister) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setUser_type] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !name || !user_type) {
            alert("fill all the informations");
            return
        }

        const url = `http://127.0.0.1:8000/auth/signup`
        const data = {
            name: name,
            email: email,
            password: password,
            type: user_type
        }
        const response = await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } })
            .then(function (response) {
                window.location.href = 'http://localhost:3000/login'
                return
            })
            .catch(function (error) {
                alert(error)
            });
    }

    return (
        <>
            <form onSubmit={onSubmit} >
                <div className="flex flex-col justify-center items-center h-screen ">
                    <div className="flex flex-col justify-center items-center block rounded-lg shadow-lg w-1/3 gap-4 py-10">
                        <h1 className="font-bold m-2">Register</h1>
                        <input
                            className="border rounded-lg w-2/3 h-9"
                            type="text"
                            placeholder="Enter a name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="border rounded-lg w-2/3 h-9"
                            type="text"
                            placeholder="Enter a email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="border rounded-lg w-2/3 h-9"
                            type="text"
                            placeholder="Enter a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <select onChange={(e) => setUser_type(e.target.value)} className="border">
                            <option value='value'> Choose account type </option>
                            <option key="User" value="User">
                                User account
                            </option>
                            <option key="Company" value="Company">
                                Company account
                            </option>
                        </select>
                        <input type={"submit"} value="Register" className="cursor-pointer bg-blue-600 p-2 rounded-lg text-white" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register
