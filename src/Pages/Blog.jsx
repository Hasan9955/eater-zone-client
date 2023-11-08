
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
            <div className="mt-10 border md:p-10  shadow-xl rounded-xl ">
                <img src="https://i.ibb.co/1GrTqd5/one-way-data.png" alt="" />
                
                <h1 className="text-2xl font-bold lg:text-3xl">1. What is One way data binding?</h1>
                
            </div>
            <div className="mt-10 border md:p-10  shadow-xl rounded-xl ">
                <img src="https://i.ibb.co/C2C9FGJ/npm-node.png" alt="" />
                <h1>2. What is NPM in node.js?</h1>
                
            </div>
            <div className="mt-10 border md:p-10  shadow-xl rounded-xl ">
                <img src="https://i.ibb.co/QnxR7C4/mongo-and-sql-1.png" alt="" />
                <h1>3. Different between Mongodb database vs mySQL database.</h1>
                
            </div>
            </div>
    );

};

export default Blog;

