import axios from "axios";

const TopProducts = () => {


    axios.get('http://localhost:5000/topProducts')
    .then(res => console.log(res.data))

    
    return (
        <div>
            
        </div>
    );
};

export default TopProducts;