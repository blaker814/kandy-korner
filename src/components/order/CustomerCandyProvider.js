import React, { useState, createContext } from "react"

export const CustomerCandyContext = createContext()

export const CustomerCandyProvider = (props) => {
    const [customerCandy, setCustomerCandy] = useState([])

    const getCustomerCandy = () => {
        return fetch("http://localhost:8088/customerCandy?_expand=product&_expand=customer")
            .then(res => res.json())
            .then(setCustomerCandy)
    }

    const addCustomerCandy = (customerCandy) => {
        return fetch("http://localhost:8088/customerCandy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerCandy)
        })
    }

    return (
        <CustomerCandyContext.Provider value={{
            customerCandy, getCustomerCandy, addCustomerCandy
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}