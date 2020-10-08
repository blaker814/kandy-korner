import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerCandyProvider } from "./order/CustomerCandyProvider"
import { OrderList } from "./order/OrderList"

export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
            
            <ProductProvider>
                <CustomerCandyProvider>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </CustomerCandyProvider>
            </ProductProvider>

            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

            <CustomerCandyProvider>
                <Route exact path="/customerCandy">
                    <OrderList />
                </Route>
            </CustomerCandyProvider>
        </>
    )
}