import React, {useState, useEffect} from "react"
import PageTitle from '../../components/PageTitle';
import { useHistory } from "react-router-dom";

const ProductDetails = ({ selectedProduct }) => {
  const history = useHistory();

  const [productId, setProductId] = useState(0);
  
  useEffect(() => {
    console.log(history.location.pathname.slice(-1))
    setProductId(history.location.pathname.slice(-1));
    // use this productId in url to make API call to fetch data for that id
    // productId
  }, []);
  return (
    <div>
      <PageTitle title={selectedProduct.productName} />
      <hr></hr>
      <div className="productDetails">
        <img src={selectedProduct.imgUrl} alt="product"/>
      </div>
    </div>
  )
}
export default ProductDetails