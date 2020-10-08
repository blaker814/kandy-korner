import React, { useContext, useEffect } from "react"
import { CustomerCandyContext } from "./CustomerCandyProvider"
import { OrderCard } from "./OrderCard"

export const OrderList = () => {
   // This state changes when `getOrders()` is invoked below
    const { customerCandy, getCustomerCandy } = useContext(CustomerCandyContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getCustomerCandy()
    }, [])


    return (	
		  <>
        <h2>Order</h2>
        <div className="Orders">
        {
          customerCandy.map(cc => {
              if (cc.customerId === parseInt(localStorage.getItem("kandy_customer"))) {
                  return <OrderCard key={cc.id} customerCandy={cc} />
              }
          })
        }
        </div>
      </>
    )
}