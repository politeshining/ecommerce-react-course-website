import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { signUp, login, mode, setMode } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function onSubmit(data) {
        setError(null)
        if (mode === "signup") {
            const result = signUp(data.email, data.password);
            if (result.success) {
                // After successful sign-up, switch to login mode so user can sign in
                setMode("login");
                // clear form inputs
                reset({ email: '', password: '' });
                return;
            }
            setError(result.error);
            return;
        }

        // login flow
        const result = login(data.email, data.password);
        if (result.success) {
            navigate('/');
        } else {
            setError(result.error);
        }
    }

    return (
        <div className="page">
            <div className="container">
                <div className="card p-3" style={{ maxWidth: "400px", marginInline: "auto" }}>
                    <h1 className="card-title">
                        {mode === "signup" ? "Sign Up" : "Login"}
                    </h1>
                    <form action="" className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        {error && <div className="alert alert-danger p-1 mt-2">{error}</div>}
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label htmlFor="email" className="form-label fw-bold">Email</label>
                            <input type="email" id="email" className="form-control"  {...register('email', { required: 'Email is required' })} />
                            {errors.email && (<span className="text-danger">{errors.email.message}</span>)}
                        </div>

                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label htmlFor="password" className="form-label fw-bold">Password</label>
                            <input type="password" id="password" className="form-control"  {
                                ...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters'
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: 'Password must be less than 12 characters'
                                    }
                                })}
                            />
                            {errors.password && (<span className="text-danger">{errors.password.message}</span>)}
                        </div>

                        <button type="submit" className="btn btn-primary">{mode === "signup" ? "Sign Up" : "Login"}</button>
                    </form>

                    <div className="auth-switch text-center mt-3">
                        <p>
                            {mode === "signup" ? "Already have an account? " : "Don't have an account? "}
                            <span className="auth-link" role="button" onClick={() => { setMode(mode === "signup" ? "login" : "signup"); reset({ email: '', password: '' }); }}>{mode === "signup" ? "Login" : "Sign Up"}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}