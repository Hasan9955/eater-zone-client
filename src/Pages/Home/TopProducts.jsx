import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import '../../Css Style/AddedFood.css'
import { Link } from 'react-router-dom'

const TopProducts = () => {


    const { isPending, data: products } = useQuery({
        queryKey: ['topSell'],
        queryFn: async () => {
            const result = await axios.get('http://localhost:5000/topProducts')
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



    return (
        <>
            <p className="text-center text-5xl font-bold mt-10 mb-2 text-black">Flash Sale</p>
            <p className="text-center font-bold max-w-md mx-auto">Discover our top picks in the Best Sellers Showcase, where we feature the very best of our products.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 px-10">
                {
                    products?.map(product => <div key={product._id}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className="w-full rounded-lg" src={product.photo} alt="top sell" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.foodName}</h2>
                                <p className=" font-bold">Origin: {product.origin}</p>
                                <p className="text-lg text-amber-600 font-bold">Price: ${product.price}</p>
                                <p className=" font-bold">Sold: {product.sold} item</p>
                                <Link to={`/details/${product._id}`}><button className="border p-2 rounded-full border-amber-600 hover:text-white hover:bg-black hover:border-black">Show Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Link to='/shop' className='flex justify-center mt-10'><button className="btn btn-warning ">See All</button></Link>
        </>
    );
};

export default TopProducts;