import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect, useState } from 'react'
import '../Css Style/AddedFood.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from "sweetalert2";


const AddedFood = () => {


    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])


    /* fetch(`http://localhost:5000/products?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setProducts(data)) */

    const { isPending, isError, data } = useQuery({
        queryKey: ['added products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`)
            return res.json()
        }
    })

    useEffect(() => {
        setProducts(data)
    },[data])



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


    const handleDelete = (id) => {

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
                axios.delete(`http://localhost:5000/delete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            const remaining = products.filter(product => product._id !== id)
                            setProducts(remaining)
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "The item has been successfully deleted.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }})
            }
        });

    }

    return (
        <div>
            {
                products?.length > 0 ? <>
                <p className="text-center text-2xl md:text-3xl  font-bold text-amber-500 border rounded-lg border-amber-800 bg-base-100 max-w-xl hidden md:flex mx-auto p-3">You have {products.length} products in your collection.</p>
                <div className="my-10">
                    {
                        products.map(product => <div className="card card-compact bg-base-100 shadow-xl border md:m-10 px-5 md:px-10 py-5" key={product._id}>
                            <div className=" flex flex-col md:flex-row items-start">
                                <figure><img className="rounded-lg w-96 h-56 lg:h-72" src={product.photo} alt="Food" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.foodName}</h2>
                                    <h2 className="text-lg font-bold ">Origin: {product.origin}</h2>
                                    <h2 className="text-xl font-bold text-amber-600 ">Piece: ${product.price}</h2>
                                    <h2 className="text-lg font-bold ">Quantity: {product.quantity}</h2>
                                    <h2 className="text-lg font-bold ">Sold: {product.sold} items</h2>
                                    <p className="max-w-md">{product.description}</p>
                                </div>

                            </div>
                            <div className="card-actions justify-end ">
                                <Link to={`/updateFood/${product._id}`}><button className="btn btn-primary">Update</button></Link>
                                <button className="btn btn-error" onClick={() => handleDelete(product._id)}>Delete</button>
                            </div>
                        </div>)
                    }
                </div>
            </> :
                <div className="flex flex-col justify-center items-center mb-10 p-5">
                    <img src="https://i.ibb.co/T8LhDbk/search.png" alt="" />
                    <p className="font-bold text-2xl text-center">You have not included any items yet.</p>
                    <p className="text-lg max-w-md text-center mb-5">You can add you won product very easily. Click the button to add product !!!</p>
                    <Link to='/addFood'><button className="btn btn-warning ">Add Food</button></Link>
                </div>
            }
        </div>
    );
};

export default AddedFood;