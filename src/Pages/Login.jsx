import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { useState, useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';


const Login = () => {

    const [error, setError] = useState()
    const { loginUser, googleSign } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        setError('')

        loginUser(email, password)
            .then(result => {
                if(result){
                    toast.success('Login Successful !!!')
                    navigate(location.state ? location.state : '/')
                }
            })
            .catch(error => {
                setError(error)
            })
    }



    const handleGoogleSign = () => {
        googleSign()
            .then(res => console.log(res))
            .catch(error => console.error(error))
    }

/* 
    const handleFacebook = () => {
        facebookSign()
            .then(res => console.log(res))
            .catch(error => {
                if(error){
                    toast.error('Oops sorry ')
                }
            })
    }


    const handleGitSign = () => {
        githubSign()
            .then(res => {
                console.log(res)
            })

            .catch(error => {
                console.log(error)
            })
    }

 */






    return (
        <div className=" ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {
                        error && <div><p className="text-red-500 justify-center flex mt-3">Email or password invalid !!!</p></div>
                    }
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-warning">Login</button>
                        </div>
                    </form>
                    <div className="mx-auto mb-5">
                        <p className='text-center text-xl mb-2 font-bold'>Login with: </p>
                        <div className="justify-center flex items-center gap-4 mb-2">
                            <button onClick={handleGoogleSign} className="btn text-2xl"><FcGoogle></FcGoogle></button>

                            <button className="btn text-2xl text-blue-600" onClick={() => toast.error("Oops sorry  this feature isn't accessible at the moment.")}><BsFacebook></BsFacebook></button>

                            <button onClick={() => toast.error("Oops sorry  this feature isn't accessible at the moment.")} className='btn text-2xl'><BsGithub></BsGithub></button></div>
                        <p >Do not have an account? <Link className="font-extrabold text-blue-600" to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;