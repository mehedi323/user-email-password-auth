import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const HeroRegister = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccsess, setRegisterSuccsess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleHeroRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);

        setRegisterError('');
        setRegisterSuccsess('')

        if(password.length < 6) {
            setRegisterError('Password should be at laest 6 charectars or longer')
            return;
        }
        else if(!accepted){
            setRegisterError('Accepted Your Trams and conditions')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setRegisterSuccsess('User Register Successfully')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Hero Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleHeroRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : "password"}
                                    name="password"
                                    placeholder="Your Password"
                                    className="input relative input-bordered"
                                    required />
                                <span className="absolute top-[180px] right-10" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                                </span>
                                <div>
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label htmlFor="terms"> Trams and Conditions</label>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Hero Register</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-600">{registerError}</p>
                        }
                        {
                            registerSuccsess && <p className="text-green-600">{registerSuccsess}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroRegister;