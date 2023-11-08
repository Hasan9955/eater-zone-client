import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import axios from 'axios';



const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        setError('')
        setEmailError('')
        console.log(name, photo, email, password)


        if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{6,}$/.test(password)) {
            return setError('please provide  at last 6 character')
        }


        createUser(email, password)
        .then(result => {
            updateProfile(result.user, {
                displayName: name,
                photoURL: photo
            })
            .then(() => {
                axios.post('https://eater-zone-server.vercel.app/users', result.user)
                .then((res) => console.log(res.data))
                navigate("/")
                Swal.fire({
                    title: 'Registration Successful',
                    text: "Please reload the page for a better experience!",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes reload it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      location.reload()
                    }
                  })
            })
            .catch(error => console.log(error))
        })
        .catch(error => setEmailError(error))

    }
    return (
        <div className=" ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            <label >
                                {
                                    emailError && <h2 className="text-red-600 text-center">This email is already registered.</h2>
                                }
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                {
                                    error &&
                                    <ul className="text-red-400 list-disc text-sm font-bold">
                                        <li>Minimum six in length.</li>
                                        <li>At least one upper case letter.</li>
                                        <li>At least one special character.</li>
                                    </ul>
                                }
                            </label>
                        </div>
                        <input type="submit" className="btn btn-warning" value="Register" />
                    </form>
                    <div className="mx-auto mb-5">

                        <p >Already have an account? <Link className="font-extrabold text-blue-600" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;