import React from "react"
import "./Order.css"

export const OrderCard = ({ order, count }) => (
    <section className="order">
        <h3 className="order__name">{order.product.name}</h3>
        <div>Quantity: {count}</div>
        <div className="order__price">Price/unit: ${order.product.price}</div>
        <div className="order__total">Total Price: ${order.product.price * count}</div>
    </section>
)