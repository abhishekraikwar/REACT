import { useParams } from "react-router-dom";


const ProductDetail = () =>{
    const param = useParams();
    return <div><h1>Product Detail</h1>
    <p>{param.productID}</p>
    </div>
}

export default ProductDetail;