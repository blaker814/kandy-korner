import React, { useContext, useEffect } from "react"
import { OrderContext } from "./OrderProvider"
import { OrderCard } from "./OrderCard"

export const OrderList = () => {
   // This state changes when `getOrders()` is invoked below
    const { orders, getOrders } = useContext(OrderContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getOrders()
    }, [])

    const filteredOrders = orders.filter(order => {
        return order.customerId === parseInt(localStorage.getItem("kandy_customer"))
    })

    const count = () => {

        const sortedOrders = filteredOrders.sort((a,b) => {
            return (a.productId - b.productId > 0) ? 1 : -1
        })

        let counts = []
        let current = []
        sortedOrders.forEach(order => {
            if (current.length === 0) {
                current = [order]
            } else if (order.productId !== current[0].productId) {
                counts.push(current)
                current = [order]
            } else {
                current.push(order)
            }
        })
        if (current.length > 0) {
            counts.push(current)
        }
        return counts
    }

    const restructuredArray = count()

    return (	
		<>
            <h2>Order</h2>
            <div className="Orders">
                {
                    restructuredArray.map(orderArray => {
                        return <OrderCard key={orderArray[0].id} count={orderArray.length} order={orderArray[0]} />
                    })
                }
            </div>
        </>
    )
}