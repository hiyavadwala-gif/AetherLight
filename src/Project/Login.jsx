// import axios from 'axios';
// import React, { useActionState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const navigate = useNavigate();

//     function submit(prev, formData) {
//         const name = formData.get("name");
//         const email = formData.get("email");
//         const password = formData.get("password");

//         if (name === "") {
//             return { error: "Enter Your Name" };
//         }
//         if (email === "") {
//             return { error: "Enter Your Email" };
//         }
//         if (password === "") {
//             return { error: "Enter Your Password" };
//         }


//         axios.get("http://localhost:3000/user")
//             .then((res) => {
//                 const users = res.data;

//                 const user = users.find(
//                     (u) => u.name === name,
//                     (u) => u.email === email,
//                     (u) => u.password === password,
//                 )

//                 if (user) {
//                     console.log("Log in Successfully");
//                     navigate("/") 
//                 }else{
//                     console.log("Log in unSuccessfully ");
//                 }
//             })



//         console.log(name, email, password);
//         return { success: "Registered Successfully" };
//     }


//     const [state, formAction, pending] = useActionState(submit, {});

//     return (
//         <>
//             <form action={formAction} onSubmit={submit}>
//                 <label htmlFor="name">UserName :</label>
//                 <input name="name" placeholder="Enter Your UserName" />
//                 <br /><br />

//                 <label htmlFor="email">Email :</label>
//                 <input name="email" placeholder="Enter Your Email" />
//                 <br /><br />

//                 <label htmlFor="password">Password :</label>
//                 <input name="password" placeholder="Enter Your Password" />
//                 <br /><br />


//                 <button type="submit">Login</button>
//             </form>
//         </>
//     );
// }

// export default Login;












import axios from 'axios';
import React, { useActionState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from './Slice/AuthSlice';

function Login() {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    function submit(prev, formData) {
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const role = formData.get("role");

        if (name === "") {
            return { error: "Enter Your Name" };
        }
        if (email === "") {
            return { error: "Enter Your Email" };
        }
        if (password === "") {
            return { error: "Enter Your Password" };
        }

        axios.get("http://localhost:3000/user")
            .then((res) => {
                const users = res.data;

                const user = users.find(
                    (u) => u.name === name,
                    (u) => u.email === email,
                    (u) => u.password === password,
                    (u) => u.role === role,
                )

                if (user) {
                    console.log("Log in Successfully");
                    navigate("/")
                } else {
                    console.log("Log in unSuccessfully ");
                }


                if (user) {
                    dispatch(login(user));

                    if (user.role == 1) {
                        navigate("/admin");
                    } else {
                        navigate("/");
                    }
                }
            })

        return { success: "Login Attempted" };
    }

    const [state, formAction, pending] = useActionState(submit, {});

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 ">
            <Card style={{
                width: "400px",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}>
                <h3 className="text-center mb-4">Login</h3>

                <Form action={formAction} onSubmit={submit}>

                    <Form.Group className="mb-3">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control name="name" placeholder="Enter Your UserName" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter Your Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Enter Your Password" />
                    </Form.Group>

                    {state?.error && (
                        <p className="text-danger">{state.error}</p>
                    )}

                    {state?.success && (
                        <p className="text-success">{state.success}</p>
                    )}

                    <Button
                        type="submit"
                        className="w-100"
                        variant="primary"
                        disabled={pending}
                    >
                        {pending ? "Logging in..." : "Login"}
                    </Button>
                </Form>


                <span className=' mt-3 text-center'> Don't have a account?<Link to={"/ragister"}>Ragister</Link></span>
            </Card>
        </Container>
    );
}

export default Login;