import React, { useEffect, useState } from 'react'
import { getCustomProductRequest } from "./../../api/product.api"

function VerProductos() {

    const [product, setProduct] = useState([]);

    useEffect(() => {

        async function loadProducts() {
            const response = await getCustomProductRequest();
            setProduct(response.data);
            console.log(response.data);
        }

        loadProducts();


    }, [])



    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    {

                        product.map(product => (

                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.summary}</p>
                                </div>
                            </div>

                        ))


                    }

                </div>
            </div>
        </div>
    )
}

export default VerProductos