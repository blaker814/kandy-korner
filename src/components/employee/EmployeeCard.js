import React, { useContext } from "react"
import "./Employee.css"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeCard = ({ employee }) => {
    const { fireEmployee } = useContext(EmployeeContext)
    
    return (
        <section className="employee">
            <h3>{employee.name}</h3>
            <div>Manager: {employee.isManager ? "Yes" : "No"}</div>
            <div>Full Time: {employee.isFullTime ? "Yes" : "No"}</div>
            <div>Hourly Rate: ${employee.rate}</div>
            <div>Location: {employee.location.name}</div>
            <button type="button" onClick={() => {
                fireEmployee(employee.id)
            }}>Fire Employee</button>
        </section>
    )
}