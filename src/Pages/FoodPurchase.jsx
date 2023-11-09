import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import moment from "moment";
import Swal from "sweetalert2";
import axios from 'axios';




const FoodPurchase = () => {
    const date = moment().format('MMMM Do YYYY');
    console.log(date)

    




    const { _id, foodName, category, email, origin, photo, price, quantity, sold } = useLoaderData()

    const { user } = useContext(AuthContext)


    

    const [toast, setToast] = useState(null)
    const [newQua, setNewQua] = useState(quantity)
    const [newSold, setNewSold] = useState(sold)


    const handleOrder = e => {
        e.preventDefault()
        const form = e.target
        const value = parseInt(form.userQua.value)
        setToast('')

        
        if(user.email === email) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can't purchase your won products!",
              });
        }


        if(newQua === 0 ){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Sorry, this item is out of stock.",
              });
        }
        

        const totalQuantity = newQua - value;
        const totalSold = newSold + value;

        const update = {NewQuantity: totalQuantity, TotalSold: totalSold}
        console.log('new qua', totalQuantity, 'neq sold:', totalSold)
        const postData = {origin, photo, price, id: _id, foodName, category, value, email: user.email}
        console.log(postData)
        axios.put(`https://eater-zone-server.vercel.app/cartUpdate/${_id}`, update)
        .then(res => {
            if(res.data.acknowledged){
                axios.post('https://eater-zone-server.vercel.app/cartPost', postData)
                .then(res => {
                    if(res.data.acknowledged){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Congratulations! Your item has been added to your cart.",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          setNewQua(totalQuantity)
                          setNewSold(totalSold)
                          setToast(<div className='flex flex-col md:flex-row justify-between px-5 py-3 border-2 md:m-5 items-center '>
                            <p>{value} {foodName} items added to your cart successfully!</p>
                            <Link to='/cart'><button className='btn btn-outline border rounded-full px-3 py-2 hover:bg-black hover:text-white hover:border-black border-amber-600'>view cart</button></Link>
                          </div>)
                    }
                })
            }
        })


    }



    return (
        <div>
            {
                toast && toast
            }
            <div className="flex justify-center">

                <form onSubmit={handleOrder} className="bg-pink-300 w-full lg:w-3/4 md:mx-4 mx-2 p-5 mb-10 rounded-lg">
                    <h2 className="text-3xl font-bold text-black text-center">Process to Purchase</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Your Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" readOnly required />
                        </div>
                        <div data-aos="fade-right" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Food Name</span>
                            </label>
                            <input type="text" name="foodName" readOnly defaultValue={foodName} className="input input-bordered" required />
                        </div>
                        <div data-aos="fade-left" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Food Category</span>
                            </label>
                            <input defaultValue={category} readOnly name="category" className="input input-bordered w-full " required>
                                
                            </input>
                        </div>
                        <div data-aos="fade-right" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Food Origin (country)</span>
                            </label>
                            <input defaultValue={origin} readOnly name="origin" className="input input-bordered w-full " required>
                            </input>
                        </div>

                        <div data-aos="fade-left" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Price</span>
                            </label>
                            <input defaultValue={price} readOnly type="number" name="price" className="input input-bordered" required />
                        </div>
                        <div data-aos="fade-right" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Quantity</span>
                            </label>
                            <input type="number" name="userQua" defaultValue={newQua > 1 ? 1 : 0} min={newQua > 1 ? 1 : 0} max={newQua} className="input input-bordered" required />
                        </div>
                        <div data-aos="fade-right" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Date</span>
                            </label>
                            <input type="text" name="date" readOnly defaultValue={date} className="input input-bordered" required />
                        </div>

                    </div>

                    
                    <input className="btn btn-primary w-full mt-4" type="submit" value="Confirm" />
                </form>
            </div>
        </div>
    );
};

export default FoodPurchase;