import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import "./Product.css"

export const ProductList = () => {
    const { products, getProducts, searchTerms } = useContext(ProductContext)

    const [ filteredProducts, setFiltered ] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = products.filter(product => product.name.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            setFiltered(subset)
        } else {
            setFiltered(products)
        }
    }, [searchTerms, products])

    return (
        <>
            <h2>Products</h2>
            <div className="products">
            {
                filteredProducts.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
            </div>
        </>
    )
}