import { useEffect, useState } from "react";
import Papa from "papaparse";

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        Papa.parse("/products.csv", {
            download: true,
            header: true,
            complete: (result) => {
                setProducts(result.data);
            }
        });
    }, []);

    return (
        <>
        <div className="flex my-4">
            <div className="w-100 mx-3">
                <div className="flex justify-between">
                    <h3 className="font-bold">FILTERS</h3>
                    <button><h2 className="text-pink-500 font-bold">CLEAR ALL</h2></button>
                </div>
                
                <div>
                    <input type="radio" />
                    <label htmlFor="">Men</label>
                    <br />
                    <input type="radio" />
                    <label htmlFor="">Women</label>
                    <br />
                    <input type="radio" />
                    <label htmlFor="">Boys</label>
                    <br />
                    <input type="radio" />
                    <label htmlFor="">Girls</label>
                </div>

            </div>
            <div className="mx-5 my-2 grid grid-cols-4 pl-4">
                {products.map((product) => (
                    <div key={product.id}>
                        <a href={`/product.html?id=${product.id}`}>
                            <img src={product.img} alt={product.name} width="200" />
                            <h1 className="text-pink-500 font-bold">{product.seller}</h1>
                            <p>{product.name}</p>
                            <p>₹{product.price}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Products;