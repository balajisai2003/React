import {Link, useParams} from 'react-router-dom';

function ProductDetailPage(){
    const params = useParams();
    return(
        <div>
            <h1>Product Detail Page</h1>
            <p>Product ID: {params.productId}</p>
            <p><Link to="..">Back</Link></p>
        </div>
    )
}
export default ProductDetailPage;