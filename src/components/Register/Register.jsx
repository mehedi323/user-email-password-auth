import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";



const Register = () => {

    const handleRegisterFormSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>

            <form onSubmit={handleRegisterFormSubmit} className="w-3/6 mx-auto">
                <h3 className="  text-3xl font-bold my-7">Please Register!!</h3>
                <div className="mx-auto">
                    <input className="bg-gray-200 rounded-2xl p-4 w-1/2 m-2" type="email" name="email" placeholder="Your Email" id="" />
                    <br />
                    <input className="bg-gray-200 rounded-2xl p-4 w-1/2 m-2" type="password" name="password" placeholder="Your Password" id="" /> <br />
                    <input className="btn w-1/2 p-4 m-2 btn-secondary" type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
};

export default Register;