import React, { useContext } from "react"
import "./Product.css"
import { addCustomerCandy, CustomerCandyContext } from "../order/CustomerCandyProvider"

export const ProductCard = ({ product }) => {
    const { addCustomerCandy } = useContext(CustomerCandyContext)

    return (
        <section className="product">
            <h3 className="product__name">{product.name}</h3>
            <div className="product__price">Price: ${product.price}</div>
            <div className="product__type">Type: {product.productType.type}</div>
            <button type="button" onClick={() => {
                addCustomerCandy({
                    customerId: parseInt(localStorage.getItem("kandy_customer")),
                    productId: product.id
                })
            }}>Purchase</button>
        </section>
    )
}