import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer, orderCount }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div>Candies Bought: {orderCount}</div>
    </section>
)