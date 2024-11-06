import { Link } from "react-router-dom";
const Card = ({ product }) => {
    const { product_title, product_image, price, product_id } = product || {}
    return (

        <div className="">
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={product_image}
                        alt="product" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price} k</p>
                    <div className="card-actions">
                        <Link
                            to={`/ProductDetails/${product_id}`}
                            state={{ product }}
                        >
                            <button className="btn">
                                View Details
                            </button>
                        </Link>





                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;