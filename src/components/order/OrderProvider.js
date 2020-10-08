import React, { useState, createContext } from "react"

export const OrderContext = createContext()

export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([])

    const getOrders = () => {
        return fetch("http://localhost:8088/orders?_expand=product&_expand=customer")
            .then(res => res.json())
            .then(setOrders)
    }

    const addOrder = (order) => {
        return fetch("http://localhost:8088/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
    }

    return (
        <OrderContext.Provider value={{
            orders, getOrders, addOrder
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}