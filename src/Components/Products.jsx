import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Products = () => {
    const data = useLoaderData();
    const { cate } = useParams();
    const [categoryProduct, setCategoryProduct] = useState([]);

    useEffect(() => {
        if (cate === 'All') {
            setCategoryProduct(data);
        } else if (cate) {
            const filterProduct = data.filter(product => product.category === cate);
            setCategoryProduct(filterProduct);
        } else { 
            setCategoryProduct(data.slice(0, 8));
        }
    }, [data, cate]);
    

    return (
        <div>
            <div className="grid grid-cols-3 gap-3">
                {categoryProduct.length > 0 ? (
                    categoryProduct.map(product => (
                        <Card key={product.product_id} product={product} />
                    ))
                ) : (
                    <p className="text-3xl text-gray-500">No data available</p>
                )}
            </div>
        </div>
    );
};

export default Products;
