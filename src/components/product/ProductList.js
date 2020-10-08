import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import "./Product.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <h2>Products</h2>
            <div className="products">
            {
                products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
            </div>
        </>
    )
}