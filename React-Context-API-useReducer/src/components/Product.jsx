import { useContext } from "react";

import { CartContext } from "../store/Shopping-cart-context";

export default function Product({
  id,
  image,
  title,
  price,
  description,
}) {

  const cartCntx = useContext(CartContext);

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => cartCntx.addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}