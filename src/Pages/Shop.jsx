import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from 'react-router-dom'
import '../Css Style/AddedFood.css'
import { Helmet } from "react-helmet-async";



const Shop = () => {


    const { isPending, isError, data: products } = useQuery({
        queryKey: ['shop'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allProducts')
            return res.data

        }
    })



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


    return (
        <div>
            <Helmet>
                <title>Eater Zone | Shop</title>
            </Helmet>
            <div className="hero h-56 md:h-72 lg:h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/z6XYR1K/d1.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center  text-white">
                    <p className="text-5xl font-bold text-white">Shop</p>
                    <div className="my-3 w-44 bg-amber-600 h-1 mx-auto"></div>
                    <p className="font-bold text-xl">Pure natural food</p>
                    <div className="text-black relative">
                        <input type="text" placeholder="Search by category name" className="input input-bordered input-warning w-64 md:w-80 mt-5" />
                        <button className="btn btn-md absolute right-0 bottom-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 p-3 lg:px-10">
                {
                    products?.map(product => <div key={product._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="rounded-lg" src={product.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.foodName}</h2>
                            <p className="font-bold ">Category: {product.category}</p>
                            <p className="font-bold ">Origin: {product.origin}</p>
                            <p className="font-bold ">Sold: {product.sold} items</p>
                            <p className="font-bold text-lg text-amber-600">Price: ${product.price}</p>
                            <div className="card-actions justify-center">
                                <Link to={`/details/${product._id}`}><button className="btn btn-warning">Show Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Shop;