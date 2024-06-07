import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";



const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [registerSuccsess, setRegisterSuccsess]= useState('')

    const handleRegisterFormSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setRegisterError('');
        setRegisterSuccsess('')

        if(password.length < 6){
            setRegisterError('Password Should be at least 6 cheractars or longer')
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
                    <input className="bg-gray-200 rounded-2xl p-4 w-1/2 m-2" type="email" name="email" placeholder="Your Email" id="" />
                    <br />
                    <input className="bg-gray-200 rounded-2xl p-4 w-1/2 m-2" type="password" name="password" placeholder="Your Password" id="" /> <br />
                    <input className="btn w-1/2 p-4 m-2 btn-secondary" type="submit" value="Register" />
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