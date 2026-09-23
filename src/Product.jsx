import Papa from 'papaparse'
import { useState } from 'react';
import { useEffect } from 'react';
function Product()
{
    const url=new URL(window.location.href);
    const id=url.searchParams.get("id");
    const [products, setProducts]=useState([]);

     useEffect(() => {
            Papa.parse("/products.csv", {
                download: true,
                header: true,
                complete: (result) => {
                    setProducts(result.data);
                }
            });
        }, []);

    const selectedProduct=products.find(product=>product.id===id);
    return(
        <>

        </>
    )
}

export default Product;