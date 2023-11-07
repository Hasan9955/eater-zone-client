
import axios from "axios";
import { useLoaderData } from "react-router-dom";



const UpdateFood = () => {


    const { _id, category, description, email, foodName, name, origin, photo, price, quantity } = useLoaderData()

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

        axios.put(`http://localhost:5000/update/${_id}`)
        .then(result => console.log(result.data))

    }



    return (
        <div>
            <div className="flex justify-center">

                <form onSubmit={handleForm} className="bg-purple-300 w-full lg:w-3/4 md:mx-4 mx-2 p-5 my-10 rounded-lg">
                    <h2 className="text-3xl font-bold text-black text-center">Update Food</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Your Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={email} className="input input-bordered" readOnly required />
                        </div>
                        <div data-aos="fade-right" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Food Name</span>
                            </label>
                            <input type="text" name="foodName" defaultValue={foodName} className="input input-bordered" required />
                        </div>
                        <div data-aos="fade-left" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Food Category</span>
                            </label>
                            <select defaultValue={category} name="category" className="select select-bordered w-full " required>
                                <option>Fruits</option>
                                <option>Vegetables</option>
                                <option>Seafood</option>
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
                            <select defaultValue={origin} name="origin" className="select select-bordered w-full " required>
                                <option>Bangladesh</option>
                                <option>India</option>
                                <option>China</option>
                                <option>Thailand</option>
                                <option>Russia</option>
                                <option>Japan</option>
                            </select>
                        </div>

                        <div data-aos="fade-left" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Price</span>
                            </label>
                            <input defaultValue={price} type="number" name="price" className="input input-bordered" required />
                        </div>
                        <div data-aos="fade-right" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Quantity</span>
                            </label>
                            <input type="number" name="quantity" defaultValue={quantity} className="input input-bordered" required />
                        </div>
                        <div data-aos="fade-right" className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Photo</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} className="input input-bordered" required />
                        </div>

                    </div>

                    <div data-aos="fade-left" className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Description</span>
                        </label>
                        <textarea name="description" defaultValue={description} className="textarea textarea-bordered  w-full text-lg" required ></textarea>
                    </div>
                    <input className="btn btn-primary w-full mt-4" type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;