import { useEffect, useState } from "react";
// import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [mobileNo, setMobileNo] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        const sendData = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:5001/api/user/logIn",
                    {
                        email,
                        password,
                    }
                );
                console.log("Data sent successfully:", response.data);

                setFeedback("Log In  successfully!");

                // setName("");
                setEmail("");
                // setMobileNo("");
                setPassword("");
                setSubmit(false); // Reset the submit flag
            } catch (error) {
                console.error("Error sending data:", error);
                setFeedback(
                    "There was an error submitting the form. Please try again."
                );
            }
        };

        if (submit && email && password) {
            sendData();
        }
    }, [submit, email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };
    return (
        <div style={{ margin: "40px 200px 40px 200px" }}>
            <h1 className="text-4xl font-bold sm:text-5xl mb-10">Log In</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-floating mb-10">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingEmail">Email</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type="submit" className="btn btn-primary mt-4 mb-2 px-5 py-2">
                    Submit
                </button>

            </form>

            {feedback && (
                <div
                    className="alert alert-success mt-4"
                    style={{
                        backgroundColor: "#d4edda",
                        color: "#155724",
                        padding: "15px",
                        borderRadius: "5px",
                    }}
                >
                    <i
                        className="fas fa-check-circle"
                        style={{ marginRight: "10px" }}
                    ></i>
                    {feedback}
                </div>
            )}

            <NavLink
                style={{ textDecoration: "none", fontWeight: "500" }}
                to="#"
                className="block py-2 pr-4 pl-3  duration-200 text-blue-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"

            >
                Don't have Account Create Account
            </NavLink>

        </div>
    )
}

export default Login