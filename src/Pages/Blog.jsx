
import { Helmet } from "react-helmet-async";





const Blog = () => {
    

    // data for submit
    // console.log(images[0]?.data_url);



    return (
        <div className="max-w-5xl mx-auto">
            


            <Helmet>
                <title>Eater Zone | Blog</title>
            </Helmet>
            <h1 className="text-center text-5xl">Blog</h1>
            <div className="mt-10 border p-5 md:p-10  shadow-xl rounded-xl ">
                <img src="https://i.ibb.co/1GrTqd5/one-way-data.png" alt="" />
                
                <h1 className="text-xl md:text-2xl font-bold lg:text-3xl my-4">1. What is One way data binding?</h1>
                <p>One-way data binding is a unidirectional data flow between the view and the model. This means that changes made to the model are automatically reflected in the view, but changes made to the view do not automatically affect the model.</p>
                <p className="text-lg font-bold mt-2">There are two main types of one-way data binding:</p>
                <div className=" pl-4">
                    <p className="mt-2"><span className="font-bold text-lg">1. Simple one-way data binding:</span> This is the most basic type of one-way data binding. It involves binding a property in the view to a property in the model. When the value of the model property changes, the view property is automatically updated.</p>
                    <p className="mt-2"><span className="font-bold text-lg">2. Event-driven one-way data binding:</span> This type of one-way data binding involves using events to communicate between the view and the model. When the user interacts with the view, an event is triggered. The event handler updates the model property, which then triggers a property change notification that is sent to the view. The view property is then updated to reflect the new value of the model property.</p>
                </div>
                
            </div>
            <div className="mt-10 border md:p-10  shadow-xl rounded-xl ">
                <img src="https://i.ibb.co/C2C9FGJ/npm-node.png" alt="" />
                <h1 className="text-xl md:text-2xl font-bold lg:text-3xl my-4">2. What is NPM in node.js?</h1>
                <p>NPM stands for Node Package Manager. It is a package manager for the JavaScript runtime environment Node.js. It is used to install, manage, and share Node.js packages. Packages are collections of code that are shared and reusable across different Node.js projects. NPM provides a registry of available packages and a command-line interface (CLI) for installing and managing packages.</p>
                <p  className="mt-4">NPM is a powerful tool that can save you a lot of time and effort when developing Node.js applications. It allows you to easily share and reuse code, and it makes it easy to keep your projects up-to-date with the latest security patches and bug fixes.</p>
                
            </div>
            <div className="mt-10 border md:p-10  shadow-xl rounded-xl ">
                <img src="https://i.ibb.co/QnxR7C4/mongo-and-sql-1.png" alt="" />
                <h1 className="text-xl md:text-2xl font-bold lg:text-3xl my-4">3. Different between Mongodb database vs mySQL database.</h1>
                <p>MongoDB is a NoSQL database, which means it does not use a traditional relational database structure. Instead, it stores data in JSON-like documents, which are collections of key-value pairs. This makes MongoDB more flexible and scalable than MySQL, as it can easily store and retrieve data of varying structures. However, this flexibility comes at a cost of performance and complexity. MongoDB can be more difficult to query than MySQL, and it may not be as efficient for storing and retrieving large amounts of structured data.</p>
                <p className="mt-4">MySQL is a relational database, which means it stores data in tables with rows and columns. This makes MySQL more structured and predictable than MongoDB, as it can only store data in predefined structures. However, this structure also makes MySQL less flexible and scalable than MongoDB. MySQL may not be as well-suited for storing and retrieving unstructured or semi-structured data.</p>
            </div>
            </div>
    );

};

export default Blog;

