import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductSearch = () => {
    const { setSearchTerms } = useContext(ProductContext)

    useEffect(() => {
        setSearchTerms("")
    }, [])
    
    return (
        <>
            <label htmlFor="productSearch">Search Products: </label> 
            <input type="text"
                className="input--wide"
                id="productSearch"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for a product... " />
        </>
    )
}