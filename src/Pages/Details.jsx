import { useContext } from 'react'
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';



const Details = () => {


    const { _id, foodName, category, email, origin, photo, price, quantity, sold, description } = useLoaderData()

    const { user } = useContext(AuthContext)


    const handleCart = e => {
        e.preventDefault()
        const input = e.target
        const value = input.number.value

        if(user.email === email) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can't purchase your won products!",
              });
        }


    }

    return (
        <div>
            <Helmet>
                <title>Eater Zone | Details</title>
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl my-20 md:mx-10">
                <figure><img className="w-[500px] lg:w-[600px] h-[300px] md:h-[450px] rounded-xl" src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodName}</h2>
                    <h4 className="font-bold ">Category: {category}</h4>
                    <h4 className="font-bold ">Origin: {origin}</h4>
                    <h4 className="font-bold ">Sold: {sold} items</h4>
                    <h4 className="font-bold ">Available: {quantity} items</h4>
                    <h4 className="font-bold text-lg text-amber-600">Price: ${price}</h4>
                    <h4 className="max-w-md ">{description}</h4>
                    <form onSubmit={handleCart} className="card-actions items-center my-2">
                        <input className="w-14 border-2 rounded h-10 shadow-xl text-center" defaultValue={1} min={1} max={quantity} type="number" name="number" required />
                        <button className="rounded-full border border-amber-600 hover:text-white hover:bg-black hover:border-black p-2">Add to cart</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Details;