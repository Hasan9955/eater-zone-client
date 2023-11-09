
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';



const Details = () => {

    


    const { _id, foodName, category, origin, photo, price, quantity, sold, description } = useLoaderData()


    const navigate = useNavigate()

    const handlePurchase = () =>{

        
        if(quantity === 0 ){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Sorry, but this item is not available right now.",
              });
        }

        navigate(`/foodPurchase/${_id}`)
    }
    

    return (
        <div>
            <Helmet>
                <title>Eater Zone | Details</title>
            </Helmet>
            
            <div className="flex flex-col md:flex-row bg-base-100 my-20 md:mx-10">
                <figure><img className="w-[400px] lg:w-[600px] h-[230px] md:h-[300px] lg:h-[400px] rounded-xl" src={photo} alt="food" /></figure>
                <div  className="p-2 lg:card-body flex flex-col">
                <div>
                    <h2 className="card-title mb-2">{foodName}</h2>
                    <h4 className="font-bold ">Category: {category}</h4>
                    <h4 className="font-bold ">Origin: {origin}</h4>
                    <h4 className="font-bold ">Sold: {sold} items</h4>
                    <h4 className="font-bold ">Available: {quantity} items</h4>
                    <h4 className="font-bold text-xl text-pink-600 my-2">Price: ${price}</h4>
                    <h4 className="max-w-md ">{description}</h4>
                    
                    
                </div>
                <button onClick={handlePurchase} className="btn btn-outline border rounded-full  w-36 mt-5  hover:bg-black hover:text-white hover:border-black border-amber-600 ">order now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;