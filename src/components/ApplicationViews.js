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
import { OrderProvider } from "./order/OrderProvider"
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
                <OrderProvider>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </OrderProvider>
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

            <OrderProvider>
                <Route exact path="/orders">
                    <OrderList />
                </Route>
            </OrderProvider>
        </>
    )
}