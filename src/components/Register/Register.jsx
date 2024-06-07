import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";




const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [registerSuccsess, setRegisterSuccsess] = useState('');
    const [registerShowPassword, setRegisterShowPassword] = useState(false)

    const handleRegisterFormSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);

        setRegisterError('');
        setRegisterSuccsess('')

        if (password.length < 6) {
            setRegisterError('Password Should be at least 6 cheractars or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should be at least Upercase')
            return;
        }
        else if(!accepted){
            setRegisterError('Accepted Our Terms and Conditons')
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setRegisterSuccsess('User Register Successfully')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
            })
    }

    return (
        <div className="w-3/6 mx-auto">

            <form onSubmit={handleRegisterFormSubmit} >
                <h3 className="  text-3xl font-bold my-7">Please Register!!</h3>
                <div className="mx-auto">
                    <input className="bg-gray-200 rounded-2xl p-4 w-full " type="email" name="email" placeholder="Your Email" id="" />
                    <br />
                    <div className="relative m-3">
                        <input className="bg-gray-200 rounded-2xl p-4 w-full "
                            type={registerShowPassword ? 'text' : "password"}
                            name="password"
                            placeholder="Your Password"
                            id="" /> <br />
                        <span className="absolute top-5 right-3" onClick={() => setRegisterShowPassword(!registerShowPassword)}>
                            {registerShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                        </span>
                    </div>
                    <div>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept out Terms and Conditios</label>
                    </div>
                    <input className="btn w-full p-4 m-2 btn-secondary" type="submit" value="Register" />
                </div>
            </form>
            {
                registerError && <p className="text-red-700">{registerError}</p>
            }
            {
                registerSuccsess && <p className="text-green-600">{registerSuccsess}</p>
            }
        </div>
    );
};

export default Register;