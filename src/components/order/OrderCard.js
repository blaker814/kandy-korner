import React from "react"
import "./Order.css"

export const OrderCard = ({ customerCandy }) => (
    <section className="order">
        <h3 className="order__name">{customerCandy.product.name}</h3>
        <div className="order__address">Price: ${customerCandy.product.price}</div>
    </section>
)