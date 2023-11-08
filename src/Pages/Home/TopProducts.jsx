import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import '../../Css Style/AddedFood.css'
import { Link } from 'react-router-dom'

const TopProducts = () => {


    const { isError, isPending, data: products } = useQuery({
        queryKey: ['topSell'],
        queryFn: async () => {
            const result = await axios.get('https://eater-zone-server.vercel.app/topProducts')
            return result.data
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
        <div className="max-w-6xl mx-auto">
            <p className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-10 mb-2 text-black">Best Sellers Products</p>
            <p className="text-center text-sm p-1 md:text-lg font-bold max-w-xl mx-auto">Discover our top picks in the Best Sellers Showcase, where we feature the very best of our products.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 md:px-10">
                {
                    products?.map(product => <div key={product._id}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className="w-full rounded-lg" src={product.photo} alt="top sell" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.foodName}</h2>
                                <p className=" font-bold">Origin: {product.origin}</p>
                                <p className="text-lg text-amber-600 font-bold">Price: ${product.price}</p>
                                <p className=" font-bold">Sold: {product.sold} items</p>
                                <Link to={`/details/${product._id}`}><button className="border p-2 rounded-full border-amber-600 hover:text-white hover:bg-black hover:border-black">Show Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Link to='/shop' data-aos="zoom-out" className='flex justify-center mt-10'><button className="btn btn-warning ">See All</button></Link>
        </div>
    );
};

export default TopProducts;