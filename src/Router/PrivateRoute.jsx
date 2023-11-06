import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider';



const PrivateRoute = ({children}) => {

    const {loader, user} = useContext(AuthContext)
    const location = useLocation()


    if(loader){
        return <div className='flex justify-center my-48 md:my-56 lg:my-72'><span className="loading loading-spinner loading-lg"></span></div>
    }


    if(user){
        return children;
    }



    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;