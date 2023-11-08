import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import '../Css Style/AddedFood.css'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {
    const { user } = useContext(AuthContext)


    const [cartFood, setCartFood] = useState([])

    const { isPending, isError, data } = useQuery({
        queryKey: ['cartFood'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/cart?email=${user.email}`)
            return res.data
        }
    })

    useEffect(() => {
        if (data) {
            setCartFood(data)
        }
    }, [data])


    if (isPending) {
        return <div className="flex justify-center items-center">
            <div>
                <div className="animated-background">
                    <div className="background-masker btn-divide-left"></div>
                </div>
                <div className="grid mt-10 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="css-dom"></div>
                    <div className="css-dom"></div>
                    <div className="css-dom"></div>
                    <div className="css-dom"></div>
                    <div className="css-dom hidden xl:flex lg:flex"></div>
                    <div className="css-dom hidden xl:flex lg:flex"></div>
                    <div className="css-dom hidden xl:flex"></div>
                    <div className="css-dom hidden xl:flex"></div>
                </div>
            </div>
        </div>
    }

    if (isError) {
        return <div className="flex flex-col justify-center items-center">
            <img src="https://i.ibb.co/0KNH9GZ/1edb4ff9.jpg" alt="" />
            <button onClick={() => location.reload()} className="btn btn-warning">Reload</button>
        </div>
    }


    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/cartDelete/${id}`)
                .then(res => console.log(res.data))
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }



    return (
        <div>
            {
                cartFood.map(food => <div key={food._id} className="flex flex-col md:flex-row justify-between md:items-center rounded-xl max-w-4xl border shadow-xl mt-10 p-5 mx-auto">
                    <div className="flex md:items-center flex-col md:flex-row md:space-x-3 max-w-[450px]">
                        <div className=" ">
                            <Link to={`/details/${food.id}`}><img className="rounded-lg w-full md:w-56 mb-5 md:mb-0" src={food.photo} alt="" /></Link>
                        </div>
                        <div className=" ">
                            <Link to={`/details/${food.id}`}><div className="text-xl font-bold max-w-[250px]">{food.foodName}</div></Link>
                            <div>Origin: {food.origin}</div>
                            <p>Category: {food.category}</p>
                            <p className="text-lg font-bold text-pink-800">Price: $ {food.price}</p>

                        </div>
                    </div>
                    <div className="flex flex-col">
                        Quantity: {food.quantity}
                        <br />
                        Subtotal: ${food.price * food.quantity}
                        <button onClick={() => handleDelete(food._id)} className="border-2 rounded-full px-1 py-1 mt-8 w-24 flex justify-center items-center border-pink-800 hover:bg-black hover:text-white hover:border-black click"><AiFillDelete className="text-xl mr-1"></AiFillDelete><p>Delete</p></button>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyCart;