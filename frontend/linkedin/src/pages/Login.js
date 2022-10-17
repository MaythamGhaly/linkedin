import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("email or password incorrect")
            return
        }
        let url = `http://127.0.0.1:8000/auth/login`
        const data = {
            email: email,
            password: password
        }
        const response = await axios.post(url, data)
            .catch(function () {
                alert("incorrect email or password")
                return
            });
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", response.data.user._id)
        // componenet locations
        if (response.data.user.type == "Company") {
            window.location.href = 'http://localhost:3000/Company'
        } else if (response.data.user.type == "User") {
            window.location.href = 'http://localhost:3000/User'
        }
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <form onSubmit={onSubmit} >
                <div className="flex flex-col justify-center items-center h-screen ">
                    <div className="flex flex-col justify-center items-center block rounded-lg shadow-lg w-1/3 gap-4 py-10">
                        <h1 className="font-bold m-2">Login</h1>
                        <input
                            className="border rounded-lg w-2/3 h-9"
                            type="text"
                            placeholder="Enter a email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="border rounded-lg w-2/3 h-9"
                            type="password"
                            placeholder="Enter a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input type={"submit"} value="Login" className="bg-blue-600 p-2 rounded-lg text-white" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login