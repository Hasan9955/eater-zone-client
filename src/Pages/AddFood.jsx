import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {


    const { user } = useContext(AuthContext)





    const handleForm = e => {

        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const foodName = form.foodName.value
        const category = form.category.value
        const origin = form.origin.value
        const price = form.price.value
        const quantity = parseInt(form.quantity.value)
        const description = form.description.value
        const photo = form.photo.value
        const sold = 0



        const newProduct = { name, email, foodName, category, origin, price, quantity, description, photo, sold }
        console.log(newProduct)


        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product added successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }


    return (
        <div>
            <div className="flex justify-center">

                <form onSubmit={handleForm} className="bg-orange-300 w-full lg:w-3/4 md:mx-4 mx-2 p-5 my-10 rounded-lg">
                    <h2 className="text-3xl font-bold text-black text-center">Add New Food</h2>
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
                            <input type="text" name="foodName" placeholder="Enter food name" className="input input-bordered" required />
                        </div>
                        <div data-aos="fade-left" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Food Category</span>
                            </label>
                            <select name="category" className="select select-bordered w-full " required>
                                <option>Fruits</option>
                                <option>Vegetables</option>
                                <option>Seafood</option>
                                <option>Soups</option>
                                <option>Fast Food</option>
                                <option>Proteins</option>
                                <option>Dairy</option>
                                <option>Sweets</option>
                                <option>Snacks</option>
                            </select>
                        </div>
                        <div data-aos="fade-right" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Food Origin (country)</span>
                            </label>
                            <select name="origin" className="select select-bordered w-full " required>
                                <option>Bangladesh</option>
                                <option>India</option>
                                <option>China</option>
                                <option>Thailand</option>
                                <option>Russia</option>
                                <option>America</option>
                                <option>Japan</option>
                            </select>
                        </div>

                        <div data-aos="fade-left" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Enter food price" className="input input-bordered" required />
                        </div>
                        <div data-aos="fade-right" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="Enter food quantity" className="input input-bordered" required />
                        </div>
                        <div data-aos="fade-right" className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered" required />
                    </div>
                        
                    </div>
                    
                    <div data-aos="fade-left" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Description</span>
                            </label>
                            <textarea name="description" placeholder="Enter description" className="textarea textarea-bordered  w-full text-lg" required ></textarea>
                        </div>
                    <input className="btn btn-primary w-full mt-4" type="submit" value="Add Food" />
                </form>
            </div>
        </div>
    );
};

export default AddFood;