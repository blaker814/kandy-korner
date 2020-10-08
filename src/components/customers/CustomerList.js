import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    const sortedCustomers = customers.sort((a,b) => {
        return (a.orders.length - b.orders.length < 0) ? 1 : -1
    })

    return (
        <>
            <h2>Customers</h2>
            <div className="customers">
            {
                sortedCustomers.map(customer => {
                    return <CustomerCard key={customer.id} orderCount={customer.orders.length} customer={customer} />
                })
            }
            </div>
        </>
    )
}