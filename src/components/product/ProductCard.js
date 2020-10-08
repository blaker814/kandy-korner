import React, { useContext } from "react"
import "./Product.css"
import { addOrder, OrderContext } from "../order/OrderProvider"

export const ProductCard = ({ product }) => {
    const { addOrder } = useContext(OrderContext)

    return (
        <section className="product">
            <h3 className="product__name">{product.name}</h3>
            <div className="product__price">Price: ${product.price}</div>
            <div className="product__type">Type: {product.productType.type}</div>
            <button type="button" onClick={() => {
                addOrder({
                    customerId: parseInt(localStorage.getItem("kandy_customer")),
                    productId: product.id
                })
                alert("Item added to order")
            }}>Purchase</button>
        </section>
    )
}